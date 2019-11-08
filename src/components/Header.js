import React, { Component } from 'react';
import './../style/style.css'

class Header extends Component {
    state = {

    }


    render() {
        return (
            <div>
                <nav className='navbar navbar-expand-lg sticky-top navbar-light bg-light'>
                    <a className='navbar-brand' href='asdf'>tunaiku</a>
                    <button className='navbar-toggler' type='button' data-toggle='collapse'
                        data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false'
                        aria-label='toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>

                    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                        <ul className='navbar-nav ml-auto'>
                            {/* first dropdown menu */}
                            <li className='nav-item dropdown mx-2'>
                                
                                    
                                        <a className='dropdown-toggle d-flex align-content-md-center' href='asdfg' id='dropdownMenuButton' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'> produk </a>
                                        <div className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
                                            <h5 className='dropdowntag'>nasabah</h5>
                                            <a className='dropdown-item' href='google.com'> tes1 </a>
                                            <div className='dropdown-divider'></div>
                                            <h5 className='dropdowntag'>bisnis</h5>
                                            <a className='dropdown-item' href='google.com'> tes2 </a>
                                            <a className='dropdown-item' href='google.com'> tes3 </a>  
                                        </div>
                                    
                                
                            </li>
                            <li className='nav-item dropdown mx-2'>
                                
                                        <a className='dropdown-toggle d-flex align-content-md-center' href='asdfg' id='dropdownMenuButton' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'> pusat bantuan </a>
                                        <div className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
                                            <a className='dropdown-item' href='google.com'> tes1 </a>
                                            <a className='dropdown-item' href='google.com'> tes2 </a>
                                        </div>
                                    
                            </li>
                            <li className='nav-item active mx-2'>
                                <a className='d-flex align-content-md-center' href='asdfg'>tentang kami</a>
                            </li>
                            <li className='nav-item active mx-2'>
                                <a className='d-flex align-content-md-center' href='asdfg'>rilis media</a>
                            </li>
                            <li className='nav-item active mx-auto'>
                                <a className='btnLogin d-flex align-content-md-center' href='masuk akun'>
                                    masuk akun
                                </a>
                            </li>

                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;