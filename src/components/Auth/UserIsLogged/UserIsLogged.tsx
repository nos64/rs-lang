import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import Button from '@mui/material/Button';
import Context from '../../../context';

const UserIsLogged: React.FC = () => {
  const { store } = React.useContext(Context);

  return (
    <div>
      <div>Добро пожаловать: {store.userName}</div>
      <Button onClick={store.logout} variant="contained" startIcon={<LogoutIcon />}>
        Выйти
      </Button>
    </div>
  );
};

export default UserIsLogged;
