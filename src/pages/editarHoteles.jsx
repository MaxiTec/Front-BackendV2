import React, { Component } from 'react'
import { Tabs, Select } from 'antd'
import ReactDOM from 'react-dom'
import {Editor, EditorState, RichUtils} from 'draft-js'
import InputForm from '../components/forms/input'
import InputFile from '../components/forms/inputFile'
import createToolbarsPlugin, {BoldButton, ItalicButton, UnderlineButton, LinkButton, StyleButton, ImageButton, MoreButton, H1Button, H2Button, H3Button, H4Button, H5Button, H6Button
} from 'draft-js-toolbars/src/'
import 'draft-js/dist/Draft.css'
const Option = Select.Option
const TabPane = Tabs.TabPane
const ToolbarsPlugin = createToolbarsPlugin()
const sideToolbarButtons = List([
  {
    button: MoreButton,
    buttons: List([])
  },
  {
    button: ImageButton
  },
  {
    button: StyleButton,
    buttons: List([
      {button: H1Button},
      {button: H2Button},
      {button: H3Button},
      {button: H4Button},
      {button: H5Button},
      {button: H6Button}
    ])
  }
])

const inlineToolbarButtons = List([
  {button: BoldButton},
  {button: ItalicButton},
  {button: UnderlineButton},
  {button: LinkButton}
])
const { Toolbars } = ToolbarsPlugin
function handleChange (value) {
  console.log(`selected ${value}`)
}
class EditarHotel extends Component {
  constructor (props) {
    super(props)
    this.state = {editorState: EditorState.createEmpty()}
    this.onChange = (editorState) => this.setState({editorState})
    console.log(props)
  }
  _onBoldClick (e) {
    e.preventDefault()
    this.onChange(RichUtils.toggleInlineStyle(
      this.state.editorState,
      'BOLD'
    ))
  }
  render () {
    return (
      <section className='mainContainer'>
        <div className='titleSection no-margin'>
          <h1>Nombre del Hotel</h1>
          <a href='#' className='btn btn-default no-margin'>
            <span className='fa ion-android-add fa-fw fa-lg' />
          </a>
        </div>
        <div className='row'>
          <div className='col-xs-12'>
            <div className='tabsContainer'>
              <Tabs defaultActiveKey='1'>
                <TabPane tab='Informacion' key='1'>
                  <form className='form'>
                    <div className='sectionDivider'>
                      <div className='sectionDivider__text'>
                        <h2>Titulo de la seccion</h2>
                      </div>
                      <div className='sectionDivider__lang'>
                        <div className='select'>
                          <Select defaultValue='es' style={{ width: 100 }} onChange={handleChange}>
                            <Option value='en'>ING</Option>
                            <Option value='es'>ESP</Option>
                            <Option value='br'>POR</Option>
                          </Select>
                        </div>
                      </div>
                    </div>
                    <div className='row bottom-xs'>
                      <div className='col-xs-12 col-sm-12 col-md-8 col-xl-6'>
                        <div className='row bottom-xs'>
                          <div className='col-xs-6 col-sm-4 col-md-3 '>
                            {/* <InputFile isRequired id='image' type='image' empty /> */}
                            <InputFile type='image/jpeg' />
                          </div>
                          <div className='col-xs-6 col-sm-4 col-md-3'>
                            <InputFile type='application/pdf' />
                          </div>
                          <div className='col-xs-12 col-sm-4 col-md-6'>
                            <div className='select'>
                              <label htmlFor='d' className='select__label'>Categoria</label>
                              <Select defaultValue='3' onChange={handleChange}>
                                <Option value='1'>1 Estrella</Option>
                                <Option value='2'>2 Estrellas</Option>
                                <Option value='3'>3 Estrellas</Option>
                              </Select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-xs-12 col-sm-6 col-md-4 col-xl-6'>
                        <InputForm name='esp-algo' isRequired placeholder='Nombre del Hotel' />
                      </div>
                      <div className='col-xs-12 col-sm-6 col-md-4 col-xl-4'>
                        <InputForm name='esp-algo' isRequired placeholder='Frase 1' />
                      </div>
                      <div className='col-xs-12 col-sm-6 col-md-4 col-xl-4'>
                        <InputForm name='esp-algo' isRequired placeholder='Frase 2' />
                      </div>
                      <div className='col-xs-12 col-sm-6 col-md-4 col-xl-4'>
                        <InputForm name='esp-algo' isRequired placeholder='Frase 3' />
                      </div>
                    </div>
                    <div className='sectionDivider'>
                      <div className='sectionDivider__text'>
                        <h2>Videos</h2>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-xs-12'>
                        <div className='videoListInput'>
                          <InputForm name='video_iframe' isRequired placeholder='Agregar Iframe del Video' />
                          <button className='btn btn-default no-margin'><span className='fa ion-android-add fa-fw fa-lg' /></button>
                        </div>
                      </div>
                      <div className='col-xs-12'>
                        <ul className='videoList'>
                          <li className='videoList__item'>
                            <span className='videoList__item__text'>Nombre del Item</span><button className='btn btn-default no-margin'><span className='fa lnr lnr-trash fa-fw fa-lg' /></button>
                          </li>
                          <li className='videoList__item'>
                            <span className='videoList__item__text'>Nombre del Item</span><button className='btn btn-default no-margin'><span className='fa lnr lnr-trash fa-fw fa-lg' /></button>
                          </li>
                          <li className='videoList__item'>
                            <span className='videoList__item__text'>Nombre del Item</span><button className='btn btn-trash no-margin'><span className='fa lnr lnr-trash fa-fw fa-lg' /></button>
                          </li>
                        </ul>
                      </div>

                    </div>
                    <div className='sectionDivider'>
                      <div className='sectionDivider__text'>
                        <h2>Descripcion</h2>
                      </div>
                      <div className='sectionDivider__lang'>
                        <div className='select'>
                          <Select defaultValue='es' style={{ width: 100 }} onChange={handleChange}>
                            <Option value='en'>ING</Option>
                            <Option value='es'>ESP</Option>
                            <Option value='br'>POR</Option>
                          </Select>
                        </div>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-xs-12'>
                        <div id='editor'>
                          <div className='editor'>
                            <Toolbars inlineToolbarButtons={inlineToolbarButtons} sideToolbarButtons={sideToolbarButtons} />
                            <button onClick={this._onBoldClick.bind(this)}>Bold</button>
                            <Editor editorState={this.state.editorState} onChange={this.onChange} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='form__button'>
                      <button className='form__button__ok btn btn-default btn--lg'>Aceptar</button>
                    </div>
                  </form>
                </TabPane>
                <TabPane tab='Facilidades' key='2'>Content of Tab Pane 2</TabPane>
                <TabPane tab='Habitaciones' key='3'>Content of Tab Pane 3</TabPane>
                <TabPane tab='Restaurantes' key='4'>Content of Tab Pane 3</TabPane>
                <TabPane tab='Bares' key='5'>Content of Tab Pane 3</TabPane>
                <TabPane tab='Galeria' key='6'>Content of Tab Pane 3</TabPane>
                <TabPane tab='SEO' key='7'>Content of Tab Pane 3</TabPane>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default EditarHotel
