import React, { useState } from 'react'
import { DataGrid } from '@material-ui/data-grid'
import { Dialog, TextField } from '@material-ui/core'
import { Button } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Axios from 'axios'
import columns from './colums'
import './index.css'

const Sells = () => {
  const [totalValue, setTotalValue] = useState(0)
  const [idProduct, setIdProduct] = useState(0)
  const [quantity, setQuantity] = useState(0)
  const [unitValue, setUnitValue] = useState(0)
  const [sellDate, setSellDate] = useState('')
  const [idClient, setIdClient] = useState(0)
  const [clientName, setClientName] = useState('')
  const [seller, setSeller] = useState('')

  const [sellList, setSellList] = useState([])
  const [modalState, setModalState] = useState(false)

  const getSells = () => {
    Axios.get('https://sdascension-server.herokuapp.com/sell').then((res) => {
      setSellList(res.data)
    })
  }

  const addSells = () => {
    Axios.post('https://sdascension-server.herokuapp.com/sell', {
      totalValue: totalValue,
      idProduct: idProduct,
      quantity: quantity,
      unitValue: unitValue,
      sellDate: sellDate,
      idClient: idClient,
      clientName: clientName,
      seller: seller,
    }).then(() => {
      setSellList([
        ...sellList,
        {
          totalValue: totalValue,
          idProduct: idProduct,
          quantity: quantity,
          unitValue: unitValue,
          sellDate: sellDate,
          idClient: idClient,
          clientName: clientName,
          seller: seller,
        },
      ])
    })
    setModalState(false)
  }

  const openModal = () => {
    setModalState(true)
  }

  const closeModal = () => {
    setModalState(false)
  }

  return (
    <>
      <div className='main_container'>
        <h1>Sells Information</h1>
        <div style={{ height: 500, width: '100%' }}>
          <Button color='primary' onClick={getSells} className='main-btn'>
            Show sells
          </Button>
          <Button color='success' onClick={openModal} className='main-btn'>
            Add Sells
          </Button>
          <DataGrid
            className='main_table'
            rows={sellList}
            style={{ fontSize: 15, color: 'hsl(212, 33%, 89%)' }}
            columns={columns}
            pageSize={6}
            rowsPerPageOptions={[6]}
          />
        </div>

        <Dialog open={modalState} onClose={closeModal} className='main_modal'>
          <form>
            <h1>Sells</h1>
            <TextField
              className='text-field'
              label='Total Value'
              variant='filled'
              required
              value={totalValue}
              onChange={(e) => setTotalValue(e.target.value)}
            />
            <TextField
              className='text-field'
              label='ID Product'
              variant='filled'
              required
              value={idProduct}
              onChange={(e) => setIdProduct(e.target.value)}
            />
            <TextField
              className='text-field'
              label='Quantity'
              variant='filled'
              required
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
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
              label='Sell Date'
              variant='filled'
              required
              value={sellDate}
              onChange={(e) => setSellDate(e.target.value)}
            />
            <TextField
              className='text-field'
              label='Document'
              variant='filled'
              required
              value={idClient}
              onChange={(e) => setIdClient(e.target.value)}
            />
            <TextField
              className='text-field'
              label='Client Name'
              variant='filled'
              required
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
            />
            <TextField
              className='text-field'
              label='Seller'
              variant='filled'
              required
              value={seller}
              onChange={(e) => setSeller(e.target.value)}
            />
            <Button
              type='submit'
              color='primary'
              onClick={addSells}
              className='modal-btn'
            >
              Accept
            </Button>
            <Button color='danger' onClick={closeModal} className='modal-btn'>
              Cancel
            </Button>
          </form>
        </Dialog>
      </div>
    </>
  )
}

export default Sells
