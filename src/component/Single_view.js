import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Single_view extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            class: '',
            email: ''
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
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 bg-light shadow p-4 mt-3 rounded">
                        <div className="mt-4">
                            <h4>View Specific User</h4>
                            <form onSubmit={this.update}>
                                <div className="form-group">
                                    <label>First Name:</label>
                                    <input type="text" disabled name="name" className="form-control bg-white"
                                        value={this.state.name} />
                                </div>
                                <div className="form-group">
                                    <label>Email:</label>
                                    <input type="text" disabled name="email" className="form-control bg-white"
                                        value={this.state.email} />
                                </div>
                                <div className="form-group">
                                    <label>Class:</label>
                                    <input type="text" disabled name="class" className="form-control bg-white"
                                        value={this.state.class}
                                    />
                                </div>
                                <div className="form-group">
                                    <Link to="/view"><button className="btn btn-warning m-1">Go Back</button></Link>
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
