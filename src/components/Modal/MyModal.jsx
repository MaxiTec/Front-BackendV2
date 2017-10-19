import React, { Component } from 'react'
import { Modal } from 'antd'
export default class MyModal extends Component {
  constructor (props) {
    super(props)
    // console.log(props)
    this.state = {
      visible: false
    }
    this.showModal = this.showModal.bind(this)
    // this.handleOk = this.handleOk.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  }
  showModal (e) {
    e.preventDefault()
    this.setState({
      visible: true
    })
  }
  // handleOk (e) {
  //   // console.log(e)
  //   this.setState({
  //     visible: false
  //   })
  // }
  handleCancel (e) {
    // console.log(e)
    this.setState({
      visible: false
    })
  }
  render () {
    return (
      <div className='customModal'>
        {/* <Button type='primary' onClick={this.showModal}>Open</Button> */}
        <button onClick={this.showModal} className='btn btn-default no-margin'><span className='fa ion-android-add fa-fw fa-lg' /></button>
        <Modal
          title={undefined}
          wrapClassName='vertical-center-modal'
          closable={false}
          visible={this.state.visible}
          style={{ top: 20 }}
          onCancel={this.handleCancel}
          footer={undefined}>
          <div className='sectionDivider no-margin'>
            <div className='sectionDivider__text'>
              <h2>{this.props.title}</h2>
            </div>
          </div>
          <div className='content__modal'>
            {this.props.component}
          </div>
          <button className='ant-modal-content__btn' onClick={this.handleCancel}>
            <span className='fa fa-2x fa-fw lnr lnr-cross-circle' />
          </button>
        </Modal>

      </div>
    )
  }
}
