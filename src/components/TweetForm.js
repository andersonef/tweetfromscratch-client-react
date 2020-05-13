import React from 'react'
import Api from '../services/Api'
import Events from '../Events'

export default class TweetForm extends React.Component {

    api = new Api()

    constructor(props) {
        super(props)
        this.state = {
            message: ''
        }
    }

    render() {
        const handleOnSubmit = async (event) => {
            event.preventDefault()
            try {
                await this.api.request('POST', '/new-tweet', this.state)
                this.setState({message: ''})
                Events.trigger('tweet_list_update')
            } catch (error) {
                alert('Could not save your tweet message. Details: ' + error)
            }
        }


        return (
            <div className="col-12">
                <form className="form" onSubmit={ handleOnSubmit }>
                    <div className="form-group">
                        <textarea rows="4" className="form-control" placeholder="What are you thinking?" onChange={(e) => this.setState({message: e.target.value})}></textarea>
                    </div>
                    <div className="form-group text-right">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}