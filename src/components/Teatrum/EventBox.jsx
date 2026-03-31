import React from 'react'
import { useNavigate } from 'react-router-dom'

function EventBox({event}) {
    const navigate= useNavigate()

    const goToEvent= () =>{
        navigate(`/teatrum/event/${event.id}`)
    }
  return (
    <div onClick={goToEvent} className='bg-card shadow rounded flex flex-col cursor-pointer hover:scale-[1.01] transition-transform max-w-[200px] sm:max-w-[220px] md:max-w-[240px] w-full'>
      <div className='aspect-square flex items-center justify-center overflow-hidden rounded-t border-x border-gray-400'>
        <img
          src={event.img}
          alt={`Imagen de : ${event.title}`}
          className='object-cover w-full h-full'
        />
      </div>
      <div className='p-2 flex items-center justify-center border-x border-b border-gray-400 rounded-b'>
        <h1 className='text-sm sm:text-md md:text-lg font-semibold h-10'>{event.title}</h1>
      </div>
    </div>
  )
}

export default EventBox