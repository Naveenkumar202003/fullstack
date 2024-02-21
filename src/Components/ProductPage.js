import React from 'react';

import ProductList from './ProductList';

const products = [
  {
    id: 1,
    name: 'Mt15',
    description: 'Welcome to our collection of premium bikes, where innovation meets performance. Our bikes, are meticulously crafted to cater to the diverse needs of riders, from city commuters to mountain trailblazers.',
    price: 1200.99,
    image: 'https://images.pexels.com/photos/5362351/pexels-photo-5362351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 2,
    name: 'R15',
    description: 'Welcome to our collection of premium bikes, where innovation meets performance. Our bikesare meticulously crafted to cater to the diverse needs of riders, from city commuters tomountain trailblazers..',
    price: 1200.99,
    image: 'https://images.pexels.com/photos/15146886/pexels-photo-15146886/free-photo-of-photo-of-black-sports-bike-parked-on-roadside.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  },
  {
    id: 3,
    name: 'Himalayan',
    description: 'Welcome to our collection of premium bikes, where innovation meets performance. Our bikeare meticulously crafted to cater to the diverse needs of riders, from city commuters tomountain trailblazers.',
    price: 1000.99,
    image: 'https://images.pexels.com/photos/12372704/pexels-photo-12372704.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  },
  {
    id: 4,
    name: 'Scooty',
    description: 'Welcome to our collection of premium bikes, where innovation meets performance. Our bikes are meticulously crafted to cater to the diverse needs of riders, from city commuters to mountain trailblazers.',
    price: 700.99,
    image: 'https://images.pexels.com/photos/3158136/pexels-photo-3158136.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 5,
    name: 'ns200',
    description: 'Welcome to our collection of premium bikes, where innovation meets performance. Our bikesare meticulously crafted to cater to the diverse needs of riders, from city commuters to mountain trailblazers.',
    price: 900.99,
    image: 'https://images.pexels.com/photos/6505185/pexels-photo-6505185.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  },
  {
    id: 6,
    name: 'Duke',
    description: 'Welcome to our collection of premium bikes, where innovation meets performance. Our bikesare meticulously crafted to cater to the diverse needs of riders, from city commuters to mountain trailblazers.',
    price: 900.99,
    image: 'https://images.pexels.com/photos/17189026/pexels-photo-17189026/free-photo-of-motorcycle-duke-390-standing-on-road.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  },
  {
    id: 7,
    name: 'Royal Enfield',
    description: 'Welcome to our collection of premium bikes, where innovation meets performance. Our bikesare meticulously crafted to cater to the diverse needs of riders, from city commuters tomountain trailblazers.',
    price: 1200.99,
    image: 'https://images.pexels.com/photos/17353005/pexels-photo-17353005/free-photo-of-close-up-of-a-royal-enfield-motorcycle.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  },
  {
    id: 8,
    name: 'Ktm',
    description: 'Welcome to our collection of premium bikes, where innovation meets performance. Our bikesare meticulously crafted to cater to the diverse needs of riders, from city commuters tomountain trailblazers.',
    price: 1000.99,
    image: 'https://images.pexels.com/photos/14828712/pexels-photo-14828712.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  },
  {
    id: 8,
    name: 'Ninja',
    description: 'Welcome to our collection of premium bikes, where innovation meets performance. Our bikesare meticulously crafted to cater to the diverse needs of riders, from city commuters tomountain trailblazers.',
    price: 1000.99,
    image: 'https://images.pexels.com/photos/10392249/pexels-photo-10392249.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  },
  {
    id: 9,
    name: 'Duke 250',
    description: 'Welcome to our collection of premium bikes, where innovation meets performance. Our bikesare meticulously crafted to cater to the diverse needs of riders, from city commuters tomountain trailblazers.',
    price: 1000.99,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1nfN6i_CdSBOAvVwQ5H1D3AdBRbdWzkB2L9IcXPMS_mFJ2z3fmHKvBaCKzNr-ZG23N_o&usqp=CAU',
  },
  {
    id: 10,
    name: 'Hero',
    description: 'Welcome to our collection of premium bikes, where innovation meets performance. Our bikesare meticulously crafted to cater to the diverse needs of riders, from city commuters tomountain trailblazers.',
    price: 1000.99,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO5XWVPJ7L-FVNIna1PfTFEue7VyeR6xDqrQ&usqp=CAU',
  },
  {
    id: 10,
    name: 'x plus',
    description: 'Welcome to our collection of premium bikes, where innovation meets performance. Our bikesare meticulously crafted to cater to the diverse needs of riders, from city commuters tomountain trailblazers.',
    price: 1000.99,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlo_DuIfFp17BceS28r0UPgGYc1VwiVgyozg&usqp=CAU',
  },
  {
    id: 11,
    name: 'fascino',
    description: 'Welcome to our collection of premium bikes, where innovation meets performance. Our bikesare meticulously crafted to cater to the diverse needs of riders, from city commuters tomountain trailblazers.',
    price: 1000.99,
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP7QorDudvn9csWUb9kRPLFoWPaQ8azizk9w&usqp=CAU',
  },
  {
    id: 12,
    name: 'Benelli',
    description: 'Welcome to our collection of premium bikes, where innovation meets performance. Our bikesare meticulously crafted to cater to the diverse needs of riders, from city commuters tomountain trailblazers.',
    price: 1000.99,
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpctU_DI6Lr9j7lt0j9S_Hk85Ck_rILmpNhw&usqp=CAU',
  },
  {
    id: 13,
    name: 'RX100',
    description: 'Welcome to our collection of premium bikes, where innovation meets performance. Our bikesare meticulously crafted to cater to the diverse needs of riders, from city commuters tomountain trailblazers.',
    price: 1000.99,
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbrKw-kaWx0oS0qDjDkEru7AANlJ0NnbTZQMUgj16RnPj2MNRr6whshZzHMxMHMr6QZ3o&usqp=CAU',
  },
  {
    id: 14,
    name: 'RS 200',
    description: 'Welcome to our collection of premium bikes, where innovation meets performance. Our bikesare meticulously crafted to cater to the diverse needs of riders, from city commuters tomountain trailblazers.',
    price: 1000.99,
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK9bv-zX57jn7_Sr_HGWzrGuAqIdZ3YWlbBQ&usqp=CAU',
  },
  {
    id: 15,
    name: 'Thunderbird',
    description: 'Welcome to our collection of premium bikes, where innovation meets performance. Our bikesare meticulously crafted to cater to the diverse needs of riders, from city commuters tomountain trailblazers.',
    price: 1000.99,
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp0ZlqOM_6Er_1prTv4MLKXAroaDd9y4DVFg&usqp=CAU',
  },
  {
    id: 16,
    name: 'Apache',
    description: 'Welcome to our collection of premium bikes, where innovation meets performance. Our bikesare meticulously crafted to cater to the diverse needs of riders, from city commuters tomountain trailblazers.',
    price: 1000.99,
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGaS2mrAifD6mL_caE8tv_kFVLWXMTCgkjt5BI-4yHptqTd_HWTBDtvS8tUmJ3GGfr-Nw&usqp=CAU',
  },
  {
    id: 17,
    name: 'Pulsar 220',
    description: 'Welcome to our collection of premium bikes, where innovation meets performance. Our bikesare meticulously crafted to cater to the diverse needs of riders, from city commuters tomountain trailblazers.',
    price: 1000.99,
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjiRH9z29AIwDYA7a2R4VbSWuQSiFd_26U8B6lRmHRqzxoCIt-NBYD_WYVffnPMkqLB-I&usqp=CAU',
  },
  {
    id: 18,
    name: 'R15 v2',
    description: 'Welcome to our collection of premium bikes, where innovation meets performance. Our bikesare meticulously crafted to cater to the diverse needs of riders, from city commuters tomountain trailblazers.',
    price: 1000.99,
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShFtYQmBfqFlFt8qzoX9GnKEV4cB9b_98_5Q&usqp=CAU',
  },
  {
    id: 19,
    name: 'FZ version 3',
    description: 'Welcome to our collection of premium bikes, where innovation meets performance. Our bikesare meticulously crafted to cater to the diverse needs of riders, from city commuters tomountain trailblazers.',
    price: 1000.99,
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFtQRJTfEJhXjKX6iEnkkkLPgOp027gnW4EA&usqp=CAU',
  },
  {
    id: 20,
    name: 'Suzuki',
    description: 'Welcome to our collection of premium bikes, where innovation meets performance. Our bikesare meticulously crafted to cater to the diverse needs of riders, from city commuters tomountain trailblazers.',
    price: 1000.99,
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTvtiwdev5HTfT1Gqsub4MzVwYX4UWhlgQ7EHf5Ucv1boXysltL0QRmQHxq7KT7uN34CA&usqp=CAU',
  },
];

const ProductPage = () => {
 
  return (
    <div>
      <h1>Welcome to Our Bike Shop!</h1>
      <ProductList products={products} />
      
    </div>
  );
};

export default ProductPage;
