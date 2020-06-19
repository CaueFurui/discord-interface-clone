import React from 'react';

import ServerList from '../ServerList';
import ChannelInfo from '../ChannelInfo';
import ServerName from '../ServerName';
import ChannelList from '../ChannelList';

import { Grid } from './styles'

const Layout: React.FC = () => {
    return (
        <Grid>
            <ServerList />
            <ServerName />
            <ChannelInfo />
            <ChannelList />
        </Grid>
    )
};

export default Layout;