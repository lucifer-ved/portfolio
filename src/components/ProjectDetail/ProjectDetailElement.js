import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProjectDetailContainer = styled.div`
    width: min(1140px, 92vw);
    margin: 4.5rem auto 2rem auto;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    border: 1px solid var(--line);
    border-radius: 24px;
    padding: 1.5rem;
    background: linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(246, 252, 255, 0.72));
    box-shadow: var(--shadow-sm);
    animation: fadeIn 700ms ease;

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(8px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @media screen and (max-width: 769px) {
        margin-top: 3.6rem;
        padding: 0.95rem;
        border-radius: 16px;
    }
`;

export const ProjectName = styled.h1`
    font-size: clamp(1.9rem, 5vw, 3.1rem);
    font-weight: 700;
    display: flex;
    justify-content: center;
    letter-spacing: 0.06em;
`;

export const ProjectDescription = styled.div`
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--muted);
    display: flex;
    justify-content: center;
    margin-top: 0.65rem;
    line-height: 1.7;
`;

export const ProjectImage = styled.img`
    width: min(840px, 100%);
    max-width: 100%;
    height: auto;
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.7);
    box-shadow: 0 10px 22px rgba(20, 33, 61, 0.14);
    margin: 1.7rem auto;
`;

export const ProjectVideo = styled.video`
    width: min(840px, 100%);
    max-width: 100%;
    height: auto;
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.7);
    box-shadow: 0 10px 22px rgba(20, 33, 61, 0.14);
    margin: 1.7rem auto;
`;

export const Hr = styled.hr`
    border: none;
    color: var(--line-strong);
    width: 24%;
    background-color: var(--line-strong);
    height: 1px;
    margin: 1.4rem auto;
`;

export const ProjectUrl = styled.a`
    display: flex;
    font-size: 0.8rem;
    color: var(--primary);
    flex-direction: row;
    justify-content: center;
    text-align: center;
    text-decoration: none;
    line-height: 1.3;
    margin: auto 10%;
`;

export const TheChallenges = styled.div`
    display: flex;
    font-size: 0.96rem;
    color: var(--muted);
    flex-direction: column;
    margin: auto 6%;
    text-align: center;
    justify-content: center;
    line-height: 1.75;
`;

export const TheWhy = styled.div`
    display: flex;
    font-size: 0.96rem;
    color: var(--muted);
    flex-direction: column;
    margin: auto 6%;
    text-align: center;
    justify-content: center;
    line-height: 1.75;
`;

export const WhatsNext = styled.div`
    display: flex;
    font-size: 0.96rem;
    color: var(--muted);
    flex-direction: column;
    margin: auto 6%;
    text-align: center;
    justify-content: center;
    line-height: 1.75;
`;

export const Tech = styled.div`
    display: flex;
    font-size: 0.9rem;
    flex-direction: row;
    margin: auto 6%;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.5rem;

    a {
        text-decoration: none;
        border: 1px solid var(--line-strong);
        border-radius: 10px;
        padding: 0.52rem 0.72rem;
        color: var(--text);
        background: rgba(255, 255, 255, 0.82);
        transition: border-color 160ms ease, color 160ms ease;

        &:hover {
            border-color: var(--primary);
            color: var(--primary);
        }
    }

    @media screen and (max-width: 700px) {
        flex-direction: column;
    }
`;

export const SectionHeading = styled.h2`
    display: flex;
    justify-content: center;
    margin-top: 1.8rem;
    margin-bottom: 1.3rem;
    font-size: clamp(1.4rem, 3.8vw, 2.2rem);
    font-weight: 700;
    letter-spacing: 0.06em;
`;

export const ProjectLinkContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin: 1.9rem auto 0.4rem auto;

    .isActive {
        color: #fff;
        background: var(--primary);
        border-color: var(--primary);
    }

    @media screen and (max-width: 1100px) {
        width: 100%;
    }
`;

export const ProjectLink = styled(Link)`
    font-size: 0.66rem;
    letter-spacing: 0.11em;
    text-transform: uppercase;
    text-align: center;
    cursor: pointer;
    color: var(--muted);
    border: 1px solid var(--line-strong);
    border-radius: 10px;
    padding: 0.58rem 0.72rem;
    text-decoration: none;
    transition: background 160ms ease, color 160ms ease, border-color 160ms ease;

    &:hover {
        background: var(--primary-soft);
        color: var(--primary);
        border-color: var(--primary);
    }
`;
