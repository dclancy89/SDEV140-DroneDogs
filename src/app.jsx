import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import logo from './assets/images/DroneDog.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },

    logo: {
        maxWidth: '250px',
    },

    title: {
        color: 'crimson',
    },

    flexCenter: {
        display: 'flex',
        justifyContent: 'center',
    },

    flexAround: {
        display: 'flex',
        justifyContent: 'space-around',
    }

}));


export default function App() {
    
    const classes = useStyles();

    return (
        <div>
            
            <Grid container spacing={4} className={classes.flexCenter}>
                <Grid item xs={6}>
                    <Typography variant="h3" className={classes.title}>DroneDogs Order Form</Typography>
                </Grid>
                <Grid item xs={6}>
                    <img src={logo} className={classes.logo} alt="Drone Dog Alternative" />
                </Grid>
                <Grid item xs={8}>
                    <TextField id="numBeefDogs" label="# Beef Dogs" variant="outlined" />
                </Grid>
                <Grid item xs={8}>
                    <TextField id="numPorkDogs" label="# Pork Dogs" variant="outlined" />
                </Grid>
                <Grid item xs={8}>
                    <TextField id="numTurkeyDogs" label="# Turkey Dogs" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary">Calculate Order</Button>
                    <Button variant="contained" color="primary">Submit Order</Button>
                    <Button variant="contained" color="primary">Exit</Button>
                </Grid>
                <Grid item xs={8}>
                    <TextField id="subtotal" label="Subtotal" variant="outlined" disabled />
                </Grid>
                <Grid item xs={8}>
                    <TextField id="tax" label="Sales Tax" variant="outlined" disabled />
                </Grid>
                <Grid item xs={8}>
                    <TextField id="totalCost" label="Total Cost" variant="outlined" disabled />
                </Grid>
            </Grid>
        </div>
        
    );
}

ReactDOM.render(<App />, document.querySelector('#app'));
