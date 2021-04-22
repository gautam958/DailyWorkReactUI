import React, { useState, useEffect } from 'react'
import UserService from '../../services/UserService'


export default function UserHome() {

    const [users, setUsers] = useState(null);

    const deleteUser = (id) => {
        console.log('Delete called' + id);
    }
    useEffect(() => {

        async function fetchData() {
            // You can await here
            const response = await UserService.FetchUsers().GetAllUsers().then(x => setUsers(x.data));
            //  console.warn('all user data :- ', response.data);
            //setUsers({ users: response.data });

        }
        fetchData();



    }, [])


    //console.warn('data :- ', users);

    return (
        <div>
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0 text-dark">Users</h1>
                                <a href="/users/UserForm" className="btn btn-sm btn-success mb-2">Add User</a>
                            </div>
                            {/* /.col */}
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item">
                                        <a href="#">Home</a>
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
                                            <tr key={user.userid}>
                                                <td>{user.userid}  </td>
                                                <td>{user.email}</td>
                                                <td>{user.fullName}</td>
                                                <td>{user.contactNo}</td>
                                                <td>{user.country}</td>
                                                <td style={{ whiteSpace: 'nowrap' }}>
                                                    <a href={`/users/edit/${user.userid}`} className="btn btn-sm btn-primary mr-1">Edit</a>
                                                    <button onClick={() => deleteUser(user.userid)} className="btn btn-sm btn-danger btn-delete-user" disabled={user.isDeleting}>
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
                                                <td colSpan="4" className="text-center">
                                                    <div className="spinner-border spinner-border-lg align-center"></div>
                                                </td>
                                            </tr>
                                        }
                                        {users && !users.length &&
                                            <tr>
                                                <td colSpan="4" className="text-center">
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
