import './App.css';
import { useEffect } from 'react';
import Navigation from './ui/navigation/Navigation';
import Home from './ui/home/Home';
import Aos from 'aos';
import { FormspreeProvider } from '@formspree/react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';

function App() {
  useEffect(() => {
    Aos.init({
      startEvent: 'load',
    });
  }, []);
  return (
    <ThemeProvider theme={createTheme({
      palette: {
        primary: {
          main: '#001eee',
        },
        secondary: {
          main: '#ff0000',
        },
      },
    })}>
      <FormspreeProvider project="1701476863047630380">
        <div className="App">
          <Router>
            <Navigation />
            <Switch>
              <Route path="/" component={Home} />
            </Switch>
          </Router>
        </div>
      </FormspreeProvider>
    </ThemeProvider>

  );
}

export default App;
