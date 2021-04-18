import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';

export default class View extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] }

    }
    componentDidMount() {
        axios.get('http://localhost/react-php/readAPI.php')
            .then(res => {
                this.setState({ data: res.data });
                // console.log(res.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    Delete = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('id', e.target.value);
        let url = "http://localhost/react-php/deleteAPI.php";

        axios.post(url, formData).then((res) => {
            axios.get('http://localhost/react-php/readAPI.php')
                .then(res => {
                    this.setState({ data: res.data });
                    console.log(this.state.data);
                })
                .catch(function (error) {
                    console.log(error);
                })
            this.setState({
                res: res.data
            });
        }
        ).catch((err) => {
            // console.log(err);
            this.setState({
                res: err
            });
        }
        );
    }

    edit = (e) => {
        localStorage.setItem("id", e.target.value);
        // alert(e.target.value);
    }

    render() {
        return (
            <>
                <div>
                    <h3 className="text-center">User List</h3>

                    <table className="table table-striped">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">SN.</th>
                                <th scope="col">Name</th>
                                <th scope="col">Class</th>
                                <th scope="col">Email</th>
                                <th scope="col" className="text-center">Action</th>

                            </tr>
                        </thead>
                        <tbody>

                            {
                                this.state.data.map((ele, i) => {
                                    return (
                                        <tr>
                                            <td>{i + 1}</td>
                                            <td>{ele.name}</td>
                                            <td>{ele.class}</td>
                                            <td>{ele.email}</td>
                                            <td className="text-center"><Link to="/edit" className="btn btn-success m-1" style={{ margin: '0', padding: '0' }}><button style={{ margin: '0' }} className="btn btn-success" value={ele.id} onClick={this.edit}>Edit</button></Link>

                                                <Link to="/single_view"><button className="btn m-0 p-0" value={ele.id} onClick={this.single_view}><button style={{ margin: '0' }} className="btn btn-warning" value={ele.id} onClick={this.edit}>View</button></button></Link>

                                                <button className="btn btn-danger m-1" onClick={this.Delete} value={ele.id}>Delete</button></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>

            </>
        )
    }
}
