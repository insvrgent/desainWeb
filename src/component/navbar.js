import React from 'react'
import {Link} from 'react-router-dom'

export default class Navbar extends React.Component{
    render(){
        return(
            <div className='container'>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link Active" aria-current='/page' to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/gallery'>Gallery</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/cart'>Cart</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/about'>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/contact'>Contact</Link>
                        </li>
                        </ul>
                    </div>
                    </nav>
            </div>
        )
    }
}