// Wedding date: June 20, 2026 at 3:00 PM Mountain Time
export const WEDDING_DATE = new Date('2026-06-20T15:00:00-06:00');

// RSVP deadline (1 month before wedding)
export const RSVP_DEADLINE = new Date(WEDDING_DATE);
RSVP_DEADLINE.setMonth(RSVP_DEADLINE.getMonth() - 1);
