import styled from 'styled-components';

export const $Container = styled.div`
`;

export const $Table = styled.table`
    font-size: 1.5rem;
    margin: 16px;

    tr {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        text-align: left;
    }

    td, th {
        padding: 4px 8px;
        width: 25rem;
        height: clamp(3rem, fit-content, 100rem);
        border: 1px solid black;
    }

    th {
        background-color: darkgrey
    }
`;