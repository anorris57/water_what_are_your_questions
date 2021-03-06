import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { clearCurrentProfile } from '../../actions/profileActions';
import "./Navbar.css";
class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/feed">
            Post Feed
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <a
            href="null"
            onClick={this.onLogoutClick.bind(this)}
            className="nav-link"
          >
          <img
              className="rounded-circle"
              src={user.avatar}
              alt={user.name}
              style={{ width: '25px', marginRight: '5px' }}
              title="You must have a Gravatar connected to your email to display an image"
            />{' '}
            Logout
            </a>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/register" style={{color: 'rgb(23, 36, 206)'}}>
            Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login" style={{color: 'rgb(23, 36, 206)'}}>
            Login
          </Link>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-sm navbar-dark  mb-4">
    <div className="container">
      <Link className="navbar-brand" to="/landing" style={{color: 'rgb(23, 36, 206)'}}>Member Page</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="mobile-nav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/profiles" style={{color: 'rgb(23, 36, 206)'}}> 
            {''}
            Profiles
            </Link>
          </li>
        </ul>
        {isAuthenticated ? authLinks : guestLinks}
        
        <a href="/">Home</a>
        <a href="/Liquid">Liquid State</a>
        <a href="/Solid">Solid State</a>
        <a href="/Gaseous">Gaseous State</a>
      </div>
    </div>
  </nav>
      
      
    )
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser,clearCurrentProfile })(Navbar);