import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useState, useCallback } from 'react';
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
    },

    marginRight: {
        marginRight: '15px',
    }

}));

const DBL_SALES_TAX_RATE = 0.07;
const DBL_DOG_PRICE = 1.99;


export default function App() {
    const [numBeefDogs, setNumBeefDogs] = useState(0);
    const [numPorkDogs, setNumPorkDogs] = useState(0);
    const [numTurkeyDogs, setNumTurkeyDogs] = useState(0);
    const [subTotal, setSubTotal] = useState(0);
    const [salesTax, setSalesTax] = useState(0);
    const [totalCost, setTotalCost] = useState(0);
    
    const classes = useStyles();

    const calculateTotal = useCallback(() => {
        let intNumTotalDogs = parseInt(numBeefDogs) + parseInt(numPorkDogs) + parseInt(numTurkeyDogs);
        let dblSubTotal = intNumTotalDogs * DBL_DOG_PRICE;
        setSubTotal(dblSubTotal);

        let dblSalesTax = dblSubTotal * DBL_SALES_TAX_RATE;
        setSalesTax(dblSalesTax.toFixed(2));

        let dblTotalCost = dblSubTotal + dblSalesTax;
        setTotalCost(dblTotalCost.toFixed(2));
    }, [numBeefDogs, numPorkDogs, numTurkeyDogs]);

    const closeApp = useCallback(() => {
        window.close();
    });

    const submitOrder = useCallback(() => {
        alert("Order submitted!");
    });

    return (
        <div>
            
            <Grid container spacing={4} className={classes.flexCenter}>
                <Grid item xs={6}>
                    <Typography variant="h3" className={classes.title}>DroneDogs Order Form</Typography>
                </Grid>
                <Grid item xs={6}>
                    <img src={logo} className={classes.logo} alt="Drone Dog Alternative" />
                </Grid>
                <Grid item xs={7}>
                    <TextField id="numBeefDogs" label="# Beef Dogs" variant="outlined" onChange={e => setNumBeefDogs(e.target.value)}/>
                </Grid>
                <Grid item xs={7}>
                    <TextField id="numPorkDogs" label="# Pork Dogs" variant="outlined" onChange={e => setNumPorkDogs(e.target.value)} />
                </Grid>
                <Grid item xs={7}>
                    <TextField id="numTurkeyDogs" label="# Turkey Dogs" variant="outlined" onChange={e => setNumTurkeyDogs(e.target.value)} />
                </Grid>
                <Grid item xs={9}>
                    <Button className={classes.marginRight} variant="contained" color="primary" onClick={calculateTotal}>Calculate Order</Button>
                    <Button className={classes.marginRight} variant="contained" color="primary" onClick={submitOrder}>Submit Order</Button>
                    <Button className={classes.marginRight} variant="contained" color="primary" onClick={closeApp}>Exit</Button>
                </Grid>
                <Grid item xs={7}>
                    <TextField id="subtotal" label="Subtotal" variant="outlined" value={"$" + subTotal} onChange={e => setSubTotal(e.target.value)} />
                </Grid>
                <Grid item xs={7}>
                    <TextField id="tax" label="Sales Tax" variant="outlined" value={"$" + salesTax} onChange={e => setSalesTax(e.target.value)} />
                </Grid>
                <Grid item xs={7}>
                    <TextField id="totalCost" label="Total Cost" variant="outlined" value={"$" + totalCost} onChange={e => setTotalCost(e.target.value)} />
                </Grid>
            </Grid>
        </div>
        
    );
}

ReactDOM.render(<App />, document.querySelector('#app'));
