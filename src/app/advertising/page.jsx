import { getAdvertising } from '@/components/llamadas/llamadas'

import TitlePage from '@/components/titles/TitlesPage'
import NavPages from '@/components/navpages/NavPages'
import GridCont from '@/components/gridContent/GridCont'
import CardImage from '@/components/cards/CardImage'

const Advertising = async() => {
  const advertisings = await getAdvertising()
  return (
    <div className=' w-full h-full overflow-hidden pt-10 '>
      <div className='w-full justify-between flex gap-5 pl-[3.5rem] '>
        <TitlePage title="ADVERTISING" />
        <NavPages />
      </div>
        <div className='flex flex-wrap justify-center w-full gap-3 '>
          <GridCont>
            {advertisings.map((advertising, index) =>(
              <div className='' key={index}>

                <CardImage className='' src={advertising.src} width={500} height={500} alt={advertising.title} />
              </div>
            ))}
          </GridCont>
        </div>
    </div>
  )
}

export default Advertising;