import React, { Component } from 'react'
import { Switch } from 'antd'
import * as Table from 'reactabular-table'
import * as search from 'searchtabular'
import * as sort from 'sortabular'
import Paginator from '../components/Table/Paginator'
import paginate from '../components/Table/paginate'
import InputForm from '../components/forms/input'
import { compose } from 'redux'
import {
  cloneDeep, orderBy
} from 'lodash'
// const RowWrapper = props => <tr {...props} > <span /></tr>
// RowWrapper.shouldComponentUpdate = function (nextProps) {
//   // Perform a custom check now
//   // this.props is available here too
//   return true
// }
class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      rows: [],
      columns: this.getColumns(),
      pagination: {
        page: 1,
        perPage: 10
      },
      searchColumn: 'all',
      sortingColumns: null,
      query: {}
    }
    this.onSelect = this.onSelect.bind(this)
    this.onColumnChange = this.onColumnChange.bind(this)
    this.onSearch = this.onSearch.bind(this)
    this.onToggleColumn = this.onToggleColumn.bind(this)
  }
  // header de las tablas
  getColumns () {
    // const _this = this
    const _this = this
    const sortable = sort.sort({
      getSortingColumns: () => _this.state.sortingColumns || [],
      onSort: selectedColumn => {
        _this.setState({
          sortingColumns: sort.byColumns({
            sortingColumns: _this.state.sortingColumns,
            selectedColumn
          })
        })
      }
    })
    const sortableHeader = sortHeader(sortable, () => this.state.sortingColumns)
    return [
      {
        property: 'first_name',
        header: {
          label: 'first_name',
          formatters: [
            sortableHeader
          ]
        }
      },
      {
        header: {
          label: 'Activo'
        },
        props: {
          style: {
            width: 100
          }
        },
        cell: {
          formatters: [
            (value, { rowData }) => (
              <div className='custom-swicth'>
                <Switch defaultChecked={false} onChange={this.onChange} />
              </div>
            )
          ]
        },
        visible: true
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
                <a href={`/hoteles/${rowData.id}`} className='btn btn-default fa fw'><i className='fa fa-pencil fa-lg fa-fw' /></a>
              </div>
            )
          ]
        },
        visible: true
      }
    ]
  }
  componentWillMount () {
    fetch('https://my.api.mockaroo.com/users.json?key=951599c0')
    .then((response) => {
      return response.json()
    })
    .then((rows) => {
      this.setState({ rows: rows })
    })
  }
  onColumnChange (searchColumn) {
    this.setState({
      searchColumn: searchColumn
    })
  }
  onSearch (query) {
    console.log(this.state.query)
    this.setState({
      query: query
    })
  }
  onSelect (page) {
    const pages = Math.ceil(
      // Numero de paginas
      this.state.rows.length / this.state.pagination.perPage
    )
    this.setState({
      pagination: {
        ...this.state.pagination,
        page: Math.min(Math.max(page, 1), pages)
      }
    })
  }
  onToggleColumn ({ columnIndex }) {
    const columns = cloneDeep(this.state.columns)
    const column = columns[columnIndex]
    column.visible = !column.visible
    const query = cloneDeep(this.state.query)
    delete query[column.property]
    this.setState({ columns, query })
  }
  onChange (checked) {
    console.log(`switch to ${checked}`)
  }
  render () {
    const { searchColumn, columns, rows, query, pagination, sortingColumns } = this.state
    const paginated = compose(
      paginate(pagination),
      sort.sorter({ columns: columns, sortingColumns, sort: orderBy }),
      search.multipleColumns({ columns: columns, query })
    )(rows)
    return (
      <section className='mainContainer'>
        <div className='titleSection'>
          <h1>Listado de Hoteles</h1>
          <a href='#' className='btn btn-default no-margin'>
            <span className='fa ion-android-add fa-fw fa-lg' />
          </a>
        </div>
        <div className='row'>
          <div className='col-xs-12'>
            <div className='search-container'>
              <span className='search-container__label'>
                <i className='fa fa-search fa-fw' />
              </span>
              <div className='search-container__input'>
                <search.Field
                  column={searchColumn}
                  query={query}
                  columns={columns}
                  rows={rows}
                  onColumnChange={this.onColumnChange}
                  onChange={this.onSearch}
                  components={{
                    filter: CustomField,
                    select: CustomSelect,
                    props: {
                      filter: {
                        placeholder: 'Busqueda'
                      },
                      select: {
                        className: 'custom-select'
                      }
                    }
                  }} />
              </div>
            </div>
            <Table.Provider
              className='table-custom'
              columns={columns}
              /* components={{
                body: {
                  row: RowWrapper
                }
              }} */
              >
              <Table.Header />
              <Table.Body
                rows={paginated.rows}
                rowKey='id'
                // puedo agregar funciones a cada Row
                /* onRow={(row, { rowIndex }) => {
                  return {
                    className: 'hola'
                  }
                }
                } */
              />
            </Table.Provider>
            <div className='paginator'>
              <Paginator
                pagination={pagination}
                pages={paginated.amount}
                onSelect={this.onSelect} />
            </div>
          </div>
        </div>
      </section>
    )
  }
}
const CustomField = props => (<InputForm name='buscar' {...props} className='CustomField' />)
// const CustomField = props => <input {...props} />
const CustomSelect = ({ options, onChange }) => (
  <div>
    {<input type='hidden' className='controlled-field' onChange={onChange} defaultValue='all' />}
  </div>
)
function sortHeader (sortable, getSortingColumns) {
  return (value, { columnIndex }) => {
    return (
      <div style={{ display: 'inline', position: 'relative' }}>
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
export default Home
