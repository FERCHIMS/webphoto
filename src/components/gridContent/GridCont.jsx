'use client'
import Masonry from 'react-masonry-css';
import './grid.css'

const GridCont = ({children}) => {

    const breakpointColumnsObj = {
        default: 4, // 3 columnas por defecto
        1100: 2,    // 2 columnas si el ancho de la ventana es menor a 1100px
        700: 1      // 1 columna si el ancho es menor a 700px
    };
    return (
        
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid pr-20" 
            columnClassName="my-masonry-grid_column"
            
        >
            {children}
        </Masonry>
        
    )
}

export default GridCont