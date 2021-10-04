import React from 'react'
import './index.css'
import data from './data'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from 'reactstrap'

class Ventas extends React.Component {
  state = {
    data: data,
    modalUpdate: false,
    modalInsert: false,
    form: {
      id: '',
      valorTotal: '',
      idProducto: '',
      cantidad: '',
      precio: '',
      fechaVenta: '',
      idDocumento: '',
      cliente: '',
      vendedor: '',
    },
  }

  showInsertModal = () => {
    this.setState({
      modalInsert: true,
    })
  }

  closeInsertModal = () => {
    this.setState({ modalInsert: false })
  }

  insert = () => {
    var newValue = { ...this.state.form }
    newValue.id = this.state.data.length + 1
    var list = this.state.data
    list.push(newValue)
    this.setState({ modalInsert: false, data: list })
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    })
  }

  render() {
    return (
      <>
        <div className='main__container'>
          <div className='container'>
            <h1 className='main-title'>Sells Administration</h1>
            <table className='main-table'>
              <Button color='success' onClick={() => this.showInsertModal()}>
                Insert
              </Button>
              <thead className='table_head'>
                <tr>
                  <th id='table_id'>Id Sell</th>
                  <th>Total</th>
                  <th>Id Produdct</th>
                  <th>Quantity</th>
                  <th>Unit Price</th>
                  <th>Sale Date</th>
                  <th>Document</th>
                  <th>Client</th>
                  <th>Seller</th>
                </tr>
              </thead>
              <tbody className='table_body'>
                {this.state.data.map((dato) => (
                  <tr key={dato.id}>
                    <td id='row_id'>{dato.id}</td>
                    <td>{dato.valorTotal}</td>
                    <td>{dato.idProducto}</td>
                    <td>{dato.cantidad}</td>
                    <td>{dato.precio}</td>
                    <td>{dato.fechaVenta}</td>
                    <td>{dato.idDocumento}</td>
                    <td>{dato.cliente}</td>
                    <td>{dato.vendedor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <Modal isOpen={this.state.modalInsert}>
          <ModalHeader>
            <div>
              <h3>Insert Product</h3>
            </div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>Id Sell:</label>

              <input
                className='form-control'
                readOnly
                type='text'
                value={this.state.data.length + 1}
              />
            </FormGroup>

            <FormGroup>
              <label>Total Value:</label>
              <input
                className='form-control'
                name='valorTotal'
                type='text'
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>Id Product:</label>
              <input
                className='form-control'
                name='idProducto'
                type='text'
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>Quantity:</label>
              <input
                className='form-control'
                name='cantidad'
                type='text'
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>Unit Price:</label>
              <input
                className='form-control'
                name='precio'
                type='text'
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>Sale Date:</label>
              <input
                className='form-control'
                name='fechaVenta'
                type='text'
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>Document:</label>
              <input
                className='form-control'
                name='idDocumento'
                type='text'
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>Client:</label>
              <input
                className='form-control'
                name='cliente'
                type='text'
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>Seller:</label>
              <input
                className='form-control'
                name='vendedor'
                type='text'
                onChange={this.handleChange}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button color='primary' onClick={() => this.insert()}>
              Insert
            </Button>
            <Button
              className='btn btn-danger'
              onClick={() => this.closeInsertModal()}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </>
    )
  }
}
export default Ventas
