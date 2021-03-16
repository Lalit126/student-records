import SnackbarContent from '@material-ui/core/SnackbarContent';
import Typography from '@material-ui/core/Typography';



function BigHeader({banner,variant='h6'}) {
    return (
            <SnackbarContent message={
            <Typography variant={variant} gutterBottom>
                {banner}
                </Typography>}
            /> 
        )
}

export default BigHeader