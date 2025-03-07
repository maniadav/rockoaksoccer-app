export const clubData = {
  currency: {
    name: "Australian Dollar",
    symbol: "$",
    code: "AUD",
  },
  _id: "67542dba47ec2f9a22821826",
  offers: [
    {
      id: 1,
      type: "Training",
      details: "3 x training per week (Mon, Wed & Fri) with mini-matches",
      _id: "675470ef92574294c9a8c4c4",
    },
    {
      id: 2,
      type: "Matches",
      details: "1 x game per week with live guidance by coaches (Sun)",
      _id: "675470ef92574294c9a8c4c5",
    },
    {
      id: 3,
      type: "Equipment",
      details: "Access to world-class equipment",
      _id: "675470ef92574294c9a8c4c6",
    },
    {
      id: 4,
      type: "Training Program",
      details: "Structured training program",
      _id: "675470ef92574294c9a8c4c7",
    },
    {
      id: 5,
      type: "Technology",
      details: "Rotateplay10 system technology",
      _id: "675470ef92574294c9a8c4c8",
    },
    {
      id: 6,
      type: "Video Analysis",
      details: "Post-match access to GoPro footage to see your goals",
      _id: "675470ef92574294c9a8c4c9",
    },
    {
      id: 7,
      type: "Mobile App",
      details: "Access to premium mobile application",
      _id: "675470ef92574294c9a8c4ca",
    },
    {
      id: 8,
      type: "Nutrition",
      details: "Healthy nutritional guidance via premium app",
      _id: "675470ef92574294c9a8c4cb",
    },
    {
      id: 9,
      type: "Holiday Clinic",
      details:
        "Daily holiday clinic masterclass (Term 1 - 3): Morning: '09:00 - 11:00', Afternoon: '13:00 - 15:00'",
      _id: "675470ef92574294c9a8c4cc",
    },
  ],
  clubName: "ROCK OAK SOCCER",
  memberships: [
    {
      id: "kidterm",
      name: "Kid Term",
      per: "term",
      price: 299,
      description: "Basic kid's term membership",
      valueAdded: false,
      includedOffers: [1, 2, 3, 4, 5, 6, 7, 8],
      _id: "675470ef92574294c9a8c4cd",
    },
    {
      id: "kidholiday",
      name: "Kid Term + School Holiday Clinic",
      per: "term",
      price: 399,
      description: "Kid's term membership with added school holiday clinic",
      valueAdded: true,
      includedOffers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      _id: "675470ef92574294c9a8c4ce",
    },
    {
      id: "adultterm",
      name: "Adult Membership",
      per: "week",
      price: 49,
      description: "Weekly adult membership",
      valueAdded: false,
      includedOffers: [1, 2, 3, 4, 5, 6, 7, 8],
      _id: "675470ef92574294c9a8c4cf",
    },
  ],
};

export const upcomingBookings = [
  {
    id: "1",
    type: "Training Session",
    location: "City Stadium Field 3",
    date: "March 8, 2025",
    time: "6:00 PM - 8:00 PM",
    eventType: "Midterm",
    image:
      "https://api.a0.dev/assets/image?text=soccer%20practice%20field%20with%20cones%20and%20players&aspect=16:9&seed=123",
    status: "Confirmed",
    teamInfo: "FC Warriors",
    participants: 16,
  },
  {
    id: "2",
    type: "Friendly Match",
    location: "Urban Sports Center",
    date: "March 15, 2025",
    time: "2:00 PM - 4:00 PM",
    eventType: "Term Holiday",
    image:
      "https://api.a0.dev/assets/image?text=indoor%20soccer%20arena%20with%20teams%20warming%20up&aspect=16:9&seed=456",
    status: "Pending",
    teamInfo: "City Strikers vs Metro United",
    participants: 22,
  },
  {
    id: "3",
    type: "League Game",
    location: "Memorial Park",
    date: "March 22, 2025",
    time: "7:30 PM - 9:30 PM",
    eventType: "Adult Term",
    image:
      "https://api.a0.dev/assets/image?text=evening%20soccer%20match%20on%20well-lit%20field%20with%20spectators&aspect=16:9&seed=789",
    status: "Confirmed",
    teamInfo: "Regional Cup Qualifier",
    participants: 28,
  },
];

// Mock data for past bookings
export const pastBookings = [
  {
    id: "4",
    type: "Training Session",
    location: "City Stadium Field 1",
    date: "February 25, 2025",
    time: "6:00 PM - 8:00 PM",
    eventType: "Midterm",
    image:
      "https://api.a0.dev/assets/image?text=soccer%20field%20after%20training%20session%20with%20equipment&aspect=16:9&seed=101",
    status: "Completed",
    teamInfo: "Skills Development",
    participants: 14,
  },
  {
    id: "5",
    type: "Friendly Match",
    location: "Community Center",
    date: "February 18, 2025",
    time: "3:00 PM - 5:00 PM",
    eventType: "Term Holiday",
    image:
      "https://api.a0.dev/assets/image?text=soccer%20teams%20shaking%20hands%20after%20match&aspect=16:9&seed=102",
    status: "Completed",
    teamInfo: "Local Derby",
    participants: 22,
  },
  {
    id: "6",
    type: "Skill Workshop",
    location: "Elite Training Academy",
    date: "February 10, 2025",
    time: "5:30 PM - 7:30 PM",
    eventType: "Adult Term",
    image:
      "https://api.a0.dev/assets/image?text=empty%20indoor%20soccer%20facility%20with%20training%20equipment&aspect=16:9&seed=103",
    status: "Canceled",
    teamInfo: "Advanced Techniques",
    participants: 0,
  },
];

