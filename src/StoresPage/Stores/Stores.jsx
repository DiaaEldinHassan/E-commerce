import React from 'react';
import "./Stores.css";
import stores from './Stores.js';

export default function Stores() {
    return (
        <div className="stores-container">
            <h1 className='text-4xl font-semibold'>Stores</h1>
            <div className='stores-wraper'>
                {stores.map((store) => (
                    <div className='store-card group relative' key={store.id}>
                        <div className='relative overflow-hidden'>
                            <img src={store.image} alt={store.site} className='w-full h-[200px] object-cover transition-transform duration-300 group-hover:scale-110' />
                            <div className='absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                                <p className='text-white text-xl font-semibold text-center px-4'>{store.address}</p>
                            </div>
                        </div>
                        <div className='transition-opacity duration-300 group-hover:opacity-0'>
                            <h2 className='text-sm my-1 font-normal'>{store.site}</h2>
                            <p className='text-xl font-semibold my-1'>{store.address}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}