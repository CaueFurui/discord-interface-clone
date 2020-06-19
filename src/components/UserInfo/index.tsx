import React from 'react';

import { Container, Profile, Avatar, UserData, Icons, MicIcon, PhoneIcon, SettingsIcon } from './styles'

const UserInfo: React.FC = () => {
    return (
        <Container>
            <Profile>
                <Avatar />
                <UserData>
                    <strong>UserName</strong>
                    <span>#5621</span>
                </UserData>
            </Profile>

            <Icons>
                <MicIcon />
                <PhoneIcon />
                <SettingsIcon />
            </Icons>
        </Container>
    )
};

export default UserInfo;