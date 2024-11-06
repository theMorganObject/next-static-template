import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <main className='flex flex-col items-center p-4 text-center space-y-8'>
      <h1 className='text-4xl font-bold mb-8'>About Us</h1>

      <div className='max-w-2xl mb-8'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          volutpat nulla sit amet augue faucibus, eget ultrices orci pulvinar.
          Phasellus at urna nec eros cursus fermentum.
        </p>
      </div>

      {/* First Image and Text Block */}
      <section className='flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 items-center'>
        <Image
          src='https://picsum.photos/300/200'
          alt='Placeholder Image 1'
          width={300}
          height={200}
          className='rounded-md shadow-lg'
        />
        <div className='flex flex-col max-w-md'>
          <h3 className='text-center font-bold pb-2'>Maecenas at Magna</h3>
          <p className='max-w-md text-left'>
            Quisque suscipit magna id ligula varius, sed fermentum justo
            efficitur. Donec eget urna eu orci vehicula fermentum. Maecenas at
            magna in turpis gravida tristique sit amet vel eros.
          </p>
        </div>
      </section>

      {/* Second Text and Image Block */}
      <section className='flex flex-col md:flex-row-reverse md:space-x-4 space-y-4 md:space-y-0 items-center'>
        <div className='flex flex-col max-w-md'>
          <Image
            src='https://picsum.photos/300/200?2'
            alt='Placeholder Image 2'
            width={300}
            height={200}
            className='rounded-md shadow-lg'
          />
          <h3 className='text-center font-bold pb-2'>Pellentesque Tincidunt</h3>
          <p className='max-w-md text-left'>
            Integer condimentum, urna eget scelerisque bibendum, nisi lorem
            vehicula risus, at consectetur dolor leo et urna. Pellentesque
            tincidunt viverra nisl, in condimentum libero.
          </p>
        </div>
      </section>

      {/* Third Image and Text Block */}
      <section className='flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 items-center'>
        <Image
          src='https://picsum.photos/300/200?3'
          alt='Placeholder Image 3'
          width={300}
          height={200}
          className='rounded-md shadow-lg'
        />
        <div className='flex flex-col max-w-md'>
          <h3 className='text-center font-bold pb-2'>Vestibulum Dictum</h3>
          <p className='max-w-md text-left'>
            Morbi vel nibh et sapien pharetra interdum non a leo. Vestibulum
            dictum, lorem eu ullamcorper varius, lacus metus elementum purus,
            vitae cursus libero nunc eu turpis.
          </p>
        </div>
      </section>

      {/* Final Paragraph */}
      <div className='max-w-2xl'>
        <p>
          Aenean vel augue turpis. Aliquam erat volutpat. Suspendisse potenti.
          Curabitur aliquet est nec risus fermentum, at tincidunt sapien
          imperdiet.
        </p>
      </div>

      {/* Contact Button */}
      {/* <div className='py-12'> */}
      <Link
        href='/contact'
        className='px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700'
      >
        Contact Us
      </Link>
      {/* </div> */}
    </main>
  );
}
