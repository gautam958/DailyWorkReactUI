import React, { useState, useEffect } from 'react'
import UserService from '../../../Services/Masters/UserService'
import { Link } from 'react-router-dom';
import MySwal from '../../common/Sweetalert/SweetAlert';

export default function UserHome() {

    const [users, setUsers] = useState(null);

    const deleteUser = async (_id) => {
        console.log('Delete called' + _id);

        const result = await UserService.DeleteUser().Delete(_id);
        if (result.status === 200) {
            let _users = users.slice();
            _users = _users.filter(u => { return u._id !== _id; });
            setUsers(_users.reverse());
        }
        else {
            MySwal.fire(
                'User Delete!',
                result,
                'error'
            )
        }

    }
    async function fetchData() {
        // You can await here
        const result = await UserService.FetchUsers().GetAllUsers();
        if (result.status === 200) {
            setUsers(result.data.reverse());
        }
    }
    useEffect(() => {

        fetchData();

    }, [])

    //console.warn('data :- ', users[0]._id);

    return (
        <div>
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0 text-dark">Users</h1>
                                <Link to="/Users/AddUser" className="btn btn-sm btn-success mb-2">Add User</Link>
                            </div>
                            {/* /.col */}
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item">
                                        <Link to="/Users/">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item active">Users</li>
                                </ol>
                            </div>
                            {/* /.col */}
                        </div>
                        {/* /.row */}
                    </div>
                    {/* /.container-fluid */}
                </div>
                {/* /.content-header */}
                {/* Main content */}
                <section className="content">
                    <div className="container-fluid">
                        <div className="col-md-12">
                            <div className="card card-info">


                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th style={{ width: '18%' }}>User Id</th>
                                            <th style={{ width: '18%' }}>Email</th>
                                            <th style={{ width: '18%' }}>FullName</th>
                                            <th style={{ width: '18%' }}>Contact#</th>
                                            <th style={{ width: '18%' }}>Country</th>
                                            <th style={{ width: '10%' }}></th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {users && users.map(user =>
                                            <tr key={user._id}>
                                                <td>{user.Userid}  </td>
                                                <td>{user.Email}</td>
                                                <td>{user.FullName}</td>
                                                <td>{user.ContactNo}</td>
                                                <td>{user.Country}</td>
                                                <td style={{ whiteSpace: 'nowrap' }}>
                                                    <Link to={`/Users/AddUser/${user._id}`} data={users} className="btn btn-sm btn-primary mr-1">Edit</Link>
                                                    <button onClick={() => deleteUser(user._id)} className="btn btn-sm btn-danger btn-delete-user" disabled={user.isDeleting}>
                                                        {user.isDeleting
                                                            ? <span className="spinner-border spinner-border-sm"></span>
                                                            : <span>Delete</span>
                                                        }
                                                    </button>
                                                </td>
                                            </tr>
                                        )}
                                        {!users &&
                                            <tr>
                                                <td colSpan="6" className="text-center">
                                                    <div className="spinner-border spinner-border-lg align-center"></div>
                                                    Please Wait ...
                                                    {/* {  setTimeout(() => fetchData(), 2000)} */}
                                                </td>
                                            </tr>
                                        }
                                        {users && !users.length &&
                                            <tr>
                                                <td colSpan="6" className="text-center">
                                                    <div className="p-2">No Users To Display</div>
                                                </td>
                                            </tr>
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
