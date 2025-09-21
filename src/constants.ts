// Wedding date: June 20, 2026 at 3:00 PM Mountain Time
export const WEDDING_DATE = new Date('2026-06-20T15:00:00-06:00');

// RSVP deadline (1 month before wedding)
export const RSVP_DEADLINE = new Date(WEDDING_DATE);
RSVP_DEADLINE.setMonth(RSVP_DEADLINE.getMonth() - 3);

// Image paths
// Hero carousel images
export const CAROUSEL_IMAGES = [
  `${process.env.PUBLIC_URL}/images/carousel/image1.jpg`,
  `${process.env.PUBLIC_URL}/images/carousel/image2.jpg`,
  `${process.env.PUBLIC_URL}/images/carousel/image3.jpg`,
  `${process.env.PUBLIC_URL}/images/carousel/image4.jpg`,
  `${process.env.PUBLIC_URL}/images/carousel/image5.jpg`,
];

// About section images
export const COUPLE_PHOTO = `${process.env.PUBLIC_URL}/images/couple_photo_2019.jpeg`;

// Schedule section images
export const QUARRY_LAKE_IMAGE = `${process.env.PUBLIC_URL}/images/quarry_lake.jpg`;

// Gallery images
export const GALLERY_IMAGES = [
  { id: 1, src: `${process.env.PUBLIC_URL}/images/gallery/photo1.jpg`, alt: 'From our engagement photoshoot in 2021!' },
  { id: 2, src: `${process.env.PUBLIC_URL}/images/gallery/photo2.jpg`, alt: 'On vacation in Korea, in 2024!' },
  { id: 3, src: `${process.env.PUBLIC_URL}/images/gallery/photo3.jpg`, alt: 'In Hong Kong. Susan is having a great time I swear. I probably just made a bad joke.' },
  { id: 4, src: `${process.env.PUBLIC_URL}/images/gallery/photo4.jpg`, alt: 'In Hakone, April 2023.' },
  { id: 5, src: `${process.env.PUBLIC_URL}/images/gallery/photo5.jpg`, alt: 'Susan showing George the deep south (Banff, Alberta)' },
  { id: 6, src: `${process.env.PUBLIC_URL}/images/gallery/photo6.jpg`, alt: 'At the Calgary Zoolights in 2021! The first time George visited Susan\'s home.' },
  { id: 7, src: `${process.env.PUBLIC_URL}/images/gallery/photo7.jpg`, alt: 'After a really hard hike in the Dolomites. This was definitely type 2.' },
  { id: 8, src: `${process.env.PUBLIC_URL}/images/gallery/photo8.jpg`, alt: 'Shanghai, Nov 2024. Susan showing off her new glasses (that she promptly lost)' },
];

export const WEB_APP_RSVP_URL = 'https://script.google.com/macros/s/AKfycbxGzxX55BIIAwZO3Z_TGqYxxyr1mhEQaWq-oBbeTiTSiQoFRY8f3ox22Nd85RKPYtkV/exec';
