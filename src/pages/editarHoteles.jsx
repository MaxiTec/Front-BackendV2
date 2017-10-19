import React, { Component } from 'react'
import { Tabs, Select, Switch } from 'antd'
import MyModal from '../components/Modal/MyModal'
import MyEditor from '../components/forms/TextEditor'
import InputForm from '../components/forms/input'
import InputFile from '../components/forms/inputFile'
import MyTable from '../components/Table/Table'
import EditableTagGroup from '../components/forms/inputTag'
import * as sort from 'sortabular'
const Option = Select.Option
const TabPane = Tabs.TabPane
function handleChange (value) {
  console.log(`selected ${value}`)
}
class EditarHotel extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: '',
      tableHab: {
        rows: [],
        columns: [],
        pagination: {
          page: 1,
          perPage: 10
        },
        searchColumn: 'all',
        sortingColumns: null,
        query: {}
      },
      tableRes: {
        rows: [],
        columns: [],
        pagination: {
          page: 1,
          perPage: 10
        },
        searchColumn: 'all',
        sortingColumns: null,
        query: {}
      },
      tableBar: {
        rows: [],
        columns: [],
        pagination: {
          page: 1,
          perPage: 10
        },
        searchColumn: 'all',
        sortingColumns: null,
        query: {}
      },
      tableGal: {
        rows: [],
        columns: [],
        pagination: {
          page: 1,
          perPage: 10
        },
        searchColumn: 'all',
        sortingColumns: null,
        query: {}
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.formChange = this.formChange.bind(this)
  }
  getColumnsHab () {
    const sortable = sort.sort({
      getSortingColumns: () => this.state.tableHab.sortingColumns || [],
      onSort: selectedColumn => {
        this.setState({
          tableHab: {
            ...this.state.tableHab,
            sortingColumns: sort.byColumns({
              sortingColumns: this.state.tableHab.sortingColumns,
              selectedColumn
            })
          }
        })
      }
    })
    const sortableHeader = sortHeader(sortable, () => this.state.tableHab.sortingColumns)
    return [
      {
        property: 'tipo_hab',
        header: {
          label: 'Habitaciones',
          formatters: [sortableHeader]
        }
      }, {
        property: 'num_res',
        props: {
          style: {textAlign: 'center'}
        },
        header: {
          label: '# Restaurantes:'
        }
      },
      {
        property: 'num_bar',
        props: {
          style: {textAlign: 'center'}
        },
        header: {
          label: '# Bares:'
        }
      },
      {
        props: {
          style: {
            width: 50
          }
        },
        cell: {
          formatters: [
            (value, { rowData }) => (
              <div className='option-hide'>
                <div className='option-hide__left'>
                  <a href={`/hoteles/${rowData.id}`} className='btn btn-default'><i className='lnr lnr-pencil fa-lg fa-fw' /></a>
                  <a href={`/habitaciones/${rowData.id}`} className='btn btn-default'><i className='lnr lnr-list fa-lg fa-fw' /></a>
                  <a href={`/restaurantes/${rowData.id}`} className='btn btn-default'><i className='fa fa-pencil fa-lg fa-fw' /></a>
                  <a href={`/bares/${rowData.id}`} className='btn btn-default'><i className='fa fa-pencil fa-lg fa-fw' /></a>
                  <a href='#' className='btn btn-trash'><i className='lnr lnr-trash fa-lg fa-fw' /></a>
                </div>
              </div>
            )
          ]
        },
        visible: true
      }
    ]
  }
  getColumnsRes () {
    const sortable = sort.sort({
      getSortingColumns: () => this.state.tableRes.sortingColumns || [],
      onSort: selectedColumn => {
        this.setState({
          tableRes: {
            ...this.state.tableRes,
            sortingColumns: sort.byColumns({
              sortingColumns: this.state.tableRes.sortingColumns,
              selectedColumn
            })
          }
        })
      }
    })
    const sortableHeader = sortHeader(sortable, () => this.state.tableRes.sortingColumns)
    return [
      {
        property: 'nombre_res',
        header: {
          label: 'Restaurantes:',
          formatters: [sortableHeader]
        }
      },
      {
        props: {
          style: {
            textAlign: 'center'
          }
        },
        header: {
          label: 'Destacado:'
        },
        cell: {
          formatters: [
            (value, { rowData }) => (
              <div className='custom-swicth'>
                <Switch defaultChecked={rowData.destacado_res} />
              </div>
            )
          ]
        }
      },
      {
        props: {
          style: {
            textAlign: 'center'
          }
        },
        header: {
          label: 'Activo:'
        },
        cell: {
          formatters: [
            (value, { rowData }) => (
              <div className='custom-swicth'>
                <Switch defaultChecked={rowData.activo_res} />
              </div>
            )
          ]
        }
      },
      {
        props: {
          style: {
            width: 50
          }
        },
        cell: {
          formatters: [
            (value, { rowData }) => (
              <div className='option-hide'>
                <div className='option-hide__left'>
                  <a href={`/hoteles/${rowData.id}`} className='btn btn-default fa fw'><i className='lnr lnr-pencil fa-lg fa-fw' /></a>
                  <a href='#' className='btn btn-trash fa fw'><i className='lnr lnr-trash fa-lg fa-fw' /></a>
                </div>
              </div>
            )
          ]
        }
      }
    ]
  }
  getColumnsBar () {
    const sortable = sort.sort({
      getSortingColumns: () => this.state.tableBar.sortingColumns || [],
      onSort: selectedColumn => {
        this.setState({
          tableBar: {
            ...this.state.tableBar,
            sortingColumns: sort.byColumns({
              sortingColumns: this.state.tableBar.sortingColumns,
              selectedColumn
            })
          }
        })
      }
    })
    const sortableHeader = sortHeader(sortable, () => this.state.tableBar.sortingColumns)
    return [
      {
        property: 'nombre_res',
        header: {
          label: 'Bar:',
          formatters: [sortableHeader]
        }
      },
      {
        props: {
          style: {
            textAlign: 'center'
          }
        },
        header: {
          label: 'Destacado:'
        },
        cell: {
          formatters: [
            (value, { rowData }) => (
              <div className='custom-swicth'>
                <Switch defaultChecked={rowData.destacado_res} />
              </div>
            )
          ]
        }
      },
      {
        props: {
          style: {
            textAlign: 'center'
          }
        },
        header: {
          label: 'Activo:'
        },
        cell: {
          formatters: [
            (value, { rowData }) => (
              <div className='custom-swicth'>
                <Switch defaultChecked={rowData.activo_res} />
              </div>
            )
          ]
        }
      },
      {
        props: {
          style: {
            width: 50
          }
        },
        cell: {
          formatters: [
            (value, { rowData }) => (
              <div className='option-hide'>
                <div className='option-hide__left'>
                  <a href={`/hoteles/${rowData.id}`} className='btn btn-default fa fw'><i className='lnr lnr-pencil fa-lg fa-fw' /></a>
                  <a href='#' className='btn btn-trash fa fw'><i className='lnr lnr-trash fa-lg fa-fw' /></a>
                </div>
              </div>
            )
          ]
        }
      }
    ]
  }
  getColumnsGal () {
    const sortable = sort.sort({
      getSortingColumns: () => this.state.tableGal.sortingColumns || [],
      onSort: selectedColumn => {
        this.setState({
          tableGal: {
            ...this.state.tableGal,
            sortingColumns: sort.byColumns({
              sortingColumns: this.state.tableGal.sortingColumns,
              selectedColumn
            })
          }
        })
      }
    })
    const sortableHeader = sortHeader(sortable, () => this.state.tableGal.sortingColumns)
    return [
      {
        property: 'nombre_res',
        header: {
          label: 'Galeria:',
          formatters: [sortableHeader]
        }
      },
      {
        property: 'nombre_res',
        props: {
          style: {
            textAlign: 'center'
          }
        },
        header: {
          label: '# Fotos:'
        }
      },
      {
        props: {
          style: {
            width: 50
          }
        },
        cell: {
          formatters: [
            (value, { rowData }) => (
              <div className='option-hide'>
                <div className='option-hide__left'>
                  <a href={`/hoteles/${rowData.id}`} className='btn btn-default fa fw'><i className='lnr lnr-pencil fa-lg fa-fw' /></a>
                  <a href='#' className='btn btn-trash fa fw'><i className='lnr lnr-trash fa-lg fa-fw' /></a>
                </div>
              </div>
            )
          ]
        }
      }
    ]
  }
   // genera Headers de tablas
  componentWillMount () {
    fetch('https://my.api.mockaroo.com/habitaciones.json?key=951599c0')
    .then((response) => {
      return response.json()
    })
    .then((rowsq) => {
      const tableHab = {
        rows: rowsq,
        columns: this.getColumnsHab(),
        pagination: {
          page: 1,
          perPage: 10
        },
        searchColumn: 'all',
        sortingColumns: null,
        query: {}
      }
      this.setState({
        tableHab
      })
    })

    fetch('https://my.api.mockaroo.com/restaurantes.json?key=951599c0')
    .then((response) => {
      return response.json()
    })
    .then((rowsq) => {
      const tableRes = {
        rows: rowsq,
        columns: this.getColumnsRes(),
        pagination: {
          page: 1,
          perPage: 10
        },
        searchColumn: 'all',
        sortingColumns: null,
        query: {}
      }
      const tableBar = {
        rows: rowsq,
        columns: this.getColumnsBar(),
        pagination: {
          page: 1,
          perPage: 10
        },
        searchColumn: 'all',
        sortingColumns: null,
        query: {}
      }
      const tableGal = {
        rows: rowsq,
        columns: this.getColumnsGal(),
        pagination: {
          page: 1,
          perPage: 10
        },
        searchColumn: 'all',
        sortingColumns: null,
        query: {}
      }
      this.setState({
        tableRes, tableBar, tableGal
      })
    })
  }
  handleSubmit (event) {
    event.preventDefault()
  }
  formChange (event) {
    // console.log(this.refs.textInput)// REF para el Button
  }
  agregarVideoModal () {
    return (
      <form onSubmit={this.handleSubmit} onChange={this.formChange}>
        <InputForm name='video_iframe' required placeholder='Iframe del Video' />
        <div className='form__button'>
          <button ref='textInput' type='submit' className='form__button__ok btn btn-default btn--lg'>Aceptar</button>
        </div>
      </form>
    )
  }
  render () {
    const {tableHab, tableRes, tableBar, tableGal} = this.state
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
                  <form className='form' onSubmit={this.handleSubmit} onChange={this.formChange}>
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
                            <InputFile type='image/jpeg' />
                          </div>
                          <div className='col-xs-6 col-sm-4 col-md-3'>
                            <InputFile type='application/pdf' />
                          </div>
                          <div className='col-xs-12 col-sm-4 col-md-6'>
                            <div className='select select__border'>
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
                        <InputForm name='esp-algo' required placeholder='Nombre del Hotel' />
                      </div>
                      <div className='col-xs-12 col-sm-6 col-md-4 col-xl-4'>
                        <InputForm name='esp-algo' required placeholder='Frase 1' />
                      </div>
                      <div className='col-xs-12 col-sm-6 col-md-4 col-xl-4'>
                        <InputForm name='esp-algo' required placeholder='Frase 2' />
                      </div>
                      <div className='col-xs-12 col-sm-6 col-md-4 col-xl-4'>
                        <InputForm name='esp-algo' required placeholder='Frase 3' />
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
                          <InputForm name='video_iframe' required placeholder='Agregar Iframe del Video' />
                          {/* <button className='btn btn-default no-margin'><span className='fa ion-android-add fa-fw fa-lg' /></button> */}
                          <MyModal component={this.agregarVideoModal()} title='Agregar Video' />
                        </div>
                      </div>
                      <div className='col-xs-12'>
                        <ul className='videoList'>
                          <li className='videoList__item'>
                            <span className='videoList__item__text'>Nombre del Item</span><button className='btn btn-trash no-margin'><span className='fa lnr lnr-trash fa-fw fa-lg' /></button>
                          </li>
                          <li className='videoList__item'>
                            <span className='videoList__item__text'>Nombre del Item</span><button className='btn btn-trash no-margin'><span className='fa lnr lnr-trash fa-fw fa-lg' /></button>
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
                        <MyEditor />
                      </div>
                    </div>
                    <div className='form__button'>
                      <button ref='textInput' type='submit' className='form__button__ok btn btn-default btn--lg'>Aceptar</button>
                    </div>
                  </form>
                </TabPane>
                <TabPane tab='Facilidades' key='2'>
                  <form className='form'>
                    <div className='sectionDivider'>
                      <div className='sectionDivider__text'>
                        <h2>Facilidades</h2>
                      </div>
                    </div>
                    <div className='facilidades'>
                      <div className='row bottom-xs'>
                        <div className='col-xs-12 col-sm-6 col-md-6 col-lg-4'>
                          <div className='facilidades__item'>
                            <span>Nombre de la facilidad</span>
                            <div className='checkbox'>
                              <input type='checkbox' id='max' />
                              <label htmlFor='max' />
                            </div>
                          </div>
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-6 col-lg-4'>
                          <div className='facilidades__item'>
                            <span>Nombre de la facilidad</span>
                            <div className='checkbox'>
                              <input type='checkbox' id='2' />
                              <label htmlFor='2' />
                            </div>
                          </div>
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-6 col-lg-4'>
                          <div className='facilidades__item'>
                            <span>Nombre de la facilidad</span>
                            <div className='checkbox'>
                              <input type='checkbox' id='3' />
                              <label htmlFor='3' />
                            </div>
                          </div>
                        </div>
                        <div className='col-xs-12 col-sm-6 col-md-6 col-lg-4'>
                          <div className='facilidades__item'>
                            <span>Nombre de la facilidad</span>
                            <div className='checkbox'>
                              <input type='checkbox' id='4' />
                              <label htmlFor='4' />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className='form__button'>
                      <button ref='textInput' type='submit' className='form__button__ok btn btn-default btn--lg'>Aceptar</button>
                    </div> */}
                  </form>
                </TabPane>
                <TabPane tab='Habitaciones' key='3' forceRender>
                  {/* <MyTable rows={tableHab.rows} columns={tableHab.columns} query={tableHab.query} pagination={tableHab.pagination} sortingColumns={tableHab.sortingColumns} /> */}
                </TabPane>
                <TabPane tab='Restaurantes' key='4' forceRender>
                  {/* <MyTable rows={tableRes.rows} columns={tableRes.columns} query={tableRes.query} pagination={tableRes.pagination} sortingColumns={tableRes.sortingColumns} /> */}
                </TabPane>
                <TabPane tab='Bares' key='5' forceRender>
                  {/* <MyTable rows={tableBar.rows} columns={tableBar.columns} query={tableBar.query} pagination={tableBar.pagination} sortingColumns={tableBar.sortingColumns} /> */}
                </TabPane>
                <TabPane tab='Galeria' key='6' forceRender>
                  {/* <MyTable rows={tableGal.rows} columns={tableGal.columns} query={tableGal.query} pagination={tableGal.pagination} sortingColumns={tableGal.sortingColumns} /> */}
                </TabPane>
                <TabPane tab='SEO' key='7'>
                  <form className='form' onSubmit={this.handleSubmit} onChange={this.formChange}>
                    <div className='row'>
                      <div className='col-xs-12'>
                        <div className='sectionDivider'>
                          <div className='sectionDivider__text'>
                            <h2>Titulo de la seccion</h2>
                          </div>
                        </div>
                        <div className='row bottom-xs'>
                          <div className='col-xs-6 col-sm-3 center-xs'>
                            <div className='checkbox checkbox-seo'>
                              <input type='checkbox' id='mexico' />
                              <label htmlFor='mexico' />
                              <span className='checkbox__label'>México</span>
                            </div>
                          </div>
                          <div className='col-xs-6 col-sm-3 center-xs'>
                            <div className='checkbox checkbox-seo'>
                              <input type='checkbox' id='brazil' />
                              <label htmlFor='brazil' />
                              <span className='checkbox__label'>Brazil</span>
                            </div>
                          </div>
                          <div className='col-xs-6 col-sm-3 center-xs'>
                            <div className='checkbox checkbox-seo'>
                              <input type='checkbox' id='usa' />
                              <label htmlFor='usa' />
                              <span className='checkbox__label'>USA</span>
                            </div>
                          </div>
                          <div className='col-xs-6 col-sm-3 center-xs'>
                            <div className='checkbox checkbox-seo'>
                              <input type='checkbox' id='latam' />
                              <label htmlFor='latam' />
                              <span className='checkbox__label'>LATAM</span>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-xs-12'>
                        <div className='sectionDivider'>
                          <div className='sectionDivider__text'>
                            <h2>Titulo de la seccion</h2>
                          </div>
                        </div>
                        <div className='row bottom-xs'>
                          <div className='col-xs-12'><InputForm placeholder='Titulo' name='seotitle' /></div>
                        </div>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-xs-12'>
                        <div className='sectionDivider'>
                          <div className='sectionDivider__text'>
                            <h2>Titulo de la seccion</h2>
                          </div>
                        </div>
                        <div className='row bottom-xs' >
                          <div className='col-xs-12'>
                            <EditableTagGroup keywords={['hola', 'changos']} />
                          </div>
                        </div>
                      </div>
                      <div className='col-xs-12'>
                        <div className='sectionDivider'>
                          <div className='sectionDivider__text'>
                            <h2>Titulo de la seccion</h2>
                          </div>
                        </div>
                        <div className='row bottom-xs' >
                          <div className='col-xs-12'>
                            <textarea className='textarea' name='' id='' cols='30' rows='10' />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='form__button'>
                      <button ref='textInput' type='submit' className='form__button__ok btn btn-default btn--lg'>Aceptar</button>
                    </div>
                  </form>
                </TabPane>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
function sortHeader (sortable, getSortingColumns) {
  return (value, { columnIndex }) => {
    return (
      <div style={{display: 'inline', position: 'relative'}}>
        <span className='value'>{value}</span>
        {/* label de la columna o columas */}
        {React.createElement(
          'span',
          sortable(
            value,
            {
              columnIndex
            },
            {
              className: 'sort-arrow',
              style: { position: 'absolute', top: '2px', left: '100%', width: '10px', height: '10px', marginLeft: '5px' }
            }
          )
        )}
      </div>
    )
  }
}
export default EditarHotel
