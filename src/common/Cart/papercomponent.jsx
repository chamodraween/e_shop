import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';
import '../../app/App.css'
import Button from "@mui/joy/Button";
import BuyerInfoForm from "./BuyerInfoForm.jsx";
import Box from "@mui/material/Box";
/*import ReturnID from "../CatchID/returnid.jsx";*/


 function PaperComponent(props) {
    return (
        <Draggable
            handle="#draggable-dialog-title"
            cancel={'[class*="MuiDialogContent-root"]'}
        >
            <Paper {...props} />
        </Draggable>
    );
}

export default function DraggableDialog({item}) {
     const {title, date, img, price,description} = item;
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button className="buy_btn" variant="solid" sx={{ ml: 'auto', fontWeight: 700,marginBottom: 1,paddingLeft: 1,marginLeft: 30,color: 'white'}}
                    onClick={handleClickOpen}
                >
                    Explore
                </Button>
            {/*<Button variant="outlined" onClick={handleClickOpen}>
                Open draggable dialog
            </Button>*/}
            <Dialog
                open={open}
                onClose={handleClose}
                PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title"
            >
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                    Cash On delivery
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Box>
                            <h3>{title}</h3>
                            <h4>{price}</h4>
                            <h4>{date}</h4>
                        </Box>
                        <BuyerInfoForm item={item}/>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}