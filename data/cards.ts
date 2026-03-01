export interface CardLevel {
  title: string
  exist: number
  total: number
}

export interface CardProperty {
  property: string
  value: string
}

export interface CardData {
  id: number
  name: string
  slug: string
  image: string
  description: string
  highestBid: string
  price: string
  priceEth: string
  priceUsd: string
  time: string
  like: boolean
  stock: number
  tokenId: string
  bidder: string
  bidEth: string
  bidUsd: string
  serviceFee: string
  totalEth: string
  totalUsd: string
  properties: CardProperty[]
  levels: CardLevel[]
}

export const CARDS: CardData[] = [
  {
    id: 1,
    name: 'Swamp Guardian',
    slug: 'swamp-guardian',
    image: '/png/Cards/image_1.png',
    description:
      'An ancient entity born from the murky depths of the Forgotten Marshlands. The Swamp Guardian watches over hidden treasures and lost souls, wielding the power of decay and rebirth.',
    highestBid: 'Highest Bid 1/1',
    price: '2.50 ETH',
    priceEth: '2.5',
    priceUsd: '4,829.50',
    time: '08:10:00',
    like: true,
    stock: 10,
    tokenId: '12,233 of 16,383',
    bidder: 'Alex Storm',
    bidEth: '2.35',
    bidUsd: '4,539.67',
    serviceFee: '2.5',
    totalEth: '2.409',
    totalUsd: '4,653.17',
    properties: [
      { property: 'Background', value: 'Marsh' },
      { property: 'Element', value: 'Nature' },
      { property: 'Rarity', value: 'Legendary' },
      { property: 'Season', value: 'Autumn' }
    ],
    levels: [
      { title: 'Power', exist: 87, total: 100 },
      { title: 'Defense', exist: 64, total: 100 },
      { title: 'Speed', exist: 42, total: 100 }
    ]
  },
  {
    id: 2,
    name: 'Cyber Ronin',
    slug: 'cyber-ronin',
    image: '/png/Cards/image_2.png',
    description:
      'A wandering samurai from Neo-Tokyo 2099. Enhanced with cybernetic implants, the Cyber Ronin seeks justice in a world where honor is a forgotten code. His plasma katana cuts through steel and data alike.',
    highestBid: 'Highest Bid 3/5',
    price: '1.80 ETH',
    priceEth: '1.8',
    priceUsd: '3,477.24',
    time: '12:45:00',
    like: false,
    stock: 5,
    tokenId: '8,102 of 16,383',
    bidder: 'Yuki Tanaka',
    bidEth: '1.72',
    bidUsd: '3,322.66',
    serviceFee: '2.5',
    totalEth: '1.763',
    totalUsd: '3,405.73',
    properties: [
      { property: 'Background', value: 'Neon City' },
      { property: 'Element', value: 'Tech' },
      { property: 'Rarity', value: 'Epic' },
      { property: 'Season', value: 'Winter' }
    ],
    levels: [
      { title: 'Power', exist: 92, total: 100 },
      { title: 'Defense', exist: 55, total: 100 },
      { title: 'Speed', exist: 88, total: 100 }
    ]
  },
  {
    id: 3,
    name: 'Frost Wyrm',
    slug: 'frost-wyrm',
    image: '/png/Cards/image_3.png',
    description:
      'Born in the frozen peaks of Mount Eternia, the Frost Wyrm commands blizzards and ice storms. Its crystalline scales reflect light into deadly beams that freeze everything in their path.',
    highestBid: 'Highest Bid 1/1',
    price: '5.20 ETH',
    priceEth: '5.2',
    priceUsd: '10,045.36',
    time: '03:22:00',
    like: true,
    stock: 1,
    tokenId: '1 of 16,383',
    bidder: 'Draco Winters',
    bidEth: '5.10',
    bidUsd: '9,852.18',
    serviceFee: '2.5',
    totalEth: '5.228',
    totalUsd: '10,098.48',
    properties: [
      { property: 'Background', value: 'Glacier' },
      { property: 'Element', value: 'Ice' },
      { property: 'Rarity', value: 'Mythic' },
      { property: 'Season', value: 'Winter' }
    ],
    levels: [
      { title: 'Power', exist: 98, total: 100 },
      { title: 'Defense', exist: 85, total: 100 },
      { title: 'Speed', exist: 60, total: 100 }
    ]
  },
  {
    id: 4,
    name: 'Shadow Thief',
    slug: 'shadow-thief',
    image: '/png/Cards/image_4.png',
    description:
      'A master of stealth from the Obsidian Guild. The Shadow Thief moves between dimensions, stealing not just valuables but memories and dreams. No vault or mind is safe from their touch.',
    highestBid: 'Highest Bid 2/3',
    price: '0.95 ETH',
    priceEth: '0.95',
    priceUsd: '1,835.43',
    time: '18:05:00',
    like: false,
    stock: 25,
    tokenId: '4,521 of 16,383',
    bidder: 'Nina Shade',
    bidEth: '0.88',
    bidUsd: '1,700.22',
    serviceFee: '2.5',
    totalEth: '0.902',
    totalUsd: '1,742.73',
    properties: [
      { property: 'Background', value: 'Void' },
      { property: 'Element', value: 'Dark' },
      { property: 'Rarity', value: 'Rare' },
      { property: 'Season', value: 'Spring' }
    ],
    levels: [
      { title: 'Power', exist: 58, total: 100 },
      { title: 'Defense', exist: 35, total: 100 },
      { title: 'Speed', exist: 97, total: 100 }
    ]
  },
  {
    id: 5,
    name: 'Ember Phoenix',
    slug: 'ember-phoenix',
    image: '/png/Cards/image_5.png',
    description:
      'Reborn from the ashes of a dying star, the Ember Phoenix carries the fury of a supernova within its wings. Each rebirth makes it stronger, and its flame can melt the boundaries between worlds.',
    highestBid: 'Highest Bid 1/1',
    price: '3.75 ETH',
    priceEth: '3.75',
    priceUsd: '7,243.13',
    time: '06:30:00',
    like: true,
    stock: 3,
    tokenId: '2,847 of 16,383',
    bidder: 'Marcus Flame',
    bidEth: '3.60',
    bidUsd: '6,953.40',
    serviceFee: '2.5',
    totalEth: '3.69',
    totalUsd: '7,127.24',
    properties: [
      { property: 'Background', value: 'Inferno' },
      { property: 'Element', value: 'Fire' },
      { property: 'Rarity', value: 'Legendary' },
      { property: 'Season', value: 'Summer' }
    ],
    levels: [
      { title: 'Power', exist: 95, total: 100 },
      { title: 'Defense', exist: 70, total: 100 },
      { title: 'Speed', exist: 82, total: 100 }
    ]
  },
  {
    id: 6,
    name: 'Stone Golem',
    slug: 'stone-golem',
    image: '/png/Cards/image_6.png',
    description:
      'Carved from the bedrock of the World Spine mountains by an ancient dwarven king. The Stone Golem stands as an immovable fortress, channeling the raw power of the earth through its rune-etched fists.',
    highestBid: 'Highest Bid 5/10',
    price: '0.65 ETH',
    priceEth: '0.65',
    priceUsd: '1,255.87',
    time: '22:15:00',
    like: false,
    stock: 50,
    tokenId: '9,873 of 16,383',
    bidder: 'Boulder Rex',
    bidEth: '0.60',
    bidUsd: '1,159.20',
    serviceFee: '2.5',
    totalEth: '0.615',
    totalUsd: '1,188.18',
    properties: [
      { property: 'Background', value: 'Canyon' },
      { property: 'Element', value: 'Earth' },
      { property: 'Rarity', value: 'Common' },
      { property: 'Season', value: 'Autumn' }
    ],
    levels: [
      { title: 'Power', exist: 75, total: 100 },
      { title: 'Defense', exist: 99, total: 100 },
      { title: 'Speed', exist: 15, total: 100 }
    ]
  },
  {
    id: 7,
    name: 'Void Walker',
    slug: 'void-walker',
    image: '/png/Cards/image_7.png',
    description:
      'A being that exists between realities, the Void Walker traverses the space between dimensions. It feeds on entropy and leaves nothing but silence in its wake. Those who gaze upon it forget their own names.',
    highestBid: 'Highest Bid 1/2',
    price: '4.10 ETH',
    priceEth: '4.1',
    priceUsd: '7,919.78',
    time: '01:48:00',
    like: true,
    stock: 2,
    tokenId: '666 of 16,383',
    bidder: 'Echo Null',
    bidEth: '4.00',
    bidUsd: '7,726.60',
    serviceFee: '2.5',
    totalEth: '4.10',
    totalUsd: '7,919.77',
    properties: [
      { property: 'Background', value: 'Abyss' },
      { property: 'Element', value: 'Void' },
      { property: 'Rarity', value: 'Mythic' },
      { property: 'Season', value: 'None' }
    ],
    levels: [
      { title: 'Power', exist: 80, total: 100 },
      { title: 'Defense', exist: 45, total: 100 },
      { title: 'Speed', exist: 100, total: 100 }
    ]
  },
  {
    id: 8,
    name: 'Thunder Titan',
    slug: 'thunder-titan',
    image: '/png/Cards/image_8.png',
    description:
      'The Thunder Titan strides across the Stormlands, calling down lightning with each step. Once a mortal warrior who challenged the sky gods and won, now bound to an eternal storm.',
    highestBid: 'Highest Bid 2/5',
    price: '1.35 ETH',
    priceEth: '1.35',
    priceUsd: '2,607.45',
    time: '15:33:00',
    like: true,
    stock: 15,
    tokenId: '7,204 of 16,383',
    bidder: 'Thor Volkov',
    bidEth: '1.30',
    bidUsd: '2,510.89',
    serviceFee: '2.5',
    totalEth: '1.333',
    totalUsd: '2,573.66',
    properties: [
      { property: 'Background', value: 'Storm' },
      { property: 'Element', value: 'Lightning' },
      { property: 'Rarity', value: 'Epic' },
      { property: 'Season', value: 'Summer' }
    ],
    levels: [
      { title: 'Power', exist: 90, total: 100 },
      { title: 'Defense', exist: 78, total: 100 },
      { title: 'Speed', exist: 65, total: 100 }
    ]
  },
  {
    id: 9,
    name: 'Crystal Sage',
    slug: 'crystal-sage',
    image: '/png/Cards/image_9.png',
    description:
      'The last keeper of the Crystal Archives, where all knowledge of the multiverse is stored. The Crystal Sage can peer into any timeline and bend reality with pure thought. Wisdom is the ultimate weapon.',
    highestBid: 'Highest Bid 1/3',
    price: '2.90 ETH',
    priceEth: '2.9',
    priceUsd: '5,602.42',
    time: '10:00:00',
    like: false,
    stock: 7,
    tokenId: '5,555 of 16,383',
    bidder: 'Sage Merlin',
    bidEth: '2.80',
    bidUsd: '5,409.24',
    serviceFee: '2.5',
    totalEth: '2.87',
    totalUsd: '5,544.47',
    properties: [
      { property: 'Background', value: 'Crystal Cave' },
      { property: 'Element', value: 'Arcane' },
      { property: 'Rarity', value: 'Legendary' },
      { property: 'Season', value: 'Spring' }
    ],
    levels: [
      { title: 'Power', exist: 72, total: 100 },
      { title: 'Defense', exist: 60, total: 100 },
      { title: 'Speed', exist: 50, total: 100 }
    ]
  }
]

export function getCardBySlug(slug: string): CardData | undefined {
  return CARDS.find((card) => card.slug === slug)
}
