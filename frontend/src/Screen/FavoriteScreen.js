import { Button } from 'react-bootstrap';
import data from "../sampleData.js";
export default function FavoriteScreen() {
    const user = data.Users[1]
    const handle = (e) => {
        console.log(user)
    }
    return (
        <>
            <h1>Favorite</h1>
            <Button variant="danger" onClick={handle}>del</Button>
            <p>coin have = {user.coin}</p>
        </>
    )
};