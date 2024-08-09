import styled from 'styled-components';

export const $Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: fit-content;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const $H = styled.h1`
    font-size: 4rem;
    margin-bottom: 1rem;
`;

export const $Button = styled.button`
    padding: .5rem 1rem;
    font-size: 1.3rem;
    margin-bottom: 1rem;
    color: #9290C3;
    border: .2rem solid #9290C3;
    font-weight: 700;
    background: transparent;
    box-shadow: none;
    border-radius: 4px;
    opacity: 1;
    transition: 0.3s;
    width: 20rem;

    &:hover {
        cursor: pointer;
        opacity: .8;
    }
`;