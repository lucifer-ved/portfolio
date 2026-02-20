import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const WorkContainer = styled.div`
    background: transparent;
    width: 100%;
`;

export const WorkGrid = styled.div`
    width: min(1140px, 92vw);
    margin-top: 4.2rem;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.95rem;

    & > a:nth-child(1) {
        background: linear-gradient(155deg, #1c5dff, #3f8cff);
    }

    & > a:nth-child(2) {
        background: linear-gradient(155deg, #0ea5a0, #34d399);
    }

    & > a:nth-child(3) {
        background: linear-gradient(155deg, #2f3657, #4f5f91);
    }

    & > a:nth-child(4) {
        background: linear-gradient(155deg, #8b5cf6, #4f46e5);
    }

    & > a:nth-child(5) {
        background: linear-gradient(155deg, #f97316, #fb923c);
    }

    & > a:nth-child(6) {
        background: linear-gradient(155deg, #16a34a, #22c55e);
    }

    & > a [id^='girdItemName'] {
        transition: transform 300ms ease, opacity 300ms ease;
    }

    & > a [id^='gridItemContainer'] {
        opacity: 0;
        transform: translateY(8px);
        transition: transform 300ms ease, opacity 300ms ease;
    }

    & > a:hover [id^='girdItemName'] {
        opacity: 0;
        transform: translateY(-8px) scale(0.95);
    }

    & > a:hover [id^='gridItemContainer'] {
        opacity: 1;
        transform: translateY(0);
    }

    @media screen and (max-width: 980px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media screen and (max-width: 700px) {
        grid-template-columns: 1fr;
    }
`;

export const WorkGridItem = styled(Link)`
    position: relative;
    overflow: hidden;
    min-height: 240px;
    border-radius: 22px;
    border: 1px solid rgba(255, 255, 255, 0.42);
    box-shadow: 0 15px 30px rgba(12, 20, 40, 0.22);
    display: flex;
    justify-content: center;
    text-decoration: none;
    flex-direction: column;
    text-align: center;
    align-items: center;
    padding: 1rem;
    transform-style: preserve-3d;
    transition: transform 280ms ease, box-shadow 280ms ease;

    &:before {
        content: '';
        position: absolute;
        inset: 0;
        background:
            linear-gradient(140deg, rgba(255, 255, 255, 0.38), transparent 45%),
            radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.24), transparent 42%);
        pointer-events: none;
    }

    &:hover {
        transform: translateY(-8px) rotateX(2deg) rotateY(-2deg);
        box-shadow: 0 22px 36px rgba(12, 20, 40, 0.28);
    }

    animation: itemEnter 700ms ease both;

    @keyframes itemEnter {
        from {
            opacity: 0;
            transform: translateY(14px) scale(0.98);
        }
        to {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }

    @media screen and (max-width: 700px) {
        min-height: 205px;

        [id^='girdItemName'] {
            display: none;
        }

        [id^='gridItemContainer'] {
            opacity: 1 !important;
            transform: translateY(0) !important;
            position: static;
        }
    }
`;

export const WorkLogo = styled.div``;

export const WorkName = styled.span`
    color: #ffffff;
    font-size: clamp(2.1rem, 5vw, 3rem);
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    font-weight: 700;
    font-family: var(--font-display);
    letter-spacing: 0.08em;
    text-shadow: 0 10px 20px rgba(9, 16, 34, 0.35);
`;

export const WorkGistContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 92%;
`;

export const WorkTimeSpan = styled.div`
    color: rgba(255, 255, 255, 0.95);
    font-size: 0.95rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    margin-top: 0.4rem;
    letter-spacing: 0.02em;
`;

export const WorkFullName = styled.div`
    color: #ffffff;
    font-size: clamp(1.3rem, 2.7vw, 1.95rem);
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    text-shadow: 0 10px 20px rgba(9, 16, 34, 0.35);
`;
