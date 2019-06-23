import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import axios from 'axios'

axios.defaults.baseURL = 'https://test-oauth.ihuhoo.com';
axios.defaults.headers.post['Content-Type'] = 'application/json';

const styles = theme => ({
    telcode: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        color: theme.palette.common.white,
    },
    commit: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        color: theme.palette.common.white,
    },
    search: {
        width: 300,
        color: theme.palette.common.white,
    },
    button: {
        marginTop: theme.spacing(2.8),
        backgroundColor: "white",
        borderRadius: 20,
        textTransform: 'none',
        padding: "5px 25px",
        fontSize: "15px"
    },
    rightIcon: {
        marginLeft: theme.spacing(1),
    },
});

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'white',
        },
        '& label.Mui-focused': {
            color: 'white',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'white',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'red',
            },
            '&:hover fieldset': {
                borderColor: 'yellow',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'green',
            },
        },
    },
})(TextField);

class SearchTool extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            grant_type: 'phone',
            username: '',
            tel_code: "86",
        };
    }

    handleChangeTelCode = (e) => {
        this.setState({
            tel_code: e.target.value,
        });
        console.log(JSON.stringify(this.state))
    }

    handleChangeUsername = (e) => {
        var username = e.target.value
        var grant_type = username.includes("@") ? "email" : "phone"

        this.setState({
            username: username,
            grant_type: grant_type,
        });
    }

    handleClick = (e) => {
        axios.post('/develop/tool', this.state)
            .then(this.props.catchResponse)
    }

    render() {
        const { classes } = this.props;
        return (
            <Box>
                <Grid container alignItems="center" justify="center" direction='row'>
                    <Grid item xs={1} sm={1}>
                        <CssTextField
                            id="tel_code"
                            label="tel code"
                            defaultValue="86"
                            className={classes.telcode}
                            InputProps={{ classes: { input: classes.telcode } }}
                            margin="normal"
                            onChange={this.handleChangeTelCode}
                        />
                    </Grid>
                    <Grid item xs={4} sm={4}>
                        <CssTextField
                            id="standard-search"
                            label="email/phone"
                            type="search"
                            className={classes.search}
                            margin="normal"
                            InputProps={{ classes: { input: classes.search } }}
                            onChange={this.handleChangeUsername}
                        />
                    </Grid>
                    <Grid item xs={1} sm={1}>
                        <Button
                            variant="outlined"
                            color='primary'
                            className={classes.button}
                            onClick={this.handleClick}
                        >
                            Query
                        </Button>
                    </Grid>
                </Grid>
            </Box >
        )
    }
}

export default withStyles(styles)(SearchTool)