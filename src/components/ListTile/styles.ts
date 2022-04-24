import styled from 'styled-components'

export const LTContainer = styled.button`
  width: 100%;
  padding: 16px;

  display: flex;
  align-items: center;
  flex-direction: row;

  transition: background-color 0.1s ease-in-out;

  color: #000;
  font: normal 0.875rem/1.5 'Roboto', sans-serif;

  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;

  & > div {
    width: 24px;
    margin-right: 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    & > img,
    & > svg {
      width: 16px;
      height: 16px;
    }
  }

  & > p {
    color: inherit;
    font-weight: inherit;
    font: inherit;
  }

  &:hover,
  &:focus-visible {
    background-color: #eeeeee;
  }
`