export const EVENT_DATA = {
  id: "6704f3f8193b7f0a2ec48346",
  uniqueId: "319600b7-87e4-41f6-ae28-8103e8b156b5",
  title: "Australian Football Championship",
  date: "Tuesday, October 15, 2024",
  timing: {
    start: "2024-10-15T10:00:00.000Z",
    end: "2024-10-15T17:00:00.000Z",
    duration: "7 hours",
  },
  location: {
    name: "Melbourne Cricket Ground",
    address: "Melbourne Cricket Ground, Melbourne, Australia",
    coordinates: {
      latitude: -37.819967,
      longitude: 144.983449,
    },
  },
  isTrending: true,
  isFeatured: false,
  shortDescription:
    "Join us for an exhilarating day of football at the Australian Football Championship, where the top teams compete for glory!",
  longDescription:
    "Get ready for an action-packed event as the best football teams from across Australia come together to battle it out for the championship title. With thrilling matches, live commentary, and fan activities, the Australian Football Championship promises an unforgettable experience for all football enthusiasts. Don't miss out on this chance to witness the nation's top talent and immerse yourself in the excitement of the game!",
  organizer: {
    name: "Sports Australia",
    role: "admin",
    userId: "admin_football_001",
    image:
      "https://api.a0.dev/assets/image?text=sports%20australia%20logo&aspect=1:1&seed=123",
    contact: "+61 3 9657 8888",
  },
  attendees: {
    joined: 256,
    interested: 438,
    recentAvatars: [
      "https://api.a0.dev/assets/image?text=person%20avatar%201&aspect=1:1&seed=1",
      "https://api.a0.dev/assets/image?text=person%20avatar%202&aspect=1:1&seed=2",
      "https://api.a0.dev/assets/image?text=person%20avatar%203&aspect=1:1&seed=3",
      "https://api.a0.dev/assets/image?text=person%20avatar%204&aspect=1:1&seed=4",
    ],
  },
  type: "football",
  status: "active",
  tags: ["football", "sports", "championship", "australia", "event"],
  images: [
    "https://api.a0.dev/assets/image?text=football%20match%20action&aspect=16:9&seed=1",
    "https://api.a0.dev/assets/image?text=australian%20football%20players&aspect=16:9&seed=2",
    "https://api.a0.dev/assets/image?text=football%20stadium%20crowd&aspect=16:9&seed=3",
    "https://api.a0.dev/assets/image?text=football%20championship%20trophy&aspect=16:9&seed=4",
    "https://api.a0.dev/assets/image?text=football%20fans%20celebrating&aspect=16:9&seed=5",
  ],
  mainImage:
    "https://api.a0.dev/assets/image?text=australian%20football%20championship&aspect=16:9&seed=123",
  createdAt: "2024-10-08T08:57:28.201Z",
  updatedAt: "2024-10-08T08:57:28.201Z",
};

export const EVENTS = [
  {
    id: "1",
    title: "Sunday Soccer Tournament",
    date: "March 10, 2025",
    location: "Central Park Soccer Field",
    going: 24,
    interested: 43,
    eventType: "adult-term",
    isTrending: true,
    isFeatured: false,
    image:
      "https://api.a0.dev/assets/image?text=soccer%20tournament%20aerial%20view&aspect=16:9&seed=123",
  },
  {
    id: "2",
    title: "Indoor Soccer League",
    date: "March 15, 2025",
    location: "NYC Indoor Sports Complex",
    going: 18,
    interested: 32,
    eventType: "adult-term",
    isTrending: false,
    isFeatured: false,
    image:
      "https://api.a0.dev/assets/image?text=indoor%20soccer%20tournament&aspect=16:9&seed=456",
  },
  {
    id: "3",
    title: "Youth Soccer Training",
    date: "March 18, 2025",
    location: "Riverside Park Fields",
    going: 32,
    interested: 15,
    eventType: "kid-term",
    isTrending: false,
    isFeatured: true,
    image:
      "https://api.a0.dev/assets/image?text=youth%20soccer%20training&aspect=16:9&seed=789",
  },
  {
    id: "4",
    title: "Women's Soccer Cup",
    date: "March 22, 2025",
    location: "Brooklyn Soccer Stadium",
    going: 45,
    interested: 78,
    eventType: "adult-term",
    isTrending: true,
    isFeatured: false,
    image:
      "https://api.a0.dev/assets/image?text=womens%20soccer%20match&aspect=16:9&seed=101",
  },
  {
    id: "5",
    title: "Corporate Soccer Challenge",
    date: "March 25, 2025",
    location: "Manhattan Sports Fields",
    going: 18,
    interested: 27,
    eventType: "adult-term",
    isTrending: false,
    isFeatured: false,
    image:
      "https://api.a0.dev/assets/image?text=corporate%20soccer%20event&aspect=16:9&seed=202",
  },
  {
    id: "6",
    title: "International Friendly Match",
    date: "April 2, 2025",
    location: "Queens International Stadium",
    going: 87,
    interested: 124,
    eventType: "kid-holiday",
    isTrending: true,
    isFeatured: true,
    image:
      "https://api.a0.dev/assets/image?text=international%20soccer%20match&aspect=16:9&seed=303",
  },
];
