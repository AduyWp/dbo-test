import useStyles from './style';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import OutlinedInput from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';

const Content = (props) => {
  const {
    values,
    formik,
    handleChange,
    handleClickShowPassword,
    handleMouseDownPassword,
    router
  } = props;

  const styles = useStyles();

  return (
    <>
      <main className="min-h-screen flex items-center justify-center">
        <div className="mb-10 px-8 mt-10 w-5/6 lg:w-1/3 sm:w-1/2 md:w-1/2 relative">
          <h2 className="text-2xl font-semibold mb-10 text-center">
            Login
          </h2>
          <form onSubmit={formik.handleSubmit}>
            <div className={classNames(styles.form, 'mb-4 mt-10')}>
              <TextField 
                id="outlined-adornment-password"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange} 
                className="w-full rounded" 
                placeholder="Enter Email"
                error={!!(formik.touched.email && formik.errors.email)}
                helperText={(formik.touched.email && formik.errors.email) || ''}
              />
            </div>
            <div className={classNames(styles.formWithIcon, 'mb-8')}>
              <TextField
                id="outlined-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                name="password"
                value={formik.values.password}
                error={!!(formik.touched.password && formik.errors.password)}
                helperText={(formik.touched.password && formik.errors.password) || ''}
                className={classNames('w-full rounded')}
                onChange={formik.handleChange}
                placeholder="Enter Password"
              />
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  className='buttonToggle'
                >
                  {values.showPassword ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />}
                </IconButton>
            </div>
            <Button
              fullWidth
              className={styles.button}
              variant="contained" color="primary"
              id="btnInputAddressForm"
              disabled={formik.values.email && formik.values.password ? false : true}
              type="submit"
            >
                <Typography variant="subtitle1" type="bold">
                    Login
                </Typography>
            </Button>
          </form>
          <div className="mt-10 text-center">
            <Box className="text-white" fontSize={13}>No Account? <span className={styles.golden} onClick={() => router.push('/register')}>Register Here</span></Box>
          </div>
        </div>
      </main>
    </>
  );
}

export default Content;