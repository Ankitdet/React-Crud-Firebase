import React, { useState } from 'react'
import PhotoGrid from './PhotoGrid'
import PhotoUpload from './PhotoUpload'
import Model from './Model'
import '../../style/photo.css'


const PhotoProfile = () => {
  const [selectdImg, setSelectedImg] = useState(null)

  return (
    <div className='Photo'>
      <PhotoUpload />
      <PhotoGrid setSelectedImg={setSelectedImg} />
      { selectdImg && <Model selectdImg={selectdImg} setSelectedImg={setSelectedImg} /> }
    </div>
  )
}

export default PhotoProfile
