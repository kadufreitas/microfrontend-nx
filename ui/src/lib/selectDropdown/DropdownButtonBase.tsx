import styled from '@emotion/styled';
import { color } from '../../utils';

export const DropdownButtonBase = styled.button`
  width: 100%;
  padding: 10px 15px;
  background: ${color('background')};
  border: 1px solid ${color('border')};
  border-radius: 4px;
  cursor: pointer;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    border-color: ${color('borderHover')};
  }

  &:focus {
    outline: none;
    border-color: ${color('borderFocus')};
    box-shadow: 0 0 0 2px rgba(0, 102, 204, 0.2);
  }
`;
