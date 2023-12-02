import React, { useContext } from 'react'
import LoadigBar from 'react-top-loading-bar'
import ProgressContext from '../context/progress/progressContext'


const TopLoadginBar = () => {
    const progress_context = useContext(ProgressContext);
    const {progress} = progress_context
  return (
    <LoadigBar
    height={3}
    color='#f11946'
    progress={progress}
    />
  )
}

export default TopLoadginBar