import { DataGrid } from '@material-ui/data-grid'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import { Button as Btn } from '@material-ui/core'
import { Dialog, TextField } from '@material-ui/core'
import { Button } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Axios from 'axios'
import React, { useState } from 'react'
import './table.css'

const Users = () => {
  // Variables
  const [name, setName] = useState('')
  const [rol, setRol] = useState('')
  const [userState, setUserState] = useState('')
  const [id, setId] = useState(0)
  const [editName, setEditName] = useState('')
  const [editRol, setEditRol] = useState('')
  const [editUserState, setEditUserState] = useState('')
  const [modal, setModal] = useState(false)
  const [modalEdit, setModalEdit] = useState(false)
  const [modalDelete, setModalDelete] = useState(false)
  const [userList, setUsersList] = useState([])

  const insertUsers = () => {
    Axios.post('http://localhost:3002/user', {
      name: name,
      rol: rol,
      userState: userState,
    }).then(() => {
      setUsersList([
        ...userList,
        {
          name: name,
          rol: rol,
          userState: userState,
        },
      ])
    })
    setModal(false)
  }

  const modifyUsers = () => {
    Axios.put('http://localhost:3002/user', {
      name: editName,
      rol: editRol,
      userState: editUserState,
      id: id,
    }).then(() => {
      setUsersList(
        userList.map((val) => {
          return val.id == id
            ? {
                id: val.id,
                name: editName,
                rol: editRol,
                userState: editUserState,
              }
            : val
        })
      )
    })
    setModalEdit(false)
  }

  const deleteUsers = () => {
    Axios.delete(`http://localhost:3002/user/${id}`).then((res) => {
      setUsersList(
        userList.filter((val) => {
          return val.id != id
        })
      )
    })

    setModalDelete(false)
  }

  const getUsers = () => {
    Axios.get('http://localhost:3002/user').then((res) => {
      setUsersList(res.data)
    })
  }

  const closeModal = () => {
    setModal(false)
  }

  const openModal = () => {
    setModal(true)
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

  const headers = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'Name', width: 300 },
    { field: 'rol', headerName: 'Rol', width: 300 },
    { field: 'userState', headerName: 'State', width: 200 },
  ]

  return (
    <div className='main_container'>
      <h1>Users</h1>
      <div style={{ height: 500, width: '100%' }}>
        <Button
          color='primary'
          onClick={getUsers}
          className='main-btn'
          style={{ fontSize: 15 }}
        >
          Show Users
        </Button>
        <Button
          color='success'
          onClick={openModal}
          className='main-btn'
          style={{ fontSize: 15 }}
        >
          Add Users
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
          rows={userList}
          style={{ fontSize: 15, color: 'hsl(212, 33%, 89%)' }}
          columns={headers}
          columnBuffer={8}
          pageSize={7}
        />

        <Dialog open={modal} onClose={closeModal} className='main_modal'>
          <form>
            <h1>Users</h1>
            <TextField
              className='text-field'
              selectedRowData
              label='Name'
              variant='filled'
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              className='text-field'
              label='Rol'
              variant='filled'
              required
              value={rol}
              onChange={(e) => setRol(e.target.value)}
            />
            <TextField
              className='text-field'
              label='State'
              variant='filled'
              required
              value={userState}
              onChange={(e) => setUserState(e.target.value)}
            />
            <div>
              <Button
                type='submit'
                color='success'
                onClick={insertUsers}
                className='modal-btn'
              >
                Add User
              </Button>
              <Button color='danger' onClick={closeModal} className='modal-btn'>
                Cancel
              </Button>
            </div>
          </form>
        </Dialog>

        <Dialog
          open={modalEdit}
          onClose={closeModalEdit}
          className='main_modal'
        >
          <form>
            <h1>Users</h1>
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
              label='Name'
              variant='filled'
              required
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
            />
            <TextField
              className='text-field'
              label='Rol'
              variant='filled'
              required
              value={editRol}
              onChange={(e) => setEditRol(e.target.value)}
            />
            <TextField
              className='text-field'
              label='State'
              variant='filled'
              required
              value={editUserState}
              onChange={(e) => setEditUserState(e.target.value)}
            />
            <div>
              <Button
                color='primary'
                onClick={() => {
                  modifyUsers(id)
                }}
                className='modal-btn'
              >
                Modify User
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
                  deleteUsers(id)
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

export default Users
