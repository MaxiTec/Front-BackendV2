import React, { Component } from 'react'
import { Upload, message } from 'antd'
import {TooltipImage} from '../Tooltip/Tooltip'

function getBase64 (img, callback) {
  const reader = new window.FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}
class InputFile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      imageUrl: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.beforeUpload = this.beforeUpload.bind(this)
  }
  beforeUpload (file) {
    const fileType = file.type === this.props.type
    const fileTypeString = this.props.type
    if (!fileType) {
      message.error('You can only upload' + fileTypeString + 'file')
    }
    const isLt2M = file.size / 1024 / 1024 < 2
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!')
    }
    console.log(fileType, isLt2M)// Al retornar False detiene La subida de la Imagen
    return isLt2M && fileType
  }
  handleChange (info) {
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl => this.setState({ imageUrl }))
    }
  }
  render () {
    const imageUrl = this.state.imageUrl
    const buttonUpload = this.props.type === 'image/jpeg' ? <span className='fa fa-fw fa-3x ion-ios-camera-outline' /> : <span className='fa fa-fw fa-2x lnr lnr-file-empty' />
    return (
      <div className='inputFile'>
        <Upload
          className='inputFile__button'
          name='avatar'
          showUploadList={false}
          action='https://jsonplaceholder.typicode.com/posts/'
          beforeUpload={this.beforeUpload}
          onChange={this.handleChange}
          >
          {!imageUrl &&
            <div className='inputFile__label'>{buttonUpload}</div>
          }
        </Upload>
        {imageUrl &&
          <div>
            <img src={imageUrl} alt='' className='inputFile__image' />
            <div className='inputFile__label inputFile__label__erase'>
              <span className='fa lnr lnr-trash fa-fw fa-2x' />
            </div>
          </div>
          }
        <TooltipImage />
      </div>
    )
  }
}
export default InputFile
