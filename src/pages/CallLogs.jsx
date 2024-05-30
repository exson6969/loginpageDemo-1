import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import outgoing from '../assets/outgoing.png';
import callcell from '../assets/callcell.png';
import incoming from '../assets/incoming.png';

const CallLogs = () => {
  document.title = "ClevGuard - Call Logs";

  const mycallLogsData = [
    {
      imgClass: outgoing,
      name: 'H. K. Skip Pita',
      phoneNumber: '415-356-2000',
      status: 'Called',
      type: 'Outgoing',
      duration: '01:24:03',
      date: '2022-02-06 15:37:28',
      action: 'Block',
    },
    {
      imgClass: callcell,
      name: 'David Rudolph',
      phoneNumber: '888-276-7202',
      status: 'Blocked',
      type: 'Cancelled',
      duration: '00:00:00',
      date: '2022-02-06 15:36:12',
      action: 'Block',
    },
    {
      imgClass: incoming,
      name: 'Jane Doe',
      phoneNumber: '123-456-7890',
      status: 'Missed',
      type: 'Incoming',
      duration: '00:05:23',
      date: '2022-02-07 09:20:45',
      action: 'Block',
    },
    {
      imgClass: outgoing,
      name: 'John Smith',
      phoneNumber: '987-654-3210',
      status: 'Called',
      type: 'Outgoing',
      duration: '00:30:45',
      date: '2022-02-07 10:15:00',
      action: 'Block',
    },
    {
      imgClass: incoming,
      name: 'Alice Johnson',
      phoneNumber: '555-666-7777',
      status: 'Answered',
      type: 'Incoming',
      duration: '00:15:10',
      date: '2022-02-07 11:45:30',
      action: 'Block',
    },
    {
      imgClass: outgoing,
      name: 'Bob Brown',
      phoneNumber: '444-555-6666',
      status: 'Called',
      type: 'Outgoing',
      duration: '00:45:20',
      date: '2022-02-08 14:00:00',
      action: 'Block',
    },
    {
      imgClass: incoming,
      name: 'Carol White',
      phoneNumber: '333-444-5555',
      status: 'Missed',
      type: 'Incoming',
      duration: '00:00:00',
      date: '2022-02-08 15:30:00',
      action: 'Block',
    },
    {
      imgClass: callcell,
      name: 'Daniel Green',
      phoneNumber: '222-333-4444',
      status: 'Blocked',
      type: 'Cancelled',
      duration: '00:00:00',
      date: '2022-02-08 16:45:10',
      action: 'Block',
    },
    {
      imgClass: outgoing,
      name: 'Emily Black',
      phoneNumber: '111-222-3333',
      status: 'Called',
      type: 'Outgoing',
      duration: '00:10:35',
      date: '2022-02-09 08:15:00',
      action: 'Block',
    },
    {
      imgClass: incoming,
      name: 'Frank Gray',
      phoneNumber: '999-888-7777',
      status: 'Answered',
      type: 'Incoming',
      duration: '00:20:00',
      date: '2022-02-09 09:45:30',
      action: 'Block',
    },
    {
      imgClass: callcell,
      name: 'Grace Lee',
      phoneNumber: '888-999-0000',
      status: 'Blocked',
      type: 'Cancelled',
      duration: '00:00:00',
      date: '2022-02-09 10:30:20',
      action: 'Block',
    },
    {
      imgClass: outgoing,
      name: 'Henry White',
      phoneNumber: '777-666-5555',
      status: 'Called',
      type: 'Outgoing',
      duration: '00:50:50',
      date: '2022-02-09 11:15:00',
      action: 'Block',
    },
    {
      imgClass: incoming,
      name: 'Ivy Brown',
      phoneNumber: '666-555-4444',
      status: 'Answered',
      type: 'Incoming',
      duration: '00:25:15',
      date: '2022-02-09 12:30:45',
      action: 'Block',
    },
    {
      imgClass: outgoing,
      name: 'Jack Black',
      phoneNumber: '555-444-3333',
      status: 'Called',
      type: 'Outgoing',
      duration: '00:35:25',
      date: '2022-02-10 13:45:00',
      action: 'Block',
    },
    {
      imgClass: incoming,
      name: 'Karen Green',
      phoneNumber: '444-333-2222',
      status: 'Missed',
      type: 'Incoming',
      duration: '00:00:00',
      date: '2022-02-10 14:30:30',
      action: 'Block',
    },
  ];
  const [callLogsData, setCallLogsData] = useState(mycallLogsData);
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filteredData = callLogsData.filter(log => {
    if (selectedFilter === 'All') {
      return true; 
    } else {
      const currentDate = new Date();
      const logDate = new Date(log.date);

      switch (selectedFilter) {
        case 'Today':
          return logDate.getDate() === currentDate.getDate() &&
            logDate.getMonth() === currentDate.getMonth() &&
            logDate.getFullYear() === currentDate.getFullYear();
        case 'This Month':
          return logDate.getMonth() === currentDate.getMonth() &&
            logDate.getFullYear() === currentDate.getFullYear();
        case 'Last Month':
          const lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
          const nextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
          return logDate >= lastMonth && logDate < nextMonth;
        case 'Last Year':
          return logDate.getFullYear() === currentDate.getFullYear() - 1;
        default:
          return false;
      }
    }
  });


  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
  };


  return (
    <div>
      <div className="md:flex  hidden h-screen">
        <div className=" w-64">
          <Sidebar />
        </div>
        <div className="flex flex-col w-full">
          <Navbar className="sticky top-0 z-10" />
          <div className='bg-slate-100 h-full overflow-y-auto p-6'>
            <div className='flex gap-4 items-center'>
              <h1 className='text-3xl'>Call Logs</h1>
              <button className='bg-cyan-500 text-white rounded-full px-6 py-2'>
                <i className="bi bi-arrow-repeat"></i> Sync
              </button>
              <p className='text-gray-500'>Updated: 2024-05-30 06:57:55</p>
            </div>


            <div className="flex bg-white justify-between mt-6">
              <div className="w-1/4 px-4 py-2">
                <div className="relative">
                  <select value={selectedFilter} onChange={handleFilterChange} className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2  rounded-full shadow leading-tight focus:outline-none focus:shadow-outline">
                    <option value="All">All</option>
                    <option value="Today">Today</option>
                    <option value="This Month">This Month</option>
                    <option value="Last Month">Last Month</option>
                    <option value="Last Year">Last Year</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 14.707a1 1 0 0 1-1.414-1.414l4-4a1 1 0 1 1 1.414 1.414l-4 4z" /></svg>
                  </div>
                </div>
              </div>
              <div className="w-1/2 px-4 py-2">
                <div className="relative">
                  <input className="w-full border border-gray-300 bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
                    type="text" placeholder="Search..." />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <svg className="h-5 w-5 text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-y-auto max-h-full">
              <table className="min-w-full  divide-y-2 divide-gray-200 bg-white text-sm px-8">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="whitespace-nowrap text-base px-4 py-4 font-medium text-gray-900" width="7%"></th>
                    <th className="whitespace-nowrap text-base px-4 py-4 font-medium text-gray-900" width="10%">Name</th>
                    <th className="whitespace-nowrap text-base px-4 py-4 font-medium text-gray-900" width="18%">Phone Number</th>
                    <th className="whitespace-nowrap text-base px-4 py-4 font-medium text-gray-900" width="10%">Status</th>
                    <th className="whitespace-nowrap text-base px-4 py-4 font-medium text-gray-900" width="10%">Type</th>
                    <th className="whitespace-nowrap text-base px-4 py-4 font-medium text-gray-900" width="16%">Duration</th>
                    <th className="whitespace-nowrap text-base px-4 py-4 font-medium text-gray-900">Date</th>
                    <th className="whitespace-nowrap text-base px-4 py-4 font-medium text-gray-900"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {callLogsData.map((log, index) => (
                    <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} text-center `}>
                      <td className="whitespace-nowrap px-4 py-2">
                        <img src={log.imgClass} alt="call icon" />
                      </td>
                      <td className="whitespace-nowrap text-base px-4 py-4 name-txt">{log.name}</td>
                      <td className="whitespace-nowrap text-base px-4 py-4">{log.phoneNumber}</td>
                      <td className="whitespace-nowrap text-base px-4 py-4">{log.status}</td>
                      <td className="whitespace-nowrap text-base px-4 py-4">{log.type}</td>
                      <td className="whitespace-nowrap text-base px-4 py-4">{log.duration}</td>
                      <td className="whitespace-nowrap text-base px-4 py-4 time-txt">{log.date}</td>
                      <td className="whitespace-nowrap text-base px-4 py-4 opr-btn">
                        <a href=""><span className="block text-base text-cyan-500">{log.action}</span></a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="block md:hidden w-full text-center p-4">
          <p className='font-semibold'>Please open this page on a desktop for the best experience.</p>
        </div>
      </div>
      <div className="block md:hidden w-full text-center p-4">
        <p className='font-semibold'>Please open this page on a desktop for the best experience.</p>
      </div>
    </div>

  );
}

export default CallLogs;
