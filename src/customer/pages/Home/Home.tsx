import React from 'react'
import ElectricCategory from './ElectricCategory/ElectricCategory'
import GridCategory from './GridCategory/GridCategory'

const Home = () => {
  return (
    <>
    <div className='space-y-5 lg:space-y-10 relative pb-20'>

        <ElectricCategory/>
        <GridCategory/>
    </div>

    </>
  )
}

export default Home