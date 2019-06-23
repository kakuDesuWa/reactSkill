/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

class RefLink extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Typography variant="body1" color='textPrimary' gutterBottom>Back-end Powered By <Link href="https://golang.org/" target="_blank"> Golang</Link></Typography>
                <Typography variant="body1" color='textPrimary' gutterBottom>Front-end Powerd By <Link href="https://reactjs.org/" target="_blank">ReactJS</Link></Typography>
                <Typography variant="body1" color='textPrimary' gutterBottom>Maintain By<Link href="https://git.tigerbrokers.net/guojiangshuai" target="_blank">Jiangshuai Guo</Link></Typography>
            </div>
        )
    }
}

export default RefLink;