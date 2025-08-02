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
export const COUPLE_PHOTO = '/images/about/couple.jpg';

// Gallery images
export const GALLERY_IMAGES = [
  { id: 1, src: '/images/gallery/photo1.jpg', alt: 'Engagement Photo 1' },
  { id: 2, src: '/images/gallery/photo2.jpg', alt: 'Engagement Photo 2' },
  { id: 3, src: '/images/gallery/photo3.jpg', alt: 'Engagement Photo 3' },
  { id: 4, src: '/images/gallery/photo4.jpg', alt: 'Engagement Photo 4' },
  { id: 5, src: '/images/gallery/photo5.jpg', alt: 'Engagement Photo 5' },
  { id: 6, src: '/images/gallery/photo6.jpg', alt: 'Engagement Photo 6' },
  { id: 7, src: '/images/gallery/photo7.jpg', alt: 'Engagement Photo 7' },
  { id: 8, src: '/images/gallery/photo8.jpg', alt: 'Engagement Photo 8' },
];
