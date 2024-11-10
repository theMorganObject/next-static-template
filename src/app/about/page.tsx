import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <section className='flex flex-col items-center max-w-2xl p-4'>
      <h1 className='text-4xl font-bold text-center my-8'>About Us</h1>
      <p className='max-w-md mb-12 md:max-w-2xl'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sit
        deleniti autem, nostrum voluptates blanditiis quisquam repudiandae
        deserunt aspernatur similique architecto ab repellat, tempora non ipsa
        consequuntur soluta quia modi? Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Dolorum, asperiores enim. Repellat facere officia
        deserunt, iure veniam sapiente natus harum. Dolorum et aliquam provident
        reprehenderit beatae possimus illo blanditiis enim.
      </p>

      {/* First Image and Text Block */}
      <section className='flex flex-col items-center gap-y-12 mb-12 md:flex-row md:gap-x-4 md:gap-y-0'>
        <Image
          src='https://picsum.photos/300/200'
          alt='Placeholder Image 1'
          width={300}
          height={200}
          className='rounded-md shadow-lg'
        />
        <div className='flex flex-col max-w-md'>
          <h3 className='text-center font-bold pb-2'>Maecenas at Magna</h3>
          <p className='max-w-md'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repellendus voluptate facilis iste doloribus fugit, consequatur vero
            corporis reiciendis, deleniti laboriosam itaque beatae magnam nam
            labore nulla dolorem rem sed eaque. Numquam, corporis voluptatem a
            id optio repellendus praesentium.
          </p>
        </div>
      </section>

      {/* Second Text and Image Block: inverted order */}
      <section className='flex flex-col items-center gap-y-12 mb-12 md:flex-row-reverse md:gap-4 md:gap-y-0'>
        <Image
          src='https://picsum.photos/300/200?2'
          alt='Placeholder Image 2'
          width={300}
          height={200}
          className='rounded-md shadow-lg'
        />
        <div className='flex flex-col max-w-md'>
          <h3 className='text-center font-bold pb-2'>Pellentesque Tincidunt</h3>
          <p className='max-w-md'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quasi
            voluptas, beatae inventore quos reiciendis ab, sapiente, tempora
            atque alias minus accusamus et facere quibusdam! Eos quis vitae modi
            ullam, mollitia accusamus cum repellendus reprehenderit repellat!
            Repellat dolor beatae labore expedita.
          </p>
        </div>
      </section>

      {/* Third Image and Text Block */}
      <section className='flex flex-col items-center gap-y-12 mb-12 md:flex-row md:gap-x-4 md:gap-y-0'>
        <Image
          src='https://picsum.photos/300/200?3'
          alt='Placeholder Image 3'
          width={300}
          height={200}
          className='rounded-md shadow-lg'
        />
        <div className='flex flex-col max-w-md'>
          <h3 className='text-center font-bold pb-2'>Vestibulum Dictum</h3>
          <p className='max-w-md'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Accusantium facere ea quae officiis fugiat aperiam dolor debitis?
            Illo velit est expedita porro quisquam maxime fugiat cum tenetur.
            Non beatae laboriosam dolor vitae consequatur tempore voluptas magni
            sapiente corporis qui.
          </p>
        </div>
      </section>

      {/* Final Paragraph */}
      <p className='max-w-md mb-12 md:max-w-2xl'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        molestiae nesciunt hic delectus! Quaerat mollitia at maxime eveniet
        illum, voluptatibus porro culpa fugiat cupiditate, vitae omnis? Hic
        commodi nisi rerum et, odit impedit quibusdam omnis.
      </p>

      {/* Contact Button */}
      <div className='mb-8'>
        <Link
          href='/contact'
          className='px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700'
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
