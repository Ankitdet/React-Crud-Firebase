import React from 'react'
import useFirestore from '../../hooks/useFireStore'
import { motion } from 'framer-motion'

const PhotoGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore('images')

  return (
    <>
      <div className='img-grid container'>
        { docs && docs.map(doc => (
          <motion.div
            className='img-wrap col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 '
            key={doc.id}
            layout
            whileHover={{ opacity: 1 }}
            onClick={() => setSelectedImg(doc.url)}>
            <motion.img
              src={doc.url}
              alt={`upload pic by ${doc.url}`} />
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default PhotoGrid
