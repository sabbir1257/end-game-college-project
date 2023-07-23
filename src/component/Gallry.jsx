import React from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import img1 from '../assets/gallry/gallry1.jpg'
import img2 from '../assets/gallry/gallry2.jpg'
import img3 from '../assets/gallry/gallry3.jpg'
import img4 from '../assets/gallry/gallry-4.jpg'
import img5 from '../assets/gallry/gallry5.jpg'
import img6 from '../assets/gallry/gallry6.jpg'
import img7 from '../assets/gallry/gallry7.jpg'
import img8 from '../assets/gallry/gallry8.jpg'
import img9 from '../assets/gallry/gallry9.jpg'

const Gallry = () => {
    return (
       <div>
        <h1 className='pt-8 text-5xl font-bold text-center'>Our Gallery</h1>
         <ResponsiveMasonry className='max-w-[1250px] mx-auto my-12'
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                <Masonry>
                    <img className='p-4' src={img1} alt="" />
                    <img className='p-4' src={img3} alt="" />
                    <img className='p-4' src={img2} alt="" />
                    <img className='p-4' src={img4} alt="" />
                    <img className='p-4' src={img5} alt="" />
                    <img className='p-4' src={img6} alt="" />
                    <img className='p-4' src={img7} alt="" />
                    <img className='p-4' src={img8} alt="" />
                    <img className='p-4' src={img9} alt="" />
                </Masonry>
            </ResponsiveMasonry>
       </div>
    );
};

export default Gallry;