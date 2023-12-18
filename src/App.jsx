import React, { useState } from 'react'

function Menu() {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className='text-white px-5 py-6 bg-purple-500 flex justify-between'>
     <h1 className='text-5xl font-bold'>Nooty</h1>
     <i style={{display: open === true ? "none" : ""}} onClick={handleOpen} className='fa-solid fa-bars sm:hidden absolute right-2 text-4xl'></i>
     <i style={{display: open === true ? "block" : ""}} onClick={handleClose} class="fa-solid fa-xmark hidden absolute right-2 text-4xl"></i>
     <ul style={{display: open === true ? "block" : ""}} className='hidden sm:flex  sm:mt-0 sm:space-y-0 flex-col sm:flex-row  mt-16 space-y-6 sm:space-x-12 text-4xl'>
        <li>Home</li>
        <li>About</li>
        <li>Service</li>
        <li>Pricing</li>
     </ul>
    </div>
  )
}

export default Menu