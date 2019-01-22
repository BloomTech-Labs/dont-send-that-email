import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './sideBar.css'

export default class Sidebar extends Component {
    render() {
        return(
            <div className='sideBar'>
                <Link to='/'>
                    <button>
                        <strong>Home</strong>
                    </button>
                </Link>
                <Link to='/billing'>
                    <button>
                        <strong>Billing</strong>
                    </button>
                </Link>
                <Link to='settings'>
                    <button>
                        <strong>Settings</strong>
                    </button>
                </Link>
            </div>
        )
    }
}
