import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost',
    headers: { 'Content-Type': 'application/json' }
})

class MyBatton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'kaku'
        };
    }

    handleClick = (e) => {
        instance.get(
            '/user/kaku',
        ).then(function (response) {
            // handle success
            console.log(response.data.user);
        })
    }

    render() {
        return (
            <Button variant="contained" color="primary" onClick={this.handleClick}>
                Hello World
            </Button>
        )
    }
}

function buttonDemo() {
    ReactDOM.render(
        <MyBatton />,
        document.getElementById('root')
    )
}

export default buttonDemo