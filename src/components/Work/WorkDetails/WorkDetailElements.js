import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const WorkDetailContainer = styled.div`
    width: min(1140px, 92vw);
    margin: 4.5rem auto 2rem auto;
    display: flex;
    flex-direction: column;
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

export const WorkName = styled.div`
    font-size: clamp(1.9rem, 5vw, 3.1rem);
    font-weight: 700;
    display: flex;
    justify-content: center;
    text-align: center;
    letter-spacing: 0.06em;
`;

export const WorkImage = styled.img`
    width: min(840px, 100%);
    height: auto;
    margin: 1.8rem auto;
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.7);
    box-shadow: 0 10px 22px rgba(20, 33, 61, 0.14);

    @media screen and (max-width: 769px) {
        margin-top: 1.2rem;
    }
`;

export const WorkBasicDetails = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 0.7rem;
    margin-bottom: 1rem;

    @media screen and (max-width: 980px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media screen and (max-width: 769px) {
        grid-template-columns: 1fr;
    }
`;

export const CompanyName = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid var(--line);
    border-radius: 12px;
    padding: 0.8rem;
`;

export const TimePeriod = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid var(--line);
    border-radius: 12px;
    padding: 0.8rem;
`;

export const Role = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid var(--line);
    border-radius: 12px;
    padding: 0.8rem;
`;

export const Website = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid var(--line);
    border-radius: 12px;
    padding: 0.8rem;
`;

export const DetailsHeading = styled.div`
    display: flex;
    justify-content: center;
    font-size: 0.68rem;
    color: var(--muted);
    letter-spacing: 0.11em;
    text-transform: uppercase;
    font-weight: 700;
`;

export const DetailsValue = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 0.95rem;
    margin-top: 0.42rem;
`;

export const WebsiteValue = styled.a`
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 0.95rem;
    margin-top: 0.42rem;
    color: var(--primary);
`;

export const ThingsWorkedOn = styled.div`
    display: flex;
    font-size: 0.96rem;
    color: var(--muted);
    flex-direction: column;
    line-height: 1.75;
    margin: auto 6%;
    text-align: center;
    justify-content: center;
`;

export const Challenges = styled.div`
    display: flex;
    font-size: 0.96rem;
    color: var(--muted);
    flex-direction: column;
    line-height: 1.75;
    margin: auto 6%;
    text-align: center;
    justify-content: center;
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

export const Hr = styled.hr`
    border: none;
    color: var(--line-strong);
    width: 24%;
    background-color: var(--line-strong);
    height: 1px;
    margin: 1.4rem auto;
`;

export const WorkLinkContainer = styled.div`
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

    @media screen and (max-width: 769px) {
        width: 100%;
    }
`;

export const WorkLink = styled(Link)`
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
