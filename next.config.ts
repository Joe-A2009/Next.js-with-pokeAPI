import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  //Aqui determinas de donde va a buscar las paguinas para las imagenes
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com', // El dominio de tu imagen
        port: '',
        pathname: '/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/**', // Permite todas las rutas dentro de ese dominio
      },
    ],
  },
};

//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg

export default nextConfig;