// NAVIGATION
export const NAV_LINKS = [
  { href: "/", key: "home", label: "Home" },
  { href: "/", key: "how_hilink_work", label: "How Hilink Work?" },
  { href: "/", key: "services", label: "Services" },
  { href: "/", key: "pricing ", label: "Pricing " },
  { href: "/", key: "contact_us", label: "Contact Us" },
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
  {
    title: "Learn More",
    links: [
      "About Hilink",
      "Press Releases",
      "Environment",
      "Jobs",
      "Privacy Policy",
      "Contact Us",
    ],
  },
  {
    title: "Our Community",
    links: ["Climbing xixixi", "Hiking hilink", "Hilink kinthill"],
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
  { image: "/yala-pic6.jpg" },
  { image: "/yala-pic5.jpeg" },
  { image: "/yala-pic1.jpg" },
  { image: "/yala-pic2.jpg" },
  { image: "/yala-pic3.jpg" },
  { image: "/yala-pic4.jpg" },
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
    title: "test title",
    image: "/yala-pic6.jpg",
    alt: "pic6",
    lat: "",
    long: "",
  },
  {
    id: "2",
    title: "test title",
    image: "/yala-pic5.jpeg",
    alt: "pic5",
    lat: "",
    long: "",
  },
  {
    id: "3",
    title: "Test title",
    image: "/yala-pic1.jpg",
    alt: "pic1",
    lat: "",
    long: "",
  },
  {
    id: "4",
    title: "พรุบาโกย",
    image: "/yala-pic2.jpg",
    alt: "pic2",
    lat: "6.541416807864021",
    long: "101.27505077516143",
  },
  {
    id: "5",
    title: "test title",
    image: "/yala-pic3.jpg",
    alt: "pic3",
    lat: "",
    long: "",
  },
  {
    id: "6",
    title: "test title",
    image: "/yala-pic4.jpg",
    alt: "pic4",
    lat: "",
    long: "",
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
