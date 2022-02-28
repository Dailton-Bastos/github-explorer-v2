import { shade } from 'polished'
import styled from 'styled-components'

export const Form = styled.form`
  display: flex;

  input {
    flex: 1;
    color: #3a3a4a;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    background-color: #04d361;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    height: 70px;
    width: 210px;
    transition: background-color 0.2s;

    &:hover {
      background-color: ${shade(0.2, '#04d361')};
    }
  }
`
