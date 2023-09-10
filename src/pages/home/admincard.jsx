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

function AdminCard({ title, date, img, price, id, description, deletionDate, setRows, onEdit }) {
    const handleDelete = () => {
        axios
            .delete(`http://192.168.8.100:8000/post/${id}`)
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
                <div className="aspect-ratio-container">
                    <img
                        src={img}
                        loading="lazy"
                        alt=""
                    />
                </div>
                <Typography level="title-lg" sx={{ fontWeight: 900, paddingLeft: 1, color: 'rgb(129 129 129 / 87%)' }}>{title}</Typography>
                <Typography level="body-sm" sx={{ fontSize: 13, paddingLeft: 1, color: 'rgb(67 63 63 / 87%)' }}>{date}</Typography><br />

                <ShowMoreText
                    className="show_text"
                    sx={{}}
                    lines={1}
                    more={<span style={{ color: '#0f75bc' }}>Show more</span>}
                    less={<span style={{ color: 'red' }}>Show less</span>}
                    anchorClass=''
                >
                    <span style={{ fontSize: '16px', fontWeight: 700 }}>{title}</span><br />
                    <div style={{ marginTop: '10px' }} dangerouslySetInnerHTML={{ __html: description }} />
                </ShowMoreText>

                <CardContent orientation="horizontal">
                    <div>
                        <br /><br />
                        <Typography level="body-xs" sx={{ fontSize: 15, padding: 1, fontWeight: 900, color: 'rgb(67 63 63 / 87%)' }}>Total price</Typography>
                        <Typography fontSize="lg" fontWeight="lg" sx={{ fontSize: 23, padding: 1, fontWeight: 900, color: '#0f75bc' }}>Rs {price}</Typography>
                    </div>
                </CardContent>
                <Typography level="body-sm" sx={{ fontSize: 11, paddingLeft: 1, color: 'rgb(67 63 63 / 87%)' }}>Item Number: {id}</Typography>
                <IconButton
                    color=""
                    onClick={() => onEdit(id)}
                    aria-label="delete" style={{ marginLeft: 280, }}
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
                {/* button */}
            </Card>
        </Grid>
    );
}

export default AdminCard;
