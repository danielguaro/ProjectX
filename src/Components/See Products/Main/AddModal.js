import { Dialog, TextField } from '@material-ui/core'
import { Button } from 'reactstrap'
import React, { useState } from 'react'

const AddModal = ({ open, close, product }) => {
  const [productName, setProductName] = useState(product.productName)
  const [description, setDescription] = useState(product.description)
  const [unitValue, setUnitValue] = useState(product.unitValue)
  const [state, setState] = useState(product.state)

  const save = (e) => {
    e.preventDefault()
    fetch('http://localhost:3010/products', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        Id: product.id,
        ProductName: productName,
        Description: description,
        UnitValue: unitValue,
        State: state,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        window.alert('Are you sure?')
        close()
      })
      .catch(function (error) {
        window.alert(`Error adding a product [${error}]`)
      })
  }

  return (
    <Dialog open={open} onClose={close}>
      <form onSubmit={save}>
        <TextField
          label='Product Name'
          variant='filled'
          required
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <TextField
          label='Description'
          variant='filled'
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <TextField
          label='Unit Value'
          variant='filled'
          required
          value={unitValue}
          onChange={(e) => setUnitValue(e.target.value)}
        />
        <TextField
          label='State'
          variant='filled'
          required
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <div>
          <Button
            variant='contained'
            type='submit'
            color='primary'
            onClick={save}
          >
            Accept
          </Button>
          <Button variant='contained' onClick={close}>
            Cancel
          </Button>
        </div>
      </form>
    </Dialog>
  )
}

export default AddModal
