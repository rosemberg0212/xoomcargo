import React, { useState } from 'react';

export default function Calculator() {
  // Estados para los inputs
  const [formData, setFormData] = useState({
    destination: 'colombia',
    service: 'aereo',
    weight: '',
    length: '',
    width: '',
    height: '',
    value: ''
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // Manejador de cambios
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Limpiar resultado si cambian datos para obligar a recalcular
    if (result) setResult(null); 
  };

  // Simulación de cálculo (Aquí conectarías tu lógica real o Backend)
  const handleCalculate = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulamos un delay de red
    setTimeout(() => {
      // Lógica Fake de precios (Solo demostración)
      const weightCost = parseFloat(formData.weight || 0) * 2.50; // $2.50 por libra
      const volWeight = (formData.length * formData.width * formData.height) / 166; 
      const insurance = parseFloat(formData.value || 0) * 0.05; // 5% seguro
      
      setResult({
        shipping: weightCost.toFixed(2),
        insurance: insurance.toFixed(2),
        total: (weightCost + insurance + 10).toFixed(2), // +10 fee base
        volumetric: volWeight.toFixed(2)
      });
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row max-w-6xl mx-auto border border-gray-100">
      
      {/* SECCIÓN IZQUIERDA: FORMULARIO */}
      <div className="p-8 lg:p-12 lg:w-2/3">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-900 flex items-center">
            <i className="fas fa-calculator text-orange-500 mr-3"></i> 
            Cotizador Rápido
          </h2>
          <p className="text-gray-500 text-sm mt-2">Obtén un estimado inmediato para tu envío desde USA.</p>
        </div>

        <form onSubmit={handleCalculate} className="space-y-6">
          
          {/* Fila 1: Destino y Servicio */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-2">País de Destino</label>
              <div className="relative">
                <select 
                  name="destination" 
                  value={formData.destination} 
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-lg focus:outline-none focus:bg-white focus:border-orange-500 appearance-none cursor-pointer"
                >
                  <option value="colombia">🇨🇴 Colombia</option>
                  <option value="venezuela">🇻🇪 Venezuela</option>
                  <option value="mexico">🇲🇽 México</option>
                  <option value="panama">🇵🇦 Panamá</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <i className="fas fa-chevron-down text-xs"></i>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Tipo de Envío</label>
              <div className="flex bg-gray-100 p-1 rounded-lg">
                <button 
                  type="button"
                  onClick={() => setFormData({...formData, service: 'aereo'})}
                  className={`flex-1 py-2 rounded-md text-sm font-medium transition ${formData.service === 'aereo' ? 'bg-white text-blue-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  <i className="fas fa-plane mr-2"></i> Aéreo
                </button>
                <button 
                  type="button"
                  onClick={() => setFormData({...formData, service: 'maritimo'})}
                  className={`flex-1 py-2 rounded-md text-sm font-medium transition ${formData.service === 'maritimo' ? 'bg-white text-blue-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  <i className="fas fa-ship mr-2"></i> Marítimo
                </button>
              </div>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Fila 2: Medidas del Paquete */}
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase mb-3">
              Detalles del Paquete <span className="text-gray-400 font-normal normal-case">(Libras y Pulgadas)</span>
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="relative">
                <input 
                  type="number" name="weight" placeholder="0" required
                  className="w-full border border-gray-200 rounded-lg py-3 px-4 focus:ring-2 focus:ring-orange-200 focus:border-orange-500 outline-none transition"
                  onChange={handleChange}
                />
                <span className="absolute right-3 top-3.5 text-gray-400 text-xs font-bold">LB</span>
                <span className="block text-xs text-gray-400 mt-1">Peso</span>
              </div>
              <div className="relative">
                <input 
                  type="number" name="length" placeholder="0" 
                  className="w-full border border-gray-200 rounded-lg py-3 px-4 focus:ring-2 focus:ring-orange-200 focus:border-orange-500 outline-none transition"
                  onChange={handleChange}
                />
                <span className="absolute right-3 top-3.5 text-gray-400 text-xs font-bold">IN</span>
                <span className="block text-xs text-gray-400 mt-1">Largo</span>
              </div>
              <div className="relative">
                <input 
                  type="number" name="width" placeholder="0" 
                  className="w-full border border-gray-200 rounded-lg py-3 px-4 focus:ring-2 focus:ring-orange-200 focus:border-orange-500 outline-none transition"
                  onChange={handleChange}
                />
                <span className="absolute right-3 top-3.5 text-gray-400 text-xs font-bold">IN</span>
                <span className="block text-xs text-gray-400 mt-1">Ancho</span>
              </div>
              <div className="relative">
                <input 
                  type="number" name="height" placeholder="0" 
                  className="w-full border border-gray-200 rounded-lg py-3 px-4 focus:ring-2 focus:ring-orange-200 focus:border-orange-500 outline-none transition"
                  onChange={handleChange}
                />
                <span className="absolute right-3 top-3.5 text-gray-400 text-xs font-bold">IN</span>
                <span className="block text-xs text-gray-400 mt-1">Alto</span>
              </div>
            </div>
          </div>

          {/* Fila 3: Valor declarado */}
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Valor Declarado (USD)</label>
            <div className="relative">
              <span className="absolute left-4 top-3.5 text-gray-500">$</span>
              <input 
                type="number" name="value" placeholder="Ej: 150.00" 
                className="w-full border border-gray-200 rounded-lg py-3 pl-8 pr-4 focus:ring-2 focus:ring-orange-200 focus:border-orange-500 outline-none transition"
                onChange={handleChange}
              />
            </div>
            <p className="text-xs text-gray-400 mt-1"><i className="fas fa-info-circle mr-1"></i> Usamos esto para calcular el seguro opcional.</p>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-blue-900 text-white font-bold py-4 rounded-xl hover:bg-blue-800 transition transform hover:scale-[1.01] shadow-lg flex justify-center items-center"
          >
            {loading ? (
              <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-2"></span>
            ) : (
              <i className="fas fa-calculator mr-2"></i>
            )}
            {loading ? 'Calculando...' : 'Calcular Costo Estimado'}
          </button>
        </form>
      </div>

      {/* SECCIÓN DERECHA: RESULTADOS / INFO */}
      <div className="bg-gray-50 p-8 lg:p-12 lg:w-1/3 border-t lg:border-t-0 lg:border-l border-gray-100 flex flex-col justify-center relative">
        
        {!result ? (
          // Estado Inicial: Información Educativa
          <div className="text-center opacity-70">
            <div className="mb-6 inline-block p-4 bg-white rounded-full shadow-sm">
              <i className="fas fa-cubes text-4xl text-blue-200"></i>
            </div>
            <h3 className="text-lg font-bold text-gray-700 mb-2">¿Peso Real o Volumétrico?</h3>
            <p className="text-sm text-gray-500 mb-4">
              En envíos aéreos, se cobra el mayor entre el peso físico y el volumen que ocupa la caja.
            </p>
            <div className="text-xs bg-blue-100 text-blue-800 py-1 px-3 rounded-full inline-block">
              Tip: Consolida tus paquetes
            </div>
          </div>
        ) : (
          // Estado Resultado: Ticket
          <div className="animate-fade-in-up">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 mb-6 relative">
              {/* Decoración de ticket */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Estimado
              </div>
              
              <div className="flex justify-between items-center mb-4 border-b border-gray-100 pb-4">
                <span className="text-gray-500 text-sm">Flete ({formData.weight} lb)</span>
                <span className="font-bold text-gray-800">${result.shipping}</span>
              </div>
              <div className="flex justify-between items-center mb-4 border-b border-gray-100 pb-4">
                <span className="text-gray-500 text-sm">Seguro y Manejo</span>
                <span className="font-bold text-gray-800">${result.insurance}</span>
              </div>
              
              <div className="flex justify-between items-center mt-2">
                <span className="text-blue-900 font-bold text-lg">Total Aprox.</span>
                <span className="text-orange-500 font-extrabold text-3xl">${result.total}</span>
              </div>
            </div>

            <div className="space-y-3">
              <button className="w-full bg-green-500 text-white font-bold py-3 rounded-lg hover:bg-green-600 transition shadow-md">
                <i className="fab fa-whatsapp mr-2"></i> Confirmar con un Asesor
              </button>
              <button className="w-full bg-white text-blue-900 border border-blue-200 font-bold py-3 rounded-lg hover:bg-blue-50 transition">
                Enviar a mi correo
              </button>
            </div>
            
            <p className="text-xs text-gray-400 text-center mt-6">
              *Tarifas sujetas a cambios. El peso volumétrico calculado es {result.volumetric} lbs.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}