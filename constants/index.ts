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
}

// image in Attraction (combine all pics first)
export const ATTRACTION_PAGE_PICS: Attraction[] = [
  { id: "1", title: "test title", image: "/yala-pic6.jpg", alt: "pic6" },
  { id: "2", title: "test title", image: "/yala-pic5.jpeg", alt: "pic5" },
  { id: "3", title: "test title", image: "/yala-pic1.jpg", alt: "pic1" },
  { id: "4", title: "พรุบาโกย", image: "/yala-pic2.jpg", alt: "pic2" },
  { id: "5", title: "test title", image: "/yala-pic3.jpg", alt: "pic3" },
  { id: "6", title: "test title", image: "/yala-pic4.jpg", alt: "pic4" },
];
