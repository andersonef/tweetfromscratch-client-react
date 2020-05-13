import React from 'react'
import {
    Link
} from 'react-router-dom'
import Api from '../services/Api'
export default class HeaderMenu extends React.Component {

    api = new Api()

    constructor(props) {
        super(props)
        this.api.listenAuth(this)
        this.state = {}
    }

    render() {
        const logout = () => {
            this.api.setAccessToken(null)
        }
        const registerOrLogout = (!this.state.isLogged)
            ? <Link to="/register">Register</Link>
            : <span onClick={logout}>Logout</span>


        const privateButtons = (!this.state.isLogged) ? '' : [
            <li><Link to="/users">Users</Link></li>
        ]

        return (
            <header>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        {privateButtons}
                        <li>{registerOrLogout}</li>
                    </ul>
                </nav>
            </header>
        )
    }
}