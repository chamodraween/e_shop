import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import ShowMoreText from 'react-show-more-text';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import "../../app/App.css"
import {Edit} from "@mui/icons-material";
import AspectRatio from "@mui/joy/AspectRatio";
import AxiosInstance from "../../server/axiosInstance/axiosInstance.js";

function AdminCard({ title, date, img, price, id, description, deletionDate, setRows, onEdit }) {

    const shippingCost = 300; // Replace with your shipping cost

    const itemPrice = parseFloat(price);

    const totalPrice = itemPrice + shippingCost;

    const handleDelete = () => {
        AxiosInstance.delete(`/api/v1/card/${id}`)
            .then(function (response) {
                // Update the deletionDate for the deleted row
                setRows((prevRows) =>
                    prevRows.map((row) =>
                        row.id === id ? { ...row, deletionDate: new Date() } : row
                    )
                );
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <Grid sx={{ padding: 2, margin: 1, border: 'none' }}>
            <Card sx={{ width: 320, backgroundColor: '#f8f8f8', minHeight: 500 }}>
                <div>
                    <IconButton
                        aria-label="bookmark Bahamas Islands"
                        variant="plain"
                        color="neutral"
                        size="sm"
                        sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
                    >
                        <BookmarkAdd />
                    </IconButton>
                </div>
                <AspectRatio  minHeight="120px" maxHeight="200px">
                    <img
                        src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
                        srcSet={img}
                        loading="lazy"
                        alt=""
                    />
                </AspectRatio>
                <hr style={{ width: '95%', opacity: 0.3 }} />
                <Typography level="title-lg" sx={{fontWeight: 700,paddingLeft: 1,color: 'rgb(67 63 63 / 87%)'}}>{title}</Typography>
                <Typography level="body-sm" sx={{fontSize: 13,paddingLeft: 1,color: 'rgb(67 63 63 / 87%)'}}>{date}</Typography>
                <hr style={{ width: '95%', opacity: 0.3 }} />

                <CardContent orientation="horizontal" style={{padding: 7}}>
                    <ShowMoreText
                        className="show_text"
                        lines={1}
                        more={<span style={{ color: '#0f75bc' }}>Show more</span>}
                        less={<span style={{ color: 'red' }}>Show less</span>}
                        anchorClass=''
                    >
                        <span style={{ fontSize: '16px',fontWeight: 700 }}>{title}</span>
                        <div style={{ marginTop: '10px',padding:1,textAlign: 'justify',whiteSpace: 'pre-wrap' }} dangerouslySetInnerHTML={{ __html: description }} />
                    </ShowMoreText>
                </CardContent>

                <CardContent orientation="horizontal" style={{padding: 0}}>
                    <div>
                        <Typography level="body-xs" sx={{fontSize: 14,padding: 1,fontWeight: 900,color: 'rgb(67 63 63 / 87%)'}}>Item Price :</Typography>
                        <Typography fontSize="lg" fontWeight="lg" sx={{display: 'flex',fontSize: 15,padding: 1,fontWeight: 900,marginTop: -4.8 ,marginLeft: 15,color: 'rgb(67 63 63 / 87%)'}}>Rs {itemPrice}</Typography>
                        <Typography level="body-xs" sx={{fontSize: 10,padding: 1,fontWeight: 900,color: 'rgb(67 63 63 / 87%)'}}>Shipping Cost :</Typography>
                        <Typography fontSize="lg" fontWeight="lg" sx={{display: 'flex',fontSize: 10,padding: 1,fontWeight: 900,marginTop: -4.0 ,marginLeft: 15,color: 'rgb(67 63 63 / 87%)'}}>Rs {shippingCost}</Typography>
                        <Typography level="body-xs" sx={{fontSize: 15,padding: 1,fontWeight: 900,color: 'rgb(67 63 63 / 87%)'}}>Total price :</Typography>
                        <Typography fontSize="lg" fontWeight="lg" sx={{display: 'flex',fontSize: 23,padding: 1,fontWeight: 900,color: '#0f75bc',marginTop: -5.5 ,marginLeft: 15,}}>Rs {totalPrice}</Typography>
                    </div>

                </CardContent>
                <hr style={{ width: '95%', opacity: 0.3 }} />
                <div style={{display: 'flex'}}>
                <Typography level="body-sm" sx={{ fontSize: 11, paddingLeft: 1, color: 'rgb(67 63 63 / 87%)',position: 'absolute',marginTop: 2 }}>Item Number: {id}</Typography>
                <IconButton
                    color=""
                    onClick={() => onEdit(id)}
                    aria-label="delete" style={{ marginLeft: 240,marginTop: 0,position: 'absolute' }}
                >
                    <Edit />
                </IconButton>
                {deletionDate ? (
                    new Date(deletionDate).toLocaleString()
                ) : (
                    <IconButton
                        color=""
                        onClick={handleDelete}
                        aria-label="delete" style={{ marginLeft: 280, }}
                    >
                        <DeleteIcon />
                    </IconButton>
                )}
                </div>
                {/* button */}
            </Card>
        </Grid>
    );
}

export default AdminCard;
