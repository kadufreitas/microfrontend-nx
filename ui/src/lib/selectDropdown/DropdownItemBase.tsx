import styled from '@emotion/styled';
import { color } from '../../utils';

export const DropdownItemBase = styled.li`
  padding: 10px 15px;
  color: ${color('textPrimary')};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
