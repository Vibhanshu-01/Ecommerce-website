import { AppstoreOutlined, MailOutlined, SettingOutlined , UserOutlined, UserAddOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
import {Link} from 'react-router-dom';

const items = [
  {
    label: <Link to="/">Home</Link> ,
    key: 'home',
    icon: <AppstoreOutlined />,
  },
  {
    label: 'Username',
    key: 'username',
    icon: <SettingOutlined />,
    children: [
        {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
    ],

  },
  {
    label: <Link to="/register">Register</Link>,
    key: 'register',
    icon: <UserAddOutlined/>,
    style :{ marginLeft: 'auto' },
    
  },
  {
    label: <Link to="/login">Login</Link>,
    key: 'login',
    icon: <UserOutlined/>,
    

  },
];

const Header = () => {
  const [current, setCurrent] = useState('home');

  const onClick = (e) => {
    console.log('click ', e);
    <Link to="/"></Link>
    setCurrent(e.key);
  };

  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default Header;