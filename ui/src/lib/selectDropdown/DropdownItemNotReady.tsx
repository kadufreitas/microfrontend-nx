import styled from '@emotion/styled';
import { DropdownItemBase } from './DropdownItemBase';
import { color } from '../../utils';

export const DropdownItemNotReady = styled(DropdownItemBase)`
  background-color: ${color('error')};
  color: ${color('textSecondary')};
`;
