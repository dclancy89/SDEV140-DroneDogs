import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function App() {
    const classes = useStyles();

    return (
        <div>
            <Typography variant="h1">DroneDogs</Typography>
            <form className="{classes.root}" noValidate autoComplete="off">
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField id="outline-basic" label="Beef Hotdogs" variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="outline-basic" label="Pork Hotdogs" variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="outline-basic" label="Chicken Hotdogs" variant="outlined" />
                    </Grid>
                </Grid>
            </form>
        </div>
        
    );
}

ReactDOM.render(<App />, document.querySelector('#app'));
