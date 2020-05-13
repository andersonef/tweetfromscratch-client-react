import React from 'react'
import Api from '../services/Api'
import { Redirect } from 'react-router-dom'

export default class Register extends React.Component {

    api = new Api()

    constructor(props) {
        super(props)
        this.state = {
            isLogged: (this.api.getAccessToken())
        }
    }

    render() {
        const onSubmitForm = async (e) => {
            e.preventDefault()
            try {
                await this.api.request('POST', '/register', this.state)
                const auth = await this.api.request('POST', '/auth', this.state)
                this.api.setAccessToken(auth.data.access_token)
                this.setState({
                    ...this.state,
                    isLogged: true
                })
            } catch (e) {
                alert('ERRO: ' + e)
            }
        }

        return (
            (this.state && this.state.isLogged) 
            ? <Redirect to="/" /> 
            : <div className="row">
                <div className="col-6 offset-3">
                    <h1>Register a new user!</h1>

                    <form className="form" onSubmit={onSubmitForm}>
                        <div className="form-group">
                            <label className="control-label">Your name</label>
                            <input required type="text" className="form-control" onChange={(e) => this.setState({...this.state, name: e.target.value})} />
                        </div>
                        <div className="form-group">
                            <label className="control-label">Your email</label>
                            <input required type="email" className="form-control" onChange={(e) => this.setState({...this.state, email: e.target.value})} />
                        </div>
                        <div className="form-group">
                            <label className="control-label">Your password</label>
                            <input required type="password" className="form-control" onChange={(e) => this.setState({...this.state, password: e.target.value})} />
                        </div>
                        <div className="form-group text-right">
                            <button className="btn btn-primary" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div> 
        )
    }
}