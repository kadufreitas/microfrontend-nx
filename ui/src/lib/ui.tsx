import styles from './ui.module.css';
import styled from '@emotion/styled'

const Button = styled.button`
  color: hotpink;
`

export interface UiProps {
  children: string;
}

export function Ui({ children }: UiProps) {
  return (
    <div className={styles['container']}>
      TEST UI
      <Button>{children}</Button>
    </div>
  );
}

export default Ui;
