import React, { useState, useEffect } from 'react'
import { Form, Button} from 'react-bootstrap'
import DisplayStore from './DisplayStore'
import CreateStore from './CreateStore'

import { projectFirestore } from '../../firebase/Config'

function MyStore() {

    const [store, setStore] = useState([]);

    useEffect(() => {
        projectFirestore.collection('store').onSnapshot((snapshot) => {
            const details = snapshot.docs.map((docs) =>
                ({
                    id: docs.id,
                    ...docs.data()
                }))
            setStore(details);
        });
    }, [])
    return (

        <div>
            <Form>
                {
                    store && store.length > 0 ?
                        store.map((s) => {
                            return <DisplayStore store={s}/>
                        })
                        : <div><p>No Stores found.</p>
                            <CreateStore />
                        </div>
                }
            </Form>
        </div >
    )
}

export default MyStore
