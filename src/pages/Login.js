import React from 'react'
import Api from '../services/Api'

export default class Login extends React.Component {

    api = new Api()

    constructor(props) {
        super(props)
        this.state = {
            user: {
                email: '',
                password: ''
            }
        }
    }

    async onSubmitForm(event) {
        event.preventDefault()

        try {
            console.log('vou postar user: ', this.state.user)
            const response = await this.api.request('POST', '/auth', {
                email: this.state.user.email,
                password: this.state.user.password
            })
            this.api.setAccessToken(response.data.access_token)
        } catch (e) {
            alert(e.message)
        }
        return false
    }

    render() {

        const formStyle = {
            width: '20vw',
            margin: '0 auto'
        }

        const updateUser = (user) => {
            this.setState({
                ...this.state,
                user: {
                    email: user.email || this.state.user.email,
                    password: user.password || this.state.user.password
                }
            })
        }

        return (
            <div>
                <h1>Welcome to my Twitter from scratch!</h1>
                <h2>Login</h2>
                <form style={formStyle} className="form" onSubmit={(e) => this.onSubmitForm(e)}>
                    <div className="form-group">
                        <label className="control-label">Email:</label>
                        <input className="form-control" type="text" onChange={(e) => {updateUser({email: e.target.value})}} />
                    </div>
                    <div className="form-group">
                        <label className="control-label">Password:</label>
                        <input className="form-control" type="password" onChange={(e) => {updateUser({password: e.target.value})}} />
                    </div>
                    <div className="form-group text-right">
                        <button type="submit" className="btn btn-primary">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}