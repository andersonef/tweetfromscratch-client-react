import React from 'react'
import Api from '../services/Api'
import TweetBlock from './TweetBlock'
import Events from '../Events'

export default class TweetList extends React.Component {

    api = new Api()

    constructor(props) {
        super(props)
        this.state = {
            list: []
        }

        Events.on('tweet_list_update', () => {
            this.api.request('GET', '/timeline').then((response) => {
                this.setState({
                    list: response.data
                })
            }).catch((error) => {
                alert(error)
            })
        })
        Events.trigger('tweet_list_update')
    }

    render() {

        return (this.state.list)
            ? this.state.list.map((tweet) => <TweetBlock tweet={tweet}></TweetBlock>)
            : <div className="row"><div className="col-12"><h3>No tweets yet.</h3></div></div>
    }
}