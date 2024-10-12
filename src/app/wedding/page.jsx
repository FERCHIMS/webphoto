import { getWedding } from '@/components/llamadas/llamadas'

import TitlePage from '@/components/titles/TitlesPage'
import NavPages from '@/components/navpages/NavPages'
import GridCont from '@/components/gridContent/GridCont'
import CardImage from '@/components/cards/CardImage'

const Wedding = async() => {
  const weddings = await getWedding()
  return (
    <div className=' w-full h-full overflow-hidden pt-10 '>
      <div className='w-full justify-between flex gap-5 pl-[3.5rem] '>
        <TitlePage title="STREET" />
        <NavPages />
      </div>
        <div className='flex flex-wrap justify-center w-full gap-3 '>
          <GridCont>
            {weddings.map((wedding, index) =>(
              <div className='' key={index}>
                <CardImage className='' src={wedding.src} width={500} height={500} alt={wedding.title} />
              </div>
            ))}
          </GridCont>
        </div>
    </div>
  )
}

export default Wedding