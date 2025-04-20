import { ThemeProvider } from '@emotion/react';
import { defaultTheme, Header } from '@microfrontend-nx/ui';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
    </ThemeProvider>
  );
}

export default App;
