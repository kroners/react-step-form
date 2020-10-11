import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails'
import FormPersonalDetails from './FormPersonalDetails'
import Confirm from './Confirm'
import Success from './Success'
import { withStyles } from '@material-ui/core'
import PropTypes from 'prop-types'

const useStyles = (theme) => ({
  root: {
    padding: '15px 20px',
  },
})
export class UserForm extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    bio: '',
  }

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state
    this.setState({
      step: step + 1,
    })
  }

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state
    this.setState({
      step: step - 1,
    })
  }

  // Handle fields change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value })
  }

  render() {
    const { step } = this.state
    const { classes } = this.props
    const { firstName, lastName, email, occupation, city, bio } = this.state
    const values = { firstName, lastName, email, occupation, city, bio }
    let innerSectionForm

    switch (step) {
      case 1:
        innerSectionForm = (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
        break
      case 2:
        innerSectionForm = (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
        break
      case 3:
        innerSectionForm = (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        )
        break
      case 4:
        innerSectionForm = <Success />
        break
      default:
        console.log('This is a multi-step form built with React.')
    }

    return <div className={classes.root}>{innerSectionForm}</div>
  }
}

UserForm.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(useStyles)(UserForm)
