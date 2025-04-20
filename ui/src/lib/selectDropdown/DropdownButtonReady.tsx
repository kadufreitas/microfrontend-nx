import styled from '@emotion/styled';
import { DropdownButtonBase } from './DropdownButtonBase';
import { color } from '../../utils';

export const DropdownButtonReady = styled(DropdownButtonBase)`
  background: ${color('success')};
  color: ${color('textSecondary')};
  border: 1px solid ${color('success')};
`;
