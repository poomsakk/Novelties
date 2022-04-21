import { Button,Card } from 'react-bootstrap';
import data from "../sampleData.js";
import React from 'react';


export default function PopularScreen() {
    const user = data.Novel[0]
    const novel = data.Novel[0].allChapter.length
    const handle = (e) => {
        console.log(user)
    }
    return (
        <>
            <h1>Popular</h1>
            {/* <Button variant="danger" onClick={handle}>del</Button> */}
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={data.Novel[0].image} height={200} width={200} />
                <Card.Body>
                    <Card.Title>{data.Novel[0].name}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.(Novel Detail)
                    </Card.Text>
                    {/* <Card.Text>
                        Viewers : {data.Novel[0].allViewers}    Rating : {data.Novel[0].rating}    
                    </Card.Text> */}
                    <Button variant="primary">อ่านนิยาย</Button>
                </Card.Body>
            </Card>
        </>
    )
};

// {/* <div>
//                 <img src = {data.Novel[1].image} height={200} width={200}/>
//                 <p>views = {user.allViewers}</p>
//                 <p>chapters = {novel}</p>
//                 <p>{data.Novel[1].image}</p>
//             </div> */}