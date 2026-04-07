import { Camera, CheckCircle, Users } from 'lucide-react'

export const heroContent = {
  kicker: 'Donaciones transparentes y verificables',
  title: 'Cada ayuda cuenta, y cada entrega se puede comprobar.',
  description:
    'DonaTrack conecta personas que donan con quienes necesitan apoyo, mostrando evidencia real de cada donacion mediante fotos publicas.',
  ctaLabel: 'Ver como funciona',
  heroImage:
    'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=900&h=700&fit=crop',
}

export const heroStats = [
  { value: '2,847', label: 'donaciones verificadas' },
  { value: '1,234', label: 'familias impactadas' },
  { value: '98%', label: 'satisfaccion reportada' },
]

export const landingFeatures = [
  {
    title: 'Transparencia total',
    description: 'Seguimiento en tiempo real de cada donacion con evidencia fotografica.',
    icon: CheckCircle,
  },
  {
    title: 'Conexion directa',
    description: 'Donantes y beneficiarios conectan sin intermediarios innecesarios.',
    icon: Users,
  },
  {
    title: 'Verificacion fotografica',
    description: 'Cada entrega queda documentada en una galeria publica y trazable.',
    icon: Camera,
  },
]

export const featuredDonations = [
  {
    id: 1,
    donorName: 'Maria Gonzalez',
    item: 'Ropa de invierno',
    date: '15 de marzo, 2026',
    beneficiary: 'Centro Comunitario Norte',
    image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=400&h=300&fit=crop',
  },
  {
    id: 2,
    donorName: 'Carlos Ramirez',
    item: 'Juguetes educativos',
    date: '20 de marzo, 2026',
    beneficiary: 'Escuela Primaria La Esperanza',
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=300&fit=crop',
  },
  {
    id: 3,
    donorName: 'Ana Lopez',
    item: 'Alimentos no perecederos',
    date: '28 de marzo, 2026',
    beneficiary: 'Comedor Social San Jose',
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&h=300&fit=crop',
  },
]

export const recentDeliveries = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=300&h=300&fit=crop',
    title: 'Entrega de utiles escolares',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=300&h=300&fit=crop',
    title: 'Distribucion de alimentos',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=300&h=300&fit=crop',
    title: 'Donacion de ropa',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=300&h=300&fit=crop',
    title: 'Juguetes para ninos',
  },
]

export const footerLinks = {
  quickLinks: [
    { label: 'Acerca de', href: '#about' },
    { label: 'Donaciones', href: '#donations' },
    { label: 'Galeria', href: '#gallery' },
  ],
  accessLinks: [
    { label: 'Iniciar sesion', href: '#' },
    { label: 'Registro donantes', href: '#' },
    { label: 'Registro beneficiarios', href: '#' },
  ],
  legalLinks: [
    { label: 'Terminos de servicio', href: '#' },
    { label: 'Politica de privacidad', href: '#' },
    { label: 'Aviso legal', href: '#' },
  ],
}