import React, { Component } from 'react'
import ErrorNotification from './errorNotification'


class Facts extends Component {
    render() {
        try {
            return (
                <div className="text-center" >
                    <h2>Daily cat facts!</h2>
                    {this.props.loading ? (
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    ) : (
                            <div>
                                <div>{this.props.data.map(fact =>
                                    <p key={fact._id}>{fact.text}
                                        <a id='a' href={this.props.baseUrl + fact._id}>({this.props.baseUrl + fact._id})
                                        </a>
                                    </p>
                                )}</div>
                            </div>
                        )}
                </div>
            );
        } catch (e) {
            console.log(e)
            return (<ErrorNotification message={`An error occured ${e}`}></ErrorNotification>)
        }
    }
}

export default Facts;