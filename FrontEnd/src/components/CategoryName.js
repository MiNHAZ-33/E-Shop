import React from 'react';
import { useDispatch } from 'react-redux';
import { productFilter } from '../actions/productActions';



const CategoryName = () => {
    const dispatch = useDispatch();
    const selectedCategory = (cat) => {
        dispatch(productFilter(cat))
    }

    const selectedBrand = (brand) => {
        dispatch(productFilter(brand))
    }

    return (
        <ul className="menu bg-base-100 w-56 p-2 rounded-box">
            <li className="text-xl font-bold">
                <span>Category</span>
            </li>
            <li><a onClick={() => selectedCategory('Phone')}>Phone</a></li>
            <li><a onClick={() => selectedCategory('Laptop')}>Laptop</a></li>
            <li><a onClick={() => selectedCategory('Washing Machine')}>Washing Machine</a></li>
            <li><a onClick={() => selectedCategory('Watch')}>Watch</a></li>
            <li><a onClick={() => selectedCategory('Monitor')}>Monitor</a></li>
            <li><a onClick={() => selectedCategory('Clothes')}>Clothes</a></li>
            <li><a onClick={() => selectedCategory('Headphone')}>Headphone</a></li>
            <li><a onClick={() => selectedCategory('Bike')}>Bike</a></li>
            <li><a onClick={() => selectedCategory('Bicycle')}>Bicycle</a></li>
            <li><a onClick={() => selectedCategory('Car')}>Car</a></li>
            <li><a onClick={() => selectedCategory('Sports')}>Sports</a></li>
            
            <li className="text-xl font-bold">
                <span>Brand</span>
            </li>
            <li><a onClick={() => selectedBrand('Apple')}>Apple</a></li>
            <li><a onClick={() => selectedBrand('Sony')}>Sony</a></li>
            <li><a onClick={() => selectedBrand('Samsung')}>Samsung</a></li>
            <li><a onClick={() => selectedBrand('Bata')}>Bata</a></li>
            <li><a onClick={() => selectedBrand('Apex')}>Apex</a></li>
            <li><a onClick={() => selectedBrand('G & G')}>G & G</a></li>
        </ul>
    )
}

export default CategoryName

    // const dispatch = useDispatch();

    // const selectedCategory = (cat) => {
    //     console.log('clicked')
    //     dispatch(productFilter(cat))
    // }

    // return (
    //     <div className='pt-10 pb-5'>
    //     <p className='text-xl font-bold py-4'>Select Category</p>
    //     <div >
    //         <div className='grid lg:grid-cols-7 md:grid-cols-5 sm:grid-cols-3 items-center justify-evenly gap-2'>
    //             <div onClick={()=>selectedCategory('Electronics')} className="w-32  rounded overflow-hidden shadow-lg">
    //                 <img className="w-full h-16 compact" src="/images/category/electronics.jpeg" alt="Sunset in the mountains" />
    //                 <p className='text-xl font-bold text-center'>Electronics</p>
    //             </div>
    //             <div onClick={()=>selectedCategory('Phone')}  className="w-32  rounded overflow-hidden shadow-lg">
    //                 <img className="w-full h-16 compact" src="/images/phone.jpg" alt="Sunset in the mountains" />
    //                 <p className='text-xl font-bold text-center'>Phone</p>
    //             </div>
    //             <div onClick={()=>selectedCategory('Camera')} className="w-32  rounded overflow-hidden shadow-lg">
    //                 <img className="w-full h-16 compact" src="/images/category/camera.jpeg" alt="Sunset in the mountains" />
    //                 <p className='text-xl font-bold text-center'>Camera</p>
    //             </div>
    //             <div onClick={()=>selectedCategory('Laptop')} className="w-32  rounded overflow-hidden shadow-lg">
    //                 <img className="w-full h-16 compact" src="/images/category/laptop.jpg" alt="Sunset in the mountains" />
    //                 <p className='text-xl font-bold text-center'>Laptop</p>
    //             </div>
    //             <div onClick={()=>selectedCategory('Headphone')} className="w-32  rounded overflow-hidden shadow-lg">
    //                 <img className="w-full h-16 compact" src="/images/category/headphone.jpg" alt="Sunset in the mountains" />
    //                 <p className='text-xl font-bold text-center'>Headphone</p>
    //             </div>
    //             <div onClick={()=>selectedCategory('Watch')} className="w-32  rounded overflow-hidden shadow-lg">
    //                 <img className="w-full h-16 compact" src="/images/category/watch.jpg" alt="Sunset in the mountains" />
    //                 <p className='text-xl font-bold text-center'>Watch</p>
    //             </div>
    //             <div onClick={()=>selectedCategory('Playstation')} className="w-32  rounded overflow-hidden shadow-lg">
    //                 <img className="w-full h-16 compact" src="/images/category/playstation.jpg" alt="Sunset in the mountains" />
    //                 <p className='text-xl font-bold text-center'>PlayStation</p>
    //             </div>
    //             <div onClick={()=>selectedCategory('Xbox')} className="w-32  rounded overflow-hidden shadow-lg">
    //                 <img className="w-full h-16 compact" src="/images/category/playstation.jpg" alt="Sunset in the mountains" />
    //                 <p className='text-xl font-bold text-center'>Xbox</p>
    //             </div>
    //             <div onClick={()=>selectedCategory('Keyboard')} className="w-32  rounded overflow-hidden shadow-lg">
    //                 <img className="w-full h-16 compact" src="/images/category/keyboard.jpg" alt="Sunset in the mountains" />
    //                 <p className='text-xl font-bold text-center'>Keyboard</p>
    //             </div>
    //             <div onClick={()=>selectedCategory('Mouse')} className="w-32  rounded overflow-hidden shadow-lg">
    //                 <img className="w-full h-16 compact" src="/images/category/mouse.jpg" alt="Sunset in the mountains" />
    //                 <p className='text-xl font-bold text-center'>Mouse</p>
    //             </div>
    //             <div onClick={()=>selectedCategory('Tablet')} className="w-32  rounded overflow-hidden shadow-lg">
    //                 <img className="w-full h-16 compact" src="/images/category/tablet.jpg" alt="Sunset in the mountains" />
    //                 <p className='text-xl font-bold text-center'>Tablet</p>
    //             </div>
    //             <div onClick={()=>selectedCategory('Speaker')} className="w-32  rounded overflow-hidden shadow-lg">
    //                 <img className="w-full h-16 compact" src="/images/category/speaker.jpg" alt="Sunset in the mountains" />
    //                 <p className='text-xl font-bold text-center'>Speaker</p>
    //             </div>
    //             <div onClick={()=>selectedCategory('Cloth')} className="w-32  rounded overflow-hidden shadow-lg">
    //                 <img className="w-full h-16 compact" src="/images/category/cloth.jpg" alt="Sunset in the mountains" />
    //                 <p className='text-xl font-bold text-center'>Cloth</p>
    //             </div>
    //             <div onClick={()=>selectedCategory('Electronics')} className="w-32  rounded overflow-hidden shadow-lg">
    //                 <img className="w-full h-16 compact" src="/images/alexa.jpg" alt="Sunset in the mountains" />
    //                 <p className='text-xl font-bold text-center'>All</p>
    //             </div>
    //         </div>
    //     </div>
    //     </div>
    // )