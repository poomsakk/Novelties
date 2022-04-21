import { Button } from 'react-bootstrap';
import data from "../sampleData.js";
import React from 'react';

export default function PopularScreen() {
    const user = data.Novel[1]
    const novel = data.Novel.length

    const handle = (e) => {
        console.log(user)
    }
    return (
        <>
            <h1>Popular</h1>
            <Button variant="danger" onClick={handle}>del</Button>
            <p>coin have = {user.allViewers}</p>
            <p>novel = {novel}</p>
            <p>{data.Novel[1].image}</p>
            <div>
                <img src = {data.Novel[1].image} height={200} width={200}/>
            </div>
        </>
    )
};

