import React from 'react'

const CategoryName = () => {

    const selectedCategory = (cat) => {
        
    }

    return (
        <div className='lg:mx-20 md:mx-10 pt-10 pb-5'>
        <p className='text-xl font-bold py-4'>Select Category</p>
        <div >
            <div className='grid lg:grid-cols-7 md:grid-cols-5 sm:grid-cols-3 items-center justify-evenly gap-2'>
                <div className="w-32  rounded overflow-hidden shadow-lg">
                    <img className="w-full h-16 compact" src="/images/category/electronics.jpeg" alt="Sunset in the mountains" />
                    <p className='text-xl font-bold text-center'>Electronics</p>
                </div>
                <div className="w-32  rounded overflow-hidden shadow-lg">
                    <img className="w-full h-16 compact" src="/images/phone.jpg" alt="Sunset in the mountains" />
                    <p className='text-xl font-bold text-center'>Phone</p>
                </div>
                <div className="w-32  rounded overflow-hidden shadow-lg">
                    <img className="w-full h-16 compact" src="/images/category/camera.jpeg" alt="Sunset in the mountains" />
                    <p className='text-xl font-bold text-center'>Camera</p>
                </div>
                <div className="w-32  rounded overflow-hidden shadow-lg">
                    <img className="w-full h-16 compact" src="/images/category/laptop.jpg" alt="Sunset in the mountains" />
                    <p className='text-xl font-bold text-center'>Laptop</p>
                </div>
                <div className="w-32  rounded overflow-hidden shadow-lg">
                    <img className="w-full h-16 compact" src="/images/category/headphone.jpg" alt="Sunset in the mountains" />
                    <p className='text-xl font-bold text-center'>Headphone</p>
                </div>
                <div className="w-32  rounded overflow-hidden shadow-lg">
                    <img className="w-full h-16 compact" src="/images/category/watch.jpg" alt="Sunset in the mountains" />
                    <p className='text-xl font-bold text-center'>Watch</p>
                </div>
                <div className="w-32  rounded overflow-hidden shadow-lg">
                    <img className="w-full h-16 compact" src="/images/category/playstation.jpg" alt="Sunset in the mountains" />
                    <p className='text-xl font-bold text-center'>PlayStation</p>
                </div>
                <div className="w-32  rounded overflow-hidden shadow-lg">
                    <img className="w-full h-16 compact" src="/images/category/playstation.jpg" alt="Sunset in the mountains" />
                    <p className='text-xl font-bold text-center'>Xbox</p>
                </div>
                <div className="w-32  rounded overflow-hidden shadow-lg">
                    <img className="w-full h-16 compact" src="/images/category/keyboard.jpg" alt="Sunset in the mountains" />
                    <p className='text-xl font-bold text-center'>Keyboard</p>
                </div>
                <div className="w-32  rounded overflow-hidden shadow-lg">
                    <img className="w-full h-16 compact" src="/images/category/mouse.jpg" alt="Sunset in the mountains" />
                    <p className='text-xl font-bold text-center'>Mouse</p>
                </div>
                <div className="w-32  rounded overflow-hidden shadow-lg">
                    <img className="w-full h-16 compact" src="/images/category/tablet.jpg" alt="Sunset in the mountains" />
                    <p className='text-xl font-bold text-center'>Tablet</p>
                </div>
                <div className="w-32  rounded overflow-hidden shadow-lg">
                    <img className="w-full h-16 compact" src="/images/category/speaker.jpg" alt="Sunset in the mountains" />
                    <p className='text-xl font-bold text-center'>Speaker</p>
                </div>
                <div className="w-32  rounded overflow-hidden shadow-lg">
                    <img className="w-full h-16 compact" src="/images/category/cloth.jpg" alt="Sunset in the mountains" />
                    <p className='text-xl font-bold text-center'>Cloth</p>
                </div>
                <div className="w-32  rounded overflow-hidden shadow-lg">
                    <img className="w-full h-16 compact" src="/images/alexa.jpg" alt="Sunset in the mountains" />
                    <p className='text-xl font-bold text-center'>All</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default CategoryName