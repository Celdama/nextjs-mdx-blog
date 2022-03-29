import Link from 'next/link';
import { Wrapper } from './nav.styles';

const Nav = () => {
  return (
    <Wrapper>
      <div className='content'>
        <div className='header'>
          <Link href='/' passHref>
            <h2>Mon Blog</h2>
          </Link>
          {/* <Link href='/bio' passHref>
            <p className='ms-5 pointer lead my-auto'>Bio</p>
          </Link> */}
        </div>
        <div className='footer'>
          <input type='text' placeholder='Search ...' />
          <svg
            className='filter'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4'
            />
          </svg>
        </div>
      </div>
    </Wrapper>
  );
};
export default Nav;
