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
            console.log('upddateing')
            axios.put('http://192.168.8.100:8000/update', {
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
            axios
                .post('http://192.168.8.100:8000/post', {
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
        axios.get('http://192.168.8.100:8000/get')
            .then(function (response) {
                setData(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }



    return (
        <div>
            <h1>Dashboard Page</h1><br/><br/>
            <Container maxWidth="xs">
            <Box sx={{ minWidth: 275, maxWidth: 500 }}>
                <Card variant="outlined" sx={{ padding: 2, backgroundColor: '#f8f8f8', border: 'none', boxShadow: '1px 2px 0px 0px rgba(173,173,173,0.38);' }}>

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

                    <Button onClick={postData} variant="contained">{selectedItemId ? 'Edit': 'Save'}</Button>
                    <Button onClick={onCancel} variant={"outlined"}>Cancel</Button>
                </Card>
            </Box>
            </Container>
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