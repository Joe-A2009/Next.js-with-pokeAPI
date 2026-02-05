import React from 'react'
import Link from 'next/link'

interface PokeInterface {
  params: Promise<{ // Actualizado para Next.js 15 (params es promesa)
    id: string
  }>
}

export default async function PokesPage(props: PokeInterface) {
  const { id } = await props.params;
  const datos = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
  const datajson = await datos.json(); 

  return (
    
    <div className="flex justify-center items-center min-h-svh bg-amber-500/10 p-4">
      <div className="relative w-full max-w-md bg-white shadow-xl rounded-2xl overflow-hidden my-auto">
        <div className="relative w-full aspect-square bg-slate-50 border-b border-slate-100">
            
            <Link href="/pokes" className="absolute top-4 left-4 bg-white/80 hover:bg-white px-3 py-1 rounded-full backdrop-blur-sm transition-all z-10 text-sm font-semibold text-slate-600 shadow-sm border border-slate-200">
                ← Volver
            </Link>

            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
              alt={datajson.forms[0].name} 
              className="object-contain w-full h-full p-8" 
            />
        </div>

        <div className="p-6">
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-end border-b pb-2 border-slate-100">
                <span className="text-gray-500 font-medium text-sm uppercase tracking-wider">
                  Nombre
                </span>
                <p className="font-sans text-2xl font-bold capitalize text-slate-800">
                  {datajson.forms[0].name}
                </p>
              </div>
              <div className="flex justify-between items-end">
                <span className="text-gray-500 font-medium text-sm uppercase tracking-wider">
                  Habilidad
                </span>
                <p className="font-sans text-lg font-semibold capitalize text-slate-700">
                  {datajson.abilities[0].ability.name}
                </p>
              </div>

            </div>
        </div>

      </div>
    </div>
  )
}