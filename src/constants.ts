// Wedding date: June 20, 2026 at 3:00 PM Mountain Time
export const WEDDING_DATE = new Date('2026-06-20T15:00:00-06:00');

// RSVP deadline (1 month before wedding)
export const RSVP_DEADLINE = new Date(WEDDING_DATE);
RSVP_DEADLINE.setMonth(RSVP_DEADLINE.getMonth() - 1);

// Image paths
// Hero carousel images
export const CAROUSEL_IMAGES = [
  '/images/carousel/image1.jpg',
  '/images/carousel/image2.jpg',
  '/images/carousel/image3.jpg',
  '/images/carousel/image4.jpg',
  '/images/carousel/image5.jpg',
];

// About section images
export const COUPLE_PHOTO = '/images/couple_photo_2019.jpeg';

// Gallery images
export const GALLERY_IMAGES = [
  { id: 1, src: '/images/gallery/photo1.jpg', alt: 'From our engagement photoshoot in 2021!' },
  { id: 2, src: '/images/gallery/photo2.jpg', alt: 'On vacation in Korea, in 2024!' },
  { id: 3, src: '/images/gallery/photo3.jpg', alt: 'In Hong Kong. Susan is having a great time I swear. I probably just made a bad joke.' },
  { id: 4, src: '/images/gallery/photo4.jpg', alt: 'In Hakone, April 2023.' },
  { id: 5, src: '/images/gallery/photo5.jpg', alt: 'Susan showing George the deep south (Banff, Alberta)' },
  { id: 6, src: '/images/gallery/photo6.jpg', alt: 'At the Calgary Zoolights in 2021! The first time George visited Susan\'s home.' },
  { id: 7, src: '/images/gallery/photo7.jpg', alt: 'After a really hard hike in the Dolomites. This was definitely type 2.' },
  { id: 8, src: '/images/gallery/photo8.jpg', alt: 'Shanghai, Nov 2024. Susan showing off her new glasses (that she promptly lost)' },
];

export const WEB_APP_RSVP_URL = 'https://script.google.com/macros/s/AKfycbzsTyQ30xdsbyycWSGzemyVnZt-U3AXhxys6Vc3CijZeKOtWSJLBuSNk5TBPiqzEqi2/exec';
