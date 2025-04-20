import styled from '@emotion/styled';
import { DropdownButtonBase } from './DropdownButtonBase';
import { color } from '../../utils';

export const DropdownButtonNotReady = styled(DropdownButtonBase)`
  background: ${color('error')};
  color: ${color('textSecondary')};
  border: 1px solid ${color('error')};
`;
