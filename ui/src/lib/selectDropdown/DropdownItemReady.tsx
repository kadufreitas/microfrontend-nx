import styled from '@emotion/styled';
import { DropdownItemBase } from './DropdownItemBase';
import { color } from '../../utils';

export const DropdownItemReady = styled(DropdownItemBase)`
  background-color: ${color('success')};
  color: ${color('textSecondary')};
`;
