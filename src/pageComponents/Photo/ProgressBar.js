import React, { useEffect } from 'react'
import useStorage from '../../hooks/useStorage.js'
import { motion } from 'framer-motion'

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file)
  // console.log(progress, url)

  useEffect(() => {
    if(url){
      // 當url已經存在時，使用setFile清空file的內容，這樣progressbar就會消失
      setFile(null)
    }
  }, [url, setFile])

  return (
    <motion.div
      className='progress-bar'
      initial={{ width: 0 }}
      animate={{ width: progress + '%' }} >
    </motion.div>
  )
}

export default ProgressBar
