import { DishItem, Language, MenuCategoryId, ReservationFormData, WineItem } from '../types';

export const WHATSAPP_NUMBER = '34623534494';
export const PHONE_DISPLAY = '+34 623 53 44 94';
export const ADDRESS_FULL = 'Avenida del Chorrillo, 29639 Benalmádena Pueblo, Málaga, Espagne';

export const HERO_IMAGE = './assets/aistudio/image_61499fb3.png';
export const HERO_TABLE_IMAGE = './assets/aistudio/image_b0a7f51f.png';
export const INTERIOR_IMAGE = './assets/aistudio/image_b96053f2.png';
export const TERRACE_DISH_IMAGE = './assets/aistudio/image_98c1f1ad.png';

export const DISHES: DishItem[] = [
  // 1. Entrées / Pour Commencer
  {
    id: 'tartare-couteau',
    category: 'starters',
    price: 22,
    image: './assets/aistudio/image_7240eba3.png',
    name: {
      fr: 'Steak Tartare au Couteau',
      en: 'Hand-Cut Beef Tartare',
      es: 'Steak Tartar Cortado a Cuchillo',
    },
    subtitle: {
      fr: 'Bistronomie Parisienne · Condiments Fins',
      en: 'Parisian Bistronomy · Classic Condiments',
      es: 'Bistronomía Parisina · Condimentos Finos',
    },
    description: {
      fr: 'Filet de bœuf taillé au couteau minute, câpres surfines, échalotes ciselées, moutarde à l’ancienne et brioche toastée au beurre demi-sel.',
      en: 'Hand-cut prime beef tenderloin prepared to order with capers, shallots, whole-grain mustard, and toasted salted-butter brioche.',
      es: 'Solomillo de ternera cortado a cuchillo al momento, alcaparras, chalotas, mostaza a la antigua y brioche tostado con mantequilla.',
    },
    pairing: {
      fr: 'Sancerre Blanc ou Rioja Crianza',
      en: 'Sancerre Blanc or Rioja Crianza',
      es: 'Sancerre Blanc o Rioja Crianza',
    },
  },
  {
    id: 'soupe-mediterranee',
    category: 'starters',
    price: 19,
    image: './assets/aistudio/image_8636c49b.png',
    name: {
      fr: 'Soupe de Poissons & Crustacés de Méditerranée',
      en: 'Mediterranean Fish & Shellfish Velouté',
      es: 'Sopa de Pescados y Mariscos del Mediterráneo',
    },
    subtitle: {
      fr: 'Bouillabaisse Revisitée · Rouille Safranée',
      en: 'Reimagined Bouillabaisse · Saffron Rouille',
      es: 'Bullabesa Revisitada · Rouille de Azafrán',
    },
    description: {
      fr: 'Fumet corsé de poissons de roche et langoustines, rouille maison au safran d’Andalousie, croûtons aillés et zestes d’orange amère.',
      en: 'Rich rockfish and langoustine broth served with Andalusian saffron rouille, garlic croutons, and bitter orange zest.',
      es: 'Caldo intenso de pescados de roca y cigalas, rouille casera de azafrán andaluz, picatostes al ajo y ralladura de naranja amarga.',
    },
    pairing: {
      fr: 'Chablis 1er Cru ou Albariño',
      en: 'Chablis 1er Cru or Albariño',
      es: 'Chablis 1er Cru o Albariño',
    },
  },
  {
    id: 'saint-jacques-beurre-blanc',
    category: 'starters',
    price: 24,
    image: './assets/aistudio/image_885cb48f.png',
    name: {
      fr: 'Noix de Saint-Jacques Poêlées',
      en: 'Pan-Seared Scallops',
      es: 'Vieiras Salteadas a la Sartén',
    },
    subtitle: {
      fr: 'Émulsion Champagne · Fleurs Comestibles',
      en: 'Champagne Emulsion · Edible Blossoms',
      es: 'Emulsión de Champagne · Flores Comestibles',
    },
    description: {
      fr: 'Saint-Jacques snackées à la nacre, beurre blanc léger au champagne brut, huile d’herbes fines et jeunes pousses.',
      en: 'Caramelized scallops with a delicate brut champagne beurre blanc, fine herb oil, and microgreens.',
      es: 'Vieiras doradas al punto, beurre blanc ligero de champagne brut, aceite de hierbas finas y brotes tiernos.',
    },
    pairing: {
      fr: 'Champagne Brut Réserve',
      en: 'Champagne Brut Réserve',
      es: 'Champagne Brut Réserve',
    },
  },

  // 2. Poissons & La Mer
  {
    id: 'catch-of-the-day',
    category: 'sea',
    price: 32,
    image: './assets/aistudio/image_dc103544.png',
    name: {
      fr: 'Catch of the Day — Pêche de la Baie de Málaga',
      en: 'Catch of the Day — Málaga Bay Wild Fish',
      es: 'Pesca del Día — Bahía de Málaga',
    },
    subtitle: {
      fr: 'Beurre Blanc aux Agrumes · Asperges Blanches',
      en: 'Citrus Beurre Blanc · White Asparagus',
      es: 'Beurre Blanc de Cítricos · Espárragos Blancos',
    },
    description: {
      fr: 'Poisson sauvage sélectionné chaque matin à la criée, rôti sur peau, sublimé par un beurre blanc aux agrumes d’Andalousie et pois gourmands.',
      en: 'Wild-caught local fish selected daily, pan-roasted and glazed with an Andalusian citrus beurre blanc and sugar snap peas.',
      es: 'Pescado salvaje seleccionado cada mañana en la lonja, asado en su punto con beurre blanc de cítricos andaluces y tirabeques.',
    },
    pairing: {
      fr: 'Meursault ou Verdejo Sobre Lías',
      en: 'Meursault or Verdejo Sobre Lías',
      es: 'Meursault o Verdejo Sobre Lías',
    },
  },
  {
    id: 'pave-saumon-croustillant',
    category: 'sea',
    price: 29,
    image: './assets/aistudio/image_00afa11f.png',
    name: {
      fr: 'Pavé de Saumon Croustillant',
      en: 'Crispy-Skin Salmon Fillet',
      es: 'Lomo de Salmón Crujiente',
    },
    subtitle: {
      fr: 'Mousseline de Saison · Croquette Maison',
      en: 'Seasonal Mousseline · Artisan Croquette',
      es: 'Muselina de Temporada · Croqueta Artesanal',
    },
    description: {
      fr: 'Cœur de saumon cuit à basse température, peau dorée et croustillante, mousseline veloutée de céleri-rave et légumes primeurs.',
      en: 'Slow-cooked salmon heart with a crisp golden skin, velvety celeriac mousseline, and spring vegetables.',
      es: 'Corazón de salmón cocinado a baja temperatura con piel crujiente, muselina suave de apionabo y verduras de temporada.',
    },
    pairing: {
      fr: 'Pouilly-Fumé ou Rosado de Navarra',
      en: 'Pouilly-Fumé or Rosado de Navarra',
      es: 'Pouilly-Fumé o Rosado de Navarra',
    },
  },

  // 3. Viandes & La Terre
  {
    id: 'tournedos-morilles',
    category: 'land',
    price: 38,
    image: './assets/aistudio/image_b0a7f51f.png',
    name: {
      fr: 'Tournedos de Bœuf aux Morilles',
      en: 'Beef Tenderloin with Morel Jus',
      es: 'Tournedó de Solomillo con Colmenillas',
    },
    subtitle: {
      fr: 'Jus Corsé au Vin Rouge · Asperges de Saison',
      en: 'Rich Red Wine Reduction · Seasonal Asparagus',
      es: 'Jugo Intenso al Vino Tinto · Espárragos',
    },
    description: {
      fr: 'Cœur de filet de bœuf saisi au beurre clarifié, sauce réduite aux morilles sauvages et vin rouge de Rioja, garniture maraîchère.',
      en: 'Center-cut beef fillet seared in clarified butter, finished with a wild morel and Rioja red wine reduction.',
      es: 'Centro de solomillo sellado en mantequilla clarificada, salsa reducida de colmenillas y vino tinto de Rioja.',
    },
    pairing: {
      fr: 'Ribera del Duero Reserva ou Pauillac',
      en: 'Ribera del Duero Reserva or Pauillac',
      es: 'Ribera del Duero Reserva o Pauillac',
    },
  },
  {
    id: 'magret-canard-roti',
    category: 'land',
    price: 31,
    image: './assets/aistudio/image_bbd7787f.png',
    name: {
      fr: 'Magret de Canard Rôti',
      en: 'Roasted Duck Breast',
      es: 'Magret de Pato Asado',
    },
    subtitle: {
      fr: 'Légumes Confits · Jus aux Épices Douces',
      en: 'Confit Vegetables · Spiced Jus',
      es: 'Verduras Confitadas · Jugo Especiado',
    },
    description: {
      fr: 'Magret de canard rosé à la perfection, peau laquée au miel de fleurs d’oranger, déclinaison de légumes confits et croquette croustillante.',
      en: 'Pink-roasted duck breast glazed with orange blossom honey, served with confit seasonal vegetables and crisp croquette.',
      es: 'Magret de pato rosado a la perfección, piel lacada con miel de azahar, verduras confitadas y croqueta crujiente.',
    },
    pairing: {
      fr: 'Priorat DOCa ou Châteauneuf-du-Pape',
      en: 'Priorat DOCa or Châteauneuf-du-Pape',
      es: 'Priorat DOCa o Châteauneuf-du-Pape',
    },
  },

  // 4. Accompagnements
  {
    id: 'asperges-saison',
    category: 'sides',
    price: 11,
    image: './assets/aistudio/image_98c1f1ad.png',
    name: {
      fr: 'Asperges Blanches & Vertes de Saison',
      en: 'Seasonal White & Green Asparagus',
      es: 'Espárragos Blancos y Verdes de Temporada',
    },
    subtitle: {
      fr: 'Beurre Noisette · Fleur de Sel de Cadix',
      en: 'Brown Butter · Cádiz Sea Salt Flakes',
      es: 'Mantequilla Avellana · Flor de Sal de Cádiz',
    },
    description: {
      fr: 'Pointes d’asperges blanches et vertes pochées puis glacées au beurre noisette, relevées d’une pointe de fleur de sel.',
      en: 'Tender white and green asparagus spears poached and glazed in nutty brown butter with Cádiz sea salt.',
      es: 'Yemas de espárragos blancos y verdes escalfadas y glaseadas en mantequilla avellana con flor de sal.',
    },
    pairing: {
      fr: 'Accompagnement idéal Poissons & Viandes',
      en: 'Ideal with Fish & Meat Mains',
      es: 'Guarnición ideal para Pescados y Carnes',
    },
  },
  {
    id: 'croquette-truffe-mousseline',
    category: 'sides',
    price: 10,
    image: './assets/aistudio/image_484b890e.png',
    name: {
      fr: 'Croquette Croustillante & Mousseline Truffée',
      en: 'Crisp Artisan Croquette & Truffle Mousseline',
      es: 'Croqueta Crujiente y Muselina Trufada',
    },
    subtitle: {
      fr: 'Céleri-Rave · Éclat de Truffe Noire',
      en: 'Celeriac · Black Truffle Essence',
      es: 'Apionabo · Esencia de Trufa Negra',
    },
    description: {
      fr: 'Croquette dorée au cœur fondant servie sur une mousseline onctueuse de céleri-rave parfumée à la truffe noire.',
      en: 'Golden-crisp croquette served over a velvety celeriac mousseline infused with black truffle.',
      es: 'Croqueta dorada de interior fundente servida sobre una suave muselina de apionabo aromatizada con trufa negra.',
    },
    pairing: {
      fr: 'Accompagnement idéal Viandes Rouge',
      en: 'Ideal with Red Meats',
      es: 'Guarnición ideal para Carnes Rojas',
    },
  },

  // 5. Desserts Signatures
  {
    id: 'crepes-suzette',
    category: 'desserts',
    price: 16,
    image: './assets/aistudio/image_b06af0cc.png',
    name: {
      fr: 'Crêpes Suzette Flambées Traditionnelles',
      en: 'Traditional Flambéed Crêpes Suzette',
      es: 'Crêpes Suzette Flameadas Tradicionales',
    },
    subtitle: {
      fr: 'Grand Marnier · Oranges Amères d’Andalousie',
      en: 'Grand Marnier · Andalusian Bitter Oranges',
      es: 'Grand Marnier · Naranjas Amargas de Andalucía',
    },
    description: {
      fr: 'Fines crêpes caramélisées au beurre frais, jus d’oranges de Málaga, flambées au Grand Marnier et glace vanille Bourbon.',
      en: 'Delicate crêpes caramelized in fresh butter with Málaga orange juice, flambéed with Grand Marnier and Bourbon vanilla ice cream.',
      es: 'Finas crêpes caramelizadas con mantequilla fresca, zumo de naranja de Málaga, flameadas al Grand Marnier y helado de vainilla.',
    },
    pairing: {
      fr: 'Pedro Ximénez ou Sauternes',
      en: 'Pedro Ximénez or Sauternes',
      es: 'Pedro Ximénez o Sauternes',
    },
  },
  {
    id: 'moelleux-chocolat',
    category: 'desserts',
    price: 15,
    image: './assets/aistudio/image_b9b380f4.png',
    name: {
      fr: 'Moelleux au Chocolat Grand Cru',
      en: 'Grand Cru Dark Chocolate Fondant',
      es: 'Coulant de Chocolate Grand Cru',
    },
    subtitle: {
      fr: 'Chocolat Noir 70% · Glace Artisanale',
      en: '70% Dark Chocolate · Artisan Ice Cream',
      es: 'Chocolate Negro 70% · Helado Artesanal',
    },
    description: {
      fr: 'Biscuit tiède au cœur coulant de chocolat noir Grand Cru, éclats de fève de cacao torréfiée et quenelle de glace artisanale.',
      en: 'Warm molten Grand Cru dark chocolate cake with roasted cacao nibs and house-churned artisan ice cream.',
      es: 'Bizcocho tibio con corazón fundente de chocolate negro Grand Cru, nibs de cacao tostado y helado artesanal.',
    },
    pairing: {
      fr: 'Banyuls Rimage ou Cognac XO',
      en: 'Banyuls Rimage or Cognac XO',
      es: 'Banyuls Rimage o Cognac XO',
    },
  },
];

