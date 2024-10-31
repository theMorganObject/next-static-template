import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center min-h-screen p-4 text-center'>
      <h1 className='text-4xl font-bold mb-4'>Welcome to My Template Site</h1>

      <Image
        src='https://picsum.photos/200/300'
        alt='Placeholder'
        height={300}
        width={200}
        className='w-full max-w-xs mb-4 rounded-md shadow-lg'
      />

      <p className='mb-8 max-w-md'>
        This is a simple static site template built with Next.js. Use this as a
        starting point for creating fast, responsive sites for any purpose.
      </p>

      <div className='flex space-x-4'>
        <Link
          href='/about'
          className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'
        >
          About Us
        </Link>
        <Link
          href='/contact'
          className='px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700'
        >
          Contact Us
        </Link>
      </div>
    </main>
  );
}
