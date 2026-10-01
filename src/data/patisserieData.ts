import { CakeProduct, SensationCategory, ProcessStep, CakeLayerDna, Testimonial } from '../types';

import heroCakeImg from '../assets/images/hero_chocolate_couture_cake_1790794736318.jpg';
import featuredTruffleImg from '../assets/images/featured_opera_truffle_cake_1790794747511.jpg';
import cakeDnaImg from '../assets/images/cake_cross_section_dna_1790794757539.jpg';
import chefProcessImg from '../assets/images/pastry_chef_artisan_process_1790794768118.jpg';
import moodAssortmentImg from '../assets/images/mood_collection_assortment_1790794779181.jpg';

export { heroCakeImg, featuredTruffleImg, cakeDnaImg, chefProcessImg, moodAssortmentImg };

export const SIGNATURE_CAKES: CakeProduct[] = [
  {
    id: 'opera-royal-truffle',
    name: 'Opéra Royal Truffle',
    frenchTitle: 'Entremets Cacao Impérial & Fleur d’Or',
    tagline: 'Rich, silken, hypnotic. Hand-sculpted with pure Valrhona Guanaja.',
    description: 'A monument of Parisian patisserie excellence. Five meticulously balanced strata combining single-estate Ecuadorian Guanaja cacao (72%), airy Bourbon vanilla diplomat cream, crispy hazelnut feuilletine, and an immaculate mirror glaze crowned with edible 24k gold leaf.',
    basePrice: 125,
    image: featuredTruffleImg,
    category: 'signature',
    flavorProfile: ['Valrhona 72% Noir', 'Madagascar Bourbon Vanilla', 'Piedmont Praliné', 'Fleur de Sel'],
    cacaoOrigin: 'Esmeraldas, Ecuador & Sambirano Valley, Madagascar',
    cacaoPercentage: '72% Single-Origin',
    servingSizes: [
      { size: '6-inch Petit', serves: '6–8 Connoisseurs', price: 125 },
      { size: '8-inch Classique', serves: '10–14 Connoisseurs', price: 175 },
      { size: '10-inch Grand', serves: '18–24 Connoisseurs', price: 245 }
    ],
    hallmarks: [
      'Single-Origin Grand Cru Cacao',
      'Slow-tempered at 31°C for crystal gloss',
      'Edible 24-karat French Gold Leaf',
      'Baked freshly each dawn in our atelier'
    ],
    tastingNotes: {
      aroma: 'Deep roasted cocoa nibs, warm Madagascar wood vanilla, light toasted hazelnut.',
      palate: 'Unfolds with velvety bittersweet cocoa, transitioning to airy cream with an addictive praliné crunch.',
      finish: 'Lingering floral fruitiness of Ecuadorian cacao balanced by mineral Breton sea salt.',
      pairings: 'Vintage Champagne Brut, Single-Origin Espresso, or Aged Armagnac.'
    },
    allergens: ['Dairy (Butter & Cream)', 'Eggs', 'Gluten (Wheat)', 'Tree Nuts (Hazelnuts)']
  },
  {
    id: 'velours-noir-monument',
    name: 'Velours Noir Monument',
    frenchTitle: 'Pièce Montée Chocolat & Mûres Sauvages',
    tagline: 'Dramatic multi-tiered dark chocolate architecture for paramount celebrations.',
    description: 'Our most grand tiered celebration creation. Sculpted dark chocolate ganache cascades over moist dark cocoa sponge soaked in wild blackberry reduction, draped in artisanal chocolate curls and botanical gold flakes.',
    basePrice: 195,
    image: heroCakeImg,
    category: 'couture',
    flavorProfile: ['Ecuadorian Dark Chocolate', 'Wild Forest Blackberries', 'Vanilla Infusion', 'Dark Cocoa Nibs'],
    cacaoOrigin: 'Ecuador & Caribbean Grand Cru Blend',
    cacaoPercentage: '75% Extra Bitter',
    servingSizes: [
      { size: '8-inch Classique', serves: '12–16 Connoisseurs', price: 195 },
      { size: 'Two-Tier Gala', serves: '25–35 Connoisseurs', price: 340 },
      { size: 'Three-Tier Royal', serves: '50–70 Connoisseurs', price: 580 }
    ],
    hallmarks: [
      'Architectural 3-tier celebration structure',
      'Wild forest blackberry coulis reduction',
      'Sculptural hand-carved chocolate curls',
      'White-glove climate delivery included'
    ],
    tastingNotes: {
      aroma: 'Dark woodland berries, damp earth, intense dark roasted chocolate.',
      palate: 'Bold cocoa intensity softly cut by the tart brightness of wild blackberries.',
      finish: 'Deep, rich, and intensely memorable cocoa resonance.',
      pairings: 'Pomerol Bordeaux, Imperial Stout, or Dark Roast Ethiopian Cold Brew.'
    },
    allergens: ['Dairy', 'Eggs', 'Gluten']
  },
  {
    id: 'fleur-de-fraise-rose',
    name: 'Rose Élysée & Fraise Sauvage',
    frenchTitle: 'Symphonie Botanique à la Rose de Mai',
    tagline: 'Delicate May rose petal infusion, wild strawberries, and white chocolate velvet.',
    description: 'An ethereal romantic masterpiece. Layers of soft almond biscuit, fragrant Grasse rose water mousse, vibrant Alpine wild strawberry gelée, and a whisper of ivory cocoa butter velvet.',
    basePrice: 135,
    image: moodAssortmentImg,
    category: 'seasonal',
    flavorProfile: ['Grasse Rose Water', 'Fraise des Bois', 'Almond Dacquoise', 'Ivory Cacao Butter'],
    cacaoOrigin: 'Dominican Republic Organic White Cacao',
    cacaoPercentage: '34% Pure Cocoa Butter',
    servingSizes: [
      { size: '6-inch Petit', serves: '6–8 Connoisseurs', price: 135 },
      { size: '8-inch Classique', serves: '10–14 Connoisseurs', price: 185 },
      { size: '10-inch Grand', serves: '18–24 Connoisseurs', price: 255 }
    ],
    hallmarks: [
      'Authentic distillation of Grasse May Roses',
      'Hand-picked alpine wild strawberries',
      'Airbrushed cocoa butter velvet finish',
      'Subtle, non-sugary botanical balance'
    ],
    tastingNotes: {
      aroma: 'Fresh morning garden roses, wild summer strawberries, delicate almond blossom.',
      palate: 'Airy, silky, uplifting with a gentle berry acidity and fragrant floral breeze.',
      finish: 'Clean, refreshing, and exquisitely floral without cloying sweetness.',
      pairings: 'Rosé Champagne, White Jasmine Tea, or Crémant d’Alsace.'
    },
    allergens: ['Dairy', 'Eggs', 'Gluten', 'Tree Nuts (Almonds)']
  },
  {
    id: 'pistache-sicilienne-praline',
    name: 'Pistache de Bronte & Yuzu',
    frenchTitle: 'Délice Vert & Agrumes du Soleil',
    tagline: 'Pure Sicilian emerald pistachio, toasted praliné, and zesty Japanese yuzu.',
    description: 'Crafted with certified Bronte pistachios grown on the volcanic slopes of Mount Etna. Layered with crispy caramelized pistachio feuilletine, tart yuzu curd, and velvety white chocolate mousse.',
    basePrice: 140,
    image: featuredTruffleImg,
    category: 'signature',
    flavorProfile: ['Bronte Pistachio', 'Japanese Yuzu', 'Caramelized Feuilletine', 'Fleur de Sel'],
    cacaoOrigin: 'Madagascar Single Plantation White Cocoa',
    cacaoPercentage: '36% Cocoa Butter',
    servingSizes: [
      { size: '6-inch Petit', serves: '6–8 Connoisseurs', price: 140 },
      { size: '8-inch Classique', serves: '10–14 Connoisseurs', price: 190 },
      { size: '10-inch Grand', serves: '18–24 Connoisseurs', price: 260 }
    ],
    hallmarks: [
      'DOP Sicilian Bronte Pistachios',
      'High-mountain Japanese Kochi Yuzu juice',
      'Multi-textural crunch & velvety cream',
      'Naturally pigmented with pure pistachio paste'
    ],
    tastingNotes: {
      aroma: 'Nutty roasted pistachio, invigorating citrus blossom, warm butter crust.',
      palate: 'Rich savory-sweet pistachio cream punctuated by bright electric yuzu pearls.',
      finish: 'Salty toasted nut warmth with lingering citrus freshness.',
      pairings: 'Uji Ceremonial Matcha, Genmaicha, or Franciacorta Brut.'
    },
    allergens: ['Dairy', 'Eggs', 'Gluten', 'Tree Nuts (Pistachios)']
  }
];

