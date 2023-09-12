import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/joy/IconButton";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined.js";
import AspectRatio from "@mui/joy/AspectRatio";
import CardContent from "@mui/joy/CardContent";
import Button from "@mui/joy/Button";
// eslint-disable-next-line no-unused-vars
import React from "react";
import Grid from '@mui/material/Grid';
import '../../app/App.css'
import ShowMoreText from "react-show-more-text";
import DraggableDialog from "../../common/Cart/papercomponent.jsx";
import {shippingCost} from "../../constants.js";


// eslint-disable-next-line react/prop-types
function BasicCard ({item}) {

    const {title, date, img, price,description,} = item;

    // Replace with your shipping cost

    const itemPrice = parseFloat(price);

    const totalPrice = itemPrice + shippingCost;


    return(

        <Grid sx={{padding: 2,margin: 1,border: 'none'}} >

            <Card sx={{ width: 320,backgroundColor: '#f8f8f8',minHeight: 449.5 }}>
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

                <CardContent style={{ padding: '7px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <ShowMoreText
                        className="show_text"
                        lines={1}
                        more={<span style={{ color: '#0f75bc' }}>Show more</span>}
                        less={<span style={{ color: 'red' }}>Show less</span>}
                        anchorClass=''
                    >
                        <span style={{ fontSize: '16px', fontWeight: 700 }}>{title}</span>
                        <div style={{ marginTop: '10px', padding: '1px', whiteSpace: 'pre-wrap',textAlign: 'justify' }} dangerouslySetInnerHTML={{ __html: description }} />
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

                {/*button*/}
                <DraggableDialog item={item}/>

            </Card>
        </Grid>

    )
}

export default BasicCard;