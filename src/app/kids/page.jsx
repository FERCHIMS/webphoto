
import { getKids } from '@/components/llamadas/llamadas'

import TitlePage from '@/components/titles/TitlesPage'
import NavPages from '@/components/navpages/NavPages'
import GridCont from '@/components/gridContent/GridCont'
import CardImage from '@/components/cards/CardImage'




const Kids = async() => {
  const kids = await getKids()
  return (
    <div className=' w-full h-full overflow-hidden pt-10 '>
      <div className='w-full justify-between flex gap-5 pl-[3.5rem] '>
        <TitlePage title="KIDS" />
        <NavPages />
      </div>
        <div className='flex flex-wrap justify-center w-full gap-3 '>
          <GridCont>
            {kids.map((kid, index) =>(
              <div className='' key={index}>

                <CardImage className='' src={kid.src} width={500} height={500} alt={kid.title} />
              </div>
            ))}
          </GridCont>
        </div>
    </div>
  )
}

export default Kids;