import React from 'react';
import { Link } from 'react-router-dom';
import './Master.css';

const Master = () => {
    return (
      <div className = "container">
            <nav className = "navbar navbar-default">
                  <div className = "container-fluid">
                        <div className = "">
                              <a className = "navbar-brand" href = "#">AppDividend</a>
                        </div>
                        <ul className = "nav navbar-nav">
                        <div className="navbar-header">
                              <li className = "active"><a href = "#">Home</a></li>
                              <li><a href = "#">Page 1</a></li>
                              <li><a href = "#">Page 2</a></li>
                              <li><a href = "#">Page 3</a></li>
                              <Link to="/add-item">Add Item</Link>
                        </div>
                        </ul>
                  </div>
            </nav>
            {/* <div>{this.props.children}</div> */}
      </div>
    )
}


export default Master;