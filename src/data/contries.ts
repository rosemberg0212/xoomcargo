
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
interface CountryData {
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
  }
  // Agrega más países aquí...
};