export const WINES: WineItem[] = [
  {
    id: 'rioja-gran-reserva',
    region: 'DOCa Rioja · España',
    vintage: '2016',
    priceBottle: 68,
    name: 'Marqués de Murrieta Castillo Ygay / Reserva',
    type: {
      fr: 'Rouge · Tempranillo & Mazuelo',
      en: 'Red · Tempranillo & Mazuelo',
      es: 'Tinto · Tempranillo y Mazuelo',
    },
    notes: {
      fr: 'Notes de cerise noire, cèdre, truffe et épices douces. Idéal avec le Tournedos aux Morilles.',
      en: 'Black cherry, cedar, truffle, and sweet spice notes. Ideal with the Beef Tenderloin.',
      es: 'Notas de cereza negra, cedro, trufa y especias dulces. Ideal con el Tournedó.',
    },
  },
  {
    id: 'ribera-del-duero',
    region: 'DO Ribera del Duero · España',
    vintage: '2019',
    priceGlass: 14,
    priceBottle: 62,
    name: 'Pago de Carraovejas Crianza',
    type: {
      fr: 'Rouge · Tinto Fino, Cabernet & Merlot',
      en: 'Red · Tinto Fino, Cabernet & Merlot',
      es: 'Tinto · Tinto Fino, Cabernet y Merlot',
    },
    notes: {
      fr: 'Velouté, profond et structuré, aux arômes de mûre confite et cacao. Sublime le Magret de Canard.',
      en: 'Velvety, deep, and structured with blackberry confit and cacao. Pairs with Duck Breast.',
      es: 'Aterciopelado, profundo y estructurado, con aromas a mora confitada y cacao.',
    },
  },
  {
    id: 'chablis-premier-cru',
    region: 'Bourgogne · France',
    vintage: '2021',
    priceGlass: 15,
    priceBottle: 74,
    name: 'Domaine William Fèvre Chablis 1er Cru',
    type: {
      fr: 'Blanc · 100% Chardonnay',
      en: 'White · 100% Chardonnay',
      es: 'Blanco · 100% Chardonnay',
    },
    notes: {
      fr: 'Minéralité cristalline, fleurs blanches et agrumes frais. Accompagne la Pêche de la Baie de Málaga.',
      en: 'Crystalline minerality, white blossoms, and fresh citrus. Pairs with Málaga Bay Wild Fish.',
      es: 'Mineralidad cristalina, flores blancas y cítricos frescos. Ideal con la Pesca del Día.',
    },
  },
  {
    id: 'champagne-brut',
    region: 'Champagne · France',
    vintage: 'NV',
    priceGlass: 16,
    priceBottle: 85,
    name: 'Billecart-Salmon Brut Réserve',
    type: {
      fr: 'Champagne · Pinot Noir, Chardonnay, Meunier',
      en: 'Champagne · Pinot Noir, Chardonnay, Meunier',
      es: 'Champagne · Pinot Noir, Chardonnay, Meunier',
    },
    notes: {
      fr: 'Bulle aérienne, poire fraîche et brioche fine. L’ouverture parfaite sur notre terrasse.',
      en: 'Fine mousse, fresh pear, and delicate brioche. The quintessential terrace aperitif.',
      es: 'Burbuja fina, pera fresca y brioche delicado. El aperitivo perfecto en nuestra terraza.',
    },
  },
];

