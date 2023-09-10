import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/joy/IconButton";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined.js";
import AspectRatio from "@mui/joy/AspectRatio";
import CardContent from "@mui/joy/CardContent";
import Button from "@mui/joy/Button";
import React from "react";
import Grid from '@mui/material/Grid';
import '../../app/App.css'
import ShowMoreText from "react-show-more-text";
import DraggableDialog from "../../common/Cart/papercomponent.jsx";


// eslint-disable-next-line react/prop-types
function BasicCard ({item}) {

    const {title, date, img, price,description} = item;

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
                <Typography level="title-lg" sx={{fontWeight: 700,paddingLeft: 1,color: 'rgb(67 63 63 / 87%)'}}>{title}</Typography>
                <Typography level="body-sm" sx={{fontSize: 13,paddingLeft: 1,color: 'rgb(67 63 63 / 87%)'}}>{date}</Typography><br/>

                <ShowMoreText
                    className="show_text"
                    sx={{padding: 3,}}
                    lines={1}
                    more={<span style={{ color: '#0f75bc' }}>Show more</span>}
                    less={<span style={{ color: 'red' }}>Show less</span>}
                    anchorClass=''
                >
                    <span style={{ fontSize: '16px',fontWeight: 700 }}>{title}</span><br/>
                    <div style={{ marginTop: '10px' }} dangerouslySetInnerHTML={{ __html: description }} />
                </ShowMoreText>

                <CardContent orientation="horizontal">
                    <div>
                        <br/><br/>
                        <Typography level="body-xs" sx={{fontSize: 15,padding: 1,fontWeight: 900,color: 'rgb(67 63 63 / 87%)'}}>Total price</Typography>
                        <Typography fontSize="lg" fontWeight="lg" sx={{fontSize: 23,padding: 1,fontWeight: 900,color: '#0f75bc'}}>Rs {price}</Typography>
                    </div>
                </CardContent>

                {/*button*/}
                <DraggableDialog item={item}/>

            </Card>
        </Grid>

    )
}

export default BasicCard;