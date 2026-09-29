// Refreshes src/data/githubContributions.json from the public GitHub
// contribution calendar. Runs before `npm run build`; if GitHub can't be
// reached or the page format changes, it keeps the existing snapshot so the
// build never fails because of it.
const fs = require('fs');
const path = require('path');

const USER = 'lucifer-ved';
const OUT = path.resolve(__dirname, '..', 'src', 'data', 'githubContributions.json');

const parse = (html) => {
  const cells = [...html.matchAll(/data-date="(\d{4}-\d{2}-\d{2})" id="contribution-day-component-(\d+)-(\d+)" data-level="(\d)"/g)];
  const tips = new Map(
    [...html.matchAll(/<tool-tip[^>]*for="contribution-day-component-(\d+-\d+)"[^>]*>([^<]*)</g)].map((m) => [m[1], m[2]])
  );

  return cells
    .map(([, date, dow, week, level]) => {
      const tip = tips.get(`${dow}-${week}`) || '';
      const count = /^(\d+) contribution/.exec(tip);
      return [date, Number(level), count ? Number(count[1]) : 0];
    })
    .sort((a, b) => a[0].localeCompare(b[0]));
};

const main = async () => {
  try {
    const res = await fetch(`https://github.com/users/${USER}/contributions`, {
      headers: { 'User-Agent': 'portfolio-build' }
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const days = parse(await res.text());
    if (days.length < 300) throw new Error(`only ${days.length} days parsed`);

    fs.mkdirSync(path.dirname(OUT), { recursive: true });
    fs.writeFileSync(OUT, `${JSON.stringify({ user: USER, fetchedAt: new Date().toISOString(), days })}\n`);
    console.log(`GitHub contributions: saved ${days.length} days for ${USER}.`);
  } catch (err) {
    console.warn(`GitHub contributions: kept the existing snapshot (${err.message}).`);
  }
};

main();
