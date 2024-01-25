import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './theme/theme';
import { About } from './pages/about/About';

function App() {
  const [theme, setTheme] = React.useState(defaultTheme);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <About />
      </div>
    </ThemeProvider>
  );
}

export default App;
