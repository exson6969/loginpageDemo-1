import React, { useState } from 'react';

const Sidebar = () => {
    

  return (
    <div className='h-screen w-64 bg-blue-950'>
       <a href="">
      <div className='bg-cyan-500 px-4 py-2 flex gap-2 items-center text-white'>
        <div className='bg-green-50 bg-opacity-50 rounded flex items-center'>
          <i className="bi bi-android2 text-emerald-500 text-2xl px-3 py-2"></i>
        </div>
        <div className='flex-1 min-w-0'>
          <p>Galaxy S10</p>
          <p className='font-semibold overflow-hidden text-ellipsis whitespace-nowrap'>Lil' Bobbys Phone</p>
        </div>
        <div className='bg-white rounded-full p-2 w-10 h-10 flex items-center justify-center'>
          <i className="bi bi-arrow-left-right text-cyan-500"></i>
        </div>
      </div>
        </a>

      <div className='py-6 ps-2 flex flex-col '>
       <a href="" className='text-cyan-400 text-lg bg-gray-50 rounded-s-full ps-10 py-2 '><i class="bi bi-telephone"></i> Call Logs</a> 
      </div>
    </div>
  );
};

export default Sidebar;
