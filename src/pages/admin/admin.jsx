import React, {useEffect, useState} from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Admincard from "../home/admincard.jsx";
import Stack from "@mui/material/Stack";
import Textarea from '@mui/joy/Textarea';
import {Container} from "@mui/material";
import Grid from "@mui/material/Grid";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import UserTable from "../../common/admin_data_table/UserTable.jsx";
import AxiosInstance from "../../server/axiosInstance/axiosInstance.js";



function Dashboard() {
    const [data, setData] = useState([]);
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [img, setImg] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [selectedItemId, setSelectedItemId] = useState(null);

    const postData = () => {
        if (selectedItemId){
            // update the item
            console.log('updating')
            AxiosInstance.put('/api/v1/card', {
                id: selectedItemId,
                title: title,
                date: date,
                img: img,
                price: price,
                description: description
            }).then(function (response) {
                console.log('Successfully updated!',response);
                // You may want to handle the response or reset the form here
            })
                .catch(function (error) {
                    console.log(error);
                });
        }else {
            AxiosInstance.post('/api/v1/card', {
                    title: title,
                    date: date,
                    img: img,
                    price: price,
                    description: description
                })
                .then(function (response) {
                    console.log(response);
                    // You may want to handle the response or reset the form here
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        getData();
        onCancel(); // to clear the fields
    };

    useEffect(()=> {
        getData();
        // postData();
    },[])

    const selectItem = (id) => {

        setSelectedItemId(id);
        const selectedItem = data.filter(item => item.id === id)[0];

        setTitle(selectedItem.title);
        setDate(selectedItem.date);
        setDescription(selectedItem.description);
        setPrice(selectedItem.price);
        setImg(selectedItem.img);
    }
    console.log('data: ',data)
    const onCancel = () => {
        setSelectedItemId(null);
        setTitle('');
        setDate('');
        setImg('');
        setPrice('');
        setDescription('');
    }

    const getData = () => {
        AxiosInstance.get('/api/v1/card')
            .then(function (response) {
                setData(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }


    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));


    return (
        <div>
            <Box sx={{ flexGrow: 1,marginLeft: 3 }}>
                <Grid container spacing={10} columns={16}>
                    <Grid item xs={5}>
                        <Item style={{marginLeft: 15,color: '#494949',boxShadow: 'none',}}></Item>
                    </Grid>
                    <Grid item xs={9}>
                        <Item style={{marginLeft: 15,color: '#494949',boxShadow: 'none',}}> </Item>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ flexGrow: 1,margin: 3 }}>
                <Grid container spacing={2} columns={16}>
                    <Grid item xs={5}>
                        <Box>
                            <h3 style={{textAlign: 'center',color: '#494949'}}>Add/Update Listing</h3>
                                    <Card variant="outlined" sx={{ padding: 2, borderRadius:1.5,boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)' }}>

                                        <TextField
                                            value={title}
                                            onChange={(event) => { setTitle(event.target.value) }}
                                            sx={{ marginY: 1, width: '100%' }}
                                            label="Product Title"
                                            variant="outlined" />
                                        <TextField
                                            value={date}
                                            onChange={(event) => { setDate(event.target.value) }}
                                            sx={{ marginY: 1, width: '100%' }}
                                            label="Validation Date"
                                            variant="outlined" />
                                        <TextField
                                            value={img}
                                            onChange={(event) => { setImg(event.target.value) }}
                                            sx={{ marginY: 1, width: '100%' }}
                                            label="Product Img URL"
                                            variant="outlined" />
                                        <TextField
                                            value={price}
                                            onChange={(event) => { setPrice(event.target.value) }}
                                            sx={{ marginY: 1, width: '100%' }}
                                            label="Product Price"
                                            variant="outlined" />

                                        <Textarea
                                            value={description}
                                            onChange={(event) => { setDescription(event.target.value) }}
                                            sx={{ marginY: 1, width: '100%', height: 100, whiteSpace: 'pre-wrap' }}
                                            label="Product Description"
                                            variant="outlined" />

                                        <Button style={{margin: 1}} onClick={postData} variant="contained">{selectedItemId ? 'Edit': 'Save'}</Button>
                                        <Button style={{margin: 1,marginLeft: 5}} onClick={onCancel} variant={"outlined"}>Cancel</Button>
                                    </Card>
                        </Box>
                    </Grid>
                    <Grid  item xs={10}>
                        <h3 style={{textAlign: 'center',color: '#494949'}}>Customers</h3>
                        <Box style={{boxShadow: 'none',maxHeight: 506.5}}>
                            <UserTable/>
                        </Box>
                    </Grid>
                </Grid>
            </Box>


            <Box sx={{ minWidth: 275,}}>
            <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
                {
                    data.map((val, index)=> (
                        <Admincard key={index} title={val.title} date={val.date} img={val.img} price={val.price} id={val.id} description={val.description} onEdit={selectItem}/>
                    ))
                }
            </Stack>
            </Box>

        </div>

    );
}

export default Dashboard;