// Catalogue data — prices are in Indonesian Rupiah.
// `image` is the primary URL; if it fails to load the card falls back to a
// styled placeholder with the bike's name. Swap these URLs for your own
// photos of each bike when you have them.
window.BIKES = [
  {
    id: 'scoopy',
    name: 'Honda Scoopy',
    tagline: '110cc · Retro automatic',
    category: 'scooter',
    pricePerDay: 100000,
    pricePerMonth: 1000000,
    badge: 'Most popular',
    image: 'https://images.unsplash.com/photo-1591215568093-ce0ce46f4eaf?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'fazzio',
    name: 'Yamaha Fazzio',
    tagline: '125cc · Hybrid automatic',
    category: 'scooter',
    pricePerDay: 110000,
    pricePerMonth: 1400000,
    image: 'https://images.unsplash.com/photo-1568708244999-72ab2c0bd040?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'stylo',
    name: 'Honda Stylo',
    tagline: '160cc · Classic automatic',
    category: 'scooter',
    pricePerDay: 130000,
    pricePerMonth: 1800000,
    image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'vario',
    name: 'Honda Vario',
    tagline: '160cc · Sport automatic',
    category: 'scooter',
    pricePerDay: 130000,
    pricePerMonth: 1800000,
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'vespa',
    name: 'Vespa Primavera',
    tagline: '150cc · Italian icon',
    category: 'scooter',
    pricePerDay: 150000,
    pricePerMonth: 2500000,
    badge: 'Iconic',
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'pcx',
    name: 'Honda PCX',
    tagline: '160cc · Smooth cruiser',
    category: 'maxi',
    pricePerDay: 150000,
    pricePerMonth: 2500000,
    image: 'https://images.unsplash.com/photo-1601986313629-fee2fc2cf1ab?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'nmax',
    name: 'Yamaha NMAX',
    tagline: '155cc · Maxi-scooter',
    category: 'maxi',
    pricePerDay: 150000,
    pricePerMonth: 2500000,
    image: 'https://images.unsplash.com/photo-1635073908681-b4dfc1e6c5d2?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'adv',
    name: 'Honda ADV',
    tagline: '160cc · Adventure scooter',
    category: 'maxi',
    pricePerDay: 150000,
    pricePerMonth: 2500000,
    image: 'https://images.unsplash.com/photo-1611241443322-b5c0e9d4d2c8?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'xmax',
    name: 'Yamaha XMAX',
    tagline: '250cc · Premium maxi',
    category: 'maxi',
    pricePerDay: 300000,
    pricePerMonth: 4000000,
    badge: 'Premium',
    image: 'https://images.unsplash.com/photo-1558979158-65a1eaa08691?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'mt250',
    name: 'Yamaha MT-25',
    tagline: '250cc · Naked sport',
    category: 'motorcycle',
    pricePerDay: 250000,
    pricePerMonth: 3000000,
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'inazuma',
    name: 'Suzuki Inazuma',
    tagline: '250cc · Twin-cylinder',
    category: 'motorcycle',
    pricePerDay: 270000,
    pricePerMonth: 3500000,
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'duke',
    name: 'KTM Duke',
    tagline: '250cc · Street fighter',
    category: 'motorcycle',
    pricePerDay: 250000,
    pricePerMonth: 3000000,
    badge: 'Powerful',
    image: 'https://images.unsplash.com/photo-1580310614729-ccd69652491d?auto=format&fit=crop&w=900&q=80'
  }
];
