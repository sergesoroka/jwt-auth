import React, { useState, useContext, useEffect } from 'react';
import LogInForm from './components/LogInForm';
import './App.css';
import { Context } from '.';
import { observer } from 'mobx-react-lite';
import { IUser } from './models/IUser';
import UserService from './services/UserService';

function App() {
  const { store } = useContext(Context);
  const [users, setUsers] = useState<IUser[]>([]);
  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.chechAuth();
    }
  }, []);
  async function getUsers() {
    try {
      const response = await UserService.fetchUsers();
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  if (store.isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className='App'>
      <h1>
        {store.isAuth
          ? `User is authorizated ${store.user.email}`
          : 'Please login'}
      </h1>
      <LogInForm />
      <button onClick={getUsers}>Get all users</button>
      {users.map(user => (
        <div key={user.email}>{user.email}</div>
      ))}
    </div>
  );
}

export default observer(App);
