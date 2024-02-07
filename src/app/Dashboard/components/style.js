import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
	background: {
		background: '#09141A'
	},
	fontBold: {
		fontWeight: 'bold !important'
	},
	boxTitle: {
		marginBottom: '15px'
	},
	backgroundBox: {
		backgroundColor: '#FFFFFF0F !important'
	},
	button: {
		textTransform: 'capitalize !important'
	},
	margin: {
		marginBottom: '15px'
	},
	form: {
		'& input': {
			background: "#FFFFFF0F",
			borderColor: "#ffffff",
			padding: '18.5px 14px',
			borderRadius: '9px'
		}
	},
	flex: {
		display: 'flex !important',
		alignItems: 'center',
		border: '0 !important',
	},
	marginLeft: {
		marginLeft: '10px !important',
	}
}));

export default useStyles;