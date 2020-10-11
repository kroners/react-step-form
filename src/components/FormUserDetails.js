import React, { Component } from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'; 
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault()
        this.props.nextStep()
    }
    
    render() {
        const theme = createMuiTheme();
        const { values, handleChange } = this.props 
        return (
            <MuiThemeProvider theme={theme}>
                <>
                    <Dialog
                        open
                        fullWidth
                        maxWidth='sm'
                    >
                        <AppBar title="Enter user details" />
                        <TextField
                            placeholder="Enter your first name"
                            label="First name"
                            onChange={handleChange('firstName')}
                            defaultValue={values.firstName}
                            margin="normal"
                            fullWidth
                            />
                        <br/>
                        <TextField
                            placeholder="Enter your last name"
                            label="Last name"
                            onChange={handleChange('lastName')}
                            defaultValue={values.lastName}
                            margin="normal"
                            fullWidth
                            />
                        <br/>
                        <TextField
                            placeholder="Enter your email"
                            label="Email"
                            onChange={handleChange('email')}
                            defaultValue={values.email}
                            margin="normal"
                            fullWidth
                            />
                        <br/>
                        <Button
                            color="primary"
                            variant="contained"
                            onClick={this.continue}
                        >Continue</Button>
                    </Dialog>
                </>
            </MuiThemeProvider>
        )
    }
}

export default FormUserDetails
