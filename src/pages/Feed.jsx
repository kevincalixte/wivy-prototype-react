import React from 'react';
import TopMenu from '../components/TopMenu/TopMenu.jsx';
import UserList from '../components/UserList/UserList.jsx';

function Feed() {
  return (

    <div className='bg-neutral-900 text-white'>
      <TopMenu />
      <div className='bg-neutral-800'>
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
