import React from 'react';
import axios from "axios";
import {useEffect, useState} from "react";
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import BasicCard from "./basicCcard.jsx";
import Stack from '@mui/material/Stack';
import LinearProgressThickness from "../../common/Thickness/Thickness.jsx";
import TawToChat from "../contact/TawkToChat.jsx";
function Home() {
    const [data, setData] = useState([]);


    useEffect(()=> {
        getData();
        // postData();
    },[])

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
            <LinearProgressThickness/>

            <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
                {
                    data.map((val, index)=> (
                        <BasicCard key={index} item={val} />
                    ))
                }
            </Stack>
            <TawToChat/>

        </div>
    );
}

export default Home