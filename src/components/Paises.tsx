import React from 'react'
import type {CountriesDataP} from '../data/contries' 
const Paises: React.FC<CountriesDataP> = ({country}) => {
    return (
        <>
            <body className="bg-white text-gray-800">

                <header className="relative bg-blue-900 h-[650px] flex items-center mt-8">
                    <div className="absolute inset-0 z-0">
                        <img src="https://images.unsplash.com/photo-1518135714426-c18f5ffb6f4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="Entrega Paquetes" className="w-full h-full object-cover opacity-20" />
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-900/80 to-transparent"></div>
                    </div>

                    <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="text-white space-y-6">
                            <div className="flex items-center space-x-3 mb-2">
                                <img src={`https://flagcdn.com/w40/${country.flagCode}.png`} alt="Bandera México" className="h-6 rounded shadow-sm" />
                                <span className="text-orange-500 font-bold tracking-widest uppercase text-sm">Destino: {country.name}</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                                Compra en USA. <br />
                                Recibe en <span className="text-green-400">{country.name}</span> sin complicaciones.
                            </h1>

                            <p className="text-lg text-blue-100 max-w-lg">
                                Casillero gratis + envíos rápidos + entrega a domicilio. Olvídate de aduanas complicadas; nosotros lo hacemos fácil.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <a href="#" className="bg-red-700 text-white text-center px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-500 transition shadow-lg transform hover:-translate-y-1">
                                    Cotiza Ahora
                                </a>
                                <a href="#" className="bg-white text-red-700 text-center px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-lg">
                                    Solicita tu Casillero Gratis
                                </a>
                            </div>

                            <div className="flex items-center space-x-6 pt-4 text-sm text-blue-200">
                                <div className="flex items-center"><i className="fas fa-check-circle text-green-400 mr-2"></i> Rastreable 24/7</div>
                                <div className="flex items-center"><i className="fas fa-check-circle text-green-400 mr-2"></i> Seguro incluido</div>
                            </div>
                        </div>

                        <div className="hidden lg:block relative">
                            <div className="bg-white p-2 rounded-2xl shadow-2xl rotate-2 hover:rotate-0 transition duration-500">
                                <img src="https://cdn.pixabay.com/photo/2020/11/02/10/44/aircraft-5706274_1280.jpg" alt="Equipo Xoom Cargo" className="rounded-xl" />
                                <div className="absolute bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl border-l-4 border-green-500">
                                    <p className="font-bold text-gray-800">Próxima salida a {country.name}:</p>
                                    <p className="text-green-600 font-bold"><i className="fas fa-plane-departure mr-2"></i> Este Viernes</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-6">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl font-bold text-red-700 mb-4">¿Por qué enviar a {country.name} con Xoom Cargo?</h2>
                            <p className="text-gray-600">Diseñado para solucionar tus problemas: sin retrasos, sin cobros ocultos y con total seguridad.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition border-b-4 border-orange-500">
                                <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 text-2xl mb-6">
                                    <i className="fas fa-lock-open"></i>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Casillero 100% Gratis</h3>
                                <p className="text-gray-600 text-sm">Recibe tus compras en nuestra bodega de Miami sin pagar mensualidades ni costos de apertura.</p>
                            </div>

                            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition border-b-4 border-blue-500">
                                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl mb-6">
                                    <i className="fas fa-box"></i>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Consolidación Sin Costo</h3>
                                <p className="text-gray-600 text-sm">Junta paquetes de Amazon, Shein y Walmart en un solo envío para ahorrar mucho dinero.</p>
                            </div>

                            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition border-b-4 border-green-500">
                                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-2xl mb-6">
                                    <i className="fas fa-shipping-fast"></i>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Entrega Puerta a Puerta</h3>
                                <p className="text-gray-600 text-sm">Entregamos en {country.ciudades} y cualquier rincón de {country.name}. Olvida los trámites.</p>
                            </div>

                            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition border-b-4 border-purple-500">
                                <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-2xl mb-6">
                                    <i className="fas fa-mobile-alt"></i>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Rastreo 24/7</h3>
                                <p className="text-gray-600 text-sm">Monitorea tu paquete en tiempo real desde que llega a Miami hasta que tocan tu puerta.</p>
                            </div>

                            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition border-b-4 border-yellow-500">
                                <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 text-2xl mb-6">
                                    <i className="fas fa-bolt"></i>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Envíos Rápidos (5-7 días)</h3>
                                <p className="text-gray-600 text-sm">Salidas frecuentes semanales para que no esperes meses por tus compras.</p>
                            </div>

                            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition border-b-4 border-red-500">
                                <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center text-red-600 text-2xl mb-6">
                                    <i className="fas fa-hand-holding-usd"></i>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Tarifas Transparentes</h3>
                                <p className="text-gray-600 text-sm">Sin sorpresas. Cotiza antes de enviar y paga lo justo por tu carga.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="bg-blue-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
                            <div className="md:w-1/2 p-10 md:p-16 text-white flex flex-col justify-center">
                                <h2 className="text-3xl font-bold mb-6">¿Para quién es este servicio?</h2>
                                <ul className="space-y-6">
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle text-orange-500 mt-1 mr-4 text-xl"></i>
                                        <div>
                                            <h4 className="font-bold text-lg">Familias e Inmigrantes</h4>
                                            <p className="text-blue-200 text-sm">Envía regalos, ropa y artículos del hogar a tus seres queridos en {country.name}.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle text-orange-500 mt-1 mr-4 text-xl"></i>
                                        <div>
                                            <h4 className="font-bold text-lg">Personal Shoppers y Revendedores</h4>
                                            <p className="text-blue-200 text-sm">Compra al mayoreo en USA y recibe en tu negocio en {country.name} para revender.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle text-orange-500 mt-1 mr-4 text-xl"></i>
                                        <div>
                                            <h4 className="font-bold text-lg">Tiendas y PyMES</h4>
                                            <p className="text-blue-200 text-sm">Abastece tu inventario con productos importados sin complicaciones logísticas.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="md:w-1/2 bg-[url('https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center min-h-[400px]">
                                <div className="h-full w-full bg-blue-900/30 backdrop-blur-sm flex items-center justify-center">
                                    <div className="bg-white/90 p-6 rounded-xl shadow-lg max-w-xs text-center">
                                        <i className="fas fa-user-friends text-4xl text-blue-900 mb-4"></i>
                                        <p className="text-blue-900 font-bold">Uniendo familias y negocios a través de las fronteras</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-6 max-w-5xl">
                        <h2 className="text-3xl font-bold text-center text-red-700 mb-16">Tu envío a {country.name} en 5 pasos simples</h2>

                        <div className="relative">
                            <div className="absolute left-8 md:left-1/2 h-full w-1 bg-gray-200 transform -translate-x-1/2 hidden md:block"></div>

                            <div className="flex flex-col md:flex-row items-center mb-12 relative">
                                <div className="md:w-1/2 text-right pr-8 hidden md:block">
                                    <h4 className="text-xl font-bold text-blue-900">Regístrate Gratis</h4>
                                    <p className="text-gray-600">Obtén tu dirección física y número de casillero en EE.UU. al instante.</p>
                                </div>
                                <div className="z-10 bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl shadow-lg border-4 border-white">1</div>
                                <div className="md:w-1/2 pl-8 md:hidden"> <h4 className="text-xl font-bold text-blue-900">Regístrate Gratis</h4>
                                    <p className="text-gray-600">Obtén tu dirección física en EE.UU.</p>
                                </div>
                                <div className="md:w-1/2 pl-8 hidden md:block"></div> </div>

                            <div className="flex flex-col md:flex-row items-center mb-12 relative">
                                <div className="md:w-1/2 pr-8 hidden md:block"></div>
                                <div className="z-10 bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl shadow-lg border-4 border-white">2</div>
                                <div className="md:w-1/2 pl-8">
                                    <h4 className="text-xl font-bold text-blue-900">Compra Online</h4>
                                    <p className="text-gray-600">Envía tus compras de Amazon, eBay o mayoristas a tu casillero.</p>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row items-center mb-12 relative">
                                <div className="md:w-1/2 text-right pr-8 hidden md:block">
                                    <h4 className="text-xl font-bold text-blue-900">Recibimos y Consolidamos</h4>
                                    <p className="text-gray-600">Juntamos tus paquetes y reempaquetamos para proteger y ahorrar.</p>
                                </div>
                                <div className="z-10 bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl shadow-lg border-4 border-white">3</div>
                                <div className="md:w-1/2 pl-8 md:hidden">
                                    <h4 className="text-xl font-bold text-blue-900">Recibimos y Consolidamos</h4>
                                    <p className="text-gray-600">Juntamos tus paquetes para ahorrar.</p>
                                </div>
                                <div className="md:w-1/2 pl-8 hidden md:block"></div>
                            </div>

                            <div className="flex flex-col md:flex-row items-center mb-12 relative">
                                <div className="md:w-1/2 pr-8 hidden md:block"></div>
                                <div className="z-10 bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl shadow-lg border-4 border-white">4</div>
                                <div className="md:w-1/2 pl-8">
                                    <h4 className="text-xl font-bold text-blue-900">Despacho Seguro</h4>
                                    <p className="text-gray-600">Enviamos tu carga con seguro incluido y número de rastreo.</p>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row items-center relative">
                                <div className="md:w-1/2 text-right pr-8 hidden md:block">
                                    <h4 className="text-xl font-bold text-blue-900">Entrega en {country.name}</h4>
                                    <p className="text-gray-600">Recibe en la puerta de tu casa u oficina sin pagar extra al recibir.</p>
                                </div>
                                <div className="z-10 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl shadow-lg border-4 border-white">5</div>
                                <div className="md:w-1/2 pl-8 md:hidden">
                                    <h4 className="text-xl font-bold text-blue-900">Entrega en {country.name}</h4>
                                    <p className="text-gray-600">Recibe en tu puerta sin pagos extra.</p>
                                </div>
                                <div className="md:w-1/2 pl-8 hidden md:block"></div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center text-red-700 mb-12">Lo que dicen nuestros clientes en {country.name}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-gray-50 p-6 rounded-xl shadow-sm italic text-gray-600">
                                <div className="text-orange-500 text-xl mb-4"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></div>
                                <p className="mb-6">"Tengo una boutique en Guadalajara y traigo toda mi mercancía con Xoom Cargo. La consolidación me ahorra muchísimo dinero en cada envío."</p>
                                <div className="font-bold text-blue-900 not-italic">- Sofía Ramírez, Guadalajara</div>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-xl shadow-sm italic text-gray-600">
                                <div className="text-orange-500 text-xl mb-4"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></div>
                                <p className="mb-6">"Excelente servicio para enviar regalos a mi familia en CDMX. Llegó todo perfecto y en menos de una semana. Súper recomendado."</p>
                                <div className="font-bold text-blue-900 not-italic">- Carlos Méndez, Cliente Personal</div>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-xl shadow-sm italic text-gray-600">
                                <div className="text-orange-500 text-xl mb-4"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></div>
                                <p className="mb-6">"Lo mejor es que te cobran precio final, sin sorpresas de aduana al llegar. Llegan hasta la puerta de mi casa sin problema."</p>
                                <div className="font-bold text-blue-900 not-italic">- Ana Paula L., Ciudad de México</div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-blue-50">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">Preguntas Frecuentes sobre envíos a {country.name}</h2>

                        <div className="space-y-4">
                            <details className="group bg-white rounded-lg shadow-sm">
                                <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-blue-900 group-open:text-orange-500 transition">
                                    <span>¿Cuánto tarda el envío a México?</span>
                                    <span className="transition group-open:rotate-180"><i className="fas fa-chevron-down"></i></span>
                                </summary>
                                <div className="text-gray-600 p-6 pt-0 leading-relaxed">
                                    Nuestros envíos aéreos a México tienen un tiempo estimado de entrega de <strong>5 a 7 días hábiles</strong> desde que el paquete sale de nuestra bodega en Miami.
                                </div>
                            </details>

                            <details className="group bg-white rounded-lg shadow-sm">
                                <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-blue-900 group-open:text-orange-500 transition">
                                    <span>¿Quién paga los impuestos de aduana?</span>
                                    <span className="transition group-open:rotate-180"><i className="fas fa-chevron-down"></i></span>
                                </summary>
                                <div className="text-gray-600 p-6 pt-0 leading-relaxed">
                                    Manejamos un servicio puerta a puerta donde, en la mayoría de los casos de paquetería personal, la tarifa por libra incluye los gastos de nacionalización. Para carga comercial grande, te asesoramos previamente.
                                </div>
                            </details>

                            <details className="group bg-white rounded-lg shadow-sm">
                                <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-blue-900 group-open:text-orange-500 transition">
                                    <span>¿Puedo enviar compras al mayoreo?</span>
                                    <span className="transition group-open:rotate-180"><i className="fas fa-chevron-down"></i></span>
                                </summary>
                                <div className="text-gray-600 p-6 pt-0 leading-relaxed">
                                    ¡Sí! Somos expertos en logística para negocios. Puedes comprar al por mayor y nosotros consolidamos todo en cajas máster para facilitar el envío y reducir costos.
                                </div>
                            </details>

                            <details className="group bg-white rounded-lg shadow-sm">
                                <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-blue-900 group-open:text-orange-500 transition">
                                    <span>¿Qué artículos no se pueden enviar?</span>
                                    <span className="transition group-open:rotate-180"><i className="fas fa-chevron-down"></i></span>
                                </summary>
                                <div className="text-gray-600 p-6 pt-0 leading-relaxed">
                                    No enviamos armas, drogas, dinero en efectivo, joyas de alto valor, materiales inflamables ni productos perecederos sin refrigeración. Consulta nuestra lista completa de artículos prohibidos.
                                </div>
                            </details>
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-orange-500 text-center px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">¿Listo para enviar a {country.name}?</h2>
                    <p className="text-white text-lg mb-8 max-w-2xl mx-auto">No lo pienses más. Abre tu casillero gratis hoy mismo y empieza a comprar en USA sin límites.</p>
                    <a href="#" className="inline-block bg-red-700 text-white font-bold py-4 px-10 rounded-full hover:bg-red-800 transition shadow-xl transform hover:scale-105">
                        ¡Empezar Ahora!
                    </a>
                </section>

            </body>
        </>
    )
}

export default Paises

