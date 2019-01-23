import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './sideBar.css'

export default class Sidebar extends Component {
    render() {
        return(
            <div className='sideBar'>
             
                <Link to='/'>
                  <div className='homeBtn'> 
                    <button>
                        <strong>Home</strong>
                    </button>
                  </div>
                </Link>
                <Link to='/billing'>
                  <div className='billingBtn'>
                    <button>
                        <strong>Billing</strong>
                    </button>
                  </div>
                </Link>
                <Link to='settings'>
                   <div className='settingBtn'>
                    <button>
                        <strong>Settings</strong>
                    </button>
                    </div>
                
                </Link>
                
            </div>
        )
    }
}
