import styled from '@emotion/styled';
import { CustomTheme } from '../../types';

const StyledButton = styled.button<{ theme?: CustomTheme }>`
  color: ${({ theme }) => theme.colors.primary};
`;

export interface UiProps {
  children: string;
}

export function Button({ children }: UiProps) {
  return (
    <div>
      TEST UI
      <StyledButton>{children}</StyledButton>
    </div>
  );
}
