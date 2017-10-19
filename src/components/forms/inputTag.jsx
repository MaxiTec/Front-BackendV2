import React, { Component } from 'react'
import { Tag, Input, Tooltip } from 'antd';
import InputForm from './input'
export default class EditableTagGroup extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      tags: this.props.keywords,
      inputVisible: true,
      inputValue: '',
    }
    this.handleClose = this.handleClose.bind(this)
    this.showInput = this.showInput.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleInputConfirm = this.handleInputConfirm.bind(this)
  }
  handleClose = (removedTag) => {
    const tags = this.state.tags.filter(tag => tag !== removedTag);
    console.log(tags);
    this.setState({ tags });
  }

  showInput = () => {
    this.setState({ inputVisible: true }, () => this.input.focus());
  }

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
    e.preventDefault()
  }

  handleInputConfirm = () => {
    const state = this.state;
    const inputValue = state.inputValue;
    let tags = state.tags;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [...tags, inputValue];
    }
    console.log(tags);
    this.setState({
      tags,
      inputVisible: false,
      inputValue: '',
    });
  }
  // titulo 70 y descripcion 150
  saveInputRef = input => this.input = input
  render() {
    const { tags, inputVisible, inputValue } = this.state;
    return (
      <div className="input-tags">
        {tags.map((tag, index) => {
          const isLongTag = tag.length > 20;
          const tagElem = (
            <Tag key={tag} closable afterClose={() => this.handleClose(tag)}>
              {isLongTag ? `${tag.slice(0, 20)}...` : tag}
            </Tag>
          );
          return isLongTag ? <Tooltip title={tag}>{tagElem}</Tooltip> : tagElem;
        })}
        {inputVisible && (
          // <InputForm onPressEnter={this.handleInputConfirm} placeholder='inserte una nuva keyword'/>
          <Input
            ref={this.saveInputRef}
            type="text"
            style={{ width: 100,height:35,lineHeight:35,paddingLeft:5 }}
            value={inputValue}
            onChange={this.handleInputChange}
            onBlur={this.handleInputConfirm}
            onPressEnter={this.handleInputConfirm}
          />
        )}
        {!inputVisible && (
            <button
            className="btn btn-default"
            onClick={this.showInput}>
              <span className="fa ion-android-add fa-fw fa-lg"></span>
            </button>
        )}
      </div>
    );
  }
}

