import React from 'react';
import TopMenu from '../components/TopMenu/TopMenu.jsx';
import UserList from '../components/UserList/UserList.jsx';

function Feed() {
  return (

    <div className='bg-neutral-900 min-h-screen text-white'>
      <TopMenu />
      <div className='bg-neutral-800 min-h-screen'>
        <UserList></UserList>
        <UserList></UserList>
        <UserList></UserList>
        <UserList></UserList>
      </div>
    </div>


  );
}

export default Feed;
