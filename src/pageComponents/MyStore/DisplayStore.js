import React from 'react'
import { Table, Button } from 'react-bootstrap'
import { useHistory} from 'react-router-dom'

function DisplayStore(props) {
    const history = useHistory();
    const onEdit = (id) => {
        history.push(`/store/${id}`);
    }

    const onDelete = (id) => {
        history.push('/store/:id');
    }

    const onViewProductPage = (productId) => {
        history.push('/store/:productId/product');
    }
    return (
        <div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Category</th>
                        <th>Description</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.store.name}</td>
                        <td>{props.store.type}</td>
                        <td>{props.store.category}</td>
                        <td>{props.store.description}</td>
                        <td><Button variant="primary" id={props.store.id} onClick={(e)=> onEdit(e.target.id)}>Edit</Button>{' '}
                            <Button variant="danger" onClick={onDelete}>Delete</Button>{' '}
                            <Button variant="info" onClick={onViewProductPage}>View Product</Button>{' '}
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default DisplayStore
