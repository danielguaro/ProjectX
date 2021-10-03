import React from 'react'
import './index.css'
import data from './data'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  Container,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from 'reactstrap'

class Products extends React.Component {
  state = {
    data: data,
    modalUpdate: false,
    modalInsert: false,
    form: {
      id: '',
      productName: '',
      description: '',
      unitValue: '',
      state: '',
    },
  }

  showUpdateModal = (dato) => {
    this.setState({
      form: dato,
      modalUpdate: true,
    })
  }

  closeUpdateModal = () => {
    this.setState({ modalUpdate: false })
  }

  edit = (dato) => {
    var accountant = 0
    var array = this.state.data
    array.map((register) => {
      if (dato.id == register.id) {
        array[accountant].productName = dato.productName
        array[accountant].description = dato.description
        array[accountant].unitValue = dato.unitValue
        array[accountant].state = dato.state
      }
      accountant++
    })
    this.setState({ data: array, modalUpdate: false })
  }

  delete = (dato) => {
    var option = window.confirm(
      'Estás Seguro que deseas Eliminar el elemento ' + dato.id
    )
    if (option == true) {
      var accountant = 0
      var array = this.state.data
      array.map((register) => {
        if (dato.id == register.id) {
          array.splice(accountant, 1)
        }
        accountant++
      })
      this.setState({ data: array, modalUpdate: false })
    }
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
          <Container className='container'>
            <h1 className='main-title'>Product Administration</h1>
            <table className='main-table'>
              <thead className='table_head'>
                <tr>
                  <th id='table_id'>Id</th>
                  <th>Product Name</th>
                  <th>Description</th>
                  <th>Unit Value</th>
                  <th>State</th>
                  <th>Edit</th>
                </tr>
              </thead>
              <tbody className='table_body'>
                {this.state.data.map((dato) => (
                  <tr key={dato.id}>
                    <td id='row_id'>{dato.id}</td>
                    <td>{dato.productName}</td>
                    <td>{dato.description}</td>
                    <td>{dato.unitValue}</td>
                    <td>{dato.state}</td>
                    <td>
                      <Button
                        color='primary'
                        onClick={() => this.showUpdateModal(dato)}
                      >
                        Update
                      </Button>{' '}
                      <Button color='danger' onClick={() => this.delete(dato)}>
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Container>
        </div>

        <Modal isOpen={this.state.modalUpdate}>
          <ModalHeader>
            <div>
              <h3>Edit Regist</h3>
            </div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>Id:</label>

              <input
                className='form-control'
                readOnly
                type='text'
                value={this.state.form.id}
              />
            </FormGroup>

            <FormGroup>
              <label>Product Name:</label>
              <input
                className='form-control'
                name='productName'
                type='text'
                onChange={this.handleChange}
                value={this.state.form.productName}
              />
            </FormGroup>

            <FormGroup>
              <label>Description:</label>
              <input
                className='form-control'
                name='description'
                type='text'
                onChange={this.handleChange}
                value={this.state.form.description}
              />
            </FormGroup>

            <FormGroup>
              <label>Unit Value:</label>
              <input
                className='form-control'
                name='unitValue'
                type='text'
                onChange={this.handleChange}
                value={this.state.form.unitValue}
              />
            </FormGroup>

            <FormGroup>
              <label>State:</label>
              <input
                className='form-control'
                name='state'
                type='text'
                onChange={this.handleChange}
                value={this.state.form.state}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button color='primary' onClick={() => this.edit(this.state.form)}>
              Edit
            </Button>
            <Button color='danger' onClick={() => this.closeUpdateModal()}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </>
    )
  }
}
export default Products
