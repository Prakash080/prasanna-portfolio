//contact Details

import { imagesSrc } from "./assets";

// This file contains the contact details of the artist, including name, mobile number, email, location, and social media links.
const contacts = {
  name: "Kumari Prasanna",
  mobile: "+91 6360767711",
  email: "kumari.prasanna@gmail.com",
  location: "Bangalore, India",
  instagram: "https://instagram.com",
  whatsapp: "https://whatsapp.com",
};

// Awards data
const awards = [
  {
    id: 1,
    title: "Bala Saraswati Award",
    organization: "Saraswathi Nrithyalaya International Academy",
    year: "2019/20",
    description:
      "Celebrating excellence in Bharatanatyam and unwavering dedication to the art form.",
    image: 'award-image.png',
  },
  {
    id: 2,
    title: "Natya Varshini Award",
    organization: "Saraswathi Nrithyalaya International Academy",
    year: "2021/22",
    description:
      "Recognizing artistic mastery and contributions to classical dance.",
    image: 'award-image.png',
  },
  {
    id: 3,
    title: "National Talent Best Dancer Award",
    organization: "Saraswathi Nrithyalaya International Academy",
    year: "2018",
    description:
      "Awarded for outstanding skill and stage presence, this national recognition highlights exceptional talent and contributions to the field of classical dance.",
    image: 'award-image.png',
  },
];

// Special mentions
const pressQuotes = [
  {
    id: 1,
    quote:
      "A mesmerizing performer who brings ancient traditions to life with contemporary relevance and exceptional technical skill.",
    source: "Dance Magazine",
    date: "June 2022",
  },
  {
    id: 2,
    quote:
      "Her performances are a perfect blend of technical precision and emotional storytelling, creating an immersive experience for audiences.",
    source: "The Cultural Times",
    date: "August 2021",
  },
  {
    id: 3,
    quote:
      "A rising star in the world of classical dance, bringing fresh perspectives while honoring traditional forms.",
    source: "Arts Weekly",
    date: "March 2021",
  },
  {
    id: 4,
    quote:
      "Her choreography demonstrates a deep understanding of classical traditions while fearlessly exploring new artistic territories.",
    source: "International Dance Review",
    date: "November 2020",
  },
];

// Data for certificates and recognitions
const certificates = [
  {
    id: 1,
    title: "Divya Chetana Charitable Trust",
    organization: "Saraswathi Nrithyalaya International Academy",
    year: "2021",
    image: 'certificate-image.png',
  },
  {
    id: 2,
    title: "Mahila Samskruthika Utsava",
    organization: "Saraswathi Nrithyalaya International Academy",
    year: "2020/2021",
    image: 'certificate-image.png',
  },
  {
    id: 3,
    title: "Sri Sathya Sai Samskruthi & Social Center",
    organization: "Saraswathi Nrithyalaya International Academy",
    year: "(2016/17, 2019",
    description:
      "Honored for exceptional solo performance showcasing technical precision and emotional depth.",
    image: 'certificate-image.png',
  },
  {
    id: 4,
    title: "Bangalore International Airport Limited",
    organization: "Saraswathi Nrithyalaya International Academy",
    year: "2016",
    description:
      "Honored for exceptional solo performance showcasing technical precision and emotional depth.",
    image: 'certificate-image.png',
  },
  {
    id: 5,
    title: "Navarathri Utsava",
    organization: "Saraswathi Nrithyalaya International Academy",
    year: "2016 – 2021",
    description:
      "Honored for exceptional solo performance showcasing technical precision and emotional depth.",
    image: 'certificate-image.png',
  },
  {
    id: 6,
    title: "Sri Chamundeshwari Temple",
    organization: "Saraswathi Nrithyalaya International Academy",
    year: "2021",
    description:
      "Honored for exceptional solo performance showcasing technical precision and emotional depth.",
    image: 'certificate-image.png',
  },
];

// Data for Gallery Images
const excludedIndexes = new Set([
  0, 1, 2, 3, 4, 5, 6, 10, 12, 19, 22, 24, 30, 31, 36,38, 39, 40, 48, 54, 55, 56, 57
]);

// Define the type for gallery images
interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  title: string;
}

const galleryImages: GalleryImage[] = [];
let count = 1;

for (let i = 0; i < 58; i++) {
  if (!excludedIndexes.has(i)) {
    galleryImages.push({
      id: count,
      src: imagesSrc[i],
      alt: `Classical Dance ${count}`,
      title: `Gallery Image ${count}`,
    });
    count++;
  }
}

export { awards, pressQuotes, certificates, contacts,galleryImages };
