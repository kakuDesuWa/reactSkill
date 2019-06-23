import React from 'react'
import ReactDOM from 'react-dom'

import Layout from './Layout'

function render() {
    ReactDOM.render(
        <Layout />,
        document.getElementById('root')
    )
}

export {
    render,
}