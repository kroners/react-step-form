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

    back = e => {
        e.preventDefault()
        this.props.prevStep()
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
                        <AppBar title="Enter your personal details" />
                        <TextField
                            placeholder="Enter your occupation"
                            label="Occupation"
                            onChange={handleChange('occupation')}
                            defaultValue={values.occupation}
                            margin="normal"
                            fullWidth
                            />
                        <br/>
                        <TextField
                            placeholder="Enter your city"
                            label="City"
                            onChange={handleChange('city')}
                            defaultValue={values.city}
                            margin="normal"
                            fullWidth
                            />
                        <br/>
                        <TextField
                            placeholder="Enter your bio"
                            label="Bio"
                            onChange={handleChange('bio')}
                            defaultValue={values.bio}
                            margin="normal"
                            fullWidth
                            />
                        <br/>
                        <Button
                            variant="contained"
                            onClick={this.back}
                        >Back</Button>
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
