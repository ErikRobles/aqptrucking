import React from "react"
import CVForm from "./CVForm"

function Promo({ promoheading, promomessage }) {
  return (
    <div className="w-full h-full bg-white pt-12 pb-[120px] px-2 flex flex-col justify-evenly">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-600 uppercase">
          {promoheading}
        </h1>
        <h2 className="text-gray-600 text-lg mb-[20px]">{promomessage}</h2>
      </div>
      <div className="hidden md:block mx-auto max-w-[1240px] w-[90%] relative beach-img bg-center bg-cover h-[700px]">
        <div className="hidden md:block absolute max-w-[300px] max-h-[400px]  md:right-[-30px] md:bottom-[-50px] xl:right-[-65px] bg-gray-200 p-6 rounded-lg  mb-4">
          <div className="flex flex-col justify-evenly space-y-4">
            {/* <h3 className="text-2xl">Card Header</h3> */}
            {/* <h2 className="text-xl">Card SubHeading</h2> */}
            <p className="text-base">
              Take a relaxing vacation to the Caribbean
            </p>
            {/* <button className='px-8 py-2 border rounded-lg bg-[#00388d] text-white mb-3 mt-3 hover:bg-[#cb010d]  shadow-md'>
              Find out more.
            </button> */}
            {/* Can be replaced by this button or any other. */}
            <CVForm />
          </div>
        </div>
      </div>
      <div className="md:hidden mx-auto w-[90%] min-h-[350px] mb-[-10px] beach-img bg-center bg-cover h-[350px] rounded-lg"></div>
      <div className="md:hidden mx-auto w-[90%] bg-gray-200 p-6 rounded-lg rounded-t-none mb-[-75px]">
        <div className="flex flex-col justify-evenly space-y-5">
          {/* <h3 className="text-2xl">Card Header</h3> */}
          {/* <h2 className="text-xl">Card SubHeading</h2> */}
          <p className="text-base">Take a relaxing vacation to the Caribbean</p>
          {/* <button className='px-8 py-2 border rounded-lg bg-[#00388d] text-white mb-3 mt-3 hover:bg-[#cb010d]  shadow-md'>
              Find out more.
            </button> */}
          {/* Can be replaced by this button or any other. */}
          <CVForm />
        </div>
      </div>
    </div>
  )
}

export default Promo
