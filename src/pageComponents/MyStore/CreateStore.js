import React, { useState } from 'react'
import { Form} from 'react-bootstrap'

function CreateStore() {

    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');

    const submitStore = () => {
        console.log(name);
        console.log(type);
        console.log(category);
        console.log(description);

    }
    return (
        <div className="">
            <Form onSubmit={submitStore}>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Store Name</Form.Label>
                    <Form.Control placeholder="Store Name" onChange={(e) => setName(e.target.value)} value={name} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Store Type</Form.Label>
                    <Form.Control as="select" value={type} onChange={(e) => setType(e.target.value)}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect2">
                    <Form.Label>Store Category</Form.Label>
                    <Form.Control as="select" value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows="3" value={description} onChange={(e) => setDescription(e.target.value)} />
                </Form.Group>
                <Form>
                    <Form.Group>
                        <Form.File id="exampleFormControlFile1" label="Upload logo" />
                    </Form.Group>
                </Form>
            </Form>
        </div>
    )
}

export default CreateStore;
