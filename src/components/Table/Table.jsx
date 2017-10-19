import React, { Component } from 'react'
import * as Table from 'reactabular-table'
import InputForm from '../forms/input'
import * as search from 'searchtabular'
import * as sort from 'sortabular'
import Paginator from './Paginator'
import paginate from './paginate'
import { compose } from 'redux'
import {
  cloneDeep, orderBy
} from 'lodash'

class MyTable extends React.Component {
  constructor (props) {
    super(props)
    console.log(props)
    this.state = {
      rows: [],
      columns: [],
      sortingColumns: null,
      searchColumn: 'all',
      pagination: {
        page: null,
        perPage: null
      },
      query: {}
    }
    this.onSelect = this.onSelect.bind(this)
    this.onColumnChange = this.onColumnChange.bind(this)
    this.onSearch = this.onSearch.bind(this)
    this.onToggleColumn = this.onToggleColumn.bind(this)
  }
  componentWillReceiveProps (nextProps) {
    let { rows, columns, pagination, query, sortingColumns, searchColumn } = nextProps
    this.setState({ rows, columns, pagination, query, sortingColumns, searchColumn })
  }
  // metodos Tablas
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
  onColumnChange (searchColumn) {
    this.setState({
      searchColumn: searchColumn
    })
  }
  onSearch (query) {
    this.setState({
      query: query
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
  render () {
    let { columns, rows, pagination, query, sortingColumns, searchColumn } = this.state
    const paginated = compose(
      paginate(pagination),
      sort.sorter({ columns: columns, sortingColumns, sort: orderBy }),
      search.multipleColumns({ columns: columns, query })
    )(rows)
    return (
      <div>
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
              }}
                  />
          </div>
        </div>
        <Table.Provider
          className='table-custom'
          columns={columns}>
          <Table.Header />
          <Table.Body rows={paginated.rows} rowKey='id' />
        </Table.Provider>
        <div className='paginator'>
          <Paginator
            pagination={pagination}
            pages={paginated.amount}
            onSelect={this.onSelect} />
        </div>
      </div>
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
export default MyTable
