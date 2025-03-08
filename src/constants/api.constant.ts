export const API_CONFIG = {
  pageSize: 10,
};

// All the API endpoints are defined here
export const API_ENDPOINT = {
  auth: {
    login: "/auth/login",
    register: "/auth/register",
    resetPassword: "/auth/reset-password",
    updatePassword: "/auth/update-password",
    sendPasswordResetLink: "/auth/send-otp",
    getAccessToken: "/auth/get-access-token",
  },
  plan: {
    fetchAll: "/plan/fetch",
  },
  event: {
    create: "/event/create",
    fetchAll: "/event/list",
    fetchDetails: "/event/event_details",
    bookedUserInEvent: "/event/booking-list",
  },
  utility: {
    uploadImage: "/helper/upload-image",
  },
  pages: {
    home: "/",
    login: "/auth/login",
    register: "/auth/register",
    resetPassword: "/auth/reset-password",
    preview: "/preview",
    eventDetails: "/event",
    pricing: "/pricing",
    about: "/about",
    program: "/program",
    event: "/event",
    user: "/user",
    booking: "/user/booking",
    unauthorized: "unauthorized",
  },
  payment: {
    payment: "/payment",
    createMembership: "/payment/paymFent-intents",
    complete: "/payment/complete",
    subscription: "https://buy.stripe.com/7sI3do4KRa3i8Fy146",
  },
  pricing: {
    fetchAll: "/pricing/list",
  },
  user: {
    profile: {
      fetch: "user/profile",
      update: "user/profile",
    },
    fetchBookedEvents: "/user/book-event",
    createEventBooking: "/user/book-event",
  },
  membership: {
    details: "/membership/fetch",
  },
};
