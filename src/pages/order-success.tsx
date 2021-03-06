import Typography from '@mui/material/Typography';
import Image from 'next/image';
import {
  useAuthUser,
  withAuthUser,
  withAuthUserTokenSSR,
} from 'next-firebase-auth';

import Header from '@/components/layout/Header';
import Seo from '@/components/Seo';

import mail from '../../public/mail.svg';

const OrderSuccess = () => {
  const AuthUser = useAuthUser();

  return (
    <div className='p-0 font-display'>
      <Seo />

      <Header name={AuthUser.displayName} avatar={AuthUser.photoURL} email={AuthUser.email} signOut={AuthUser.signOut} />

      <main className='flex justify-center items-center h-96'>
        <div className='flex flex-col justify-center items-center'>
          <Image src={mail} alt='mail' />
          <Typography variant='h5' component='h1' fontWeight='bold' className='mt-2'>
            Pesanan Berhasil! Cek Email!
          </Typography>
        </div>
      </main>
    </div>
  );
};

export const getServerSideProps = withAuthUserTokenSSR()();

export default withAuthUser()(OrderSuccess);
