import Snackbar from '@material-ui/core/Snackbar';
import makeStyles from '@material-ui/core/styles/makeStyles';
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
    container: {
        margin: 10,
        maxWidth: '90%',
        padding: 10,
        overflow: 'hidden',
        wordWrap: 'break-word',
        minWidth: '300px',
        [theme.breakpoints.up('sm')]: {
            minWidth: '500px',
        },
    },
    message: {
        wordWrap: 'break-word',
        display: 'flex',
        flexWrap: 'wrap',
    },
    anchorLink: {
        '& a': {
            textDecoration: 'underline',
            color: '#0645AD',
        },
    },
}));

function Alert(props) {
    const styles = useStyles();
    return <MuiAlert elevation={6} classes={{ root: styles.container, message: styles.message }} variant="standard" {...props} />;
}

const Toast = ({
    open, message, setOpen, variant = 'info', autoHideDuration = 3000, htmlMessage = null,
}) => {
    const classes = useStyles();
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            open={open}
            autoHideDuration={autoHideDuration}
            onClose={handleClose}
        >
            <Alert onClose={handleClose} severity={variant}>
                {message}
                {htmlMessage && <div className={classes.anchorLink} dangerouslySetInnerHTML={{ __html: htmlMessage }} />}
            </Alert>
        </Snackbar>
    );
};

export default Toast;