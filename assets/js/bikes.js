// ---------------------------------------------------------------------------
// Amelia's Bike Rental Bali — catalogue data
// ---------------------------------------------------------------------------
// Prices are in Indonesian Rupiah.
//
// AVAILABILITY: edit `status` for each bike. This is the ONLY place to change it.
//   'available'   → green "Available now" badge, bookable
//   'limited'     → amber "Last one" badge, bookable
//   'unavailable' → grey "Fully booked" badge, booking disabled
//
// PHOTOS: each image lives in assets/img/ and is a freely-licensed photo of the
// model (credits rendered in the site footer). Where an exact-model photo did
// not exist, the closest visual twin was used — flagged with `photoNote`.
// Replace any file in assets/img/ with a photo of the actual rental bike and
// drop the matching `credit` entry.
// ---------------------------------------------------------------------------

window.BIKES = [
  {
    id: 'scoopy', name: 'Honda Scoopy', tagline: '110cc · Retro automatic',
    category: 'scooter', pricePerDay: 100000, pricePerMonth: 1000000,
    badge: 'Most popular', status: 'available',
    image: 'assets/img/scoopy.jpg',
    credit: { title: '2017 Honda Scoopy, Jimbaran', author: 'Alex Neman', license: 'CC BY-SA 4.0' }
  },
  {
    id: 'fazzio', name: 'Yamaha Fazzio', tagline: '125cc · Hybrid automatic',
    category: 'scooter', pricePerDay: 110000, pricePerMonth: 1400000,
    status: 'available',
    image: 'assets/img/fazzio.jpg',
    credit: { title: 'Yamaha Fazzio, Jambi', author: 'Firzafp', license: 'CC BY 4.0' }
  },
  {
    id: 'stylo', name: 'Honda Stylo', tagline: '160cc · Classic automatic',
    category: 'scooter', pricePerDay: 130000, pricePerMonth: 1800000,
    status: 'available',
    image: 'assets/img/stylo.jpg',
    credit: { title: 'Honda Stylo 160, Jambi', author: 'Firzafp', license: 'CC BY 4.0' }
  },
  {
    id: 'vario', name: 'Honda Vario', tagline: '160cc · Sport automatic',
    category: 'scooter', pricePerDay: 130000, pricePerMonth: 1800000,
    status: 'available',
    image: 'assets/img/vario.jpg',
    photoNote: 'Photo shows an earlier Vario 125; the rental bike is the Vario 160.',
    credit: { title: 'Honda Vario Techno 125', author: 'Firzafp', license: 'CC BY-SA 4.0' }
  },
  {
    id: 'vespa', name: 'Vespa Primavera', tagline: '150cc · Italian icon',
    category: 'scooter', pricePerDay: 150000, pricePerMonth: 2500000,
    badge: 'Iconic', status: 'available',
    image: 'assets/img/vespa.jpg',
    credit: { title: '2021 Vespa Primavera 75th', author: 'Mr.choppers', license: 'CC BY-SA 3.0' }
  },
  {
    id: 'pcx', name: 'Honda PCX', tagline: '160cc · Smooth cruiser',
    category: 'maxi', pricePerDay: 150000, pricePerMonth: 2500000,
    status: 'available',
    image: 'assets/img/pcx.jpg',
    credit: { title: 'Honda PCX 160', author: 'Dinkun Chen', license: 'CC BY-SA 4.0' }
  },
  {
    id: 'nmax', name: 'Yamaha NMAX', tagline: '155cc · Maxi-scooter',
    category: 'maxi', pricePerDay: 150000, pricePerMonth: 2500000,
    status: 'available',
    image: 'assets/img/nmax.jpg',
    credit: { title: 'Yamaha NMAX 2025', author: 'AVMOTO', license: 'CC BY-SA 4.0' }
  },
  {
    id: 'adv', name: 'Honda ADV', tagline: '160cc · Adventure scooter',
    category: 'maxi', pricePerDay: 150000, pricePerMonth: 2500000,
    status: 'available',
    image: 'assets/img/adv.jpg',
    credit: { title: 'Honda ADV160, Jambi', author: 'Firzafp', license: 'CC BY-SA 4.0' }
  },
  {
    id: 'xmax', name: 'Yamaha XMAX', tagline: '250cc · Premium maxi',
    category: 'maxi', pricePerDay: 300000, pricePerMonth: 4000000,
    badge: 'Premium', status: 'available',
    image: 'assets/img/xmax.jpg',
    credit: { title: 'Yamaha XMAX', author: 'GT1976', license: 'CC BY-SA 4.0' }
  },
  {
    id: 'mt250', name: 'Yamaha MT-25', tagline: '250cc · Naked sport',
    category: 'motorcycle', pricePerDay: 250000, pricePerMonth: 3000000,
    status: 'available',
    image: 'assets/img/mt250.jpg',
    photoNote: 'Photo shows the MT-03, the MT-25’s visually identical twin.',
    credit: { title: 'Yamaha MT-03, Moscow', author: 'Retired electrician', license: 'CC0' }
  },
  {
    id: 'inazuma', name: 'Suzuki Inazuma', tagline: '250cc · Twin-cylinder',
    category: 'motorcycle', pricePerDay: 270000, pricePerMonth: 3500000,
    status: 'available',
    image: 'assets/img/inazuma.jpg',
    credit: { title: '2014 Suzuki GW250 (Inazuma)', author: 'Dennis Bratland', license: 'CC BY-SA 3.0' }
  },
  {
    id: 'duke', name: 'KTM Duke', tagline: '250cc · Street fighter',
    category: 'motorcycle', pricePerDay: 250000, pricePerMonth: 3000000,
    badge: 'Powerful', status: 'available',
    image: 'assets/img/duke.jpg',
    photoNote: 'Photo shows the 390 Duke; the rental bike is the 250 Duke (same bodywork).',
    credit: { title: '2015 KTM 390 Duke', author: 'Dennis Bratland', license: 'CC BY-SA 4.0' }
  }
];
