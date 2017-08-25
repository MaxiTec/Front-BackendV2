import React, { Component } from 'react'
import { Modal, Button } from 'antd'
export default class MyModal extends Component {
  constructor (props) {
    super(props)
    console.log(props)
    this.state = {
      visible: false
    }
    this.showModal = this.showModal.bind(this)
    this.handleOk = this.handleOk.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  }
  showModal () {
    this.setState({
      visible: true
    })
  }
  handleOk (e) {
    console.log(e)
    this.setState({
      visible: false
    })
  }
  handleCancel (e) {
    console.log(e)
    this.setState({
      visible: false
    })
  }
  render () {
    return (
      <div className='customModal'>
        <Button type='primary' onClick={this.showModal}>Open</Button>
        <Modal
          title={undefined}
          closable={false}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={undefined}
          >
          <div className='sectionDivider no-margin'>
            <div className='sectionDivider__text'>
              <h2>Facilidades</h2>
            </div>
          </div>
          {this.props.component}
        </Modal>
      </div>
    )
  }
}
