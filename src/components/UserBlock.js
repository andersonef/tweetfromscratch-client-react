import React from 'react'

export default class UserBlock extends React.Component {

    constructor(props) {
        super(props)
        this.state = props.user
        console.log('inicializando userblock: ', props)
    }

    render() {

        const blockStyle = {
            backgroundColor: '#DDD',
            margin: '5px'
        }
        const pictureStyle = {
            backgroundColor: '#333',
            minHeight: '50px',
            margin: '3px',
            color: 'white'
        }
        return (
            <div className="row">
                <div className="col" style={blockStyle}>
                    <div className="row">
                        <div className="col-1" style={pictureStyle}>(picture)</div>
                        <div className="col-11">
                            <div className="form-group">
                                <label class="control-label">User Name: </label>
                                {this.state.name}
                            </div>
                            <div className="form-group">
                                <label class="control-label">User Email: </label>
                                {this.state.email}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}