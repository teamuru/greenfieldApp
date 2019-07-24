import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    fontSize: 20
  }
}));

const style = {
  menuStyle: {
    fontSize: 20
  }
};

const ControledOpenSelect = () => {
  const classes = useStyles();
  const [rev, setRev] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setRev(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <span>
      <FormControl className={classes.formControl}>
        <InputLabel style={style.menuStyle}>Relevance</InputLabel>
        <Select
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={rev}
          onChange={handleChange}
          inputProps={{
            name: 'rev'
          }}
          style={style.menuStyle}
        >
          <MenuItem value="" style={style.menuStyle}>
            <em>None</em>
          </MenuItem>
          <MenuItem value={10} style={style.menuStyle}>
            Field 1
          </MenuItem>
          <MenuItem value={20} style={style.menuStyle}>
            Field 2
          </MenuItem>
          <MenuItem value={30} style={style.menuStyle}>
            Field 3
          </MenuItem>
        </Select>
      </FormControl>
    </span>
  );
};

export default ControledOpenSelect;
