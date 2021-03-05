import * as React from 'react';
import * as ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },

    flex: {
        display: 'flex',
        justifyContent: 'center',
        alignitems: 'center',
    },

    dialogText: {
        padding: '2rem',
    }
}));

function SimpleDialog(props) {
    const { onClose, open } = props;

    const handleClose = () => {
        onClose();
    };

    const classes = useStyles();

    return (
        <Dialog onClose={handleClose} aria-labelledby="hello-world-dialog" open={open}>
            <p className={classes.dialogText}>Hello World, from Daniel Clancy</p>
        </Dialog>
    );
}

SimpleDialog.propTypes = {
    open: PropTypes.bool.isRequired,
}

export default function App() {
    const [open, setOpen] = React.useState(false);
    
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const classes = useStyles();

    return (
        <div className={classes.flex}>
            <Button variant="contained" color="primary" onClick={handleClickOpen}>Click me</Button>
            <SimpleDialog open={open} onClose={handleClose} />
        </div>
        
    );
}

ReactDOM.render(<App />, document.querySelector('#app'));
