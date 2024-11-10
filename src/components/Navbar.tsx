import Link from 'next/link';

export default function Navbar() {
  const navItems = [
    { href: '/', text: 'Home' },
    { href: '/about', text: 'About' },
    { href: '/contact', text: 'Contact' },
  ];

  return (
    <nav className='w-full sticky top-0 bg-gray-800'>
      <div className='max-w-sm mx-auto px-4'>
        <ul className='flex justify-between py-4 text-white'>
          {navItems.map((item) => (
            <li key={item.text}>
              <Link href={item.href}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
