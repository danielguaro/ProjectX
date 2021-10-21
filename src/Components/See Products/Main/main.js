import React, { useState } from 'react'
import { DataGrid } from '@material-ui/data-grid'
import { Dialog, TextField } from '@material-ui/core'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'reactstrap'
import headers from './headers'
import Axios from 'axios'
import { withRouter } from 'react-router'

const Products = () => {
  const [productName, setProductName] = useState('')
  const [description, setDescription] = useState('')
  const [unitValue, setUnitValue] = useState(0)
  const [state, setState] = useState('')
  const [productList, setProductList] = useState([])
  const [modalState, setModalState] = useState(false)

  const addProduct = () => {
    Axios.post('http://localhost:3003/product', {
      productName: productName,
      description: description,
      unitValue: unitValue,
      state: state,
    }).then(() => {
      setProductList([
        ...productList,
        {
          productName: productName,
          description: description,
          unitValue: unitValue,
          state: state,
        },
      ])
    })
    setModalState(false)
    window.location.reload(false)
  }

  const getProducts = () => {
    Axios.get('http://localhost:3003/product').then((res) => {
      setProductList(res.data)
    })
  }

  const closeModal = () => {
    setModalState(false)
  }

  const openModal = () => {
    setModalState(true)
  }

  return (
    <>
      <div className='main_container'>
        <center>
          <h1>Products Information</h1>
        </center>
        <div style={{ height: 500, width: '100%' }}>
          <Button
            color='primary'
            onClick={getProducts}
            className='main-btn'
            style={{ display: 'table-column', padding: 6 }}
          >
            Show Products
          </Button>
          <Button color='success' onClick={openModal} className='main-btn'>
            Add Products
          </Button>
          <DataGrid
            className='main_table'
            rows={productList}
            style={{ fontSize: 15, color: 'hsl(212, 33%, 89%)' }}
            columns={headers}
            pageSize={7}
            rowsPerPageOptions={[7]}
          />

          <Dialog open={modalState} onClose={closeModal} className='main_modal'>
            <form className='main_modal'>
              <h1>Products</h1>
              <TextField
                className='text-field'
                label='Product Name'
                variant='filled'
                required
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
              <TextField
                className='text-field'
                label='Description'
                variant='filled'
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <TextField
                className='text-field'
                label='Unit Value'
                variant='filled'
                required
                value={unitValue}
                onChange={(e) => setUnitValue(e.target.value)}
              />
              <TextField
                className='text-field'
                label='State'
                variant='filled'
                required
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
              <div>
                <Button
                  color='primary'
                  onClick={addProduct}
                  className='modal-btn'
                >
                  Accept
                </Button>
                <Button
                  color='danger'
                  onClick={closeModal}
                  className='modal-btn'
                >
                  Cancel
                </Button>
              </div>
            </form>
          </Dialog>
        </div>
      </div>
    </>
  )
}
export default withRouter(Products)
