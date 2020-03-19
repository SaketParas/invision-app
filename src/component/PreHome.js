import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PreHome extends Component {
    render() {
        return (
            <div>
                <div>
                    <div class="card text-center mt-5">
                        <div class="card-header">

                        </div>
                        <div class="card-body">
                            <Link to="/Home" class="btn btn-outline-success mt-3 ml-5">Home</Link>
                            <Link to="/Explore" class="btn btn-outline-success mt-3 ml-5">Explore</Link>
                            <Link to="/Timeline" class="btn btn-outline-success mt-3 ml-5">Timeline</Link>
                        </div>
                        <div class="card-footer text-muted">

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default PreHome
