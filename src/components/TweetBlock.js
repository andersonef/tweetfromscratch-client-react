import React from 'react'

export default class TweetBlock extends React.Component {

    constructor(props) {
        super(props)
        this.state = props
    }

    render() {

        const blockStyle = {
            marginTop: '5px',
            backgroundColor: '#DDD'
        }

        return (
        <div className="row" style={blockStyle}>
            <div className="col-12">
                {this.state.tweet.message}
            </div>
            <div className="col-12 text-right">
                <strong>Author: {this.state.tweet.user.name}</strong>
            </div>
        </div>
        )
    }
}