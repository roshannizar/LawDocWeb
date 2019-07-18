import React, {Component} from 'react';

import './App.css';

class App extends Component {

    render() {
        return(
            <div>
                <div className="navi-top">
                    <div className="navi-top-link left">
                        <form>
                            <input type="text" name="searchbar" className="search-bar" placeholder="Search"/>
                        </form>
                    </div>
                    <div className="navi-top-link right slight-padding">
                        <a href="">Profile</a>
                    </div>
                </div>
                <div className="side-nav">
                    <div className="heading">
                        <label className="topic">LAWDOC</label>
                    </div>
                    <div className="btn-container">
                        <label className="container-heading">SERVICES</label>
                        <div className="btns">
                            <button className="btn">Dashboard</button><br/>
                            <button className="btn">My Documents</button>
                        </div>                       
                    </div>
                </div>
            </div>
        );
    }
}

export default App;