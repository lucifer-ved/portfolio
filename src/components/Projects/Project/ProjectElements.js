import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProjectContainer = styled.div`
    margin-top: 1rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 1.2rem;
    padding: 1.1rem;
    border-radius: 22px;
    border: 1px solid var(--line);
    background: linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(247, 252, 255, 0.72));
    box-shadow: var(--shadow-sm);
    position: relative;
    overflow: hidden;
    transition: transform 240ms ease, box-shadow 240ms ease;

    &:before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(125deg, rgba(40, 100, 255, 0.08), transparent 38%, rgba(20, 184, 166, 0.08));
        pointer-events: none;
    }

    &:nth-of-type(even) {
        flex-direction: row-reverse;
    }

    &:hover {
        transform: translateY(-5px);
        box-shadow: var(--shadow-lg);
    }

    @media screen and (max-width: 900px) {
        flex-direction: column;
        padding: 0.85rem;
        border-radius: 16px;

        &:nth-of-type(even) {
            flex-direction: column;
        }
    }
`;

export const ProjectImage = styled.img`
    width: 52%;
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.65);
    box-shadow: 0 10px 22px rgba(20, 33, 61, 0.14);

    @media screen and (max-width: 900px) {
        width: 100%;
    }
`;

export const ProjectVideo = styled.video`
    width: 52%;
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.65);
    box-shadow: 0 10px 22px rgba(20, 33, 61, 0.14);

    @media screen and (max-width: 900px) {
        width: 100%;
    }
`;

export const ProjectDetails = styled.div`
    padding: 0.4rem 0.4rem 0.4rem 0.8rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    flex: 1;
    position: relative;
    z-index: 1;

    @media screen and (max-width: 900px) {
        width: 100%;
        align-items: center;
        text-align: center;
        padding: 0.8rem 0.2rem 0.4rem 0.2rem;
    }
`;

export const ProjectTitle = styled.div`
    display: flex;
    font-size: clamp(1.5rem, 3vw, 2.2rem);
    font-weight: 700;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.05em;
`;

export const ProjectDescription = styled.div`
    display: flex;
    font-size: 0.95rem;
    font-weight: 500;
    margin-top: 0.85rem;
    color: var(--muted);
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    justify-content: center;
    line-height: 1.65;

    @media screen and (max-width: 900px) {
        text-align: center;
        align-items: center;
    }
`;

export const ProjectTechnologies = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 1rem;
`;

export const Tech = styled.div`
    background: #3cf;
    font-size: 0.8rem;
    padding: 0.45rem;
    margin: 0.45rem;
`;

export const SeeMoreButton = styled(Link)`
    margin-top: 1.05rem;
    color: var(--text);
    background: rgba(255, 255, 255, 0.85);
    cursor: pointer;
    display: inline-flex;
    position: relative;
    border: 1px solid var(--line-strong);
    border-radius: 12px;
    min-width: 132px;
    height: 42px;
    text-align: center;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-size: 0.69rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    font-weight: 600;
    overflow: hidden;
    transition: color 220ms ease, border-color 220ms ease;

    &:hover {
        color: #fff;
        border-color: var(--primary);
    }

    &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, var(--primary), var(--secondary));
        transform: translateX(-102%);
        transition: transform 280ms ease;
        z-index: -1;
    }

    &:hover:before {
        transform: translateX(0);
    }
`;
