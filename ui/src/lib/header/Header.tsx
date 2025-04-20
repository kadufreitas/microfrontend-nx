import styled from '@emotion/styled';
import { CustomTheme } from '../../types';
import { color, typography } from '../../utils';
import { DropdownAgentState } from './components/DropdownAgentState';

const StyledHeader = styled.header<{ theme?: CustomTheme }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: ${color('primary')};
  color: ${color('textSecondary')};
  font-family: ${typography('fontFamily')};
`;

const LeftSection = styled.div``;

const RightSection = styled.div`
  display: flex;
  gap: 1rem;
`;

const MenuItem = styled.div`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export function Header() {
  return (
    <StyledHeader>
      <LeftSection>
        <DropdownAgentState
          onSelect={(option) => console.log('Selected:', option)}
        />
      </LeftSection>
      <RightSection>
        <MenuItem>Actions</MenuItem>
        <MenuItem>Help</MenuItem>
        <MenuItem>Charlie</MenuItem>
      </RightSection>
    </StyledHeader>
  );
}
