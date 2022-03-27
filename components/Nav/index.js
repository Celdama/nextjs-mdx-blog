import Link from 'next/link';
import { Title } from './nav.tw';

const Nav = () => {
  return (
    <nav className='nav p-3 border-bottom'>
      <Link href='/' passHref>
        <Title>Celdama</Title>
      </Link>
      <Link href='/bio' passHref>
        <p className='ms-5 pointer lead my-auto'>Bio</p>
      </Link>
    </nav>
  );
};
export default Nav;
