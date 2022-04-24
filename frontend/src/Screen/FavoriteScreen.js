import { Button } from 'react-bootstrap';
import data from "../sampleData.js";
import { isWriter } from '../auth.js';
export default function FavoriteScreen() {
    const user = data.Users[0]

    function hand(e) {
        console.log(isWriter())
    }

    return (
        <>
            <h1>Favorite</h1>
            {
                user.favorite?.map((chap) => {
                    return <h2>{chap.name}</h2>
                })
            }
            <Button variant="primary" onClick={hand}>button</Button>
        </>
    )
};