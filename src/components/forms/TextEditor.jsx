import React, { Component } from 'react'
import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor' // eslint-disable-line import/no-unresolved
// import editorStyles from './editorStyles.css';
import 'draft-js/dist/Draft.css'
import createRichButtonsPlugin from 'draft-js-richbuttons-plugin'
const richButtonsPlugin = createRichButtonsPlugin()
const {ItalicButton, BoldButton, MonospaceButton, UnderlineButton, ParagraphButton, CodeButton, OLButton, ULButton, H1Button, H2Button, H3Button
} = richButtonsPlugin
const text = ''
export default class MyEditor extends Component {
  constructor (props) {
    super(props)
    console.log(props)
    this.state = {
      editorState: createEditorStateWithText(text)
    }
    this.onChange = this.onChange.bind(this)
  }
  onChange (editorState) {
    this.setState({
      editorState
    })
    console.log(this.state.editorState.getCurrentContent())
  }
  render () {
    return (
      <div className='editor' onClick={this.focus}>
        <div className='myToolbar'>
          <BoldButton />
          <ItalicButton />
          <H1Button />
          <H2Button />
          <H3Button />
          <ULButton />
          <OLButton />
          <ParagraphButton />
          <UnderlineButton />
          <CodeButton />
          <MonospaceButton />
        </div>
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          ref={(element) => { this.editor = element }}
          plugins={[richButtonsPlugin]}
        />
      </div>
    )
  }
}
