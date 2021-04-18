import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Edit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            class: '',
            email: '',
            id: ''
        }
    }

    componentDidMount() {
        var id = localStorage.getItem("id");
        this.setState({
            id: id
        })
        let formData = new FormData;
        formData.append('id', id);
        // console.log(obj)
        axios.post('http://localhost/react-php/getDataToUpdateAPI.php', formData)
            .then(res => {
                // console.log(res.data);
                this.setState({
                    name: res.data[0].name,
                    class: res.data[0].class,
                    email: res.data[0].email
                });
            })

    }

    handle = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    update = (e) => {
        e.preventDefault();
        let formData = new FormData;
        formData.append('name', this.state.name);
        formData.append('email', this.state.email);
        formData.append('class', this.state.class);
        formData.append('id', this.state.id);
        axios.post('http://localhost/react-php/updateAPI.php', formData)
            .then((res) => {
                alert(res.data);
            });
    }
    render() {
        return (

            <div className="container">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 bg-light shadow p-4 mt-3 rounded">
                        <div className="mt-4">
                            <h4>Edit User</h4>
                            <form onSubmit={this.update}>
                                <div className="form-group">
                                    <label>First Name:</label>
                                    <input type="text" name="name" className="form-control"
                                        value={this.state.name}
                                        onChange={this.handle} />
                                </div>
                                <div className="form-group">
                                    <label>Email:</label>
                                    <input type="text" name="email" className="form-control"
                                        value={this.state.email}
                                        onChange={this.handle} />
                                </div>
                                <div className="form-group">
                                    <label>Class:</label>
                                    <input type="text" name="class" className="form-control"
                                        value={this.state.class}
                                        onChange={this.handle} />
                                </div>
                                <div className="form-group">
                                    <input type="submit" value="Submit" className="btn btn-primary" />
                                    <Link to="/view"><button className="btn btn-warning m-1">Cancle</button></Link>
                                </div>
                            </form>
                        </div>

                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        )
    }
}
