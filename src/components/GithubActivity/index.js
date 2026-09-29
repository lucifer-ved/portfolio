import React, { useEffect, useMemo, useRef } from 'react';
import { FiGithub } from 'react-icons/fi';
import contributions from '../../data/githubContributions.json';
import {
  ActivityCard,
  ActivityHead,
  ActivityTitle,
  StatRow,
  StatPill,
  GraphWell,
  MonthRow,
  Grid,
  Cell,
  Legend,
  LegendGroup,
  ProfileLink
} from './GithubActivityElements';

// The first active day on or after this date is outlined as the start of the career break.
const BREAK_START = '2026-01-01';
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const formatDate = (iso) => {
  const [y, m, d] = iso.split('-').map(Number);
  return `${MONTHS[m - 1]} ${d}, ${y}`;
};

const summarise = (days) => {
  const total = days.reduce((sum, [, , count]) => sum + count, 0);
  const activeDays = days.filter(([, , count]) => count > 0).length;

  let longest = 0;
  let run = 0;
  days.forEach(([, , count]) => {
    run = count > 0 ? run + 1 : 0;
    longest = Math.max(longest, run);
  });

  const byMonth = {};
  days.forEach(([date, , count]) => {
    const key = date.slice(0, 7);
    byMonth[key] = (byMonth[key] || 0) + count;
  });
  const busiest = Object.keys(byMonth).sort((a, b) => byMonth[b] - byMonth[a])[0];

  const breakDay = days.find(([date, , count]) => date >= BREAK_START && count > 0);

  return { total, activeDays, longest, busiest, breakDate: breakDay && breakDay[0] };
};

const GithubActivity = () => {
  const wellRef = useRef(null);
  const { user, days } = contributions;

  const stats = useMemo(() => summarise(days), [days]);

  // Weeks run Sunday to Saturday, like GitHub; pad the first week to its weekday
  const { cells, weeks, monthLabels } = useMemo(() => {
    const pad = new Date(`${days[0][0]}T00:00:00Z`).getUTCDay();
    const weekCount = Math.ceil((days.length + pad) / 7);
    const labels = {};
    let lastMonth = -1;

    days.forEach(([date], i) => {
      const month = Number(date.slice(5, 7)) - 1;
      if (month !== lastMonth) {
        labels[Math.floor((i + pad) / 7)] = MONTHS[month];
        lastMonth = month;
      }
    });

    // Drop a label that would collide with the next one (a partial first month)
    const cols = Object.keys(labels).map(Number).sort((a, b) => a - b);
    cols.forEach((col, k) => {
      if (cols[k + 1] !== undefined && cols[k + 1] - col < 3) delete labels[col];
    });

    return { cells: [...Array(pad).fill(null), ...days], weeks: weekCount, monthLabels: labels };
  }, [days]);

  // On narrow screens the graph scrolls; open it on the most recent weeks
  useEffect(() => {
    if (wellRef.current) wellRef.current.scrollLeft = wellRef.current.scrollWidth;
  }, []);

  const busiestLabel = stats.busiest
    ? `${MONTHS[Number(stats.busiest.slice(5)) - 1]} ${stats.busiest.slice(0, 4)}`
    : null;

  return (
    <ActivityCard className="neu-lg reveal">
      <ActivityHead>
        <ActivityTitle>
          <FiGithub /> Shipping activity
        </ActivityTitle>
        <StatRow>
          <StatPill>{stats.total} <span>contributions</span></StatPill>
          <StatPill>{stats.activeDays} <span>active days</span></StatPill>
          <StatPill>{stats.longest} <span>day best streak</span></StatPill>
          {busiestLabel && <StatPill>{busiestLabel} <span>busiest month</span></StatPill>}
        </StatRow>
      </ActivityHead>

      <GraphWell ref={wellRef}>
        <MonthRow $weeks={weeks} aria-hidden="true">
          {Array.from({ length: weeks }, (_, w) => (
            <span key={w}>{monthLabels[w] || ''}</span>
          ))}
        </MonthRow>
        <Grid
          $weeks={weeks}
          role="img"
          aria-label={`${stats.total} GitHub contributions in the last year, across ${stats.activeDays} active days`}
        >
          {cells.map((day, i) =>
            day ? (
              <Cell
                key={day[0]}
                data-level={day[1]}
                $marked={day[0] === stats.breakDate}
                title={`${day[2]} contribution${day[2] === 1 ? '' : 's'} on ${formatDate(day[0])}`}
              />
            ) : (
              <span key={`pad-${i}`} />
            )
          )}
        </Grid>
      </GraphWell>

      <Legend>
        {stats.breakDate ? (
          <LegendGroup>
            <Cell data-level={0} $marked aria-hidden="true" />
            Career break begins · {formatDate(stats.breakDate)}
          </LegendGroup>
        ) : (
          <span>Last 12 months</span>
        )}
        <LegendGroup aria-hidden="true">
          Less
          {[0, 1, 2, 3, 4].map((level) => (
            <Cell key={level} data-level={level} />
          ))}
          More
        </LegendGroup>
        <ProfileLink href={`https://github.com/${user}`} target="_blank" rel="noopener noreferrer" className="no-hover">
          github.com/{user} ↗
        </ProfileLink>
      </Legend>
    </ActivityCard>
  );
};

export default GithubActivity;
