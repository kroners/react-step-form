import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { green } from '@material-ui/core/colors'
import './App.css'
import UserForm from './components/UserForm'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[400],
    },
  },
  spacing: 4,
})
theme.spacing(2)

function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <Dialog open fullWidth maxWidth="md">
          <UserForm />
        </Dialog>
      </MuiThemeProvider>
    </div>
  )
}

export default App
