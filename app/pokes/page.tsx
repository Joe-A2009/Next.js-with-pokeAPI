import React from 'react'
import Image from 'next/image'
import Link from "next/link";

const ids = [
  1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20
];

//Una ves recibidos los datos, aqui es como los mostramos
export default async function PokesPage() {
    
    const images = await Promise.all(
        ids.map(async (id) => {
            // 1. Hacemos la petición a la API para obtener los datos
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data = await res.json();

            // 2. Retornamos el objeto con el nombre y la imagen
            return { 
                id,
                name: data.forms[0].name, // <-- Aquí obtenemos el nombre esta es su ruta
                //podemos acceder a la imagen como hicimo con el nombre pero asi tambien funciona
                image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`,
            };
        })
    );

    return (
        <div className="min-h-screen bg-slate-900/10 p-4 md:p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
                {
                    images.map(({ id, name, image }) => (
                        <Link
                            key={id}
                            href={`/pokes/${id}`}
                            className="group w-full"
                        >
                            <div className=" text-center flex flex-col p-4 justify-center bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-shadow transform  hover:scale-105 duration-200">
                                <h2 className="text-lg md:text-xl font-bold capitalize text-slate-700 dark:text-slate-200 truncate">
                                    {name} 
                                </h2>
                                {image ? (
                                    <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-slate-50 dark:bg-slate-700/30 group-hover:bg-blue-50 dark:group-hover:bg-slate-700 transition-colors">
                                        <Image
                                            src={image}
                                            alt={name}
                                            fill // Aca intenta abarcar todo el espacio de su lugar, sirve para cuadrar imagenes en general
                                            className="p-4 object-contain rounded-4xl"
                                        />
                                    </div>
                                ) : (
                                    <div className="w-full max-w-xs h-48 flex items-center justify-center bg-gray-200 rounded-t-lg">
                                        <span className="text-gray-500">Imagen no disponible</span>
                                    </div>
                                )}
                                
                            </div>
                        </Link>
                    ))
                }

            </div>
        </div>
    )
}

/*
    relative: El componente Image con la propiedad fill usa un posicionamiento absoluto (position: absolute). 
            Para que la imagen se quede dentro del div y no se "escape" por toda la pantalla, el padre debe ser relative.
    
            h-64 w-full: Define el tamaño del contenedor (256px de alto y todo el ancho disponible). 
    Como la imagen tiene fill, se estirará automáticamente para llenar este espacio exacto.
    
    overflow-hidden: Funciona como una "máscara". Si la imagen es más grande o tiene esquinas cuadradas, esta clase 
        recorta todo lo que sobresalga del borde del div. 
        Obliga a la imagen a "cortarse" siguiendo la forma redondeada del padre.

*/