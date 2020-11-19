import React, { useState, useEffect } from 'react';
import { Navbar, NavbarText } from 'reactstrap';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Login from '../Login/Login'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { checkUser } from '../../Redux/Actions/auth'
import Sell from './Sell.js';
import Signin from './Signin';
import { getAllProducts } from "../../Redux/Actions/Product";
import { useHistory } from 'react-router-dom';
import LOGOIMAGE from '../images/Logo.png';



function Header(props) {

  const { checkUser, getAllProducts } = props
  const history = useHistory()

  useEffect(() => {
    checkUser()
    getAllProducts()
  }, [])

  const [isOpen, setIsOpen] = useState(false);
  const [searchField, setSearchField] = useState('');

  const toggle = () => setIsOpen(!isOpen);

  const searchProduct = () => {
    if (searchField !== '') {
      history.push(`/search/${searchField}`)
    }
  }

  console.log(props.currentUser, "Header Cuuuent USEr")
  return (
    <>
      <Login toggle={toggle} modal={isOpen} />
     

      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/"><a className="navbar-brand" href="#"><img className="xkimg1" width="45" src={LOGOIMAGE} alt="" /></a></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <input className="xkinput1" type="search" placeholder="Search city, area or locality" />
                <svg width={22} height={31} viewBox="0 0 16 16" className="bi bi-search xksvg1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
                  <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                </svg>
              </li>
              <li className="nav-item">
                <input className="xkinput2" type="search" placeholder="Find Cars, Mobile Phones and more..." />
                <button className="btn xkheadbtn12345" type="submit"><svg width="22" height="31" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
                  <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                </svg></button>
              </li>

              <div >
                {Object.keys(props.currentUser).length > 0 ? <Signin /> : <div className='d-flex'><span className='xkheadbtn1 ' onClick={toggle}>Login</span>
                
                  <Sell toggle={toggle} modal={isOpen} />
                </div>}
              </div>


            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    checkUser: () => dispatch(checkUser()),
    getAllProducts: () => dispatch(getAllProducts()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)