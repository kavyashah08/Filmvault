import React from 'react'

function WatchList() {
  return (
    <>
    <div className='flex justify-center my-4'>
       <input
        type="text"
        placeholder="Search..."
        className=" h-[3rem] w-[18rem] bg-gray-200 outline-none px-4"
      />
      </div>
      <div className='overflow-hidden rounded-lg border border-gray-200 m-8'>
        <table className='w-full text-gray-500 text-center'>
          <thead className='border-b-2'>
            <tr>
              <th>Name</th>
              <th>Ratings</th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b-2'>
              <td className='flex item-center px-6 py-4'>
                <img className="h-[6rem] w-[10rem]" src="https://imgs.search.brave.com/BSnYXCMJk6qparJ88e_kybulKj_N5rb6mbxFALV8tUE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/d2FsbHNhdWNlLmNv/bS9wZGkvMTAyNjg4/OS83NjcvMC8wL3No/YXdzaGFuay1yZWRl/bXB0aW9uLW1vdmll/LXBvc3Rlci5qcGc" alt="" /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default WatchList