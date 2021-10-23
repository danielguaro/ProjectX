import React, { useState } from 'react'
import { DataGrid } from '@material-ui/data-grid'
import { Dialog, TextField } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import { Button as Btn } from '@material-ui/core'
import { Button } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Axios from 'axios'
import columns from './colums'

const Sells = () => {
  const [editTotalValue, setEditTotalValue] = useState(0)
  const [editIdProduct, setEditIdProduct] = useState(0)
  const [editQuantity, setEditQuantity] = useState(0)
  const [editUnitValue, setEditUnitValue] = useState(0)
  const [editSellDate, setEditSellDate] = useState('')
  const [editIdClient, setEditIdClient] = useState(0)
  const [editClientName, setEditClientName] = useState('')
  const [editSeller, setEditSeller] = useState('')
  const [id, setId] = useState(0)
  const [modalEdit, setModalEdit] = useState(false)
  const [modalDelete, setModalDelete] = useState(false)
  const [sellList, setSellList] = useState([])

  const getSells = () => {
    Axios.get('https://sdascension-server.herokuapp.com/sell').then((res) => {
      setSellList(res.data)
    })
  }

  const openModalEdit = () => {
    setModalEdit(true)
  }

  const closeModalEdit = () => {
    setModalEdit(false)
  }

  const closeModalDelete = () => {
    setModalDelete(false)
  }

  const openModalDelete = () => {
    setModalDelete(true)
  }

  const modifySell = () => {
    Axios.put('https://sdascension-server.herokuapp.com/sell', {
      totalValue: editTotalValue,
      idProduct: editIdProduct,
      quantity: editQuantity,
      unitValue: editUnitValue,
      sellDate: editSellDate,
      idClient: editIdClient,
      clientName: editClientName,
      seller: editSeller,
      id: id,
    }).then(() => {
      setSellList(
        sellList.map((val) => {
          return val.id == id
            ? {
                id: val.id,
                totalValue: editTotalValue,
                idProduct: editIdProduct,
                quantity: editQuantity,
                unitValue: editUnitValue,
                sellDate: editSellDate,
                idClient: editIdClient,
                clientName: editClientName,
                seller: editSeller,
              }
            : val
        })
      )
    })
    setModalEdit(false)
  }

  const deleteSell = () => {
    Axios.delete(`https://sdascension-server.herokuapp.com/sell/${id}`).then(
      (res) => {
        setSellList(
          sellList.filter((val) => {
            return val.id != id
          })
        )
      }
    )
    setModalDelete(false)
  }

  return (
    <div className='main_container'>
      <h1>Sells Administration</h1>
      <div style={{ height: 500, width: '100%' }}>
        <Button color='primary' onClick={getSells} className='main-btn'>
          Show sells
        </Button>
        <Btn
          startIcon={<EditIcon style={{ height: 15 }} />}
          variant='contained'
          color='secondary'
          onClick={openModalEdit}
          className='main-btn'
          style={{ fontSize: 12, padding: 8 }}
        >
          Modify Sell
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
          rows={sellList}
          style={{ fontSize: 15, color: 'hsl(212, 33%, 89%)' }}
          columns={columns}
          pageSize={6}
          rowsPerPageOptions={[6]}
        />

        <Dialog
          open={modalEdit}
          onClose={closeModalEdit}
          className='main_modal'
        >
          <form>
            <h1>Sells</h1>
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
              label='Total Value'
              variant='filled'
              required
              value={editTotalValue}
              onChange={(e) => setEditTotalValue(e.target.value)}
            />
            <TextField
              className='text-field'
              label='ID Product'
              variant='filled'
              required
              value={editIdProduct}
              onChange={(e) => setEditIdProduct(e.target.value)}
            />
            <TextField
              className='text-field'
              label='Quantity'
              variant='filled'
              required
              value={editQuantity}
              onChange={(e) => setEditQuantity(e.target.value)}
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
              label='Sell Date'
              variant='filled'
              required
              value={editSellDate}
              onChange={(e) => setEditSellDate(e.target.value)}
            />
            <TextField
              className='text-field'
              label='Document'
              variant='filled'
              required
              value={editIdClient}
              onChange={(e) => setEditIdClient(e.target.value)}
            />
            <TextField
              className='text-field'
              label='Client Name'
              variant='filled'
              required
              value={editClientName}
              onChange={(e) => setEditClientName(e.target.value)}
            />
            <TextField
              className='text-field'
              label='Seller'
              variant='filled'
              required
              value={editSeller}
              onChange={(e) => setEditSeller(e.target.value)}
            />
            <Button
              type='submit'
              color='primary'
              onClick={() => {
                modifySell(id)
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
                  deleteSell(id)
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

export default Sells
