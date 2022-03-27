import Link from 'next/link';
import { Wrapper } from './nav.styles';

const Nav = () => {
  return (
    <Wrapper>
      <Link href='/' passHref>
        <h2>Mon Blog</h2>
      </Link>
      <Link href='/bio' passHref>
        <p className='ms-5 pointer lead my-auto'>Bio</p>
      </Link>
      {/* <input type='search' name='' id='' /> */}
    </Wrapper>
  );
};
export default Nav;
