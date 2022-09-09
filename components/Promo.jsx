import React from 'react';
import CVForm from './CVForm';

function Promo({ promoheading, promomessage }) {
  return (
    <div className='w-full h-screen mb-[30px]  bg-white pb-[120px] pt-[5px] px-2 flex flex-col justify-evenly'>
      <div className='mt-4 text-center'>
        <h1 className='text-2xl font-bold text-gray-600 uppercase'>
          {promoheading}
        </h1>
        <h2 className='text-gray-600 text-lg mb-[20px]'>{promomessage}</h2>
      </div>
      <div className='hidden md:block mx-auto max-w-[1240px] w-[90%] relative cancun-img bg-center bg-cover h-[700px]'>
        <div className='hidden md:block absolute max-w-[300px] max-h-[400px]  md:right-[-30px] md:bottom-[-75px] xl:right-[-65px] bg-gray-200 p-6 rounded-lg  mb-4'>
          <div className='flex flex-col justify-evenly space-y-4'>
            <h3 className='text-2xl'>Card Header</h3>
            <h2 className='text-xl'>Card SubHeading</h2>
            <p className='text-base'>
              Card Text Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Deleniti quam quia incidunt pariatur? Atque saepe numquam
              accusantium unde harum. Iste, qui fugiat!
            </p>
            {/* <button className='px-8 py-2 border rounded-lg bg-[#00388d] text-white mb-3 mt-3 hover:bg-[#cb010d]  shadow-md'>
              Find out more.
            </button> */}
            {/* Can be replaced by this button or any other. */}
            <CVForm />
          </div>
        </div>
      </div>
      <div className='md:hidden mx-auto w-[90%] min-h-[250px] mb-[-175px] cancun-img bg-center bg-cover h-[900px] rounded-lg'></div>
      <div className='md:hidden mx-auto w-[90%] bg-gray-200 p-6 rounded-lg rounded-t-none mb-[-75px]'>
        <div className='flex flex-col justify-evenly space-y-4'>
          <h3 className='text-2xl'>Card Header</h3>
          <h2 className='text-xl'>Card SubHeading</h2>
          <p className='text-base'>
            Card Text Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Deleniti quam quia incidunt pariatur? Atque saepe numquam
            accusantium unde harum. Iste, qui fugiat!
          </p>
          {/* <button className='px-8 py-2 border rounded-lg bg-[#00388d] text-white mb-3 mt-3 hover:bg-[#cb010d]  shadow-md'>
              Find out more.
            </button> */}
          {/* Can be replaced by this button or any other. */}
          <CVForm />
        </div>
      </div>
    </div>
  );
}

export default Promo;
