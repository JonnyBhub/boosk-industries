import React from 'react';
import { Menu, MenuItem, View, IconsProvider } from '@aws-amplify/ui-react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import './menu.css';

export const MyMenu = () => {
  return (
    <IconsProvider
      icons={{
        menu: {
          menu: (
            <Icon icon='streamline:interface-setting-menu-parallel-hamburger-square-navigation-parallel-hamburger-buttonmenu-square' />
          ),
        },
      }}
    >
      <View className='menu' width='4rem' marginLeft={'2rem'}>
        <Menu>
          <Link to='/'>
            <MenuItem width={'10rem'}>
              <Icon icon='iconamoon:home-light' />
              &ensp;Home
            </MenuItem>
          </Link>
          <Link to='/App'>
            <MenuItem width={'10rem'}>
              <Icon icon='ri:book-line' />
              &ensp;About
            </MenuItem>
          </Link>
          <Link to='/Notes'>
            <MenuItem width={'10rem'}>
              <Icon icon='material-symbols:note-outline' />
              &ensp;Notes
            </MenuItem>
          </Link>
          <Link to='/Theory'>
            <MenuItem width={'10rem'}>
              <Icon icon='mdi:brain' />
              &ensp;Theory
            </MenuItem>
          </Link>
          <Link to='/Cardano'>
            <MenuItem width={'10rem'}>
              <Icon icon='simple-icons:cardano' />
              &ensp;Cardano
            </MenuItem>
          </Link>
        </Menu>
      </View>
    </IconsProvider>
  );
};
