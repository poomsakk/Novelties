import { Button } from 'react-bootstrap';
import data from "../sampleData.js";

export default function PopularScreen() {
    
    for (let i = 1; i < 10; i++) {
        
            const user = data.Novel[i]


        const handle = (e) => {
            console.log(user)
        }
        return (
            <>
                <h1>Popular</h1>
                <Button variant="danger" onClick={handle}>del</Button>
                <p>coin have = {user.allViewers}</p>
            </>
    )
    }
};

