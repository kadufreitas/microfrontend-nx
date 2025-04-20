// Uncomment this line to use CSS modules
// import styles from './app.module.css';
import { Ui } from '@microfrontend-nx/ui';
import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      HERE AND THERE
      <Ui>NEW BUTTON CUSTOM </Ui>
      <NxWelcome title="home" />
    </div>
  );
}

export default App;
