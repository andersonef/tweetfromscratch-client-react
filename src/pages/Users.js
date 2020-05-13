import React from 'react'
import Api from '../services/Api'
import UserBlock from '../components/UserBlock'

export default class Users extends React.Component {

    api = new Api()

    constructor(props) {
        super(props)
        this.api.request('GET', '/users').then((response) => {
            this.setState({users: response.data})
            console.log(response.data)
        })
        this.state = {
            users: []
        }
    }

    render() {
        return this.state.users.map((user) => <UserBlock key={user.id} user={user} />)
    }
}