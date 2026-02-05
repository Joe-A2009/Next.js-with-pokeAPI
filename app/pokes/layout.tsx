import Image from "next/image"
import Link from "next/link"; // Usamos Link de Next.js para navegación rápida

const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

export default function PokesLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex flex-col">
            
            <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 overflow-x-auto">
                
                <div className="flex flex-row items-center p-2 gap-2 min-w-max">
                    {ids.map((id) => (
                        <Link 
                            key={id} 
                            href={`/pokes/${id}`} 
                            className="flex-shrink-0 group relative p-1 transition-transform hover:scale-110 focus:scale-110"
                        >
                            <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-slate-100 dark:bg-slate-800 rounded-full border border-transparent hover:border-blue-400 overflow-hidden">
                                <Image 
                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`} 
                                    alt={`Pokemon ${id}`} 
                                    width={64} 
                                    height={64}
                                    className="object-contain p-1 w-full h-full"
                                />
                            </div>
                        </Link>
                    ))}
                </div>
            </nav>
            
            <main className="flex-1">
                {children}
            </main>
        </div>
    );
}