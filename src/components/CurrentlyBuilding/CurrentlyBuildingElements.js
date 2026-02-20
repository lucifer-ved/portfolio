import styled from 'styled-components';

const laneAccent = {
  discovery: 'rgba(151, 161, 183, 0.95)',
  mvp: 'rgba(122, 146, 220, 0.92)',
  beta: 'rgba(93, 176, 200, 0.92)',
  live: 'rgba(103, 196, 150, 0.92)'
};

const resolveAccent = (stage) => laneAccent[stage] || laneAccent.discovery;

export const BuildShell = styled.div`
  margin-top: 1.45rem;
  border-radius: 1.35rem;
  padding: clamp(1rem, 2vw, 1.6rem);
`;

export const BuildBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: clamp(0.75rem, 1.5vw, 1.1rem);

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media screen and (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const BuildLane = styled.section`
  border-radius: 1.15rem;
  padding: 1rem;
  min-height: 280px;
`;

export const LaneHead = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
`;

export const LaneTitleWrap = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
`;

export const LaneDot = styled.span`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 999px;
  background: ${({ stage }) => resolveAccent(stage)};
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.05);
`;

export const LaneTitle = styled.h3`
  margin: 0;
  color: var(--text);
  font-size: 0.93rem;
  font-weight: 700;
  letter-spacing: 0.01em;
`;

export const LaneCount = styled.span`
  min-width: 1.65rem;
  height: 1.65rem;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--textSoft);
  font-size: 0.76rem;
  font-weight: 600;
  background: var(--surface);
  box-shadow: inset -3px -3px 6px var(--shadowLight), inset 3px 3px 6px var(--shadowDark);
`;

export const LaneHint = styled.p`
  margin: 0.52rem 0 0;
  color: var(--textSoft);
  font-size: 0.78rem;
  line-height: 1.45;
`;

export const LaneItems = styled.div`
  margin-top: 0.9rem;
  display: grid;
  gap: 0.75rem;
`;

export const BuildNode = styled.article`
  border-radius: 0.96rem;
  padding: 0.76rem;
`;

export const NodeTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
`;

export const NodeName = styled.h4`
  margin: 0;
  color: var(--text);
  font-size: 0.88rem;
  font-weight: 650;
  letter-spacing: 0.01em;
`;

export const NodeProgress = styled.span`
  color: var(--textSoft);
  font-size: 0.76rem;
  font-weight: 600;
`;

export const BuildProgressTrack = styled.div`
  margin-top: 0.52rem;
  position: relative;
  height: 0.42rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.03);
  box-shadow: inset -2px -2px 5px var(--shadowLight), inset 2px 2px 5px var(--shadowDark);
  overflow: hidden;
`;

export const BuildProgressFill = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 0;
  border-radius: 999px;
  background: ${({ stage }) => resolveAccent(stage)};
  opacity: 0.9;
`;

export const NodeMeta = styled.div`
  margin-top: 0.58rem;
  min-height: 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  span {
    color: var(--textSoft);
    font-size: 0.72rem;
  }
`;

export const BuildLink = styled.a`
  border-radius: 999px;
  padding: 0.32rem 0.68rem;
  font-size: 0.73rem;
  font-weight: 600;
  color: var(--text);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.33rem;
`;

export const EmptyLaneState = styled.div`
  border-radius: 0.9rem;
  padding: 0.78rem;
  color: var(--textSoft);
  font-size: 0.75rem;
  line-height: 1.4;
  background: rgba(255, 255, 255, 0.015);
  border: 1px dashed rgba(255, 255, 255, 0.08);
`;

/* Legacy aliases for compatibility with previous component versions */
export const BuildList = BuildBoard;
export const BuildItem = BuildNode;
export const BuildTop = NodeTop;
export const BuildName = NodeName;
export const BuildStage = LaneTitle;
export const BuildMeta = NodeMeta;
export const BuildHint = LaneHint;
