import React from 'react';
import TopMenu from '../components/TopMenu/TopMenu.jsx';
import UserList from '../components/UserList/UserList.jsx';

function Feed() {
  return (

    <div className='bg-neutral-900 text-white'>
      <TopMenu />
      <div className='bg-neutral-800'>
        <UserList state={0}></UserList>
        <UserList state={0}></UserList>
        <UserList state={0}></UserList>
        <UserList state={1}></UserList>
        <UserList state={1}></UserList>
        <UserList state={2}></UserList>
        <UserList state={3}></UserList>
        <UserList state={3}></UserList>
        <UserList state={4}></UserList>
        <UserList state={4}></UserList>
        <UserList state={4}></UserList>
        <UserList state={4}></UserList>
        <UserList state={4}></UserList>
        <UserList state={4}></UserList>
        <UserList state={4}></UserList>
        <UserList state={4}></UserList>
      </div>
    </div>


  );
}

export default Feed;