export const SENSATION_CATEGORIES: SensationCategory[] = [
  {
    id: 'pure-cacao',
    title: 'Pure Cacao Obsession',
    subtitle: 'Intense · Bittersweet · Velvety',
    tagline: 'When only the deepest Grand Cru dark chocolate will soothe the soul.',
    accentNote: 'Single-Estate 72% Valrhona',
    image: featuredTruffleImg,
    moodColor: '#3A2019',
    recommendedCakeId: 'opera-royal-truffle'
  },
  {
    id: 'romantic-symphony',
    title: 'Romantic Symphony',
    subtitle: 'Floral · Delicate · Ethereal',
    tagline: 'For anniversaries, proposals, and evenings of quiet tenderness.',
    accentNote: 'Grasse Rose & Wild Berries',
    image: moodAssortmentImg,
    moodColor: '#4A2A22',
    recommendedCakeId: 'fleur-de-fraise-rose'
  },
  {
    id: 'grand-celebration',
    title: 'Grand Celebrations',
    subtitle: 'Majestic · Tiered · Gold Leaf',
    tagline: 'Imposing architectural creations worthy of landmark galas & weddings.',
    accentNote: 'Multi-Tiered 24K Gold Splendor',
    image: heroCakeImg,
    moodColor: '#2B1712',
    recommendedCakeId: 'velours-noir-monument'
  },
  {
    id: 'botanical-artisan',
    title: 'Botanical & Rare Harvest',
    subtitle: 'Citrus · Bronte Pistachio · Matcha',
    tagline: 'Adventurous gastronomic pairings for refined, curious palates.',
    accentNote: 'Volcanic Bronte Pistachio & Yuzu',
    image: featuredTruffleImg,
    moodColor: '#35251C',
    recommendedCakeId: 'pistache-sicilienne-praline'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'The Chiffon Base',
    subtitle: 'Aerated Cocoa Sponge',
    description: 'The foundation begins with Valrhona Dutch-processed cocoa folded into micro-whipped egg whites and Madagascar bourbon vanilla, baked to an ultra-tender, airy crumb.',
    technique: 'Gentle French macaronage folding to preserve delicate air pockets.',
    temperature: '170°C for 22 minutes',
    image: cakeDnaImg
  },
  {
    number: '02',
    title: 'The Diplomat Crème',
    subtitle: 'Silken Infused Emulsion',
    description: 'Farm-fresh dairy infused with split bourbon vanilla pods is married with churned Normandy butter and white chocolate to produce a featherweight yet decadent silkiness.',
    technique: 'High-shear emulsion at 45°C to achieve mirror-smooth texture.',
    temperature: 'Slow cold-set at 4°C for 12 hours',
    image: moodAssortmentImg
  },
  {
    number: '03',
    title: 'The Grand Ganache',
    subtitle: 'High-Gloss Mirror Drip',
    description: 'Pure 72% Guanaja cacao beans melted with heavy cream and clarified sugar. Hand-tempered continuously on cool Italian marble until reaching ideal crystallization.',
    technique: 'Precision thermometer tempering to guarantee glass-like reflection.',
    temperature: 'Poured at exactly 31.5°C',
    image: featuredTruffleImg
  },
  {
    number: '04',
    title: 'The Haute Finition',
    subtitle: '24K Gold & Botanicals',
    description: 'Every creation is individually finished by our senior chef using jeweler’s brass tweezers: applying sheets of genuine 24-karat French gold leaf, crystallized petals, and hand-sculpted cocoa curls.',
    technique: 'Jeweler-grade precision detailing under specialized daylight atelier lamps.',
    temperature: 'Ambient atelier kept at 18°C',
    image: heroCakeImg
  }
];

