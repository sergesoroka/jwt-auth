import React, { FC, useState, useContext } from 'react';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';

const LogInForm: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { store } = useContext(Context);
  return (
    <div>
      <input
        onChange={e => setEmail(e.target.value)}
        value={email}
        type='text'
        placeholder='Enter your email'
      />
      <input
        onChange={e => setPassword(e.target.value)}
        value={password}
        type='password'
        placeholder='Enter your password'
      />
      <button onClick={() => store.login(email, password)}>Log In</button>
      <button onClick={() => store.registration(email, password)}>
        Registration
      </button>
    </div>
  );
};

export default observer(LogInForm);
