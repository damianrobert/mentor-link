import NavBar from '@/components/client/NavBar';
import React from 'react';

function Dashboard() {
  const finishedCourses = Array.from({ length: 20 }, (_, index) => index + 1);

  return (
    <div className='min-h-screen flex flex-col'>
      <NavBar />

      <div className='bg-zinc-200 flex flex-col flex-grow p-1'>
        <div className='flex my-1 p-1 h-[20rem] justify-around'>
          <div className='bg-white rounded-md mr-1 w-1/6 '>
            hours spent as mentor
          </div>

          <div className='bg-white rounded-md mr-1 w-1/6 '>
            hours spent as mentee
          </div>

          <div className='flex flex-col bg-white rounded-md mr-1 w-1/6    p-1 overflow-y-scroll hide-scrollbar'>
            {finishedCourses.map((item) => (
              <div className='bg-zinc-100 rounded-md p-1 mb-1 '>
                <h6 className='text-center'>course {item} finished!!!</h6>
              </div>
            ))}
          </div>

          <div className='bg-white rounded-md mr-1 w-1/6  bg-cover flex justify-around flex-row-reverse'></div>
        </div>

        <div className='flex h-[22rem] p-1'>
          <div className='bg-white w-3/6 rounded-md mr-1'></div>
          <div className='bg-white w-2/6 rounded-md mr-1'></div>
          <div className='bg-white w-1/6 rounded-md mr-1'></div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