export const CATEGORY_LABELS: Record<MenuCategoryId, Record<Language, string>> = {
  all: {
    fr: 'Toute la Carte',
    en: 'Full Menu',
    es: 'Toda la Carta',
  },
  starters: {
    fr: 'Entrées',
    en: 'Starters',
    es: 'Entrantes',
  },
  sea: {
    fr: 'Poissons & Mer',
    en: 'Fish & Sea',
    es: 'Pescados y Mar',
  },
  land: {
    fr: 'Viandes & Terre',
    en: 'Meats & Land',
    es: 'Carnes y Tierra',
  },
  sides: {
    fr: 'Accompagnements',
    en: 'Side Dishes',
    es: 'Guarniciones',
  },
  desserts: {
    fr: 'Desserts',
    en: 'Desserts',
    es: 'Postres',
  },
};

export function buildWhatsAppReservationUrl(data: ReservationFormData, lang: Language): string {
  const seatingLabel =
    lang === 'fr'
      ? data.seating === 'terrace'
        ? 'Terrasse avec vue'
        : 'Salle intérieure intime'
      : lang === 'en'
      ? data.seating === 'terrace'
        ? 'Terrace with sea view'
        : 'Intimate interior dining room'
      : data.seating === 'terrace'
      ? 'Terraza con vistas'
      : 'Salón interior íntimo';

  const noteText = data.notes.trim() ? data.notes.trim() : lang === 'fr' ? 'Aucune' : lang === 'en' ? 'None' : 'Ninguna';

  let message = '';
  if (lang === 'fr') {
    message = `Bonjour Ton & Inge, je souhaite réserver une table au Restaurante Carmesí pour ${data.guests} ${
      data.guests > 1 ? 'personnes' : 'personne'
    } le ${data.date} à ${data.time}. Placement souhaité : ${seatingLabel}. Nom : ${data.fullName} (${
      data.phone
    }). Note : ${noteText}. Merci !`;
  } else if (lang === 'en') {
    message = `Hello Ton & Inge, I would like to reserve a table at Restaurante Carmesí for ${data.guests} ${
      data.guests > 1 ? 'guests' : 'guest'
    } on ${data.date} at ${data.time}. Preferred seating: ${seatingLabel}. Name: ${data.fullName} (${
      data.phone
    }). Note: ${noteText}. Thank you!`;
  } else {
    message = `Hola Ton & Inge, deseo reservar una mesa en Restaurante Carmesí para ${data.guests} ${
      data.guests > 1 ? 'personas' : 'persona'
    } el ${data.date} a las ${data.time}. Ubicación deseada: ${seatingLabel}. Nombre: ${data.fullName} (${
      data.phone
    }). Nota: ${noteText}. ¡Gracias!`;
  }

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildWhatsAppDirectUrl(lang: Language): string {
  const text =
    lang === 'fr'
      ? "Bonjour Ton & Inge, je souhaite réserver une table au Restaurante Carmesí."
      : lang === 'en'
      ? 'Hello Ton & Inge, I would like to reserve a table at Restaurante Carmesí.'
      : 'Hola Ton & Inge, me gustaría reservar una mesa en Restaurante Carmesí.';
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function buildWhatsAppQuestionUrl(lang: Language): string {
  const text =
    lang === 'fr'
      ? "Bonjour, j'ai une question concernant le Restaurante Carmesí"
      : lang === 'en'
      ? 'Hello, I have a question regarding Restaurante Carmesí'
      : 'Hola, tengo una consulta sobre Restaurante Carmesí';
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
