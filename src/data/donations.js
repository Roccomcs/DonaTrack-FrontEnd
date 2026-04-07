export const donations = [
  {
    id: 'donation-1',
    title: 'Donacion de Alimentos - Fundacion Despierta',
    status: 'Entregada',
    entity_name: 'Fundacion Despierta',
    location: {
      address: 'Av. Corrientes 4500, Villa Crespo, CABA',
      lat: -34.5989,
      lng: -58.4395,
    },
    delivery_date: '12 de marzo de 2026',
    items: [
      { name: 'Arroz', quantity: '50 kg' },
      { name: 'Lentejas', quantity: '35 kg' },
      { name: 'Leche en polvo', quantity: '40 unidades' },
    ],
    total_units: 125,
    beneficiaries_count: 150,
    description:
      'La entrega fue organizada para abastecer el comedor comunitario del barrio durante dos semanas y asegurar insumos esenciales para familias en situación de vulnerabilidad.',
    image_url: '/donation-images/fundacion-despierta.svg',
  },
  {
    id: 'donation-2',
    title: 'Donacion de Abrigo - Red Solidaria Norte',
    status: 'Entregada',
    entity_name: 'Red Solidaria Norte',
    location: {
      address: 'Av. Cabildo 2100, Belgrano, CABA',
      lat: -34.5622,
      lng: -58.4561,
    },
    delivery_date: '18 de marzo de 2026',
    items: [
      { name: 'Mantas', quantity: '28 unidades' },
      { name: 'Buzos', quantity: '42 unidades' },
      { name: 'Medias térmicas', quantity: '60 pares' },
    ],
    total_units: 130,
    beneficiaries_count: 95,
    description:
      'La campaña de abrigo permitió reforzar la asistencia a personas mayores y familias con niños durante una semana de bajas temperaturas.',
    image_url:
      'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=900&h=650&fit=crop',
  },
  {
    id: 'donation-3',
    title: 'Donacion Escolar - Escuela Puentes',
    status: 'Entregada',
    entity_name: 'Escuela Puentes',
    location: {
      address: 'Rivadavia 5200, Caballito, CABA',
      lat: -34.6179,
      lng: -58.4471,
    },
    delivery_date: '25 de marzo de 2026',
    items: [
      { name: 'Cuadernos', quantity: '80 unidades' },
      { name: 'Lápices', quantity: '120 unidades' },
      { name: 'Mochilas', quantity: '30 unidades' },
    ],
    total_units: 230,
    beneficiaries_count: 180,
    description:
      'La entrega estuvo destinada a estudiantes de primaria para acompañar el inicio del ciclo lectivo con materiales completos y acceso igualitario.',
    image_url:
      'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=900&h=650&fit=crop',
  },
  {
    id: 'donation-4',
    title: 'Donacion de Alimentos - Comedor San Telmo',
    status: 'Entregada',
    entity_name: 'Comedor San Telmo',
    location: {
      address: 'Defensa 900, San Telmo, CABA',
      lat: -34.6172,
      lng: -58.3714,
    },
    delivery_date: '2 de abril de 2026',
    items: [
      { name: 'Fideos', quantity: '60 kg' },
      { name: 'Salsa de tomate', quantity: '75 unidades' },
      { name: 'Aceite', quantity: '25 litros' },
    ],
    total_units: 160,
    beneficiaries_count: 210,
    description:
      'Los insumos permitieron sostener la cocina del comedor y garantizar almuerzos para personas en situación de calle y familias del área sur.',
    image_url:
      'https://images.unsplash.com/photo-1547592180-85f173990554?w=900&h=650&fit=crop',
  },
  {
    id: 'donation-5',
    title: 'Donacion Comunitaria - Centro Nueva Esperanza',
    status: 'Entregada',
    entity_name: 'Centro Nueva Esperanza',
    location: {
      address: 'Serrano 1700, Villa Crespo, CABA',
      lat: -34.5946,
      lng: -58.4434,
    },
    delivery_date: '5 de abril de 2026',
    items: [
      { name: 'Jabón de tocador', quantity: '90 unidades' },
      { name: 'Pañales', quantity: '45 paquetes' },
      { name: 'Shampoo', quantity: '70 unidades' },
    ],
    total_units: 205,
    beneficiaries_count: 140,
    description:
      'La donación apoyó un operativo de higiene y cuidado personal para madres con bebés, niñas, niños y personas mayores acompañadas por el centro.',
    image_url:
      'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=900&h=650&fit=crop',
  },
]