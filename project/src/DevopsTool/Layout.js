import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';

import RefLink from './Linker'
import SearchTool from './Search'
import Process from './Process'
import UserInfo from './UserInfo'

const styles = theme => ({
    root: {
        backgroundColor: '#282c34',
        height: '102vh',
        paddingTop: theme.spacing.unit * 1,
        paddingBottom: theme.spacing.unit * 30,

    },
    title: {
        marginTop: theme.spacing.unit * 10,
        marginBottom: theme.spacing.unit * 2,
        textAlign: 'center',
        color: 'white',
        height: 'auto',
        paddingBottom: theme.spacing.unit * 2,
    },
    search: {
        marginTop: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.primary,
        paddingTop: theme.spacing.unit * 2,
        height: 'auto',
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 'auto',
            marginLeft: theme.spacing.unit * 30,
            marginRight: theme.spacing.unit * 30,
        }
    },
    foot: {
        textAlign: 'right',
        color: theme.palette.text.primary,
        height: 'auto',
        marginTop: theme.spacing.unit * 30
    },
    sectionRight: {
        width: 'auto',
        // marginLeft: theme.spacing.unit * 3,
        // marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 500,
            marginLeft: 'auto',
        }
    },
    sectionLeft: {
        width: 'auto',
    },
});

class Layout extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            userInfo: [
                {
                    id: 1,
                    info: 'user_id',
                    value: 0,
                },
                {
                    id: 2,
                    info: 'ib.customer_id',
                    value: 0,
                },
                {
                    id: 3,
                    info: 'bs.customer_id',
                    value: 0,
                },
                {
                    id: 4,
                    info: 'phone',
                    value: 15111877887,
                },
                {
                    id: 5,
                    info: 'email',
                    value: 'scugjs@gmail.com',
                },
            ],
            process: [
                {
                    process: 'signup',
                    code: '101101',
                    times: '1',
                }
            ],
        }
    }

    catchResponse = (response) => {
        console.log(response.data)
        this.setState(
            {
                userInfo: response.data.userInfo,
                process: response.data.process,
            }
        )
    }

    render() {
        const { classes } = this.props
        return (
            <React.Fragment>
                <CssBaseline />
                <Grid container spacing={3} className={classes.root}>
                    <Grid item xs={12} sm={12} className={classes.title}>
                        <Typography variant="h4">AMS 验证码/用户信息 查询工具</Typography>
                    </Grid>

                    <Grid item xs={12} sm={12} className={classes.search} catchResponse={this.catchResponse}>
                        <SearchTool catchResponse={this.catchResponse} />
                    </Grid>

                    <Grid item xs='auto' sm={6} className={classes.sectionLeft}>
                        <Process process={this.state.process} />
                    </Grid>

                    <Grid item xs='auto' sm={6} className={classes.sectionRight}>
                        <UserInfo userInfo={this.state.userInfo} />
                    </Grid>

                    <Grid item xs={12} sm={12} className={classes.foot}>
                        <RefLink color='white' />
                    </Grid>
                </Grid>
            </React.Fragment >
        );
    }
}


export default withStyles(styles)(Layout)