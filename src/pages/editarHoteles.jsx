import React, { Component } from 'react'
import { Tabs, Select } from 'antd'
import InputForm from '../components/forms/input'
import InputFile from '../components/forms/inputFile'
const Option = Select.Option
const TabPane = Tabs.TabPane
function handleChange (value) {
  console.log(`selected ${value}`)
}
class EditarHotel extends Component {
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
                  <div className='sectionDivider'>
                    <div className='sectionDivider__text'>
                      <h2>Titulo de la seccion</h2>
                    </div>
                    <div className='sectionDivider__lang'>
                      <div className='select'>
                        <Select defaultValue='es' style={{ width: 100 }} onChange={handleChange}>
                          <Option value='en'>Inglés</Option>
                          <Option value='es'>Español</Option>
                          <Option value='br'>Portugués</Option>
                        </Select>
                      </div>
                    </div>
                  </div>
                  <div className='row bottom-xs'>
                    <div className='col-xs-12 col-sm-12 col-md-8 col-xl-6'>
                      <div className='row bottom-xs'>
                        <div className='col-xs-6 col-sm-4 col-md-3 '>
                          {/* <InputFile isRequired id='image' type='image' empty /> */}
                        </div>
                        <div className='col-xs-6 col-sm-4 col-md-3'>
                          <InputFile />
                        </div>
                        <div className='col-xs-12 col-sm-4 col-md-6'>
                          <div className='select'>
                            <label htmlFor='d' className='select__label'>Categoria</label>
                            <Select defaultValue='es' onChange={handleChange}>
                              <Option value='en'>Inglés</Option>
                              <Option value='es'>Español</Option>
                              <Option value='br'>Portugués</Option>
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
