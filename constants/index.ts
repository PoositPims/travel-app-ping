// NAVIGATION
export const NAV_LINKS = [
  { href: "/", key: "home", label: "Home" },
  // { href: "/", key: "how_hilink_work", label: "How Hilink Work?" },
  // { href: "/", key: "services", label: "Services" },
  // { href: "/", key: "pricing ", label: "Pricing " },
  // { href: "/", key: "contact_us", label: "Contact Us" },
];

// CAMP SECTION
export const PEOPLE_URL = [
  "/person-1.png",
  "/person-2.png",
  "/person-3.png",
  "/person-4.png",
];

// FEATURES SECTION
export const FEATURES = [
  {
    title: "Real maps can be offline",
    icon: "/map.svg",
    variant: "green",
    description:
      "We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location",
  },
  {
    title: "Set an adventure schedule",
    icon: "/calendar.svg",
    variant: "green",
    description:
      "Schedule an adventure with friends. On holidays, there are many interesting offers from Hilink. That way, there's no more discussion",
  },
  {
    title: "Technology using augment reality",
    icon: "/tech.svg",
    variant: "green",
    description:
      "Technology uses augmented reality as a guide to your hiking trail in the forest to the top of the mountain. Already supported by the latest technology without an internet connection",
  },
  {
    title: "Many new locations every month",
    icon: "/location.svg",
    variant: "orange",
    description:
      "Lots of new locations every month, because we have a worldwide community of climbers who share their best experiences with climbing",
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  // {
  //   title: "Learn More",
  //   links: [
  //     "About Hilink",
  //     "Press Releases",
  //     "Environment",
  //     "Jobs",
  //     "Privacy Policy",
  //     "Contact Us",
  //   ],
  // },
  // {
  //   title: "Our Community",
  //   links: ["Climbing xixixi", "Hiking hilink", "Hilink kinthill"],
  // },
  {
    title: "Learn More",
    links: [
      { title: "Attractions", link: "/attractions" },
      { title: "Restaurants", link: "/restaurant" },
      { title: "Accommodation", link: "/accommodation" },
      { title: "Multiculturalism", link: "/multicultural" },
    ],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: "Contact Us",
  links: [
    { label: "Admin Officer", value: "123-456-7890" },
    { label: "Email Officer", value: "hilink@akinthil.com" },
  ],
};

export const SOCIALS = {
  title: "Social",
  links: [
    "/facebook.svg",
    "/instagram.svg",
    "/twitter.svg",
    "/youtube.svg",
    "/wordpress.svg",
  ],
};

export const TRAVEl_PICS = [
  // { image: "/yala-pic6.jpg" },
  // { image: "/yala-pic5.jpeg" },
  // { image: "/yala-pic1.jpg" },
  // { image: "/yala-pic2.jpg" },
  // { image: "/yala-pic3.jpg" },
  // { image: "/yala-pic4.jpg" },
  { image: "/yala-pic-1.png" },
  { image: "/yala-pic-6.jpeg" },
  { image: "/yala-pic-5.png" },
  { image: "/yala-pic-2.png" },
  { image: "/yala-pic-3.png" },
  { image: "/yala-pic-4.png" },
];

export interface Attraction {
  id: string;
  title: string;
  image: string;
  alt: string;
  lat: string;
  long: string;
}

// image in Attraction (combine all pics first)
export const ATTRACTION_PAGE_PICS: Attraction[] = [
  {
    id: "1",
    title: "Yala city plan",
    // image: "/yala-pic6.jpg",
    image: "/yala-pic-6.jpeg",
    alt: "Yala city plan",
    lat: "6.541403550256609",
    long: "101.2804558108048",
  },
  {
    id: "2",
    title: "Suan Kwan Muang",
    // image: "/yala-pic5.jpeg",
    image: "/yala-pic-2.png",
    alt: "Suan Kwan Muang",
    lat: "6.54167535950608",
    long: "101.27508503671102",
  },
  {
    id: "3",
    title: "Yala City Pillar Shrine",
    // image: "/yala-pic1.jpg",
    image: "/yala-pic-5.png",
    alt: "Yala City Pillar Shrine",
    lat: "6.541403550256609",
    long: "101.2804558108048",
  },
  {
    id: "4",
    title: "Betong Mongkolrit Tunnel",
    // image: "/yala-pic2.jpg",
    image: "/yala-pic-4.png",
    alt: "Betong Mongkolrit Tunnel",
    lat: "5.769497160529967",
    long: "101.07175990906798",
  },
  {
    id: "5",
    title: "Skywalk Ayerweng",
    // image: "/yala-pic4.jpg",
    image: "/yala-pic-1.png",
    alt: "Skywalk Ayerweng",
    lat: "5.977776685979598",
    long: "101.1818212667401",
  },
  {
    id: "6",
    title: "Banglang Dam",
    // image: "/yala-pic3.jpg",
    image: "/yala-pic-3.png",
    alt: "Banglang Dam",
    lat: "6.157521434306643",
    long: "101.27038276674156",
  },
];

export const RESTAURANT_MAIN_PAGE = [
  {
    id: 1,
    title: "Taste of Yala",
    text: "get to know Yala through local food.",
    picture: "/get-to-know-pic.png",
    restaurant: [
      {
        id: 1,
        title: "Tara Yala",
        picture: "/restaurant-pic-1.jpeg",
        text: "Best seafood in Yala",
      },
      {
        id: 2,
        title: "Kuay Jap hea Sui",
        picture: "/restaurant-pic-2.jpeg",
        text: "Best Kuay Jap in The world (By myself)",
      },
    ],
  },
  {
    id: 2,
    title: "Night Life",
    text: "Yala also has a nightlife.",
    picture: "/night-life-menu.png",
    club: [
      {
        id: 1,
        title: "Art Ane music club",
        picture: "/art-ane-music-club.jpg",
        text: "one of the best Jazz club in Southern part of Thailand",
      },
      {
        id: 2,
        title: "Tawandang yala",
        picture: "/tawandang-yala.jpeg",
        text: "Yala dance pub in Southern style",
      },
    ],
  },
];

export const ACCOMMODATION_MAIN_PAGE = [
  {
    id: 1,
    title: "Boonrapee Hotel",
    picture: "/boonrapee-pic.jpeg",
    text: "Best location and very confort",
    phone: "099-489-9449",
  },
  {
    id: 2,
    title: "@INN YRU",
    picture: "/inn-yru.jpeg",
    text: "Hotel in the University",
    phone: "073-211-232",
  },
];

export const MULTICULTURAL_MAIN_PAGE = [
  { id: 1, title: "Buddhism", picture: "/buddhism.png" },
  { id: 2, title: "Christianity", picture: "/christianity.png" },
  { id: 3, title: "Sikhism", picture: "/sikhism.png" },
  { id: 4, title: "Islam", picture: "/islam.png" },
];
