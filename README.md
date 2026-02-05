This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# PokeAPI Explorer - Next.js

Este es un proyecto desarrollado con [Next.js](https://nextjs.org) utilizando `create-next-app` para explorar las capacidades de renderizado moderno y optimización de recursos.

## Descripción
El objetivo de este proyecto es crear un servidor web funcional integrando **React.js** y **Node.js**. Para poner a prueba estas herramientas, se utilizó la **PokeAPI** para implementar:

* **Rutas Dinámicas:** Generación de páginas individuales para cada Pokémon basadas en su ID.
* **Diseño Responsivo:** Interfaz adaptada para dispositivos móviles y escritorio.
* **Optimización de Imágenes:** Uso de Lazy Loading para mejorar la velocidad de carga.

La API utilizada está disponible en: [https://pokeapi.co](https://pokeapi.co)

## Configuración de Imágenes
Para aprovechar el componente `<Image />` de Next.js con dominios externos (donde se hospedan los sprites oficiales), configuramos el archivo `next.config.ts` permitiendo el acceso a los servidores de GitHub donde residen las imágenes:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/**',
      },
    ],
  },
};

export default nextConfig;
```

Como tal el proyecto desde una pantalla principal redirecciona a una paguina con layout propio referente a la PokeAPI, a traves de solicitudes Fect en la API logramos mostrar un menu completo con imagenes .svg y nombres de los pokemones a mostrar siendo en total 20 de estos, el layout nos sirve como barra de navegacion para facilitar la busqueda y no tener que bajar por la paguina hasta buscarlo.

En ambos casos al seleccionar un pokemon este te mandara directamente a si paguina principal el cual mostrara una imagen png junto con si nombre y una habilidad del pokemon dentro de una carta de diseño gratuito, esto se logra accediendo a la informacion de cada pokemon de la API por su ID y transformandola en formato json para de esta manera obtener estos atributos propios del pokemón.