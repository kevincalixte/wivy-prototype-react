import React from 'react';
import TopMenu from '../components/TopMenu/TopMenu.jsx';
import UserList from '../components/UserList/UserList.jsx';

function Feed() {
  return (

    <div className='bg-neutral-900 min-h-screen text-white flex flex-col'>
      <TopMenu />
      <div className='bg-neutral-800 flex-1'>
        <UserList></UserList>
        <UserList></UserList>
        <UserList></UserList>
        <UserList></UserList>
        <UserList></UserList>
        <UserList></UserList>
        <UserList></UserList>
        <UserList></UserList>
        <UserList></UserList>
        <UserList></UserList>
        <UserList></UserList>
        <UserList></UserList>
        <UserList></UserList>
        <UserList></UserList>
        <UserList></UserList>
        <UserList></UserList>
        <UserList></UserList>
        <UserList></UserList>
        <UserList></UserList>
        <UserList></UserList>
        <UserList></UserList>
      </div>
    </div>


  );
}

export default Feed;
