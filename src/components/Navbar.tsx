import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='w-full bg-gray-800'>
      <div className='max-w-sm mx-auto px-4'>
        <ul className='flex justify-between py-4 text-white'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
