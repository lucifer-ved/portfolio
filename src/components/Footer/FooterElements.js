import styled from 'styled-components';

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 0.86rem;
    color: var(--muted);
    margin: 4.2rem auto 2rem auto;
    width: min(1140px, 92vw);
    border-top: 1px dashed var(--line-strong);
    padding-top: 1rem;
    gap: 0.35rem;

    @media screen and (max-width: 769px) {
        text-align: center;
        flex-direction: column;
        gap: 0.1rem;
    }
`;

export const FooterText = styled.div`
    letter-spacing: 0.02em;
`;
