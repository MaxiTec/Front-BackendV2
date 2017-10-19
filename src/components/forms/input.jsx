import React, { Component } from 'react'
class InputForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      filled: false
    }
    console.log(props)
    this.onChange = this.onChange.bind(this)
    this.onBlur = this.onBlur.bind(this)
  }
  onChange (event) {
    console.log(event.target.value)
    if (event.target.value.length >= 0) {
      this.setState({
        filled: Boolean(event.currentTarget.value)
      })
    }
  }
  onBlur (event) {
    this.setState({filled: Boolean(event.currentTarget.value)})
  }
  // NOTA: pasar siempre el value desde el contenedor
  render () {
    // const required = (this.props.isRequired === true) ? 'true' : 'false'
    return (
      <div className='form-group'>
        <div className={(this.state.filled === true) ? 'input filled' : 'input'}>
          <input type='text' className='form-control' {...this.props} onBlur={this.onBlur} />
          <label className={(this.props.isRequired === true) ? 'input__label isRequired' : 'input__label'}>
            <span className='input__label--text'>{this.props.placeholder}</span>
            <svg className='graphic graphic--madoka' width='100%' height='100%' viewBox='0 0 404 77' preserveAspectRatio='none'>
              <path d='m0,0l404,0l0,77l-404,0l0,-77z' />
            </svg>
          </label>
        </div>
      </div>
    )
  }
}
export default InputForm
