import styled from 'styled-components';

export const Table = styled.table`
  margin: 0 auto;
  width: 90%;
  border-collapse: collapse;
  border-radius: 16px;
  overflow: hidden;
  text-align: center;
  th,
  td {
    padding: 15px;
  }
  tr:nth-child(2n) {
    background-color: #eee0ee;
  }
`;

export const Thead = styled.thead`
  background-color: #445544;
  color: white;
  text-transform: uppercase;
`;

export const Button = styled.button`
  padding: 6px;
  background-color: lightcoral;
  border: none;
  border-radius: 6px;
  color: white;
  cursor: pointer;

  :hover {
    background-color: red;
    font-weight: 700;
  }
`;

export const Status = styled.span`
  display: inline-block;
  padding: 5px;
  font-weight: 500;
  color: ${p => (p.children === 'online' ? 'green' : 'red')};
`;
