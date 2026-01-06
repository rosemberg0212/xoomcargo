
// Interfaz para cada beneficio
interface Benefit {
  icon: string;
  title: string;
  text: string;
}

// Interfaz para cada pregunta frecuente
interface FAQ {
  q: string;
  a: string;
}

// Interfaz para la información de un país
export interface CountryData {
  name: string;
  slug: string;
  flagCode: string;
  heroTitle: string;
  heroSubtitle: string;
  ciudades: string;
  heroImage: string;
  benefits: Benefit[];
  faq: FAQ[];
}

// Interfaz para el objeto completo de países
export interface CountriesDataP {
  [key: string]: CountryData;
}


export const countriesData = {
  mexico: {
    name: "México",
    slug: "mexico", // Importante para la URL
    flagCode: "mx",
    heroTitle: "Compra en USA. Recibe en <span class='text-green-400'>México</span> sin complicaciones.",
    heroSubtitle: "Entregas puerta a puerta en CDMX, Guadalajara, Monterrey y todo el país.",
    heroImage: "https://images.unsplash.com/photo-1518135714426-c18f5ffb6f4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    ciudades: "CDMX, Guadalajara, Monterrey",
    benefits: [
      { icon: "fas fa-lock-open", title: "Casillero Gratis", text: "Sin costos de apertura ni mantenimiento." },
      { icon: "fas fa-shipping-fast", title: "Envíos Rápidos", text: "Salidas aéreas semanales." },
      { icon: "fas fa-home", title: "Puerta a Puerta", text: "Entregamos en tu domicilio." }
    ],
    faq: [
      { q: "¿Cuánto tarda el envío?", a: "5 a 7 días hábiles aéreo." },
      { q: "¿Impuestos?", a: "Incluidos en la mayoría de tarifas por libra." }
    ]
  },
  colombia: {
    name: "Colombia",
    slug: "colombia",
    flagCode: "co",
    heroTitle: "Tus compras de USA en <span class='text-yellow-400'>Colombia</span> en tiempo récord.",
    heroSubtitle: "Llegamos a Bogotá, Medellín, Cali y todo el territorio nacional.",
    heroImage: "https://images.unsplash.com/photo-1590497534390-3482755e6e31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    ciudades: "Bogotá, Cartagena, Medellin",
    benefits: [
      { icon: "fas fa-box-open", title: "Consolidación", text: "Junta tus paquetes y ahorra." },
      { icon: "fas fa-truck-moving", title: "Mudanzas", text: "Menajes para retornados." },
      { icon: "fas fa-shield-alt", title: "Seguro Total", text: "Tu carga viaja asegurada." }
    ],
    faq: [
      { q: "¿Tiempos a Colombia?", a: "Aéreo 4-6 días, Marítimo 3-4 semanas." },
      { q: "¿Qué necesito?", a: "Solo tu cédula y casillero virtual." }
    ]
  },
  venezuela: {
    name: "Venezuela",
    slug: "venezuela",
    flagCode: "ve",
    heroTitle: "Tus compras de USA en <span class='text-yellow-400'>Venezuela</span> en tiempo récord.",
    heroSubtitle: "Llegamos a Caracas, Maracaibo, Valencia y Barquisimeto, entre otras.",
    heroImage: "https://images.unsplash.com/photo-1590497534390-3482755e6e31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    ciudades: "Caracas, Maracaibo, Valencia, Barquisimeto",
    benefits: [
      { icon: "fas fa-box-open", title: "Consolidación", text: "Junta tus paquetes y ahorra." },
      { icon: "fas fa-truck-moving", title: "Mudanzas", text: "Menajes para retornados." },
      { icon: "fas fa-shield-alt", title: "Seguro Total", text: "Tu carga viaja asegurada." }
    ],
    faq: [
      { q: "¿Tiempos a Colombia?", a: "Aéreo 4-6 días, Marítimo 3-4 semanas." },
      { q: "¿Qué necesito?", a: "Solo tu cédula y casillero virtual." }
    ]
  },
  panama: {
    name: "Panamá",
    slug: "panama",
    flagCode: "pa",
    heroTitle: "Tus compras de USA en <span class='text-yellow-400'>Panamá</span> en tiempo récord.",
    heroSubtitle: "Llegamos a Ciudad de Panamá, Colón, David y todo el territorio nacional.",
    heroImage: "https://images.unsplash.com/photo-1590497534390-3482755e6e31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    ciudades: "Ciudad de Panamá, Colón, David",
    benefits: [
      { icon: "fas fa-box-open", title: "Consolidación", text: "Junta tus paquetes y ahorra." },
      { icon: "fas fa-truck-moving", title: "Mudanzas", text: "Menajes para retornados." },
      { icon: "fas fa-shield-alt", title: "Seguro Total", text: "Tu carga viaja asegurada." }
    ],
    faq: [
      { q: "¿Tiempos a Colombia?", a: "Aéreo 4-6 días, Marítimo 3-4 semanas." },
      { q: "¿Qué necesito?", a: "Solo tu cédula y casillero virtual." }
    ]
  },
  costa_rica: {
    name: "Costa Rica",
    slug: "costa-rica",
    flagCode: "cr",
    heroTitle: "Tus compras de USA en <span class='text-yellow-400'>Panamá</span> en tiempo récord.",
    heroSubtitle: "Llegamos a San José, Alajuela, Heredia, Cartago y todo el territorio nacional.",
    heroImage: "https://images.unsplash.com/photo-1590497534390-3482755e6e31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    ciudades: "San José, Alajuela, Heredia, Cartago",
    benefits: [
      { icon: "fas fa-box-open", title: "Consolidación", text: "Junta tus paquetes y ahorra." },
      { icon: "fas fa-truck-moving", title: "Mudanzas", text: "Menajes para retornados." },
      { icon: "fas fa-shield-alt", title: "Seguro Total", text: "Tu carga viaja asegurada." }
    ],
    faq: [
      { q: "¿Tiempos a Colombia?", a: "Aéreo 4-6 días, Marítimo 3-4 semanas." },
      { q: "¿Qué necesito?", a: "Solo tu cédula y casillero virtual." }
    ]
  },
  honduras: {
    name: "Honduras",
    slug: "honduras",
    flagCode: "hn",
    heroTitle: "Tus compras de USA en <span class='text-yellow-400'>Panamá</span> en tiempo récord.",
    heroSubtitle: "Llegamos a Tegucigalpa, San Pedro Sula, La Ceiba y todo el territorio nacional.",
    heroImage: "https://images.unsplash.com/photo-1590497534390-3482755e6e31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    ciudades: "Tegucigalpa, San Pedro Sula, La Ceiba",
    benefits: [
      { icon: "fas fa-box-open", title: "Consolidación", text: "Junta tus paquetes y ahorra." },
      { icon: "fas fa-truck-moving", title: "Mudanzas", text: "Menajes para retornados." },
      { icon: "fas fa-shield-alt", title: "Seguro Total", text: "Tu carga viaja asegurada." }
    ],
    faq: [
      { q: "¿Tiempos a Colombia?", a: "Aéreo 4-6 días, Marítimo 3-4 semanas." },
      { q: "¿Qué necesito?", a: "Solo tu cédula y casillero virtual." }
    ]
  },
  republica_dominicana: {
    name: "República Dominicana",
    slug: "republica_dominicana",
    flagCode: "do",
    heroTitle: "Tus compras de USA en <span class='text-yellow-400'>Panamá</span> en tiempo récord.",
    heroSubtitle: "Llegamos a Santo Domingo, Puerto Plata, Santiago de los Caballeros y todo el territorio nacional.",
    heroImage: "https://images.unsplash.com/photo-1590497534390-3482755e6e31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    ciudades: "Santo Domingo, Puerto Plata, Santiago de los Caballeros",
    benefits: [
      { icon: "fas fa-box-open", title: "Consolidación", text: "Junta tus paquetes y ahorra." },
      { icon: "fas fa-truck-moving", title: "Mudanzas", text: "Menajes para retornados." },
      { icon: "fas fa-shield-alt", title: "Seguro Total", text: "Tu carga viaja asegurada." }
    ],
    faq: [
      { q: "¿Tiempos a Colombia?", a: "Aéreo 4-6 días, Marítimo 3-4 semanas." },
      { q: "¿Qué necesito?", a: "Solo tu cédula y casillero virtual." }
    ]
  },
  ecuador: {
    name: "Ecuador",
    slug: "ecuador",
    flagCode: "ec",
    heroTitle: "Tus compras de USA en <span class='text-yellow-400'>Panamá</span> en tiempo récord.",
    heroSubtitle: "Llegamos a Guayaquil, Quito, Cuenca y todo el territorio nacional.",
    heroImage: "https://images.unsplash.com/photo-1590497534390-3482755e6e31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    ciudades: "Guayaquil, Quito, Cuenca",
    benefits: [
      { icon: "fas fa-box-open", title: "Consolidación", text: "Junta tus paquetes y ahorra." },
      { icon: "fas fa-truck-moving", title: "Mudanzas", text: "Menajes para retornados." },
      { icon: "fas fa-shield-alt", title: "Seguro Total", text: "Tu carga viaja asegurada." }
    ],
    faq: [
      { q: "¿Tiempos a Colombia?", a: "Aéreo 4-6 días, Marítimo 3-4 semanas." },
      { q: "¿Qué necesito?", a: "Solo tu cédula y casillero virtual." }
    ]
  }
  // Agrega más países aquí...
};