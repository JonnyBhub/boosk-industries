import React from 'react';
import { Menu, MenuItem, View, IconsProvider } from '@aws-amplify/ui-react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import '../css/menu.css';

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
      <View classname='menu' width='4rem' marginLeft={'2rem'}>
        <Menu>
          <Link to='/'>
            <MenuItem>
              <Icon icon='iconamoon:home-light' />
              &ensp;Home
            </MenuItem>
          </Link>
          <Link to='/App'>
            <MenuItem>
              <Icon icon='ri:book-line' />
              &ensp;About
            </MenuItem>
          </Link>
          <Link to='/Notes'>
            <MenuItem>
              <Icon icon='material-symbols:note-outline' />
              &ensp;Notes
            </MenuItem>
          </Link>
          <Link to='/Theory'>
            <MenuItem>
              <Icon icon='mdi:brain' />
              &ensp;Theory
            </MenuItem>
          </Link>
        </Menu>
      </View>
    </IconsProvider>
  );
};
