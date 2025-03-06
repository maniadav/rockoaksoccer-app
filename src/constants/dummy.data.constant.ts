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
