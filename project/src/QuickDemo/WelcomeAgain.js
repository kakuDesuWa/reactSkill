import React from "react"

class WelcomeAgain extends React.Component {
    render() {
        return <h1>Hello, {this.props.name} again!</h1>;
    }
}

export default WelcomeAgain