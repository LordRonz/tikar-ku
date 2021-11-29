import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { useState } from 'react';
import { BsHeart, BsHeartFill, BsStarFill } from 'react-icons/bs';
import { MdLocationPin } from 'react-icons/md';

const Item = ({ image, alt, liked, rating, slot, price, id }: { image: string, alt: string, liked: boolean, rating: string, slot: number, price: string, id: number }) => {
  const [like, setLike] = useState(liked);

  return (
    <Card sx={{ display: 'flex', width: '50rem', mb: 4 }}>
      <CardMedia
        component="img"
        sx={{ width: 250 }}
        image={image}
        alt={alt}
      />
      <Box sx={{ display: 'flex', alignItems: '', pl: 0, pb: 0, justifyContent: 'space-between', width: '100%' }}>
        <CardContent sx={{ flex: '0 0 auto' }}>
          <Typography component="div" variant="h6" fontWeight='bold'>
            {alt}
          </Typography>
          <div className='flex items-center'>
            <MdLocationPin />
            <Typography component="div">
              Jakarta
            </Typography>
          </div>
          <div className='flex items-center'>
            <BsStarFill className='text-vyellow' />
            <Typography component="div">
              {rating}
            </Typography>
          </div>
          <Typography component="div">
            {slot} Slot tersisa
          </Typography>
          <Typography component="div" className='text-vgreen' fontWeight='bold'>
            Rp {price}
          </Typography>
        </CardContent>
        <CardContent sx={{ display: 'flex', justifyContent: 'center', p: 1 }}>
          <div className='flex flex-col justify-between items-end'>
            {
              like
              ? <BsHeartFill size={28} className='text-vgreen cursor-pointer'  onClick={ () => setLike(!like) }/>
              : <BsHeart size={28} className='cursor-pointer'  onClick={ () => setLike(!like) }/>
            }
            <button className='bg-vgreen text-vwhite py-1 px-8 rounded-xl'>
              <Link href={`/payment/${id}`}>
                <a>Pilih</a>
              </Link>
            </button>
          </div>
        </CardContent>
      </Box>
    </Card>
  );
};

const items = [
  {
    image: '/search-1.png',
    alt: 'Akang Group',
    liked: true,
    rating: '4.69 (200 Reviews)',
    slot: 69,
    price: '69.420.000',
  },
  {
    image: '/search-2.png',
    alt: 'Janji Jiwa',
    liked: false,
    rating: '4.69 (200 Reviews)',
    slot: 69,
    price: '69.420.000',
  },
  {
    image: '/search-1.png',
    alt: 'Akang Group',
    liked: true,
    rating: '4.69 (200 Reviews)',
    slot: 69,
    price: '69.420.000',
  },
  {
    image: '/search-2.png',
    alt: 'Janji Jiwa',
    liked: false,
    rating: '4.69 (200 Reviews)',
    slot: 69,
    price: '69.420.000',
  },
  {
    image: '/search-1.png',
    alt: 'Akang Group',
    liked: true,
    rating: '4.69 (200 Reviews)',
    slot: 69,
    price: '69.420.000',
  },
  {
    image: '/search-2.png',
    alt: 'Janji Jiwa',
    liked: false,
    rating: '4.69 (200 Reviews)',
    slot: 69,
    price: '69.420.000',
  },
  {
    image: '/search-1.png',
    alt: 'Akang Group',
    liked: true,
    rating: '4.69 (200 Reviews)',
    slot: 69,
    price: '69.420.000',
  },
  {
    image: '/search-2.png',
    alt: 'Janji Jiwa',
    liked: false,
    rating: '4.69 (200 Reviews)',
    slot: 69,
    price: '69.420.000',
  },
];

const SearchResult = () => {
  return (
    <div>
      <Typography variant='h5'>
        <Box fontWeight='fontWeightBold'>
          Semua hasil pencarian untuk Franchise
        </Box>
      </Typography>
      {
        items.map(({ image, alt, liked, rating, slot, price }, i) => (
          <Item image={image} alt={alt} liked={liked} rating={rating} slot={slot} price={price} id={i} key={i} />
        ))
      }
    </div>
  );
};

export default SearchResult;
