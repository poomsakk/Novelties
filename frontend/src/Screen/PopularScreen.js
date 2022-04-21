import { Button } from 'react-bootstrap';
import data from "../sampleData.js";

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
        </>
    )
};

