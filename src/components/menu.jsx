import {  Menu, MenuItem, View, IconsProvider, ThemeProvider, Theme} from '@aws-amplify/ui-react';
import { Icon } from '@iconify/react';


export const MyMenu = () => (
    <IconsProvider
        icons={{
        menu: {
            menu: <Icon icon="streamline:interface-setting-menu-parallel-hamburger-square-navigation-parallel-hamburger-buttonmenu-square" />,
        },
    }}
    >
        <View width="4rem">
            <Menu>
                <MenuItem>Home</MenuItem>
                <MenuItem>About</MenuItem>
                <MenuItem>Notes</MenuItem>
                <MenuItem>Theory</MenuItem>
            </Menu>
        </View>
    </IconsProvider>
);