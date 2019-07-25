import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  txt: {
    width: 500,
    fontSize: 20,
    padding: '0px 0px 50px 0px'
  },
  header: {
    padding: '0px 20px 0px 20px'
  },
  error: {
    color: '#F44336'
  },
  description: {
    marginTop: theme.spacing(1)
  }
}));
