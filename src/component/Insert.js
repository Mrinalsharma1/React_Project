import React, { Component } from 'react';
import axios from 'axios';

export default class Insert extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            class: '',
            email: ''
        }
    }

    handle = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();

        let formData = new FormData;
        formData.append('name', this.state.name);
        formData.append('email', this.state.email);
        formData.append('class', this.state.class);
        // console.log(obj)
        axios.post('http://localhost/react-php/', formData)
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
                            <h4>Add New User</h4>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label>Name:</label>
                                    <input type="text" className="form-control"
                                        onChange={this.handle} name="name" />
                                </div>
                                <div className="form-group">
                                    <label>Class:</label>
                                    <input type="text" className="form-control"
                                        onChange={this.handle} name="class" />
                                </div>
                                <div className="form-group">
                                    <label>Email:</label>
                                    <input type="email" className="form-control"
                                        name="email"
                                        onChange={this.handle} />
                                </div>
                                <div className="form-group">
                                    <input type="submit" value="Register User" className="btn btn-primary" />
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
