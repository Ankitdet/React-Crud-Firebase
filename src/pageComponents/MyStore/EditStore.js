import React, { useEffect, useState } from 'react'
import { projectFirestore } from '../../firebase/Config'

function EditStore({ id }) {

    const [store, setStore] = useState([]);

    useEffect(() => {

        var docRef = projectFirestore.collection("store").doc(id);
        docRef.get().then(function(doc) {
            if (doc.exists) {
                 setStore(doc.data());
            } else {
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
        
        // projectFirestore.collection(`store/${id}`).onSnapshot((snapshot) => {
        //     const details = snapshot.docs.map((docs) =>
        //         ({
        //             id: docs.id,
        //             ...docs.data()
        //         }))
        //         debugger;
        //     setStore(details);
        // });
    }, [])
    return (
        <div>
            <p>Hello, You are inside Edit. {id}</p>
        </div>
    )
}

export default EditStore
