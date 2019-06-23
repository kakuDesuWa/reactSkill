import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
        width: '80%',
        marginLeft: theme.spacing(10),
    },
    paper: {
        marginTop: theme.spacing(3),
        width: '100%',
        overflowX: 'auto',
        marginBottom: theme.spacing(2),
    },
    table: {
        // minWidth: 650,
    },
});

class UserInfo extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Paper className={classes.sectionRight}>
                    <Table className={classes.table} size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>数据项</TableCell>
                                <TableCell align="right">数据值</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.props.userInfo.map(row => (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row">{row.info}</TableCell>
                                    <TableCell align="right">{row.value}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        )
    }
}

export default withStyles(styles)(UserInfo)