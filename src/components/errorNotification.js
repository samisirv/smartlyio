import React, {Component} from 'react'

class ErrorNotification extends Component {
    render() {
        console.log(this.props.message)

      if (this.props.message === null) {
        return null
      }
      else {
  
        return (
          <div className="error">
            {this.props.message}
          </div>
        )
      }
    }
  }

export default ErrorNotification;