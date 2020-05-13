import React from 'react'
import TweetList from '../components/TweetList'
import TweetForm from '../components/TweetForm'
import Api from '../services/Api'

export default class Timeline extends React.Component {

    api = new Api()

    constructor(props) {
        super(props)

        this.state = {
            me: {}
        }
        this.api.request('GET', '/me')
        .then((response) => {
            this.setState({me: response.data})
        })
        .catch((error) => {
            console.log('Could not retrieve logged user information. Details: ', error)
        })
    }

    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <h1>Hi {this.state.me.name}, welcome!</h1>
                </div>

                <TweetForm></TweetForm>

                <div className="col-12">
                    <TweetList></TweetList>
                </div>
            </div>
        )
    }
}