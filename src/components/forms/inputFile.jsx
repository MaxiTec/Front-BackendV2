import React, { Component } from 'react'
// import { Popover } from 'antd'
// const InputFile = (props) => {
//   console.log(props)
//   function onChange (event) {
//     console.log(props)
//   }
//   const content = (
//     <div className='tooltip__content'>
//       <p><strong>Formatos:</strong>JPG - PNG - SVG</p>
//       <p><strong>Medidas:</strong> Ancho_ 150px Alto: 65px</p>
//       <p><strong>Calidad:</strong> .png 72dpi 70% RGB</p>
//     </div>
//   )
//   const isEmpty = props.empty
//   let button = null
//   if (isEmpty) {
//     button = <label className='inputFile__label' htmlFor={props.id}><span className='ion-ios-camera-outline fa-2x fa-fw' /></label>
//   } else {
//     button = <button className='inputFile__label inputFile__label__erase'><span className='fa fa-trash fa-fw fa-2x' /></button>
//   }
//   return (
//     <div className='inputFile'>
//       {button}
//       {!isEmpty &&
//         <img className='inputFile__image' src='http://via.placeholder.com/350x150' alt='' />
//       }
//       <input id={props.id} className='inputFile__input' type='file' onChange={onChange} />
//       <div className='tooltip'>
//         <Popover content={content} title={undefined} placement='bottomRight'>
//           <span className='ion-information-circled fa fa-fw fa-2x' />
//         </Popover>
//       </div>
//     </div>
//   )
// }
// export default InputFile
import { Upload, Icon, message } from 'antd';
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJPG = file.type === 'image/jpeg';
  if (!isJPG) {
    message.error('You can only upload JPG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJPG && isLt2M;
}

class InputFile extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      imageUrl:null
    }
  }
  handleChange  (info) => {
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl => this.setState({ imageUrl }));
    }
  }
  // onBlur (event) {
  //   this.setState({filled: Boolean(event.currentTarget.value)})
  // }
  render() {
    const imageUrl = this.state.imageUrl;
    return (
      <Upload
        className="avatar-uploader"
        name="avatar"
        showUploadList={false}
        action="//jsonplaceholder.typicode.com/posts/"
        beforeUpload={beforeUpload}
        onChange={this.handleChange}
      >
        {
          imageUrl ?
            <img src={imageUrl} alt="" className="avatar" /> :
            <Icon type="plus" className="avatar-uploader-trigger" />
        }
      </Upload>
    );
  }
}
export default InputFile