export const CAKE_DNA_LAYERS: CakeLayerDna[] = [
  {
    id: 1,
    name: 'Mirror-Finish Guanaja Glaze',
    frenchName: 'Glaçage Miroir Noir 72%',
    description: 'A flawless reflective curtain crafted from single-origin Ecuadorian cocoa beans and organic gelatin, offering a snap on initial spoon cut before melting cleanly on the tongue.',
    percentage: '15% of total height',
    texture: 'Glassy, silken, instantly melting',
    ingredients: 'Valrhona Guanaja 72%, Clarified Cream, Pure Cocoa Butter'
  },
  {
    id: 2,
    name: 'Bourbon Vanilla Chantilly Crème',
    frenchName: 'Mousse Légère à la Vanille Bourbon',
    description: 'Airy cloud of pasture-raised French cream infused with wild-harvested Madagascar pods, lending floral sweetness without masking the deep cocoa notes.',
    percentage: '28% of total height',
    texture: 'Light as breath, velvety, cloud-like',
    ingredients: 'Normandy Heavy Cream, Split Bourbon Vanilla Beans, Organic Invert Sugar'
  },
  {
    id: 3,
    name: 'Feuilletine Hazelnut Crisp',
    frenchName: 'Croustillant Feuillantine au Praliné',
    description: 'The auditory and textural soul of the cake: crushed caramelized Breton lace crepes bound with stone-ground Piedmont hazelnut paste and flaky Guérande fleur de sel.',
    percentage: '12% of total height',
    texture: 'Addictively crispy, buttery, salted snap',
    ingredients: 'Brittany Crêpes Dentelles, Piedmont IGP Hazelnuts, Fleur de Sel'
  },
  {
    id: 4,
    name: 'Moist Cocoa Genoise Sponge',
    frenchName: 'Biscuit Génoise au Cacao Pur',
    description: 'A tender, deeply dark sponge moistened with a delicate cold-brewed cacao nib syrup that guarantees every forkful remains lush and moist for up to 5 days.',
    percentage: '25% of total height',
    texture: 'Supremely tender, moist, melt-in-mouth',
    ingredients: 'Dutch Cocoa Powder, Pasture Eggs, Infused Cacao Syrup'
  },
  {
    id: 5,
    name: 'Grand Cru Dark Ganache Core',
    frenchName: 'Cœur Intense de Ganache Fondante',
    description: 'The dense, brooding heart of the cake: slow-melted 75% dark chocolate emulsion that anchors the lighter mousses with uncompromising cacao authority.',
    percentage: '20% of total height',
    texture: 'Dense, rich, truffle-like viscosity',
    ingredients: 'Ecuadorian Grand Cru Chocolate, Churned Butter, Sea Salt'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    author: 'Geneviève de Montfort',
    role: 'Luxury Event Director',
    location: 'Paris & Côte d’Azur',
    quote: 'Atelier Velours redefined what our international gala guests expected of a wedding cake. It was not merely visually breathtaking; the depth of the 72% Valrhona ganache and the crunch of the feuilletine lingered in conversation for weeks.',
    occasion: 'Three-Tier Royal Gala at Villa Ephrussi de Rothschild',
    rating: 5,
    cakeOrdered: 'Velours Noir Monument (Custom 3-Tier)'
  },
  {
    id: 't2',
    author: 'Chef Antoine Laurent',
    role: 'Culinary Critic & Author',
    location: 'Le Guide Gastronomique',
    quote: 'Finding pastry chefs who respect cacao balance without drowning it in commercial sugar is a dying rarity. The Opéra Royal Truffle is a tour de force of French culinary architecture. Absolutely pristine.',
    occasion: 'Private Salon Tasting & Salon du Chocolat',
    rating: 5,
    cakeOrdered: 'Opéra Royal Truffle (8-inch)'
  },
  {
    id: 't3',
    author: 'Camilla & Julian Vance',
    role: 'Private Collectors',
    location: 'New York & London',
    quote: 'We commissioned a bespoke anniversary cake with their May rose and wild Alpine strawberry infusion. The delivery arrived in climate-controlled white glove packaging at our terrace residence in absolute perfection.',
    occasion: '10th Wedding Anniversary Dinner',
    rating: 5,
    cakeOrdered: 'Rose Élysée & Fraise Sauvage'
  }
];

