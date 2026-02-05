import React from 'react'
import Link from 'next/link'

export default function page() {
  return (
    <div className=''>

      <strong>Paguina principal: </strong> Accede al boton para ver Pokemon API

      <div className="p-6">
        <Link  href="/pokes" className="bg-white/80 hover:bg-white px-3 py-2 rounded-full backdrop-blur-sm transition-all items-center">
          PokeAPI
        </Link>
      </div>

    </div>
  )
}
