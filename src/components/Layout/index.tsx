import React from 'react';

import ServerList from '../ServerList';
import ChannelInfo from '../ChannelInfo';
import ServerName from '../ServerName';
import ChannelList from '../ChannelList';
import UserInfo from '../UserInfo';
import UserList from '../UserList';

import { Grid } from './styles'

const Layout: React.FC = () => {
    return (
        <Grid>
            <ServerList />
            <ServerName />
            <ChannelInfo />
            <ChannelList />
            <UserInfo />
            <div />
            <UserList />
        </Grid>
    )
};

export default Layout;