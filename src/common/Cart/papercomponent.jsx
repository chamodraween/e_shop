import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';
import '../../app/App.css';
import Button from "@mui/joy/Button";
import BuyerInfoForm from "./BuyerInfoForm.jsx";
import Box from "@mui/material/Box";
import ShowMoreText from "react-show-more-text";

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

export default function DraggableDialog({ item }) {
    const { title, date, img, price, description } = item;
    const [open, setOpen] = React.useState(false);

    const shippingCost = 300; // Replace with your shipping cost

    const itemPrice = parseFloat(price);

    const totalPrice = itemPrice + shippingCost;

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button
                className="buy_btn"
                variant="solid"
                sx={{
                    ml: 'auto',
                    fontWeight: 700,
                    marginBottom: 1,
                    paddingLeft: 1,
                    marginLeft: 28,
                    color: 'white',
                }}
                onClick={handleClickOpen}
            >
                Continue
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title"
                maxWidth="lg" // Set the maxWidth to 'lg' for a larger width
            >
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                    <h3 style={{ color: 'rgba(0, 0, 0, 0.6)',textAlign:'center' }}>Cash On delivery</h3>
                </DialogTitle>
                <DialogContent>
                    <hr style={{ opacity: 0.3 }} />
                    <DialogContentText>
                        <div style={{ display: 'flex' }}>
                            {/* Left side: Item Details */}
                            <div style={{ flex: 1, marginRight: '1rem' }}>
                                <h2>You Selected item</h2>
                                <Box>
                                    <img
                                        src={img}
                                        alt="Your Image"
                                        style={{ width: '100px', height: 'auto', borderRadius: 4 }}
                                    />
                                    <h2 style={{ marginTop: -50, marginLeft: 120 }}>{title}</h2>
                                    <h3>Total Price :</h3>
                                    <h2 style={{ color: '#0f75bc', marginTop: -50, marginLeft: 120 }}>
                                        Rs {totalPrice}
                                    </h2>
                                    <ShowMoreText
                                        className="show_text"
                                        lines={7}
                                        more={<span style={{ color: '#0f75bc' }}>Show more</span>}
                                        less={<span style={{ color: 'red' }}>Show less</span>}
                                        anchorClass=""
                                    >
                                        <span style={{ fontSize: '16px', fontWeight: 700 }}>{title}</span>
                                        <div
                                            style={{
                                                marginTop: '10px',
                                                padding: '1px',
                                                whiteSpace: 'pre-wrap',
                                                textAlign: 'justify',
                                            }}
                                            dangerouslySetInnerHTML={{ __html: description }}
                                        />
                                    </ShowMoreText>
                                    <h4>{date}</h4>
                                </Box>
                            </div>
                            {/* Right side: Buyer Info Form */}
                            <div style={{ flex: 1 }}>
                                <BuyerInfoForm item={item} />
                            </div>
                        </div>
                    </DialogContentText>
                    <hr style={{ opacity: 0.3,marginTop: 20 }} />
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
