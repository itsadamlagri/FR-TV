// @/lib/channels-data.ts

// ===========================================================================
// TYPE CODE PAYS (exporté pour être utilisé par les autres fichiers)
// ===========================================================================
export type CountryCode = 'FR' | 'BE' | 'CH' | 'CA' | 'LU' | 'MC' | 'EU' | 'UK' | 'US' | 'DE' | 'IT' | 'ES' | 'PT' | 'NL' | 'MA' | 'DZ' | 'TN' | 'JP';
// ===========================================================================
// INTERFACE CHAÎNE
// ===========================================================================
export interface Channel {
  name: string;
  quality: '4K UHD' | 'FHD 60FPS' | 'HD';
  genre?: string;
  description: string;
  whyWatch?: string;
  country?: CountryCode;
  popular?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ChannelCategory {
  slug: string;
  name: string;
  totalChannels: number;
  description: string;
  longDescription: string;
  keywords: string[];
  channels: Channel[];
  faqs: FAQItem[];
  featured?: boolean;
}

// ---------------------------------------------------------------------------
// CATÉGORIES
// ---------------------------------------------------------------------------
export const channelsData: ChannelCategory[] = [
  // =========================================================================
  // 1. SPORT — France et international
  // =========================================================================
  {
    slug: 'sport',
    name: 'Toutes les chaînes de sport',
    totalChannels: 3000,
    description:
      'Tout le sport français et international en 60 FPS fluide. beIN Sports, RMC Sport, Canal+ Sport, Eurosport, L’Équipe TV, DAZN, Sky Sports, ESPN, et chaque match de Ligue 1, Ligue des Champions, Premier League, NBA, Formule 1 et PPV.',
    longDescription:
      'Les fournisseurs câble traditionnels enferment les amateurs de sport dans des formules hors de prix avec des engagements longs. Avec un abonnement IPTV premium, vous débloquez l’univers complet du sport mondial. beIN Sports, RMC Sport, Canal+ Sport, Eurosport 1 et 2, L’Équipe TV, DAZN, Sky Sports, ESPN, UFC Fight Pass, ainsi que chaque match de Ligue 1, Ligue des Champions, Premier League, Liga, Serie A, NBA, Formule 1 et football universitaire à une fraction du prix. Nos serveurs optimisés pour la France et l’Europe assurent une diffusion haute bitrate en 60 FPS, pour un streaming sans coupure pendant la finale de la Ligue des Champions, la NBA Finals, le Tour de France, Roland-Garros et tous les grands événements sportifs.',
    keywords: [
      'abonnement iptv sport',
      'iptv ligue 1',
      'iptv ligue des champions',
      'beIN sports iptv',
      'rmc sport iptv',
      'canal plus sport iptv',
      'eurosport iptv',
      'dazn iptv',
      'iptv nba france',
      'iptv formule 1',
      'iptv roland garros',
      'iptv tour de france',
      'iptv ufc france',
      'abonnement iptv sport pas cher',
    ],
    channels: [
      // Chaînes françaises — prioritaires
      { name: 'beIN Sports 1 HD', quality: 'FHD 60FPS', genre: 'Sport français', country: 'FR', description: 'La chaîne de référence pour la Ligue 1, la Ligue des Champions et la Liga.', popular: true },
      { name: 'beIN Sports 2 HD', quality: 'FHD 60FPS', genre: 'Sport français', country: 'FR', description: 'Second canal beIN avec plus de matchs et de compétitions internationales.', popular: true },
      { name: 'beIN Sports 3 HD', quality: 'FHD 60FPS', genre: 'Sport français', country: 'FR', description: 'Troisième flux beIN pour la couverture sportive parallèle et multi-matchs.' },
      { name: 'beIN Sports MAX 4', quality: 'FHD 60FPS', genre: 'Sport français', country: 'FR', description: 'Canal MAX dédié aux rencontres multi-diffusées en simultané.' },
      { name: 'RMC Sport 1 HD', quality: 'FHD 60FPS', genre: 'Sport français', country: 'FR', description: 'Chaîne premium pour la Ligue des Champions, la Premier League et la boxe.', popular: true },
      { name: 'RMC Sport 2 HD', quality: 'FHD 60FPS', genre: 'Sport français', country: 'FR', description: 'Second canal RMC Sport avec compétitions européennes et UFC.' },
      { name: 'RMC Sport News HD', quality: 'FHD 60FPS', genre: 'Sport français', country: 'FR', description: 'Actualité sportive en continu, débats et analyses 24/7.' },
      { name: 'Canal+ Sport HD', quality: 'FHD 60FPS', genre: 'Sport français', country: 'FR', description: 'Chaîne premium pour la Premier League, la Top 14, la Formule 1 et le MotoGP.', popular: true },
      { name: 'Canal+ Sport 360 HD', quality: 'FHD 60FPS', genre: 'Sport français', country: 'FR', description: 'Chaîne multi-sport avec retransmissions à 360 degrés et angles alternatifs.' },
      { name: 'Canal+ Foot HD', quality: 'FHD 60FPS', genre: 'Sport français', country: 'FR', description: 'Chaîne 100 % football avec Ligue 1, Ligue des Champions et Premier League.', popular: true },
      { name: 'Canal+ Formule 1 HD', quality: 'FHD 60FPS', genre: 'Sport français', country: 'FR', description: 'Chaîne dédiée à la Formule 1 avec caméras embarquées et qualifications.' },
      { name: 'Eurosport 1 HD', quality: 'FHD 60FPS', genre: 'Sport français', country: 'FR', description: 'Tennis du Grand Chelem, Tour de France, sports d’hiver et cyclisme.', popular: true },
      { name: 'Eurosport 2 HD', quality: 'FHD 60FPS', genre: 'Sport français', country: 'FR', description: 'Second canal Eurosport avec sport additionnel et compétitions parallèles.' },
      { name: 'L’Équipe TV HD', quality: 'FHD 60FPS', genre: 'Sport français', country: 'FR', description: 'La chaîne d’info sportive de référence en France, 24h/24.', popular: true },
      { name: 'DAZN France HD', quality: 'FHD 60FPS', genre: 'Sport français', country: 'FR', description: 'Boxe, MMA, football européen et contenus exclusifs DAZN.', popular: true },
      { name: 'Infosport+ HD', quality: 'FHD 60FPS', genre: 'Sport français', country: 'FR', description: 'Chaîne d’information sportive avec rappels de matchs et analyses.' },
      { name: 'OL TV HD', quality: 'FHD 60FPS', genre: 'Sport français', country: 'FR', description: 'Chaîne officielle de l’Olympique Lyonnais avec matchs et émissions.' },
      { name: 'Girondins TV HD', quality: 'FHD 60FPS', genre: 'Sport français', country: 'FR', description: 'Chaîne officielle des Girondins de Bordeaux, matchs et interviews.' },
      { name: 'OM TV HD', quality: 'FHD 60FPS', genre: 'Sport français', country: 'FR', description: 'Chaîne officielle de l’Olympique de Marseille, résumés et analyses.' },
      { name: 'PSG TV HD', quality: 'FHD 60FPS', genre: 'Sport français', country: 'FR', description: 'Chaîne officielle du Paris Saint-Germain, matchs et coulisses.' },
      // Sport UK
      { name: 'Sky Sports Main Event HD', quality: 'FHD 60FPS', genre: 'Sport britannique', country: 'UK', description: 'Couverture complète de la Premier League avec commentaires britanniques.', popular: true },
      { name: 'Sky Sports Premier League HD', quality: 'FHD 60FPS', genre: 'Premier League', country: 'UK', description: 'Chaîne dédiée à la Premier League avec tous les matchs télévisés.', popular: true },
      { name: 'Sky Sports F1 HD', quality: 'FHD 60FPS', genre: 'Formule 1', country: 'UK', description: 'Chaîne dédiée à la Formule 1 avec caméras embarquées et analyses.', popular: true },
      { name: 'Sky Sports Football HD', quality: 'FHD 60FPS', genre: 'Football', country: 'UK', description: 'Championship, League One et compétitions internationales.' },
      { name: 'Sky Sports Cricket HD', quality: 'FHD 60FPS', genre: 'Cricket', country: 'UK', description: 'Cricket anglais, tournées internationales et The Ashes.' },
      { name: 'Sky Sports Golf HD', quality: 'FHD 60FPS', genre: 'Golf', country: 'UK', description: 'PGA Tour, DP World Tour et couverture des Grands Chelems.' },
      { name: 'Sky Sports Action HD', quality: 'FHD 60FPS', genre: 'Multi-sport', country: 'UK', description: 'Rugby, boxe et autres événements sportifs en direct.' },
      { name: 'Sky Sports Arena HD', quality: 'FHD 60FPS', genre: 'Multi-sport', country: 'UK', description: 'Fléchettes, snooker et événements sportifs supplémentaires.' },
      { name: 'TNT Sports 1 HD', quality: 'FHD 60FPS', genre: 'Multi-sport', country: 'UK', description: 'Football de Ligue des Champions, UFC et MotoGP.' },
      { name: 'TNT Sports 2 HD', quality: 'FHD 60FPS', genre: 'Multi-sport', country: 'UK', description: 'Flux TNT Sports additionnel avec Premier League et football européen.' },
      // Sport US
      { name: 'ESPN HD', quality: 'FHD 60FPS', genre: 'Sport américain', country: 'US', description: 'La référence mondiale du sport avec NFL, NBA, MLB et UFC.', popular: true },
      { name: 'ESPN 2 HD', quality: 'FHD 60FPS', genre: 'Sport américain', country: 'US', description: 'Programmation sportive additionnelle : football universitaire, NBA et MLB.', popular: true },
      { name: 'ESPN News HD', quality: 'FHD 60FPS', genre: 'Info sport', country: 'US', description: 'Actualité sportive 24/7, temps forts et analyses.' },
      { name: 'FS1 HD', quality: 'FHD 60FPS', genre: 'Sport américain', country: 'US', description: 'Fox Sports 1 avec MLB, NASCAR et UFC Fight Nights.', popular: true },
      { name: 'NFL Network HD', quality: 'FHD 60FPS', genre: 'NFL', country: 'US', description: 'Couverture NFL 24/7, Thursday Night Football et rediffusions.', popular: true },
      { name: 'NBA TV HD', quality: 'FHD 60FPS', genre: 'NBA', country: 'US', description: 'Couverture NBA en continu, matchs classiques et analyses live.', popular: true },
      { name: 'MLB Network HD', quality: 'FHD 60FPS', genre: 'MLB', country: 'US', description: 'Couverture complète de la MLB avec matchs en direct et analyses.', popular: true },
      { name: 'NHL Network HD', quality: 'FHD 60FPS', genre: 'NHL', country: 'US', description: 'Couverture NHL avec matchs en direct et analyses de joueurs.' },
      // Combat
      { name: 'UFC Fight Pass Live', quality: 'FHD 60FPS', genre: 'MMA', country: 'US', description: 'Événements UFC numérotés, Fight Nights, Contender Series et PPV.', popular: true },
      { name: 'DAZN Boxing & PPV', quality: 'FHD 60FPS', genre: 'Boxe', country: 'US', description: 'Matchroom Boxing, Golden Boy Promotions et grands combats PPV.' },
      { name: 'WWE Network', quality: 'FHD 60FPS', genre: 'Catch', country: 'US', description: 'WWE Raw, SmackDown, NXT et tous les événements pay-per-view.' },
      // Tennis / Golf
      { name: 'Tennis Channel HD', quality: 'FHD 60FPS', genre: 'Tennis', country: 'US', description: 'Tennis 24/7 avec tournois ATP, WTA et Grands Chelems.' },
      { name: 'Golf Channel HD', quality: 'FHD 60FPS', genre: 'Golf', country: 'US', description: 'PGA Tour, LPGA et couverture des Grands Chelems.' },
      // Canada
      { name: 'TSN 1 HD', quality: 'FHD 60FPS', genre: 'Sport canadien', country: 'CA', description: 'Chaîne sportive canadienne avec NHL, NBA et CFL.' },
      { name: 'TSN 2 HD', quality: 'FHD 60FPS', genre: 'NFL & NBA', country: 'CA', description: 'NFL Sunday, Monday Night Football et matchs NBA playoffs.' },
      { name: 'Sportsnet Ontario HD', quality: 'FHD 60FPS', genre: 'Sport canadien', country: 'CA', description: 'Réseau sportif canadien avec NHL, MLB et NBA.' },
      { name: 'RDS HD', quality: 'FHD 60FPS', genre: 'Sport canadien FR', country: 'CA', description: 'Réseau des sports francophone avec couverture canadienne et internationale.' },
      { name: 'TVA Sports HD', quality: 'FHD 60FPS', genre: 'Sport canadien FR', country: 'CA', description: 'Chaîne sportive francophone du Canada avec NHL et autres compétitions.' },
      // Allemagne / Italie / Espagne
      { name: 'Sky Sport Bundesliga HD', quality: 'FHD 60FPS', genre: 'Bundesliga', country: 'DE', description: 'Chaîne allemande dédiée à la Bundesliga et au football allemand.' },
      { name: 'Sky Sport F1 Deutschland HD', quality: 'FHD 60FPS', genre: 'Formule 1', country: 'DE', description: 'Chaîne allemande dédiée à la Formule 1 et au sport automobile.' },
      { name: 'Sky Sport Italia HD', quality: 'FHD 60FPS', genre: 'Serie A', country: 'IT', description: 'Chaîne italienne avec Serie A, Ligue des Champions et Formule 1.' },
      { name: 'DAZN Italia HD', quality: 'FHD 60FPS', genre: 'Serie A', country: 'IT', description: 'DAZN Italie avec Serie A, boxe et MMA.' },
      { name: 'Movistar Plus Deportes HD', quality: 'FHD 60FPS', genre: 'La Liga', country: 'ES', description: 'Chaîne espagnole avec La Liga, Coupe du Roi et Formule 1.' },
      { name: 'DAZN España HD', quality: 'FHD 60FPS', genre: 'La Liga', country: 'ES', description: 'DAZN Espagne avec La Liga, Formule 1 et boxe.' },
      // Autres européens premium
      { name: 'Eleven Sports HD', quality: 'FHD 60FPS', genre: 'Multi-sport', country: 'EU', description: 'Chaîne européenne premium avec football et sport international.' },
      { name: 'Sport1 Deutschland HD', quality: 'FHD 60FPS', genre: 'Multi-sport', country: 'DE', description: 'Chaîne sportive allemande avec Bundesliga et sport gratuit.' },
      { name: 'Fight Sports HD', quality: 'FHD 60FPS', genre: 'Combat', country: 'US', description: 'Boxe, kickboxing et MMA du monde entier.' },
      { name: 'Red Bull TV HD', quality: 'FHD 60FPS', genre: 'Sport extrême', country: 'EU', description: 'Sport extrême, sport automobile et aventure.' },
      { name: 'Olympic Channel HD', quality: 'FHD 60FPS', genre: 'Jeux Olympiques', country: 'EU', description: 'Couverture olympique, temps forts et profils d’athlètes.' },
    ],
    faqs: [
      {
        question: 'Puis-je regarder la Ligue 1, la Ligue des Champions, la Premier League, la NBA et les PPV en direct ?',
        answer:
          'Oui. Chaque formule inclut l’intégralité de la Ligue 1, de la Ligue des Champions, de la Premier League, de la NBA, de la Formule 1 et de tous les grands combats de boxe et de MMA en pay-per-view sans frais supplémentaires. Ce qui coûte 70 € ou plus en PPV traditionnel est inclus dans votre abonnement.',
      },
      {
        question: 'Y a-t-il un décalage par rapport au câble traditionnel ?',
        answer:
          'Non. Nos serveurs optimisés pour la France et l’Europe utilisent des connexions 60 FPS à haut débit avec une latence minimale. Vous regardez donc les événements en direct, en temps réel, sans décalage perceptible.',
      },
      {
        question: 'Proposez-vous une fonction replay pour les matchs manqués ?',
        answer:
          'Oui. La plupart des chaînes sportives incluent une fonction replay 7 jours et un guide EPG parfaitement synchronisé pour revoir n’importe quel match manqué.',
      },
    ],
    featured: true,
  },

  // =========================================================================
  // 2. CHAÎNES FRANÇAISES
  // =========================================================================
  {
    slug: 'france',
    name: 'Chaînes françaises',
    totalChannels: 5000,
    description:
      'Toutes les grandes chaînes françaises : TF1, France 2, France 3, M6, Canal+, C8, W9, TMC, BFM TV, CNEWS, LCI, France 24, et les chaînes thématiques premium en Full HD et 4K.',
    longDescription:
      'Accédez à l’intégralité de la télévision française, des chaînes hertziennes gratuites (TF1, France 2, France 3, M6, Arte) aux chaînes premium (Canal+, Ciné+, OCS, TCM Cinéma) en passant par les chaînes d’information (BFM TV, CNEWS, LCI, France 24). Notre sélection française vous offre le package complet du divertissement français en Full HD et 4K avec EPG synchronisé et replay 7 jours.',
    keywords: [
      'chaînes françaises iptv',
      'tf1 iptv',
      'france 2 iptv',
      'm6 iptv',
      'canal plus iptv',
      'bfm tv iptv',
      'cnews iptv',
      'iptv français premium',
      'meilleur iptv france',
      'abonnement iptv chaînes françaises',
    ],
    channels: [
      // Chaînes hertziennes
      { name: 'TF1 HD', quality: 'FHD 60FPS', genre: 'Hertzien', country: 'FR', description: 'La première chaîne française avec séries, divertissement et football.', popular: true },
      { name: 'TF1 Séries Films HD', quality: 'FHD 60FPS', genre: 'Séries & Films', country: 'FR', description: 'Chaîne thématique TF1 dédiée aux séries et aux films.' },
      { name: 'TMC HD', quality: 'FHD 60FPS', genre: 'Hertzien', country: 'FR', description: 'Chaîne généraliste du groupe TF1 avec magazines et divertissement.' },
      { name: 'TFX HD', quality: 'FHD 60FPS', genre: 'Hertzien', country: 'FR', description: 'Chaîne jeune du groupe TF1 avec téléréalité et séries.' },
      { name: 'LCI HD', quality: 'FHD 60FPS', genre: 'Info française', country: 'FR', description: 'Chaîne d’information du groupe TF1 avec analyses et débats.' },
      { name: 'France 2 HD', quality: 'FHD 60FPS', genre: 'Hertzien', country: 'FR', description: 'Chaîne publique française avec Roland-Garros et Tour de France.', popular: true },
      { name: 'France 3 HD', quality: 'FHD 60FPS', genre: 'Hertzien', country: 'FR', description: 'Programmation régionale française, informations et divertissement.' },
      { name: 'France 4 HD', quality: 'FHD 60FPS', genre: 'Jeunesse & Culture', country: 'FR', description: 'Chaîne publique française jeunesse et culturelle.' },
      { name: 'France 5 HD', quality: 'FHD 60FPS', genre: 'Documentaire', country: 'FR', description: 'Documentaires français, culture et émissions éducatives.' },
      { name: 'Franceinfo HD', quality: 'FHD 60FPS', genre: 'Info française', country: 'FR', description: 'Chaîne d’information publique en continu du service public.' },
      { name: 'France 24 FR HD', quality: 'FHD 60FPS', genre: 'Info internationale', country: 'FR', description: 'Chaîne d’information française internationale 24h/24.' },
      { name: 'TV5 Monde HD', quality: 'FHD 60FPS', genre: 'Francophonie', country: 'FR', description: 'Chaîne francophone internationale avec contenus francophones mondiaux.' },
      { name: 'M6 HD', quality: 'FHD 60FPS', genre: 'Hertzien', country: 'FR', description: 'Chaîne française avec téléréalité, films et séries.', popular: true },
      { name: 'M6 Music HD', quality: 'FHD 60FPS', genre: 'Musique', country: 'FR', description: 'Chaîne musicale du groupe M6 avec clips et concerts.' },
      { name: 'W9 HD', quality: 'FHD 60FPS', genre: 'Jeunesse', country: 'FR', description: 'Chaîne jeune du groupe M6 avec séries et divertissement.' },
      { name: '6ter HD', quality: 'FHD 60FPS', genre: 'Famille', country: 'FR', description: 'Chaîne familiale du groupe M6 avec programmes pour tous.' },
      { name: 'Paris Première HD', quality: 'FHD 60FPS', genre: 'Culture', country: 'FR', description: 'Chaîne premium culturelle et parisienne.' },
      { name: 'Téva HD', quality: 'FHD 60FPS', genre: 'Féminine', country: 'FR', description: 'Chaîne féminine avec séries, magazines et lifestyle.' },
      { name: 'Arte HD', quality: 'FHD 60FPS', genre: 'Culture', country: 'FR', description: 'Chaîne culturelle franco-allemande avec documentaires et cinéma d’auteur.', popular: true },
      { name: 'C8 HD', quality: 'FHD 60FPS', genre: 'Hertzien', country: 'FR', description: 'Chaîne généraliste française avec divertissement et débats.' },
      { name: 'CStar HD', quality: 'FHD 60FPS', genre: 'Musique', country: 'FR', description: 'Chaîne musicale française avec clips, concerts et émissions.' },
      // Chaînes premium
      { name: 'Canal+ HD', quality: 'FHD 60FPS', genre: 'Premium FR', country: 'FR', description: 'Chaîne premium française avec films, sport et séries originales.', popular: true },
      { name: 'Canal+ Cinéma HD', quality: 'FHD 60FPS', genre: 'Cinéma FR', country: 'FR', description: 'Chaîne de cinéma premium du groupe Canal+.' },
      { name: 'Canal+ Séries HD', quality: 'FHD 60FPS', genre: 'Séries FR', country: 'FR', description: 'Chaîne premium dédiée aux séries françaises et internationales.', popular: true },
      { name: 'Canal+ Décalé HD', quality: 'FHD 60FPS', genre: 'Premium FR', country: 'FR', description: 'Chaîne premium avec séries, humour et divertissement décalé.' },
      { name: 'Canal+ Docs HD', quality: 'FHD 60FPS', genre: 'Documentaire', country: 'FR', description: 'Chaîne premium de documentaires du groupe Canal+.' },
      { name: 'Ciné+ Premier HD', quality: 'FHD 60FPS', genre: 'Cinéma FR', country: 'FR', description: 'Chaîne cinéma premium avec les premières exclusivités.' },
      { name: 'Ciné+ Frisson HD', quality: 'FHD 60FPS', genre: 'Cinéma FR', country: 'FR', description: 'Chaîne cinéma dédiée aux films d’action et thrillers.' },
      { name: 'Ciné+ Emotion HD', quality: 'FHD 60FPS', genre: 'Cinéma FR', country: 'FR', description: 'Chaîne cinéma dédiée aux films romantiques et dramatiques.' },
      { name: 'Ciné+ Classic HD', quality: 'FHD 60FPS', genre: 'Cinéma FR', country: 'FR', description: 'Chaîne cinéma dédiée aux classiques du 7ᵉ art.' },
      { name: 'Ciné+ Famiz HD', quality: 'FHD 60FPS', genre: 'Cinéma FR', country: 'FR', description: 'Chaîne cinéma familiale du groupe Canal+.' },
      { name: 'OCS Max HD', quality: 'FHD 60FPS', genre: 'Séries premium', country: 'FR', description: 'Chaîne premium avec séries HBO et créations originales.' },
      { name: 'OCS Choc HD', quality: 'FHD 60FPS', genre: 'Cinéma FR', country: 'FR', description: 'Chaîne cinéma premium avec films d’action et thrillers.' },
      { name: 'OCS Géants HD', quality: 'FHD 60FPS', genre: 'Cinéma FR', country: 'FR', description: 'Chaîne premium dédiée aux grands films internationaux.' },
      { name: 'Paramount Channel Décalé HD', quality: 'FHD 60FPS', genre: 'Séries', country: 'FR', description: 'Chaîne avec séries cultes et divertissement décalé.' },
      // Information
      { name: 'BFM TV HD', quality: 'FHD 60FPS', genre: 'Info française', country: 'FR', description: 'Première chaîne d’information française avec débats et analyses.', popular: true },
      { name: 'BFM Business HD', quality: 'FHD 60FPS', genre: 'Économie', country: 'FR', description: 'Chaîne économique avec actualité des marchés et analyses.' },
      { name: 'CNEWS HD', quality: 'FHD 60FPS', genre: 'Info française', country: 'FR', description: 'Chaîne d’information et de débat du groupe Canal+.' },
      { name: 'LCI HD', quality: 'FHD 60FPS', genre: 'Info française', country: 'FR', description: 'Chaîne d’information du groupe TF1 avec analyses et débats.' },
      { name: 'Franceinfo HD', quality: 'FHD 60FPS', genre: 'Info française', country: 'FR', description: 'Chaîne d’information publique en continu.' },
      // Divertissement TNT
      { name: 'TMC HD', quality: 'FHD 60FPS', genre: 'Hertzien', country: 'FR', description: 'Chaîne généraliste TMC avec magazines et divertissement.' },
      { name: 'TFX HD', quality: 'FHD 60FPS', genre: 'Hertzien', country: 'FR', description: 'Chaîne jeune du groupe TF1.' },
      { name: '6ter HD', quality: 'FHD 60FPS', genre: 'Famille', country: 'FR', description: 'Chaîne familiale avec programmes pour tous les âges.' },
      { name: 'RMC Story HD', quality: 'FHD 60FPS', genre: 'Hertzien', country: 'FR', description: 'Chaîne généraliste avec magazines, enquêtes et débats.' },
      { name: 'RMC Découverte HD', quality: 'FHD 60FPS', genre: 'Documentaire', country: 'FR', description: 'Chaîne documentaire avec enquêtes et découvertes.' },
      { name: 'Chérie 25 HD', quality: 'FHD 60FPS', genre: 'Féminine', country: 'FR', description: 'Chaîne féminine avec séries et divertissement.' },
      { name: 'Numéro 23 HD', quality: 'FHD 60FPS', genre: 'Généraliste', country: 'FR', description: 'Chaîne généraliste avec séries, films et documentaires.' },
      // Thématiques françaises
      { name: 'RTL9 HD', quality: 'FHD 60FPS', genre: 'Généraliste', country: 'FR', description: 'Chaîne généraliste franco-luxembourgeoise avec séries et films.' },
      { name: 'TV Breizh HD', quality: 'FHD 60FPS', genre: 'Régional', country: 'FR', description: 'Chaîne bretonne avec séries, films et programmes régionaux.' },
      { name: 'Paris Première HD', quality: 'FHD 60FPS', genre: 'Culture', country: 'FR', description: 'Chaîne culturelle et parisienne premium.' },
      { name: 'Comédie+ HD', quality: 'FHD 60FPS', genre: 'Humour', country: 'FR', description: 'Chaîne dédiée à l’humour français et international.' },
      { name: 'Jimmy HD', quality: 'FHD 60FPS', genre: 'Séries', country: 'FR', description: 'Chaîne de séries cultes des années 80 à aujourd’hui.' },
      { name: 'Série Club HD', quality: 'FHD 60FPS', genre: 'Séries', country: 'FR', description: 'Chaîne de séries française avec nouveautés et classiques.' },
      { name: 'Téva HD', quality: 'FHD 60FPS', genre: 'Féminine', country: 'FR', description: 'Chaîne féminine avec séries, magazines et lifestyle.' },
      { name: 'E! Entertainment FR HD', quality: 'FHD 60FPS', genre: 'People', country: 'FR', description: 'Chaîne people et divertissement du groupe NBCUniversal.' },
      { name: 'MTV France HD', quality: 'FHD 60FPS', genre: 'Musique & Réalité', country: 'FR', description: 'Chaîne musicale et téléréalité pour la jeunesse française.' },
      { name: 'MCM HD', quality: 'FHD 60FPS', genre: 'Musique', country: 'FR', description: 'Chaîne musicale française avec clips et émissions.' },
      { name: 'MCM Top HD', quality: 'FHD 60FPS', genre: 'Musique', country: 'FR', description: 'Chaîne musicale avec hits du moment et nouveautés.' },
      { name: 'Trace Urban HD', quality: 'FHD 60FPS', genre: 'Musique', country: 'FR', description: 'Chaîne musicale urbaine avec hip-hop, R&B et rap.' },
      // Documentaires FR
      { name: 'Planète+ HD', quality: 'FHD 60FPS', genre: 'Documentaire', country: 'FR', description: 'Chaîne documentaire avec enquêtes et découvertes.' },
      { name: 'Planète+ Aventure HD', quality: 'FHD 60FPS', genre: 'Documentaire', country: 'FR', description: 'Chaîne documentaire dédiée à l’aventure et l’exploration.' },
      { name: 'Planète+ Crime HD', quality: 'FHD 60FPS', genre: 'Documentaire', country: 'FR', description: 'Chaîne documentaire dédiée aux affaires criminelles.' },
      { name: 'National Geographic FR HD', quality: 'FHD 60FPS', genre: 'Documentaire', country: 'FR', description: 'Chaîne documentaire nature, science et exploration.' },
      { name: 'Nat Geo Wild HD', quality: 'FHD 60FPS', genre: 'Nature', country: 'FR', description: 'Chaîne documentaire animalière et nature.' },
      { name: 'Discovery Channel FR HD', quality: 'FHD 60FPS', genre: 'Documentaire', country: 'FR', description: 'Chaîne documentaire avec découvertes et enquêtes.' },
      { name: 'RMC Découverte HD', quality: 'FHD 60FPS', genre: 'Documentaire', country: 'FR', description: 'Chaîne documentaire française avec découvertes et sciences.' },
      { name: 'Ushuaïa TV HD', quality: 'FHD 60FPS', genre: 'Nature', country: 'FR', description: 'Chaîne nature et environnement du groupe TF1.' },
      { name: 'Histoire TV HD', quality: 'FHD 60FPS', genre: 'Histoire', country: 'FR', description: 'Chaîne historique avec documentaires et archives.' },
      { name: 'TV5 Monde HD', quality: 'FHD 60FPS', genre: 'Francophonie', country: 'FR', description: 'Chaîne francophone internationale.' },
    ],
    faqs: [
      {
        question: 'Puis-je regarder TF1, France 2, M6 et Canal+ partout en France ?',
        answer:
          'Oui. Notre sélection française inclut TF1, France 2, France 3, M6, Canal+, C8, W9 et bien d’autres chaînes premium. Tout est inclus dans votre abonnement IPTV sans frais supplémentaires.',
      },
      {
        question: 'Les chaînes françaises en direct comme BFM TV et RMC Sport sont-elles incluses ?',
        answer:
          'Absolument. Vous accédez à BFM TV, CNEWS, LCI, Franceinfo, beIN Sports, RMC Sport et toutes les grandes chaînes françaises. Parfait pour suivre l’actualité et les matchs de Ligue 1.',
      },
    ],
  },

  // =========================================================================
  // 3. CHAÎNES EUROPÉENNES
  // =========================================================================
  {
    slug: 'europe',
    name: 'Chaînes européennes',
    totalChannels: 8000,
    description:
      'Toutes les grandes chaînes européennes : BBC, ITV, Sky, ARD, ZDF, RTL, RAI, Mediaset, TVE, Antena 3, RTP, NPO et bien d’autres du Royaume-Uni, d’Allemagne, d’Italie, d’Espagne, du Portugal et des Pays-Bas.',
    longDescription:
      'Regardez la télévision européenne avec notre sélection complète. Du Royaume-Uni (BBC, ITV, Channel 4, Sky) à l’Allemagne (ARD, ZDF, RTL), en passant par l’Italie (RAI, Mediaset), l’Espagne (TVE, Antena 3), le Portugal (RTP, SIC) et les Pays-Bas (NPO, RTL). Idéal pour les expatriés européens en France et les téléspectateurs français qui aiment les contenus britanniques et européens.',
    keywords: [
      'chaînes européennes iptv',
      'bbc iptv france',
      'itv iptv',
      'sky sports iptv france',
      'chaînes allemandes iptv',
      'chaînes italiennes iptv',
      'chaînes espagnoles iptv',
      'abonnement iptv européen',
    ],
    channels: [
      // UK — BBC
      { name: 'BBC One HD', quality: 'FHD 60FPS', genre: 'Royaume-Uni', country: 'UK', description: 'La chaîne phare du service public britannique : infos, dramas et sport.', popular: true },
      { name: 'BBC Two HD', quality: 'FHD 60FPS', genre: 'Royaume-Uni', country: 'UK', description: 'Documentaires, comédies et émissions culturelles britanniques.' },
      { name: 'BBC Three HD', quality: 'FHD 60FPS', genre: 'Jeunesse', country: 'UK', description: 'Chaîne BBC jeunesse avec nouvelles comédies et dramas.' },
      { name: 'BBC Four HD', quality: 'FHD 60FPS', genre: 'Culture', country: 'UK', description: 'Arts, culture et documentaires de fond.' },
      { name: 'BBC News HD', quality: 'FHD 60FPS', genre: 'Info UK', country: 'UK', description: 'BBC News avec couverture mondiale depuis Londres.' },
      { name: 'BBC World News HD', quality: 'FHD 60FPS', genre: 'Info internationale', country: 'UK', description: 'Chaîne d’information mondiale de la BBC.' },
      { name: 'CBBC HD', quality: 'FHD 60FPS', genre: 'Jeunesse', country: 'UK', description: 'Programmation jeunesse britannique de la BBC.' },
      { name: 'CBeebies HD', quality: 'FHD 60FPS', genre: 'Jeunesse', country: 'UK', description: 'Programmation préscolaire de la BBC pour les tout-petits.' },
      // UK — ITV
      { name: 'ITV 1 HD', quality: 'FHD 60FPS', genre: 'Royaume-Uni', country: 'UK', description: 'La plus grande chaîne commerciale britannique avec divertissement et séries.', popular: true },
      { name: 'ITV 2 HD', quality: 'FHD 60FPS', genre: 'Divertissement', country: 'UK', description: 'Chaîne ITV2 avec téléréalité et divertissement jeune.' },
      { name: 'ITV 3 HD', quality: 'FHD 60FPS', genre: 'Séries', country: 'UK', description: 'Chaîne de séries britanniques classiques et policières.' },
      { name: 'ITV 4 HD', quality: 'FHD 60FPS', genre: 'Sport', country: 'UK', description: 'Chaîne sportive et documentaire du groupe ITV.' },
      { name: 'ITVBe HD', quality: 'FHD 60FPS', genre: 'Lifestyle', country: 'UK', description: 'Chaîne lifestyle et divertissement du groupe ITV.' },
      // UK — Channel 4 / 5
      { name: 'Channel 4 HD', quality: 'FHD 60FPS', genre: 'Royaume-Uni', country: 'UK', description: 'Cinéma, documentaires et séries primées du Royaume-Uni.' },
      { name: 'E4 HD', quality: 'FHD 60FPS', genre: 'Divertissement', country: 'UK', description: 'Chaîne jeune avec comédies et séries américaines.' },
      { name: 'More4 HD', quality: 'FHD 60FPS', genre: 'Documentaire', country: 'UK', description: 'Chaîne documentaire et culturelle du groupe Channel 4.' },
      { name: 'Film4 HD', quality: 'FHD 60FPS', genre: 'Cinéma', country: 'UK', description: 'Chaîne de cinéma britannique avec films indépendants et classiques.' },
      { name: 'Channel 5 HD', quality: 'FHD 60FPS', genre: 'Royaume-Uni', country: 'UK', description: 'Chaîne généraliste britannique avec divertissement et dramas.' },
      { name: '5Star HD', quality: 'FHD 60FPS', genre: 'Séries', country: 'UK', description: 'Chaîne de séries, films et divertissement de Channel 5.' },
      // UK — Sky
      { name: 'Sky Witness HD', quality: 'FHD 60FPS', genre: 'Royaume-Uni', country: 'UK', description: 'Dramas britanniques et séries policières américaines.' },
      { name: 'Sky Atlantic HD', quality: 'FHD 60FPS', genre: 'Royaume-Uni', country: 'UK', description: 'Séries HBO exclusives et dramas premium.' },
      { name: 'Sky Max HD', quality: 'FHD 60FPS', genre: 'Divertissement', country: 'UK', description: 'Chaîne premium Sky avec dramas et divertissement exclusif.' },
      { name: 'Sky Comedy HD', quality: 'FHD 60FPS', genre: 'Comédie', country: 'UK', description: 'Chaîne de comédies, stand-up et sitcoms britanniques.' },
      { name: 'Sky Cinema Premiere HD', quality: 'FHD 60FPS', genre: 'Cinéma', country: 'UK', description: 'Chaîne cinéma premium avec les premières exclusivités.' },
      { name: 'Sky Cinema Action HD', quality: 'FHD 60FPS', genre: 'Action', country: 'UK', description: 'Chaîne cinéma dédiée à l’action et aux blockbusters.' },
      { name: 'Sky Cinema Family HD', quality: 'FHD 60FPS', genre: 'Famille', country: 'UK', description: 'Chaîne cinéma familiale du groupe Sky.' },
      { name: 'Sky News HD', quality: 'FHD 60FPS', genre: 'Info UK', country: 'UK', description: 'Chaîne d’information britannique en continu.' },
      { name: 'Sky History HD', quality: 'FHD 60FPS', genre: 'Histoire', country: 'UK', description: 'Chaîne historique avec documentaires et archives.' },
      { name: 'Sky Nature HD', quality: 'FHD 60FPS', genre: 'Nature', country: 'UK', description: 'Chaîne nature et documentaires animaliers.' },
      { name: 'Sky Arts HD', quality: 'FHD 60FPS', genre: 'Culture', country: 'UK', description: 'Chaîne culturelle et artistique de Sky.' },
      // UK — Autres
      { name: 'Dave HD', quality: 'FHD 60FPS', genre: 'Comédie', country: 'UK', description: 'Chaîne comique britannique avec panel shows et humour.' },
      { name: 'Gold HD', quality: 'FHD 60FPS', genre: 'Comédie classique', country: 'UK', description: 'Chaîne de comédies britanniques classiques et rétro.' },
      { name: 'W HD', quality: 'FHD 60FPS', genre: 'Féminine', country: 'UK', description: 'Chaîne féminine britannique avec dramas et lifestyle.' },
      { name: 'Alibi HD', quality: 'FHD 60FPS', genre: 'Séries policières', country: 'UK', description: 'Chaîne de séries policières et enquêtes.' },
      // Allemagne
      { name: 'ARD Das Erste HD', quality: 'FHD 60FPS', genre: 'Allemagne', country: 'DE', description: 'Chaîne publique allemande avec Tagesschau et Bundesliga.', popular: true },
      { name: 'ZDF HD', quality: 'FHD 60FPS', genre: 'Allemagne', country: 'DE', description: 'Chaîne publique allemande avec documentaires et sport en direct.' },
      { name: 'RTL HD', quality: 'FHD 60FPS', genre: 'Allemagne', country: 'DE', description: 'Première chaîne commerciale allemande avec divertissement et sport.' },
      { name: 'Sat.1 HD', quality: 'FHD 60FPS', genre: 'Allemagne', country: 'DE', description: 'Chaîne allemande avec films, séries et sport en direct.' },
      { name: 'ProSieben HD', quality: 'FHD 60FPS', genre: 'Allemagne', country: 'DE', description: 'Chaîne commerciale allemande avec séries et divertissement.' },
      { name: 'ZDF Neo HD', quality: 'FHD 60FPS', genre: 'Allemagne', country: 'DE', description: 'Chaîne ZDF Neo avec documentaires, comédies et jeunesse.' },
      { name: '3sat HD', quality: 'FHD 60FPS', genre: 'Allemagne', country: 'DE', description: 'Chaîne culturelle germanophone avec documentaires et sciences.' },
      // Italie
      { name: 'Rai 1 HD', quality: 'FHD 60FPS', genre: 'Italie', country: 'IT', description: 'Première chaîne publique italienne avec information et divertissement.', popular: true },
      { name: 'Rai 2 HD', quality: 'FHD 60FPS', genre: 'Italie', country: 'IT', description: 'Chaîne publique italienne avec sport, séries et divertissement.' },
      { name: 'Rai 3 HD', quality: 'FHD 60FPS', genre: 'Italie', country: 'IT', description: 'Chaîne publique italienne avec programmation régionale et culture.' },
      { name: 'Canale 5 HD', quality: 'FHD 60FPS', genre: 'Italie', country: 'IT', description: 'Chaîne phare du groupe Mediaset avec dramas et téléréalité.' },
      { name: 'Italia 1 HD', quality: 'FHD 60FPS', genre: 'Italie', country: 'IT', description: 'Chaîne jeunesse italienne avec animation et sport.' },
      { name: 'Rete 4 HD', quality: 'FHD 60FPS', genre: 'Italie', country: 'IT', description: 'Chaîne italienne avec films, dramas et documentaires.' },
      { name: 'La7 HD', quality: 'FHD 60FPS', genre: 'Italie', country: 'IT', description: 'Chaîne italienne avec information, débats et analyses.' },
      // Espagne
      { name: 'La 1 HD', quality: 'FHD 60FPS', genre: 'Espagne', country: 'ES', description: 'Chaîne nationale espagnole avec information, divertissement et La Liga.' },
      { name: 'La 2 HD', quality: 'FHD 60FPS', genre: 'Espagne', country: 'ES', description: 'Chaîne publique espagnole avec documentaires et culture.' },
      { name: 'Antena 3 HD', quality: 'FHD 60FPS', genre: 'Espagne', country: 'ES', description: 'Chaîne commerciale espagnole avec séries et films.' },
      { name: 'Telecinco HD', quality: 'FHD 60FPS', genre: 'Espagne', country: 'ES', description: 'Chaîne espagnole avec téléréalité et dramas.' },
      { name: 'Movistar Plus HD', quality: 'FHD 60FPS', genre: 'Espagne', country: 'ES', description: 'Chaîne premium espagnole avec films, séries et La Liga.' },
      // Portugal
      { name: 'RTP 1 HD', quality: 'FHD 60FPS', genre: 'Portugal', country: 'PT', description: 'Chaîne publique portugaise avec information et divertissement.' },
      { name: 'RTP 2 HD', quality: 'FHD 60FPS', genre: 'Portugal', country: 'PT', description: 'Chaîne culturelle et documentaire portugaise.' },
      { name: 'SIC HD', quality: 'FHD 60FPS', genre: 'Portugal', country: 'PT', description: 'Chaîne commerciale portugaise avec telenovelas et divertissement.' },
      { name: 'TVI HD', quality: 'FHD 60FPS', genre: 'Portugal', country: 'PT', description: 'Chaîne commerciale portugaise avec informations et divertissement.' },
      // Pays-Bas
      { name: 'NPO 1 HD', quality: 'FHD 60FPS', genre: 'Pays-Bas', country: 'NL', description: 'Chaîne publique néerlandaise avec information et divertissement.' },
      { name: 'RTL 4 HD', quality: 'FHD 60FPS', genre: 'Pays-Bas', country: 'NL', description: 'Chaîne commerciale néerlandaise avec divertissement et téléréalité.' },
      { name: 'SBS 6 HD', quality: 'FHD 60FPS', genre: 'Pays-Bas', country: 'NL', description: 'Chaîne commerciale néerlandaise avec divertissement et sport.' },
    ],
    faqs: [
      {
        question: 'Puis-je regarder les chaînes britanniques et européennes depuis la France ?',
        answer:
          'Oui. Notre sélection européenne inclut toutes les grandes chaînes du Royaume-Uni, d’Allemagne, d’Italie, d’Espagne, du Portugal et des Pays-Bas. Tout est diffusé en Full HD depuis notre nœud serveur européen avec une faible latence.',
      },
      {
        question: 'Les chaînes Sky Sports sont-elles incluses dans cette catégorie ?',
        answer:
          'Les chaînes Sky Sports apparaissent dans la catégorie Sport avec les autres réseaux sportifs mondiaux. Les chaînes de divertissement britanniques (Sky Witness, Sky Atlantic, Sky Cinema) sont listées ici.',
      },
    ],
  },

  // =========================================================================
  // 4. CHAÎNES CANADIENNES
  // =========================================================================
  {
    slug: 'canada',
    name: 'Chaînes canadiennes',
    totalChannels: 500,
    description:
      'Sélection complète de la télévision canadienne : CBC, CTV, Global, Citytv, TSN, Sportsnet, TVA, Radio-Canada, et chaînes régionales avec EPG et replay.',
    longDescription:
      'L’intégralité de la télévision canadienne pour les expatriés et les amateurs de contenus canadiens. CBC, CTV, Global, Citytv, TSN, Sportsnet, ainsi qu’une couverture francophone complète avec TVA et Radio-Canada. Que vous soyez un Français expatrié à Toronto ou un simple amateur de programmes canadiens, vous obtenez la sélection complète en Full HD.',
    keywords: [
      'chaînes canadiennes iptv',
      'cbc iptv france',
      'ctv iptv',
      'tsn iptv',
      'sportsnet iptv',
      'tva iptv',
      'radio canada iptv',
      'abonnement iptv canada france',
    ],
    channels: [
      { name: 'CBC HD', quality: 'FHD 60FPS', genre: 'Service public', country: 'CA', description: 'CBC News, The National, Hockey Night in Canada et créations canadiennes.' },
      { name: 'CBC News Network HD', quality: 'FHD 60FPS', genre: 'Info 24/7', country: 'CA', description: 'Couverture canadienne en continu, événements politiques et breaking news.' },
      { name: 'Ici Radio-Canada Télé HD', quality: 'FHD 60FPS', genre: 'Service public FR', country: 'CA', description: 'Chaîne publique francophone avec dramas et information.' },
      { name: 'ICI RDI HD', quality: 'FHD 60FPS', genre: 'Info FR', country: 'CA', description: 'Chaîne d’information francophone du Canada en continu.' },
      { name: 'ICI Explora HD', quality: 'FHD 60FPS', genre: 'Documentaire', country: 'CA', description: 'Documentaires francophones, sciences et nature.' },
      { name: 'CTV HD', quality: 'FHD 60FPS', genre: 'Commercial national', country: 'CA', description: 'CTV National News, dramas et sport en direct.' },
      { name: 'CTV News Channel HD', quality: 'FHD 60FPS', genre: 'Info 24/7', country: 'CA', description: 'Couverture d’information canadienne et internationale en continu.' },
      { name: 'CTV 2 HD', quality: 'FHD 60FPS', genre: 'Régional', country: 'CA', description: 'Programmation régionale CTV, divertissement et infos locales.' },
      { name: 'Global TV HD', quality: 'FHD 60FPS', genre: 'Commercial national', country: 'CA', description: 'Global National News, dramas et films.' },
      { name: 'Global News HD', quality: 'FHD 60FPS', genre: 'Info 24/7', country: 'CA', description: 'Information canadienne, politique et actualité internationale.' },
      { name: 'Citytv HD', quality: 'FHD 60FPS', genre: 'Urbain', country: 'CA', description: 'Émissions originales Citytv, divertissement et infos régionales.' },
      { name: 'TVA HD', quality: 'FHD 60FPS', genre: 'Francophone', country: 'CA', description: 'Premier réseau francophone canadien avec dramas et information.', popular: true },
      { name: 'TVA Nouvelles HD', quality: 'FHD 60FPS', genre: 'Info FR', country: 'CA', description: 'Information francophone canadienne en continu.' },
      { name: 'V Télé HD', quality: 'FHD 60FPS', genre: 'Divertissement FR', country: 'CA', description: 'Divertissement québécois, téléréalité et séries francophones.' },
      { name: 'Noovo HD', quality: 'FHD 60FPS', genre: 'Commercial FR', country: 'CA', description: 'Programmation québécoise, talk-shows et séries internationales.' },
      { name: 'RDS HD', quality: 'FHD 60FPS', genre: 'Sport FR', country: 'CA', description: 'Réseau des sports francophone avec couverture canadienne et internationale.' },
      { name: 'TVA Sports HD', quality: 'FHD 60FPS', genre: 'Sport FR', country: 'CA', description: 'Chaîne sportive francophone du Canada avec NHL et plus.' },
      { name: 'Slice HD', quality: 'FHD 60FPS', genre: 'Téléréalité', country: 'CA', description: 'Téléréalité, dramas et lifestyle sur Slice.' },
      { name: 'HGTV Canada HD', quality: 'FHD 60FPS', genre: 'Maison & Jardin', country: 'CA', description: 'Programmation canadienne de décoration et rénovation.' },
      { name: 'Food Network Canada HD', quality: 'FHD 60FPS', genre: 'Cuisine', country: 'CA', description: 'Émissions culinaires canadiennes et concours de cuisine.' },
      { name: 'Showcase HD', quality: 'FHD 60FPS', genre: 'Dramas premium', country: 'CA', description: 'Dramas premium et séries exclusives sur Showcase.' },
      { name: 'Space HD', quality: 'FHD 60FPS', genre: 'Science-fiction', country: 'CA', description: 'Science-fiction, fantasy et surnaturel canadiens.' },
      { name: 'Discovery Canada HD', quality: 'FHD 60FPS', genre: 'Documentaire', country: 'CA', description: 'Programmation Discovery Canada avec nature et documentaires.' },
      { name: 'History Canada HD', quality: 'FHD 60FPS', genre: 'Histoire', country: 'CA', description: 'Documentaires historiques canadiens et programmation historique.' },
      { name: 'National Geographic Canada HD', quality: 'FHD 60FPS', genre: 'Documentaire', country: 'CA', description: 'Documentaires nature, science et exploration pour le Canada.' },
      { name: 'MTV Canada HD', quality: 'FHD 60FPS', genre: 'Musique & Réalité', country: 'CA', description: 'MTV Canada avec musique, téléréalité et divertissement.' },
      { name: 'Family Channel HD', quality: 'FHD 60FPS', genre: 'Famille', country: 'CA', description: 'Programmation familiale, émissions jeunesse et teen dramas.' },
      { name: 'YTV HD', quality: 'FHD 60FPS', genre: 'Jeunesse', country: 'CA', description: 'Réseau jeunesse canadien avec animation et divertissement.' },
      { name: 'Teletoon HD', quality: 'FHD 60FPS', genre: 'Animation', country: 'CA', description: 'Chaîne d’animation canadienne avec créations originales et internationales.' },
      { name: 'Treehouse HD', quality: 'FHD 60FPS', genre: 'Préscolaire', country: 'CA', description: 'Programmation préscolaire en anglais et en français.' },
      { name: 'Hollywood Suite HD', quality: 'FHD 60FPS', genre: 'Cinéma classique', country: 'CA', description: 'Films classiques, cultes et cinéma des années 70 à 2000.' },
      { name: 'Silver Screen Classics HD', quality: 'FHD 60FPS', genre: 'Cinéma classique', country: 'CA', description: 'Films hollywoodiens de l’âge d’or et classiques du cinéma.' },
    ],
    faqs: [
      {
        question: 'Puis-je regarder les chaînes canadiennes depuis la France ?',
        answer:
          'Oui. Nos flux IPTV fonctionnent partout dans le monde sans restriction géographique. Les expatriés canadiens en France et les Français au Canada peuvent regarder CBC, CTV, Global et toutes les chaînes canadiennes depuis n’importe où.',
      },
      {
        question: 'Les chaînes francophones canadiennes sont-elles incluses ?',
        answer:
          'Absolument. Notre sélection canadienne inclut une couverture francophone complète avec TVA, Radio-Canada, ICI RDI, Noovo et plus, tout en Full HD.',
      },
    ],
  },

  // =========================================================================
  // 5. CHAÎNES BELGES, SUISSES ET LUXEMBOURGEOISES
  // =========================================================================
  {
    slug: 'benelux-suisse',
    name: 'Belgique, Suisse & Luxembourg',
    totalChannels: 800,
    description:
      'Toutes les chaînes francophones de Belgique, de Suisse et du Luxembourg : RTBF, RTL-TVI, Club RTL, Plug RTL, RTS, RTS Deux, RTL Télé Lëtzebuerg et chaînes régionales.',
    longDescription:
      'Retrouvez l’intégralité des chaînes francophones de Belgique, de Suisse et du Luxembourg. RTBF La Une, Tipik, La Trois, RTL-TVI, Club RTL, Plug RTL, RTS Un, RTS Deux, RTL Télé Lëtzebuerg et l’ensemble des chaînes régionales francophones. Idéal pour les téléspectateurs francophones qui souhaitent accéder aux programmes de leurs voisins européens en Full HD.',
    keywords: [
      'chaînes belges iptv',
      'rtbf iptv',
      'rtl tvi iptv',
      'chaînes suisses iptv',
      'rts iptv',
      'chaînes luxembourgeoises iptv',
      'rtl lëtzebuerg iptv',
      'abonnement iptv francophone',
    ],
    channels: [
      // Belgique FR
      { name: 'RTBF La Une HD', quality: 'FHD 60FPS', genre: 'Belgique', country: 'BE', description: 'Première chaîne publique francophone belge avec information et divertissement.', popular: true },
      { name: 'RTBF Tipik HD', quality: 'FHD 60FPS', genre: 'Belgique', country: 'BE', description: 'Chaîne jeune du service public belge avec séries et divertissement.' },
      { name: 'RTBF La Trois HD', quality: 'FHD 60FPS', genre: 'Culture', country: 'BE', description: 'Chaîne culturelle du service public belge.' },
      { name: 'RTBF Auvio HD', quality: 'FHD 60FPS', genre: 'Belgique', country: 'BE', description: 'Flux numérique RTBF avec contenus originaux et exclusifs.' },
      { name: 'RTL-TVI HD', quality: 'FHD 60FPS', genre: 'Belgique', country: 'BE', description: 'Chaîne commerciale francophone belge avec information et divertissement.', popular: true },
      { name: 'Club RTL HD', quality: 'FHD 60FPS', genre: 'Belgique', country: 'BE', description: 'Chaîne commerciale belge avec séries et films.' },
      { name: 'Plug RTL HD', quality: 'FHD 60FPS', genre: 'Jeunesse', country: 'BE', description: 'Chaîne jeune du groupe RTL avec téléréalité et séries.' },
      { name: 'AB3 HD', quality: 'FHD 60FPS', genre: 'Belgique', country: 'BE', description: 'Chaîne généraliste belge francophone avec séries et divertissement.' },
      { name: 'ABX HD', quality: 'FHD 60FPS', genre: 'Cinéma', country: 'BE', description: 'Chaîne cinéma et séries du groupe AB.' },
      { name: 'La Deux HD', quality: 'FHD 60FPS', genre: 'Belgique', country: 'BE', description: 'Chaîne publique belge avec sport, culture et divertissement.' },
      // Suisse FR
      { name: 'RTS Un HD', quality: 'FHD 60FPS', genre: 'Suisse', country: 'CH', description: 'Première chaîne publique suisse romande avec information et divertissement.', popular: true },
      { name: 'RTS Deux HD', quality: 'FHD 60FPS', genre: 'Suisse', country: 'CH', description: 'Chaîne publique suisse romande avec séries, sport et culture.' },
      { name: 'RTS Info HD', quality: 'FHD 60FPS', genre: 'Info Suisse', country: 'CH', description: 'Chaîne d’information suisse romande en continu.' },
      { name: 'RTS Sport HD', quality: 'FHD 60FPS', genre: 'Sport Suisse', country: 'CH', description: 'Chaîne sportive du service public suisse.' },
      { name: 'RTS Culture HD', quality: 'FHD 60FPS', genre: 'Culture', country: 'CH', description: 'Chaîne culturelle suisse romande.' },
      { name: 'TF1 Suisse HD', quality: 'FHD 60FPS', genre: 'France/Suisse', country: 'CH', description: 'Version suisse de TF1 avec contenu localisé.' },
      { name: 'France 2 Suisse HD', quality: 'FHD 60FPS', genre: 'France/Suisse', country: 'CH', description: 'Version suisse de France 2 avec contenu localisé.' },
      { name: 'Blue Zoom HD', quality: 'FHD 60FPS', genre: 'Jeunesse', country: 'CH', description: 'Chaîne jeunesse suisse avec séries et animation.' },
      { name: 'Blue Max HD', quality: 'FHD 60FPS', genre: 'Cinéma', country: 'CH', description: 'Chaîne cinéma suisse avec films et séries.' },
      // Luxembourg
      { name: 'RTL Télé Lëtzebuerg HD', quality: 'FHD 60FPS', genre: 'Luxembourg', country: 'LU', description: 'Chaîne nationale luxembourgeoise avec information et divertissement.', popular: true },
      { name: 'RTL Zwee HD', quality: 'FHD 60FPS', genre: 'Luxembourg', country: 'LU', description: 'Seconde chaîne luxembourgeoise avec sport et divertissement.' },
      { name: 'RTL Radio Lëtzebuerg TV HD', quality: 'FHD 60FPS', genre: 'Luxembourg', country: 'LU', description: 'Chaîne musicale et culturelle luxembourgeoise.' },
      // Monaco
      { name: 'Monaco Info HD', quality: 'FHD 60FPS', genre: 'Monaco', country: 'MC', description: 'Chaîne d’information monégasque avec actualité de la Principauté.' },
      { name: 'TMC Monaco HD', quality: 'FHD 60FPS', genre: 'Monaco', country: 'MC', description: 'Chaîne monégasque avec divertissement et magazines.' },
    ],
    faqs: [
      {
        question: 'Les chaînes belges, suisses et luxembourgeoises sont-elles accessibles depuis la France ?',
        answer:
          'Oui. Notre sélection francophone inclut toutes les chaînes belges, suisses, luxembourgeoises et monégasques. Idéal pour les résidents de ces pays et les téléspectateurs francophones qui veulent accéder aux programmes voisins.',
      },
      {
        question: 'La qualité est-elle équivalente aux chaînes françaises ?',
        answer:
          'Absolument. Toutes les chaînes francophones sont diffusées en Full HD avec EPG synchronisé et replay 7 jours pour la plupart des programmes.',
      },
    ],
  },

  // =========================================================================
  // 6. MAGHREB & FRANCOPHONIE
  // =========================================================================
  {
    slug: 'maghreb-francophonie',
    name: 'Maghreb & Francophonie',
    totalChannels: 1200,
    description:
      'Chaînes du Maroc, d’Algérie et de Tunisie en français et en arabe : 2M, Al Aoula, SNRT, Canal Algérie, EPTV, Télévision Tunisienne, Nessma, et chaînes francophones d’Afrique.',
    longDescription:
      'Retrouvez l’ensemble des chaînes du Maghreb et de la francophonie mondiale. Chaînes marocaines (2M, Al Aoula, SNRT), algériennes (Canal Algérie, EPTV, A3), tunisiennes (Télévision Tunisienne, Nessma, Hannibal TV) et chaînes francophones d’Afrique (TV5 Monde Afrique, Africa 24). Idéal pour les communautés maghrébines en France et les téléspectateurs francophones.',
    keywords: [
      'chaînes marocaines iptv',
      'chaînes algériennes iptv',
      'chaînes tunisiennes iptv',
      '2m iptv',
      'canal algérie iptv',
      'nessma iptv',
      'chaînes maghreb iptv',
      'abonnement iptv maghreb',
    ],
    channels: [
      // Maroc
      { name: '2M Maroc HD', quality: 'FHD 60FPS', genre: 'Maroc', country: 'MA', description: 'Première chaîne marocaine avec divertissement, séries et information.', popular: true },
      { name: 'Al Aoula HD', quality: 'FHD 60FPS', genre: 'Maroc', country: 'MA', description: 'Chaîne nationale marocaine avec journaux et programmes variés.' },
      { name: 'SNRT Laayoune HD', quality: 'FHD 60FPS', genre: 'Maroc', country: 'MA', description: 'Chaîne régionale marocaine dédiée au Sahara.' },
      { name: 'Arryadia HD', quality: 'FHD 60FPS', genre: 'Sport Maroc', country: 'MA', description: 'Chaîne sportive marocaine avec Botola et événements internationaux.' },
      { name: 'Al Maghribia HD', quality: 'FHD 60FPS', genre: 'Maroc', country: 'MA', description: 'Chaîne marocaine pour les MRE (Marocains résidant à l’étranger).' },
      { name: 'Medi1 TV HD', quality: 'FHD 60FPS', genre: 'Maroc', country: 'MA', description: 'Chaîne marocaine internationale avec information et divertissement.' },
      { name: 'Medi1 Radio TV HD', quality: 'FHD 60FPS', genre: 'Maroc', country: 'MA', description: 'Chaîne musicale et culturelle marocaine.' },
      // Algérie
      { name: 'Canal Algérie HD', quality: 'FHD 60FPS', genre: 'Algérie', country: 'DZ', description: 'Chaîne algérienne internationale pour les expatriés.', popular: true },
      { name: 'A3 Algérie HD', quality: 'FHD 60FPS', genre: 'Algérie', country: 'DZ', description: 'Chaîne généraliste algérienne avec séries, films et information.' },
      { name: 'EPTV HD', quality: 'FHD 60FPS', genre: 'Algérie', country: 'DZ', description: 'Chaîne publique algérienne avec information et divertissement.' },
      { name: 'Anews HD', quality: 'FHD 60FPS', genre: 'Info Algérie', country: 'DZ', description: 'Chaîne d’information algérienne en continu.' },
      { name: 'Echorouk TV HD', quality: 'FHD 60FPS', genre: 'Algérie', country: 'DZ', description: 'Chaîne privée algérienne avec divertissement et information.' },
      { name: 'Ennahar TV HD', quality: 'FHD 60FPS', genre: 'Algérie', country: 'DZ', description: 'Chaîne privée algérienne avec information et débats.' },
      { name: 'Samira TV HD', quality: 'FHD 60FPS', genre: 'Algérie', country: 'DZ', description: 'Chaîne algérienne dédiée à la cuisine et au lifestyle.' },
      { name: 'Dzaïr TV HD', quality: 'FHD 60FPS', genre: 'Algérie', country: 'DZ', description: 'Chaîne généraliste algérienne avec programmes locaux.' },
      // Tunisie
      { name: 'Télévision Tunisienne 1 HD', quality: 'FHD 60FPS', genre: 'Tunisie', country: 'TN', description: 'Première chaîne publique tunisienne avec information et divertissement.', popular: true },
      { name: 'Télévision Tunisienne 2 HD', quality: 'FHD 60FPS', genre: 'Tunisie', country: 'TN', description: 'Seconde chaîne publique tunisienne avec programmes variés.' },
      { name: 'Nessma TV HD', quality: 'FHD 60FPS', genre: 'Tunisie', country: 'TN', description: 'Chaîne privée tunisienne avec téléréalité et séries.', popular: true },
      { name: 'Hannibal TV HD', quality: 'FHD 60FPS', genre: 'Tunisie', country: 'TN', description: 'Chaîne privée tunisienne avec information et divertissement.' },
      { name: 'Ettounsia TV HD', quality: 'FHD 60FPS', genre: 'Tunisie', country: 'TN', description: 'Chaîne tunisienne avec séries et émissions de société.' },
      { name: 'Al Insen TV HD', quality: 'FHD 60FPS', genre: 'Tunisie', country: 'TN', description: 'Chaîne tunisienne avec débats et programmes sociaux.' },
      { name: 'Telvza TV HD', quality: 'FHD 60FPS', genre: 'Tunisie', country: 'TN', description: 'Chaîne tunisienne avec divertissement et information.' },
      // Panafricain francophone
      { name: 'TV5 Monde Afrique HD', quality: 'FHD 60FPS', genre: 'Afrique', country: 'EU', description: 'Chaîne francophone panafricaine avec contenus variés.' },
      { name: 'Africa 24 HD', quality: 'FHD 60FPS', genre: 'Afrique', country: 'EU', description: 'Chaîne d’information africaine en continu.' },
      { name: 'France 24 Afrique HD', quality: 'FHD 60FPS', genre: 'Afrique', country: 'FR', description: 'Version africaine de France 24.' },
      // Beur TV
      { name: 'Beur TV HD', quality: 'FHD 60FPS', genre: 'Maghreb', country: 'FR', description: 'Chaîne pour les communautés maghrébines en Europe.' },
    ],
    faqs: [
      {
        question: 'Puis-je regarder les chaînes du Maghreb depuis la France ?',
        answer:
          'Oui. Notre sélection inclut toutes les chaînes du Maroc, d’Algérie et de Tunisie en français et en arabe. Idéal pour les communautés maghrébines en France et les expatriés du Maghreb.',
      },
      {
        question: 'Les chaînes sont-elles disponibles en arabe ou en français ?',
        answer:
          'Les deux. La majorité des chaînes maghrébines diffusent à la fois en arabe et en français. Vous pouvez ainsi suivre vos programmes préférés dans la langue de votre choix.',
      },
    ],
  },

  // =========================================================================
  // 7. FILMS & VOD
  // =========================================================================
  {
    slug: 'films-vod',
    name: 'Films & bibliothèque à la demande',
    totalChannels: 500,
    description:
      'Accédez à plus de 120 000 films et séries complètes issues des grandes plateformes de streaming, en Full HD et 4K avec sous-titres français et son Dolby 5.1.',
    longDescription:
      'Notre bibliothèque à la demande est l’une des plus grandes au monde avec plus de 120 000 films et séries complètes couvrant tous les genres, toutes les époques et toutes les plateformes de streaming. De nouvelles sorties sont ajoutées quotidiennement, il y a donc toujours quelque chose de frais à regarder, que vous cherchiez un blockbuster d’action, une comédie familiale ou la dernière série dramatique primée.',
    keywords: [
      'films iptv france',
      'vod iptv france',
      'netflix iptv',
      'hbo iptv france',
      'disney plus iptv',
      'meilleur iptv films',
      'abonnement iptv vod',
    ],
    channels: [
      { name: 'Cinéma Première 4K', quality: '4K UHD', genre: 'Nouveautés', description: 'Les dernières sorties cinéma en 4K UHD avec son Dolby 5.1.', popular: true },
      { name: 'Cinéma Action 4K', quality: '4K UHD', genre: 'Action & Blockbusters', description: 'Films d’action, Marvel, DC et sagas comme Fast & Furious.' },
      { name: 'Cinéma Thriller', quality: 'FHD 60FPS', genre: 'Thriller', description: 'Thrillers psychologiques, films noirs et suspense.' },
      { name: 'Cinéma Comédie & Romance', quality: 'FHD 60FPS', genre: 'Comédie & Romance', description: 'Comédies, classiques romantiques et films feel good.' },
      { name: 'Cinéma SF & Fantasy', quality: '4K UHD', genre: 'SF & Fantasy', description: 'Aventures spatiales, films de super-héros et fantasy épique.' },
      { name: 'Cinéma Horreur 4K', quality: '4K UHD', genre: 'Horreur', description: 'Films d’horreur en 4K UHD, classiques et modernes.' },
      { name: 'Cinéma Drame Premium', quality: 'FHD 60FPS', genre: 'Drame', description: 'Drames primés, biopics et lauréats des Oscars à la demande.' },
      { name: 'Cinéma Famille', quality: 'FHD 60FPS', genre: 'Famille', description: 'Films familiaux, animation et films pour enfants à la demande.' },
      { name: 'Cinéma Classiques', quality: 'FHD 60FPS', genre: 'Cinéma classique', description: 'Classiques restaurés des années 70, 80 et 90 en HD.' },
      { name: 'Cinéma Français', quality: 'FHD 60FPS', genre: 'Cinéma français', description: 'Le meilleur du cinéma français, classiques et nouveautés.' },
      { name: 'Cinéma Bollywood', quality: 'FHD 60FPS', genre: 'Bollywood', description: 'Films de Bollywood récents et classiques avec sous-titres français.' },
      { name: 'Cinéma Asie', quality: 'FHD 60FPS', genre: 'Cinéma asiatique', description: 'Films chinois, japonais, coréens et thaïlandais sous-titrés.' },
      { name: 'Cinéma Maghreb', quality: 'FHD 60FPS', genre: 'Cinéma maghrébin', description: 'Films marocains, algériens et tunisiens.' },
      { name: 'Documentaire', quality: 'FHD 60FPS', genre: 'Documentaire', description: 'Documentaires longs métrages nature, histoire et faits divers.' },
      { name: 'Cinéma 4K Marvel', quality: '4K UHD', genre: 'Marvel', description: 'Tous les films du MCU en 4K UHD, Infinity Saga et Phase 4.' },
      { name: 'Cinéma 4K DC', quality: '4K UHD', genre: 'DC Comics', description: 'Tous les films DC en 4K UHD : Batman, Superman, Justice League.' },
      { name: 'Cinéma 4K Star Wars', quality: '4K UHD', genre: 'Star Wars', description: 'La saga Star Wars complète en 4K UHD, y compris The Mandalorian.' },
      { name: 'Cinéma 4K Pixar', quality: '4K UHD', genre: 'Pixar', description: 'Tous les films Pixar en 4K UHD avec Dolby Atmos.' },
      { name: 'HBO Séries', quality: 'FHD 60FPS', genre: 'Séries HBO', description: 'Saisons complètes de Succession, House of the Dragon, The Last of Us.', popular: true },
      { name: 'HBO Max Originals', quality: 'FHD 60FPS', genre: 'HBO Max', description: 'Contenus exclusifs HBO Max et créations originales.' },
      { name: 'Netflix Originals', quality: 'FHD 60FPS', genre: 'Netflix', description: 'Saisons complètes de Stranger Things, Squid Game et documentaires.', popular: true },
      { name: 'Netflix Action', quality: 'FHD 60FPS', genre: 'Netflix Action', description: 'Action Netflix et séries thriller originales.' },
      { name: 'Netflix Comédie', quality: 'FHD 60FPS', genre: 'Netflix Comédie', description: 'Comédies Netflix et sitcoms originaux.' },
      { name: 'Disney & Marvel Vault', quality: '4K UHD', genre: 'Marvel, Star Wars & Pixar', description: 'Tous les films MCU, sagas Star Wars et animation Pixar.', popular: true },
      { name: 'Disney+ Originals', quality: '4K UHD', genre: 'Disney Plus', description: 'Séries Disney+ exclusives : The Mandalorian, WandaVision, Loki.' },
      { name: 'Paramount Originals', quality: 'FHD 60FPS', genre: 'Paramount', description: 'Univers Yellowstone, séries Star Trek et films Paramount.' },
      { name: 'Apple TV+ Originals', quality: '4K UHD', genre: 'Apple TV+', description: 'Ted Lasso, Severance, The Morning Show et films primés.' },
      { name: 'Apple TV+ Films', quality: '4K UHD', genre: 'Apple Films', description: 'Films originaux Apple TV+, y compris lauréats des Oscars.' },
      { name: 'Amazon Prime Originals', quality: 'FHD 60FPS', genre: 'Amazon Prime', description: 'The Boys, Reacher, Rings of Power et Prime Video originals.' },
      { name: 'Hulu Originals', quality: 'FHD 60FPS', genre: 'Hulu', description: 'The Handmaid Tale, Only Murders in the Building, Hulu exclusifs.' },
      { name: 'Canal+ Originals', quality: 'FHD 60FPS', genre: 'Canal+ Originals', description: 'Créations originales Canal+ françaises et internationales.' },
      { name: 'OCS Originals', quality: 'FHD 60FPS', genre: 'OCS Originals', description: 'Créations originales OCS et séries premium.' },
      { name: 'Documentaire Monde', quality: 'FHD 60FPS', genre: 'Documentaires', description: 'Documentaires nature et faits divers de haute qualité.' },
      { name: 'Nuits d’horreur', quality: 'FHD 60FPS', genre: 'Horreur', description: 'Films d’horreur glaçants, slashers et documentaires paranormaux.' },
      { name: 'Séries SF', quality: 'FHD 60FPS', genre: 'Séries SF', description: 'Séries SF complètes comme Star Trek, The Expanse et plus.' },
      { name: 'Séries Fantasy', quality: 'FHD 60FPS', genre: 'Séries Fantasy', description: 'Séries fantasy comme Game of Thrones, The Witcher, Wheel of Time.' },
      { name: 'Séries Policier', quality: 'FHD 60FPS', genre: 'Séries policières', description: 'Séries policières : True Detective, Mindhunter, Line of Duty.' },
      { name: 'Séries Britanniques', quality: 'FHD 60FPS', genre: 'Séries UK', description: 'Séries britanniques complètes : Doctor Who, Sherlock, Peaky Blinders.' },
      { name: 'Séries Américaines', quality: 'FHD 60FPS', genre: 'Séries US', description: 'Séries américaines complètes : Breaking Bad, The Sopranos, The Wire.' },
      { name: 'Animation Jeunesse', quality: 'FHD 60FPS', genre: 'Séries jeunesse', description: 'Séries jeunesse complètes : Bluey, Peppa Pig, Paw Patrol.' },
      { name: 'Anime Central', quality: 'FHD 60FPS', genre: 'Anime', description: 'Anime populaires : Naruto, One Piece, Attack on Titan.' },
      { name: 'K-Drama', quality: 'FHD 60FPS', genre: 'K-Drama', description: 'Dramas coréens populaires : Squid Game, Crash Landing on You.' },
      { name: 'Drama Turc', quality: 'FHD 60FPS', genre: 'Drama turc', description: 'Dramas turcs populaires sous-titrés en plusieurs langues.' },
      { name: 'Séries Indiennes', quality: 'FHD 60FPS', genre: 'Séries indiennes', description: 'Séries indiennes populaires et web originals des grandes plateformes.' },
      { name: 'Séries Latino', quality: 'FHD 60FPS', genre: 'Séries latino', description: 'Séries hispanophones et lusophones d’Amérique latine et d’Espagne.' },
      { name: 'Téléréalité', quality: 'FHD 60FPS', genre: 'Téléréalité', description: 'Séries de téléréalité : Survivor, Big Brother, The Amazing Race.' },
      { name: 'Cuisine & Food', quality: 'FHD 60FPS', genre: 'Cuisine', description: 'Séries culinaires complètes, émissions de chefs et concours.' },
      { name: 'Faits divers', quality: 'FHD 60FPS', genre: 'Faits divers', description: 'Documentaires de faits divers et séries d’enquête du monde entier.' },
      { name: 'TV classique', quality: 'FHD 60FPS', genre: 'TV classique', description: 'Séries télévisées classiques des années 1960 à 2000.' },
      { name: 'Sitcoms', quality: 'FHD 60FPS', genre: 'Sitcom', description: 'Sitcoms classiques et modernes : Friends, Seinfeld, The Office.' },
      { name: 'Documentaires sport', quality: 'FHD 60FPS', genre: 'Docs sport', description: 'Documentaires sportifs : The Last Dance, Formula 1 Drive to Survive.' },
      { name: 'Documentaires musique', quality: 'FHD 60FPS', genre: 'Docs musique', description: 'Documentaires musicaux et films de concert de tous genres.' },
      { name: 'Nature 4K', quality: '4K UHD', genre: 'Nature', description: 'Documentaires nature BBC et National Geographic en 4K UHD.' },
      { name: 'Action 4K', quality: '4K UHD', genre: 'Action 4K', description: 'Films d’action en 4K UHD avec son surround Dolby Atmos.' },
    ],
    faqs: [
      {
        question: 'À quelle fréquence la bibliothèque VOD est-elle mise à jour ?',
        answer:
          'Notre catalogue de films et séries est automatiquement mis à jour quotidiennement avec les dernières sorties cinéma et les titres des grandes plateformes de streaming.',
      },
      {
        question: 'Tous les films ont-ils des sous-titres français ?',
        answer:
          'Oui. Plus de 95 % des films et séries en langue étrangère incluent des sous-titres français sélectionnables, avec des sous-titres supplémentaires disponibles pour la plupart des titres.',
      },
    ],
  },

  // =========================================================================
  // 8. JEUNESSE & FAMILLE
  // =========================================================================
  {
    slug: 'jeunesse-famille',
    name: 'Jeunesse & Famille',
    totalChannels: 200,
    description:
      'Des chaînes jeunesse sûres et divertissantes pour tous les âges : Disney Channel, Nickelodeon, Cartoon Network, Gulli, Piwi+, Télétoon+, Canal J, et programmes éducatifs du monde entier.',
    longDescription:
      'Un divertissement familial de confiance pour les parents. Notre catégorie Jeunesse et Famille inclut les principales chaînes jeunesse françaises et internationales : Disney Channel, Disney Junior, Nickelodeon, Nick Jr., Cartoon Network, Gulli, Piwi+, Télétoon+, Canal J, ainsi que les chaînes éducatives PBS Kids et CBeebies. Tous les programmes sont adaptés à l’âge et dépourvus de contenus agressifs, avec des options de contrôle parental intégrées à chaque lecteur IPTV.',
    keywords: [
      'chaînes jeunesse iptv',
      'disney channel iptv france',
      'nickelodeon iptv france',
      'cartoon network iptv',
      'gulli iptv',
      'piwi plus iptv',
      'chaînes famille iptv',
      'abonnement iptv jeunesse',
    ],
    channels: [
      // Chaînes françaises jeunesse
      { name: 'Gulli HD', quality: 'FHD 60FPS', genre: 'Jeunesse FR', country: 'FR', description: 'La chaîne jeunesse française de référence avec dessins animés et programmes pour enfants.', popular: true },
      { name: 'Gulli Replay HD', quality: 'FHD 60FPS', genre: 'Jeunesse FR', country: 'FR', description: 'Rediffusions et replays des programmes Gulli.' },
      { name: 'Piwi+ HD', quality: 'FHD 60FPS', genre: 'Préscolaire', country: 'FR', description: 'Chaîne préscolaire française du groupe Canal+ pour les tout-petits.', popular: true },
      { name: 'Télétoon+ HD', quality: 'FHD 60FPS', genre: 'Animation', country: 'FR', description: 'Chaîne d’animation française du groupe Canal+.' },
      { name: 'Télétoon+1 HD', quality: 'FHD 60FPS', genre: 'Animation', country: 'FR', description: 'Décalage de 1 heure de Télétoon+ pour une flexibilité totale.' },
      { name: 'Canal J HD', quality: 'FHD 60FPS', genre: 'Jeunesse FR', country: 'FR', description: 'Chaîne jeunesse française avec animation et programmes pour enfants.' },
      { name: 'Canal J+1 HD', quality: 'FHD 60FPS', genre: 'Jeunesse FR', country: 'FR', description: 'Décalage de 1 heure de Canal J.' },
      { name: 'Disney Channel FR HD', quality: 'FHD 60FPS', genre: 'Disney', country: 'FR', description: 'Séries Disney, teen shows et films originaux en version française.', popular: true },
      { name: 'Disney Junior FR HD', quality: 'FHD 60FPS', genre: 'Préscolaire', country: 'FR', description: 'Contenus préscolaires Disney : Mickey, Spidey et Bluey.', popular: true },
      { name: 'Nickelodeon FR HD', quality: 'FHD 60FPS', genre: 'Animation', country: 'FR', description: 'Bob l’éponge, PAW Patrol, The Loud House et séries ados.', popular: true },
      { name: 'Nick Jr. FR HD', quality: 'FHD 60FPS', genre: 'Préscolaire', country: 'FR', description: 'Programmes éducatifs et ludiques pour les tout-petits.' },
      { name: 'Cartoon Network FR HD', quality: 'FHD 60FPS', genre: 'Animation', country: 'FR', description: 'Teen Titans Go, Gumball, Adventure Time et Scooby Doo.' },
      { name: 'Boomerang FR HD', quality: 'FHD 60FPS', genre: 'Animation classique', country: 'FR', description: 'Tom et Jerry, Looney Tunes, Mr Bean animation.' },
      { name: 'Boomerang+1 HD', quality: 'FHD 60FPS', genre: 'Animation classique', country: 'FR', description: 'Décalage de 1 heure de Boomerang.' },
      // Chaînes internationales jeunesse
      { name: 'PBS Kids HD', quality: 'FHD 60FPS', genre: 'Éducatif', country: 'US', description: 'Programmation éducative américaine avec focus STEM.', popular: true },
      { name: 'CBeebies HD', quality: 'FHD 60FPS', genre: 'Préscolaire UK', country: 'UK', description: 'Programmation préscolaire de la BBC pour les tout-petits.' },
      { name: 'CBBC HD', quality: 'FHD 60FPS', genre: 'Jeunesse UK', country: 'UK', description: 'Programmation jeunesse britannique avec animation et créations originales.' },
      { name: 'Cartoonito HD', quality: 'FHD 60FPS', genre: 'Préscolaire', country: 'UK', description: 'Animation préscolaire et contenus éducatifs pour les tout-petits.' },
      { name: 'Baby TV HD', quality: 'FHD 60FPS', genre: 'Tout-petits', country: 'EU', description: 'Programmation pour bébés et tout-petits avec contenus éducatifs.' },
      { name: 'BabyFirst HD', quality: 'FHD 60FPS', genre: 'Tout-petits', country: 'US', description: 'Programmation éducative pour bébés avec focus sur l’éveil.' },
      // Familial
      { name: 'Family Channel HD', quality: 'FHD 60FPS', genre: 'Famille', country: 'CA', description: 'Programmation familiale, émissions jeunesse et teen dramas canadiens.' },
      { name: 'YTV HD', quality: 'FHD 60FPS', genre: 'Jeunesse', country: 'CA', description: 'Réseau jeunesse canadien avec animation et divertissement.' },
      { name: 'Teletoon HD', quality: 'FHD 60FPS', genre: 'Animation', country: 'CA', description: 'Chaîne d’animation canadienne avec créations originales et internationales.' },
      { name: 'Treehouse HD', quality: 'FHD 60FPS', genre: 'Préscolaire', country: 'CA', description: 'Programmation préscolaire en anglais et en français.' },
      // Animation
      { name: 'Anime Kids Central', quality: 'FHD 60FPS', genre: 'Anime jeunesse', country: 'JP', description: 'Anime familial avec Doraemon, Pokémon et séries jeunesse.' },
      { name: 'Kids Station HD', quality: 'FHD 60FPS', genre: 'Anime', country: 'JP', description: 'Chaîne jeunesse japonaise avec séries anime populaires.' },
      // Éducatif
      { name: 'Da Vinci Kids HD', quality: 'FHD 60FPS', genre: 'Éducatif', country: 'EU', description: 'Contenus éducatifs axés sur la science, les maths et la créativité.' },
      { name: 'Nat Geo Kids HD', quality: 'FHD 60FPS', genre: 'Éducatif', country: 'US', description: 'Nat Geo Kids avec programmes éducatifs nature et science.' },
      { name: 'Discovery Kids HD', quality: 'FHD 60FPS', genre: 'Éducatif', country: 'US', description: 'Programmation Discovery Kids avec exploration et apprentissage.' },
      { name: 'Knowledge Kids HD', quality: 'FHD 60FPS', genre: 'Éducatif', country: 'CA', description: 'Programmation éducative pour enfants de tous âges.' },
      // Films famille
      { name: 'Hallmark Family HD', quality: 'FHD 60FPS', genre: 'Films famille', country: 'US', description: 'Films familiaux originaux Hallmark et programmes de fêtes.' },
      { name: 'Hallmark Movies & Mysteries HD', quality: 'FHD 60FPS', genre: 'Films famille', country: 'US', description: 'Films policiers Hallmark et divertissement familial.' },
      { name: 'UPtv HD', quality: 'FHD 60FPS', genre: 'Famille', country: 'US', description: 'Divertissement familial et programmation originale.' },
      // Tout-petits
      { name: 'Zoomoo HD', quality: 'FHD 60FPS', genre: 'Nature jeunesse', country: 'US', description: 'Programmation nature et animaux pour enfants avec animateurs.' },
      { name: 'Duck TV HD', quality: 'FHD 60FPS', genre: 'Tout-petits', country: 'EU', description: 'Animation simple pour très jeunes enfants, stimulation minimale.' },
      { name: 'LooLoo Kids HD', quality: 'FHD 60FPS', genre: 'Tout-petits', country: 'US', description: 'Comptines et chansons éducatives pour tout-petits.' },
      { name: 'Moonbug Kids HD', quality: 'FHD 60FPS', genre: 'Tout-petits', country: 'UK', description: 'Cocomelon, Blippi et autres programmes populaires pour tout-petits.' },
      // Adolescents
      { name: 'Freeform HD', quality: 'FHD 60FPS', genre: 'Ados', country: 'US', description: 'Dramas ados, comédies et séries originales pour jeunes publics.' },
      { name: 'The CW Kids HD', quality: 'FHD 60FPS', genre: 'Ados', country: 'US', description: 'Programmation familiale du réseau The CW.' },
      { name: 'CBBC Extra HD', quality: 'FHD 60FPS', genre: 'Jeunesse UK', country: 'UK', description: 'Flux CBBC additionnel avec émissions jeunesse.' },
      // Films jeunesse
      { name: 'Disney Junior Films HD', quality: 'FHD 60FPS', genre: 'Films préscolaires', country: 'US', description: 'Films Disney Junior et programmes spéciaux pour jeunes enfants.' },
      { name: 'Cartoon Network Films HD', quality: 'FHD 60FPS', genre: 'Films animation', country: 'US', description: 'Films d’animation des studios Cartoon Network.' },
      { name: 'Nick Films HD', quality: 'FHD 60FPS', genre: 'Films jeunesse', country: 'US', description: 'Films originaux Nickelodeon et longs métrages familiaux.' },
      { name: 'PBS Kids Films HD', quality: 'FHD 60FPS', genre: 'Éducatif', country: 'US', description: 'Films PBS Kids avec contenus éducatifs.' },
      { name: 'Baby Einstein HD', quality: 'FHD 60FPS', genre: 'Tout-petits', country: 'US', description: 'Contenus éducatifs pour bébés et tout-petits de Baby Einstein.' },
      { name: 'Sesame Street HD', quality: 'FHD 60FPS', genre: 'Préscolaire', country: 'US', description: 'Sesame Street et programmation Sesame Workshop pour jeunes enfants.' },
    ],
    faqs: [
      {
        question: 'Les chaînes jeunesse sont-elles disponibles en plusieurs langues ?',
        answer:
          'Oui. De nombreuses grandes chaînes jeunesse diffusent avec plusieurs pistes audio, dont le français, l’anglais et l’espagnol. Votre famille peut ainsi changer de langue selon ses préférences.',
      },
      {
        question: 'Puis-je configurer un contrôle parental dans l’application IPTV ?',
        answer:
          'Oui. La quasi-totalité des lecteurs IPTV, dont IPTV Smarters Pro et TiviMate, propose des codes PIN de contrôle parental pour bloquer des chaînes ou catégories spécifiques.',
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// FONCTIONS UTILITAIRES
// ---------------------------------------------------------------------------
export function getChannelCategoryBySlug(slug: string): ChannelCategory | undefined {
  return channelsData.find((category) => category.slug === slug);
}

export function getAllCategorySlugs(): string[] {
  return channelsData.map((category) => category.slug);
}