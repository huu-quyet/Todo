import styled from 'styled-components';

interface Props {
  mainColor?: string;
  secondColor: string;
}
interface SelectionProps {
  value: string;
}

export const StyledButton = styled.button<Props>`
  width: 5rem;
  font-size: 3rem;
  border: none;
  color: ${(props) => props.secondColor};
  cursor: pointer;
  border-radius: 6px;
  background-color: ${(props) => props.mainColor};

  /* &:hover {
    background-color: ${(props) => props.secondColor};
    color: ${(props) => props.mainColor};
  } */

  &:active {
    opacity: 0.9;
  }
`;

export const FilterSelection = styled.select<SelectionProps>`
  border-radius: 6px;
  border-color: red;
  height: 3rem;
`;
