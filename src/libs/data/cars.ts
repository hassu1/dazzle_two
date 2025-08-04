export interface Car {
  id: number;
  brand: string;
  name: string;
  price: number;
  image: string;
  seats: number;
  transmission: string;
  luggage?: number;
  minAge?: number;
  type: string;
}


// src/app/libs/data/cars.ts
export const cars = [
  {
    brand: "Lamborghini",
    name: "Lamborghini Urus",
    year: "2024",
    type: "SUV",
    condition: "New",
    mileage: "2",
    engine: "4.0L",
    fuel: "Petrol",
    transmission: "Auto",
    price: "600 Per Day",
    image: "/img/lamborghini-urus.jpg",
    logo: "/img/lamborghini.png",
    slug: "lamborghini-urus",
  },
    {
    brand: "Lamborghini",
    name: "Lamborghini Urus",
    year: "2024",
    type: "SUV",
    condition: "New",
    mileage: "2",
    engine: "4.0L",
    fuel: "Petrol",
    transmission: "Auto",
    price: "600 Per Day",
    image: "/img/lamborghini-urus.jpg",
    logo: "/img/lamborghini.png",
    slug: "lamborghini-urus",
  },
    {
    brand: "Lamborghini",
    name: "Lamborghini Urus",
    year: "2024",
    type: "SUV",
    condition: "New",
    mileage: "2",
    engine: "4.0L",
    fuel: "Petrol",
    transmission: "Auto",
    price: "600 Per Day",
    image: "/img/lamborghini-urus.jpg",
    logo: "/img/lamborghini.png",
    slug: "lamborghini-urus",
  },
    {
    brand: "Lamborghini",
    name: "Lamborghini Urus",
    year: "2024",
    type: "SUV",
    condition: "New",
    mileage: "2",
    engine: "4.0L",
    fuel: "Petrol",
    transmission: "Auto",
    price: "600 Per Day",
    image: "/img/lamborghini-urus.jpg",
    logo: "/img/lamborghini.png",
    slug: "lamborghini-urus",
  },
    {
    brand: "Lamborghini",
    name: "Lamborghini Urus",
    year: "2024",
    type: "SUV",
    condition: "New",
    mileage: "2",
    engine: "4.0L",
    fuel: "Petrol",
    transmission: "Auto",
    price: "600 Per Day",
    image: "/img/lamborghini-urus.jpg",
    logo: "/img/lamborghini.png",
    slug: "lamborghini-urus",
  },
    {
    brand: "Lamborghini",
    name: "Lamborghini Urus",
    year: "2024",
    type: "SUV",
    condition: "New",
    mileage: "2",
    engine: "4.0L",
    fuel: "Petrol",
    transmission: "Auto",
    price: "600 Per Day",
    image: "/img/lamborghini-urus.jpg",
    logo: "/img/lamborghini.png",
    slug: "lamborghini-urus",
  },
  {
    brand: "Ferrari",
    name: "Ferrari Roma",
    year: "2023",
    type: "Coupe",
    condition: "New",
    mileage: "1",
    engine: "3.9L",
    fuel: "Petrol",
    transmission: "Auto",
    price: "750 Per Day",
    image: "/img/lamborghini-urus.jpg",
    logo: "/img/lamborghini.png",
    slug: "ferrari-roma",
  },
  {
    brand: "Porsche",
    name: "Porsche Cayenne",
    year: "2022",
    type: "SUV",
    condition: "Used",
    mileage: "30",
    engine: "3.0L",
    fuel: "Petrol",
    transmission: "Auto",
    price: "500 Per Day",
     image: "/img/lamborghini-urus.jpg",
    logo: "/img/lamborghini.png",
    slug: "porsche-cayenne",
  },
  // ...add more
];

export const slugify = (text: string) =>
  text.toLowerCase().replace(/[^\w\s-]/g, '').trim().replace(/\s+/g, '-');