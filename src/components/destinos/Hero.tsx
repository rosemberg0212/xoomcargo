import React from 'react';

export default function Hero({ data }) {
    return (
        <header className="relative bg-blue-900 h-[600px] flex items-center overflow-hidden">
            {/* Fondo con Overlay */}
            <div className="absolute inset-0 z-0">
                <img src={data.heroImage} alt={data.name} className="w-full h-full object-cover opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-900/80 to-transparent"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="text-white space-y-6">
                    <div className="flex items-center space-x-3 mb-2">
                        <img src={`https://flagcdn.com/w40/${data.flagCode}.png`} alt={`Bandera ${data.name}`} className="h-6 rounded shadow-sm" />
                        <span className="text-orange-500 font-bold tracking-widest uppercase text-sm">Destino: {data.name}</span>
                    </div>

                    {/* Usamos dangerouslySetInnerHTML para permitir los span de colores */}
                    <h1
                        className="text-4xl md:text-5xl font-extrabold leading-tight"
                        dangerouslySetInnerHTML={{ __html: data.heroTitle }}
                    />

                    <p className="text-lg text-blue-100 max-w-lg">{data.heroSubtitle}</p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <a href="#cotizar" className="bg-orange-500 text-white text-center px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition shadow-lg">
                            Cotiza Ahora
                        </a>
                        <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition">
                            Abrir Casillero
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}