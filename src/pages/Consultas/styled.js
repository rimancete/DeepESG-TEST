import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SearchContainer = styled.div`
  margin-top: 20px;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;
    a {
      margin: 0;
      position: relative;
      bottom: 5px;
    }
    .result {
      width: 100%;
      text-align: center;
    }
  }
  .airport-result {
    th {
      justify-content: space-between;
      width: 25%;
    }
  }
  table {
    width: 100%;
    text-align: left;
    justify-content: left;
  }
  th {
    justify-content: space-between;
    width: 100%;
  }

  div + div {
    border-top: 1px solid #eee;
  }
`;
export const Form = styled.form`
  @media (max-width: 500px) {
    font-size: 0.85em;
    svg {
      width: 18px;
      height: 18px;
    }
  }
  display: inline-block;
  width: 100%;
  padding: 10px 0;
  text-align: center;
  font-weight: 550;
`;

export const Consulta = styled(Link)`
  @media (max-width: 500px) {
    font-size: 0.85em;
    svg {
      width: 18px;
      height: 18px;
    }
  }
  display: inline-block;
  width: 100%;
  padding: 10px 0;
  text-align: center;
  font-weight: 550;
`;
