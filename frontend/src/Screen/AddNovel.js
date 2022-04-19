import { Form } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { api } from '../api';

export default function AddNovel() {

    const newNovelData = {
        name: "Alee baba",
        category: [{ name: "adventure" }, { name: "adult" }],
        image: "../images/bookCover.jpg",
    }

    const name = newNovelData.name
    const category = newNovelData.category
    const image = newNovelData.image

    async function handleSubmit(e) {
        e.preventDefault();
        const { data } = await api.post("/api/novels/addNovel", { name, category, image });
        if (data.message === "OK") {
            Swal.fire('Success', 'Novel has been added', 'success')
        } else {
            Swal.fire('FAIL!!', data.message, "warning")
        }
    }

    return (
        <>
            <div className='form-layout'>
                <h1>Add novel</h1>
                <br></br>
                <Form onSubmit={handleSubmit}>
                </Form>
            </div>
        </>
    )
}