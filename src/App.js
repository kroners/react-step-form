import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import './App.css';
import UserForm from './components/UserForm';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[400]
    }
  },
  spacing: 4,
})
theme.spacing(2)

function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <UserForm />
      </MuiThemeProvider>
    </div>
  );
}

export default App;
