// components/PageSchemas.tsx
import React from 'react';
import { CONSTANTS } from '@/lib/seo';

const SITE_URL = `https://${CONSTANTS.DOMAIN}`;

export function ProductSchema() {
  const commonOfferDefaults = {
    validFrom: '2026-01-01',
    hasMerchantReturnPolicy: {
      '@type': 'MerchantReturnPolicy',
      applicableCountry: 'FR',
      returnPolicyCategory: 'https://schema.org/MerchantReturnNotPermitted',
    },
    shippingDetails: {
      '@type': 'OfferShippingDetails',
      shippingRate: {
        '@type': 'MonetaryAmount',
        value: '0.00',
        currency: 'EUR',
      },
      shippingDestination: {
        '@type': 'DefinedRegion',
        addressCountry: 'FR',
      },
      deliveryTime: {
        '@type': 'ShippingDeliveryTime',
        handlingTime: {
          '@type': 'QuantitativeValue',
          minValue: 0,
          maxValue: 0,
          unitCode: 'DAY',
        },
        transitTime: {
          '@type': 'QuantitativeValue',
          minValue: 0,
          maxValue: 0,
          unitCode: 'DAY',
        },
      },
    },
  };

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${SITE_URL}/#product`,
    name: 'Abonnement IPTV Premium France',
    sku: 'ABONNEMENT-IPTV-FR-PREMIUM',
    category: 'Streaming Service',
    description: `Meilleur abonnement IPTV en France. Profitez de plus de 36 000 chaînes en direct et de 120 000 films et séries en 4K Ultra HD. Activation instantanée, essai gratuit disponible, tarifs en euros (€) et assistance 24/7.`,
    image: {
      '@type': 'ImageObject',
      '@id': `${SITE_URL}/#primaryimage`,
      url: `${SITE_URL}/img/structer.webp`,
      contentUrl: `${SITE_URL}/img/structer.webp`,
      width: { '@type': 'QuantitativeValue', value: 1200 },
      height: { '@type': 'QuantitativeValue', value: 630 },
      caption: 'Abonnement IPTV France - Service de streaming 4K Ultra HD',
      representativeOfPage: true,
    },
    brand: {
      '@type': 'Brand',
      name: CONSTANTS.BRAND_NAME,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '1055',
      bestRating: '5',
      worstRating: '1',
    },
    offers: [
      {
        '@type': 'Offer',
        name: '1 écran - Abonnement IPTV 3 mois',
        price: '29.00',
        priceCurrency: 'EUR',
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/pricing`,
        ...commonOfferDefaults,
      },
      {
        '@type': 'Offer',
        name: '1 écran - Abonnement IPTV 6 mois',
        price: '39.00',
        priceCurrency: 'EUR',
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/pricing`,
        ...commonOfferDefaults,
      },
      {
        '@type': 'Offer',
        name: '1 écran - Abonnement IPTV 12 mois',
        price: '55.00',
        priceCurrency: 'EUR',
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/pricing`,
        ...commonOfferDefaults,
      },
      {
        '@type': 'Offer',
        name: '2 écrans - Abonnement IPTV 3 mois',
        price: '45.00',
        priceCurrency: 'EUR',
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/pricing`,
        ...commonOfferDefaults,
      },
      {
        '@type': 'Offer',
        name: '2 écrans - Abonnement IPTV 6 mois',
        price: '60.00',
        priceCurrency: 'EUR',
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/pricing`,
        ...commonOfferDefaults,
      },
      {
        '@type': 'Offer',
        name: '2 écrans - Abonnement IPTV 12 mois',
        price: '75.00',
        priceCurrency: 'EUR',
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/pricing`,
        ...commonOfferDefaults,
      },
      {
        '@type': 'Offer',
        name: '3 écrans - Abonnement IPTV 3 mois',
        price: '65.00',
        priceCurrency: 'EUR',
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/pricing`,
        ...commonOfferDefaults,
      },
      {
        '@type': 'Offer',
        name: '3 écrans - Abonnement IPTV 6 mois',
        price: '75.00',
        priceCurrency: 'EUR',
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/pricing`,
        ...commonOfferDefaults,
      },
      {
        '@type': 'Offer',
        name: '3 écrans - Abonnement IPTV 12 mois',
        price: '99.00',
        priceCurrency: 'EUR',
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/pricing`,
        ...commonOfferDefaults,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
    />
  );
}

export function FAQSchema() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Qu’est-ce que l’IPTV et comment ça fonctionne ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'L’IPTV signifie « Internet Protocol Television ». Au lieu d’un décodeur câble ou satellite, vos chaînes et vos films passent par votre connexion Internet. Avec un abonnement IPTV, vous regardez plus de 36 000 chaînes en direct et plus de 120 000 films et séries en 4K sur votre Smart TV, Firestick, téléphone ou tablette.',
        },
      },
      {
        '@type': 'Question',
        name: 'Pourquoi choisir un abonnement IPTV comme meilleur abonnement IPTV en France ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Un abonnement IPTV est pensé pour les téléspectateurs français avec plus de 36 000 chaînes en direct couvrant la Ligue 1, la Ligue des Champions, la Premier League, la NBA, la Formule 1 et les grands événements PPV, ainsi que plus de 120 000 films et séries à la demande. Nos serveurs anti-freeze disposent d’une capacité dédiée optimisée pour la France et l’Europe pour une lecture fluide pendant les grands matchs.',
        },
      },
      {
        '@type': 'Question',
        name: 'Quels appareils sont compatibles avec votre service IPTV ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Notre service IPTV fonctionne sur Smart TV Samsung et LG, Android TV, Google TV, Amazon Firestick, Apple TV, iPhone, iPad, PC Windows, Mac, ainsi que sur les box MAG et Formuler. Un doute sur votre appareil ? Contactez notre équipe d’assistance et nous vérifierons la compatibilité avant votre abonnement.',
        },
      },
      {
        '@type': 'Question',
        name: 'Comment se déroulent l’installation et l’activation ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Une fois votre formule d’abonnement IPTV et le nombre d’écrans choisis, vous recevez instantanément votre playlist M3U et vos identifiants Xtream Codes. Installez un lecteur compatible comme IPTV Extreme Pro, TiviMate ou Smart IPTV, collez vos identifiants et commencez à regarder. L’activation est instantanée et l’installation prend moins de 5 minutes.',
        },
      },
      {
        '@type': 'Question',
        name: 'Puis-je demander un essai gratuit avant de payer ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oui. Demandez un essai gratuit et nous vous configurons tout pour tester la qualité d’image 4K, vérifier la liste des chaînes pour un match de Ligue 1 ou de Ligue des Champions, et vous assurer que tout fonctionne parfaitement sur votre appareil et votre connexion Internet. Sans pression et sans engagement.',
        },
      },
      {
        '@type': 'Question',
        name: 'Comment installer le lecteur IPTV sur ma Smart TV ou mon Firestick ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pour les Smart TV et le Firestick, téléchargez un lecteur compatible comme IPTV Extreme Pro, TiviMate, Smart IPTV ou IPTV Smarters depuis le store de votre appareil, puis saisissez les identifiants que nous vous envoyons. Si une étape n’est pas claire, notre équipe d’assistance 24/7 vous accompagne directement.',
        },
      },
      {
        '@type': 'Question',
        name: 'Quels moyens de paiement acceptez-vous et quelle devise utilisez-vous ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Tous les tarifs sont affichés en euros (€) et vous pouvez résilier à tout moment. Nous acceptons la carte bancaire, PayPal et les cryptomonnaies via un paiement chiffré sécurisé. Choisissez une formule d’abonnement IPTV de 1, 3, 6 ou 12 mois et sélectionnez 1, 2 ou 3 écrans pour votre foyer.',
        },
      },
      {
        '@type': 'Question',
        name: 'Une assistance technique est-elle disponible pendant mon abonnement IPTV ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oui, pendant toute la durée de votre abonnement IPTV. Contactez notre équipe d’assistance à tout moment par e-mail et chat en direct pour toute question sur l’installation, la configuration ou autre. Cela inclut des conseils pour tirer le meilleur de votre application lecteur et des solutions rapides en cas de mise en mémoire tampon.',
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}