export const HERO_FLAVOR_OPTIONS = [
  {
    id: 'grand-cacao',
    name: 'Grand Cacao Noir',
    sub: '72% Single-Origin',
    notes: 'Bittersweet Ecuadorian cocoa with subtle notes of roasted oak & warm dried plum.',
    pairing: 'Vintage Champagne & Single-Estate Espresso'
  },
  {
    id: 'bourbon-vanilla',
    name: 'Bourbon Vanilla Bean',
    sub: 'Madagascar Orchid',
    notes: 'Velvety diplomat crème infused with whole aged split pods and Normandy churned butter.',
    pairing: 'Darjeeling First Flush & Sauternes'
  },
  {
    id: 'wild-strawberry-rose',
    name: 'Wild Rose & Fraise',
    sub: 'Grasse May Petals',
    notes: 'Ethereal organic Alpine fraise des bois paired with May rose petal steam distillation.',
    pairing: 'Rosé Champagne & Jasmine Pearl Tea'
  },
  {
    id: 'piedmont-praline',
    name: 'Piedmont Praliné Crisp',
    sub: 'IGP Roasted Hazelnuts',
    notes: 'Caramelized French crêpe dentelle crunch enveloped in velvety stone-ground hazelnut butter.',
    pairing: 'Cold-Drip Arabica & 20-Year Tawny Port'
  }
];
