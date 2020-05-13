import React from 'react'
import Login from './Login'
import Api from '../services/Api'
import Timeline from './Timeline'

export default class Home extends React.Component {
    
    api = new Api()

    constructor(props) {
        super(props)
        this.api.listenAuth(this)
        this.state = {
            isLogged: (this.api.getAccessToken())
        }
    }

    render() {

        return (
            (this.state.isLogged) ? <Timeline></Timeline> : <Login></Login>
        )
    }
}