import DropDown from '@/components/dropdown/DropDown'
import Redes from '@/components/redes/Redes'
import ResponsiveComponentWithHook from '@/components/responsivecomp/ResponsiveCom'
import React from 'react'

const Fashion = () => {
  return (
    <div className=' w-full h-[300vh] bg-orange-400'>
        <DropDown  />
        <div className='w-full h-[50vh] bg-blue-300'>
          <ResponsiveComponentWithHook />
          <Redes />
        </div>
    </div>
  )
}

export default Fashion