export const API_CONFIG = {
  pageSize: 10,
};

export const API_ENDPOINT = {
  auth: {
    login: '/auth/login',
    register: '/auth/register',
    resetPassword: '/auth/reset-password',
    getAccessToken: '/auth/get-access-token',
  },
  event: {
    create: '/event/create',
    fetchAll: '/event/list',
    fetchDetails: '/event/event_details',
  },

  utility: {
    uploadImage: '/upload/image',
  },
  payment: {
    createMembership: '/payment/razorpay',
  },
  pricing: {
    fetchAll: '/pricing/list',
  },
  user: {
    profile: '/user',
    fetchBookedEvents: '/user/book-event',
    createEventBooking: '/user/book-event',
  },
};
