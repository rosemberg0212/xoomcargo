import React from 'react';

export default function Benefits({ list, countryName }) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-16">
          ¿Por qué enviar a {countryName}?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {list.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition border-b-4 border-orange-500">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl mb-6">
                <i className={item.icon}></i> {/* Asegúrate de cargar FontAwesome en el Layout */}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}