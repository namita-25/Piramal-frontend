import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Typography from '@mui/material/Typography';
import CustomButton from './CustomButton';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs({title,DialogData,handleSubmit,DialogButtonText}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleChange =()=>{
    // handleSubmit() 
    handleClose();
  }
  return (
    <React.Fragment>
      <Button variant="text" onClick={handleClickOpen} sx={{textTransform: 'none'}} >
        {title} <ArrowRightAltIcon/>
      </Button>
    
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {title}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          {DialogData}
        </DialogContent>
        <DialogActions>
          
          <CustomButton label={DialogButtonText} variant={'contained'} handleClick={handleChange} borderRadius={20}/>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
