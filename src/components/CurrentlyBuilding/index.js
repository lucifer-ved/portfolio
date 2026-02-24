import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import * as E from './CurrentlyBuildingElements';

const BuildShell = E.BuildShell;
const BuildBoard = E.BuildBoard || E.BuildList;
const BuildLane = E.BuildLane || E.BuildItem;
const LaneHead = E.LaneHead || E.BuildTop;
const LaneTitleWrap = E.LaneTitleWrap || E.BuildTop;
const LaneDot = E.LaneDot || E.BuildStage;
const LaneTitle = E.LaneTitle || E.BuildName;
const LaneHint = E.LaneHint || E.BuildHint;
const LaneItems = E.LaneItems || E.BuildMeta;
const BuildNode = E.BuildNode || E.BuildItem;
const NodeTop = E.NodeTop || E.BuildTop;
const NodeName = E.NodeName || E.BuildName;
const NodeProgress = E.NodeProgress || E.BuildHint;
const NodeMeta = E.NodeMeta || E.BuildMeta;
const EmptyLaneState = E.EmptyLaneState || E.BuildHint;
const BuildLink = E.BuildLink;
const BuildProgressTrack = E.BuildProgressTrack;
const BuildProgressFill = E.BuildProgressFill;

const builds = [
  {
    name: 'MediReco',
    stage: 'Beta',
    progress: 74,
    link: 'https://medireco.com'
  },
  {
    name: 'PhotoFix Telegram Bot',
    stage: 'Beta',
    progress: 58,
    link: 'https://getphotofix.com/'
  },
  {
    name: 'Pawlog',
    stage: 'MVP',
    progress: 61,
    link: 'https://pawlog.netlify.app'
  },
  {
    name: 'House of Agents',
    stage: 'Live',
    progress: 92,
    link: 'https://houseofagents.co'
  },
  {
    name: 'SpendLayer',
    stage: 'MVP',
    progress: 52,
    link: 'https://spendlayer.netlify.app/landing'
  },
  {
    name: 'Stealth Build 02',
    stage: 'Discovery',
    progress: 22,
    link: ''
  }
];

const stageOrder = ['Discovery', 'MVP', 'Beta', 'Live'];

const stageHints = {
  Discovery: 'Problem mapping and validation',
  MVP: 'Core flows and stable foundations',
  Beta: 'Polish, feedback, and reliability',
  Live: 'Production with active usage'
};

const CurrentlyBuilding = () => {
  const lanes = stageOrder.map((stage) => ({
    stage,
    items: builds.filter((item) => item.stage === stage)
  }));

  return (
    <BuildShell className="neu-lg reveal">
      <BuildBoard>
        {lanes.map((lane) => (
          <BuildLane className="neu-inset-md" key={lane.stage}>
            <LaneHead>
              <LaneTitleWrap>
                <LaneDot stage={lane.stage.toLowerCase()} />
                <LaneTitle>{lane.stage}</LaneTitle>
              </LaneTitleWrap>
            </LaneHead>

            <LaneHint>{stageHints[lane.stage]}</LaneHint>

            <LaneItems>
              {lane.items.length ? (
                lane.items.map((item) => (
                  <BuildNode className="neu-sm" key={item.name}>
                    <NodeTop>
                      <NodeName>{item.name}</NodeName>
                      <NodeProgress>{item.progress}%</NodeProgress>
                    </NodeTop>

                    <BuildProgressTrack>
                      <BuildProgressFill
                        stage={item.stage.toLowerCase()}
                        style={{ width: `${item.progress}%` }}
                      />
                    </BuildProgressTrack>

                    <NodeMeta>
                      {item.link ? (
                        <BuildLink
                          className="neu-inset-sm"
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FiExternalLink />
                          Open link
                        </BuildLink>
                      ) : (
                        <span>Private build</span>
                      )}
                    </NodeMeta>
                  </BuildNode>
                ))
              ) : (
                <EmptyLaneState>No builds in this stage yet</EmptyLaneState>
              )}
            </LaneItems>
          </BuildLane>
        ))}
      </BuildBoard>
    </BuildShell>
  );
};

export default CurrentlyBuilding;
