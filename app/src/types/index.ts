export type WeightClass =
  | 'Minimumweight'
  | 'Strawweight'
  | 'Super Strawweight'
  | 'Light Flyweight'
  | 'Flyweight'
  | 'Super Flyweight'
  | 'Bantamweight'
  | 'Super Bantamweight'
  | 'Featherweight'
  | 'Super Featherweight'
  | 'Lightweight'
  | 'Super Lightweight'
  | 'Welterweight'
  | 'Super Welterweight'
  | 'Middleweight'
  | 'Super Middleweight'
  | 'Light Heavyweight'
  | 'Cruiserweight'
  | 'Heavyweight';

export type FighterTier = 'Bronze' | 'Silver' | 'Gold' | 'Elite';
export type Stance = 'Orthodox' | 'Southpaw' | 'Switch';
export type FightResult = 'W' | 'L' | 'D' | 'NC';
export type WinMethod = 'KO' | 'TKO' | 'UD' | 'SD' | 'MD' | 'RTD';

export interface Fighter {
  id: string;
  name: string;
  nickname?: string;
  image: string;
  nationality: string;
  flag: string;
  gym: string;
  weightClass: WeightClass;
  wins: number;
  losses: number;
  draws: number;
  kos: number;
  rank: number;
  rankChange: number; // positive = up, negative = down, 0 = same
  xp: number;
  level: number;
  tier: FighterTier;
  stance: Stance;
  reach: string;
  height: string;
  age: number;
  debut: string;
  isActive: boolean;
  achievements: Achievement[];
  fightHistory: Fight[];
  bio: string;
  points: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  earnedAt: string;
}

export interface Fight {
  id: string;
  date: string;
  opponent: string;
  opponentRecord: string;
  result: FightResult;
  method: WinMethod;
  rounds: string;
  location: string;
  event: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  venue: string;
  country: string;
  status: 'upcoming' | 'live' | 'completed';
  mainEvent: string;
  bouts: number;
  image?: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  image: string;
  readTime: string;
}

export interface RankingEntry {
  rank: number;
  rankChange: number;
  fighter: Fighter;
  points: number;
  lastFight: string;
  streak: number;
}
