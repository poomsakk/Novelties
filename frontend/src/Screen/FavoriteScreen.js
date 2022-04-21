import { Button } from 'react-bootstrap';
import data from "../sampleData.js";
export default function FavoriteScreen() {
    const user = data.Users[0]

    return (
        <>
            <h1>Favorite</h1>
            {
                user.favorite?.map((chap) => {
                    return <h2>{chap.name}</h2>
                })
            }
        </>
    )
};