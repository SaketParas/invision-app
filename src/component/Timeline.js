import React, { Component } from 'react';
import Navbar from './Navbar';
import BottomNav from './BottomNav';

class Timeline extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div class="container">
                    <div class="row">
                        <div class="col-3">
                            One of three columns
                           Left
                        </div>
                        <div class="card mz-5">
                            <div class="card-body">
                                <div class="container">
                                    <div class="row">
                                        <div class="col">
                                            Data 2
                                        </div>
                                        <div class="col">
                                            Data 1
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <BottomNav />
            </div>
        )
    }
}
export default Timeline
