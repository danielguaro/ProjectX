import React, { useState } from 'react'
import { DataGrid } from '@material-ui/data-grid'
import { Dialog, TextField } from '@material-ui/core'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import { Button as Btn } from '@material-ui/core'
import { Button } from 'reactstrap'
import headers from './headers'
import Axios from 'axios'

const Products = () => {
  const [productList, setProductList] = useState([])
  const [modalEdit, setModalEdit] = useState(false)
  const [modalDelete, setModalDelete] = useState(false)
  const [editProductName, setEditProductName] = useState('')
  const [editDescription, setEditDescription] = useState('')
  const [editUnitValue, setEditUnitValue] = useState(0)
  const [editState, setEditState] = useState('')
  const [id, setId] = useState(0)

  const modifyProduct = () => {
    Axios.put('http://localhost:3010/update', {
      productName: editProductName,
      description: editDescription,
      unitValue: editUnitValue,
      state: editState,
      id: id,
    }).then(() => {
      setProductList(
        productList.map((val) => {
          return val.id == id
            ? {
                id: val.id,
                productName: editProductName,
                description: editDescription,
                unitValue: editUnitValue,
                state: editState,
              }
            : val
        })
      )
    })
    setModalEdit(false)
  }

  const deleteProduct = () => {
    Axios.delete(`http://localhost:3010/delete/${id}`).then((res) => {
      setProductList(
        productList.filter((val) => {
          return val.id != id
        })
      )
    })
    setModalDelete(false)
  }

  const getProducts = () => {
    Axios.get('http://localhost:3010/product').then((res) => {
      setProductList(res.data)
    })
  }

  const closeModalEdit = () => {
    setModalEdit(false)
  }

  const openModalEdit = () => {
    setModalEdit(true)
  }

  const closeModalDelete = () => {
    setModalDelete(false)
  }

  const openModalDelete = () => {
    setModalDelete(true)
  }

  return (
    <div className='main_container'>
      <h1>Products Administration</h1>
      <div style={{ height: 500, width: '100%' }}>
        <Button
          color='primary'
          onClick={getProducts}
          className='main-btn'
          style={{ fontSize: 15 }}
        >
          Show Products
        </Button>
        <Btn
          startIcon={<EditIcon style={{ height: 15 }} />}
          variant='contained'
          color='secondary'
          onClick={openModalEdit}
          className='main-btn'
          style={{ fontSize: 12, padding: 8 }}
        >
          Edit Users
        </Btn>
        <Btn
          startIcon={<DeleteIcon style={{ height: 15 }} />}
          variant='contained'
          color='secondary'
          onClick={openModalDelete}
          className='main-btn'
          style={{ fontSize: 12, padding: 8 }}
        >
          Delete
        </Btn>
        <DataGrid
          className='main_table'
          rows={productList}
          style={{ fontSize: 15, color: 'hsl(212, 33%, 89%)' }}
          columns={headers}
          pageSize={7}
          rowsPerPageOptions={[7]}
        />

        <Dialog
          open={modalEdit}
          onClose={closeModalEdit}
          className='main_modal'
        >
          <form className='main_modal'>
            <h1>Products</h1>
            <TextField
              className='text-field'
              label='ID'
              variant='filled'
              required
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <TextField
              className='text-field'
              label='Product Name'
              variant='filled'
              required
              value={editProductName}
              onChange={(e) => setEditProductName(e.target.value)}
            />
            <TextField
              className='text-field'
              label='Description'
              variant='filled'
              required
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
            />
            <TextField
              className='text-field'
              label='Unit Value'
              variant='filled'
              required
              value={editUnitValue}
              onChange={(e) => setEditUnitValue(e.target.value)}
            />
            <TextField
              className='text-field'
              label='State'
              variant='filled'
              required
              value={editState}
              onChange={(e) => setEditState(e.target.value)}
            />
            <div>
              <Button
                color='primary'
                onClick={() => {
                  modifyProduct(id)
                }}
                className='modal-btn'
              >
                Accept
              </Button>
              <Button
                color='danger'
                onClick={closeModalEdit}
                className='modal-btn'
              >
                Cancel
              </Button>
            </div>
          </form>
        </Dialog>

        <Dialog
          open={modalDelete}
          onClose={closeModalDelete}
          className='main_modal'
        >
          <form>
            <TextField
              className='text-field'
              label='ID'
              variant='filled'
              required
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <div>
              <Button
                color='primary'
                onClick={() => {
                  deleteProduct(id)
                }}
                className='modal-btn'
              >
                Delete User
              </Button>
              <Button
                color='danger'
                onClick={closeModalDelete}
                className='modal-btn'
              >
                Cancel
              </Button>
            </div>
          </form>
        </Dialog>
      </div>
    </div>
  )
}
export default Products
