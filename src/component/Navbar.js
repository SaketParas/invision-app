import React, { Component } from 'react';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import PieChartIcon from '@material-ui/icons/PieChart';
import WidgetsIcon from '@material-ui/icons/Widgets';
import ExtensionIcon from '@material-ui/icons/Extension';
import SearchIcon from '@material-ui/icons/Search';

class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="nav">
                    <div className="topNav text-light d-flex justify-content-around">
                        <div></div>
                        <div>
                            <img src="https://cdn.worldvectorlogo.com/logos/invision.svg" className="logoImg" />
                        </div>
                        <div><WidgetsIcon />CHANNELS</div>
                        <div className="text-white-50"><BookmarkIcon />BOOKMARKS</div>
                        <div className="text-white-50"><PieChartIcon />OVERVIEW</div>
                        <div className="text-white-50"><ExtensionIcon />WIDGETS</div>
                        <div></div>
                        <div></div>
                        <div>
                            <span>
                                <SearchIcon />
                            </span>
                            <span>
                                <img src="https://www.xing.com/image/7_0_a_8b3e07c17_15962515_3/lea-schneider-foto.1024x1024.jpg" className="leaImg mx-3" />
                            </span>
                            <span className="h5 mt-4">Lea Schneider</span>
                        </div>
                        <div></div>
                    </div>
                </div>
                <div className="navbar d-flex justify-content-around bg-light">
                    <div></div>
                    <div></div>
                    <div className="text-primary">Trending</div>
                    <div>For You</div>
                    <div>Cooking</div>
                    <div>Nature</div>
                    <div>Science</div>
                    <div>Travel</div>
                    <div>Climate</div>
                    <div>Music</div>
                    <div>People</div>
                    <div></div>
                    <div className="line"></div>
                    <div></div>
                    <button className="button font-weight-bold btn btn-outline-secondary">Explore</button>
                    <div></div>
                </div>
            </div>
        )
    }
}

export default Navbar
