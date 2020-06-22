import React from 'react';
import { Container, Role, User, Avatar } from './styles'

interface UserProps {
    nickname: string;
    isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({nickname, isBot}) => {
    return (
        <User>
            <Avatar className={isBot ? 'bot' : ''}/>

            <strong>{nickname}</strong>

            {isBot && <span>Bot</span>}
        </User>
    )
}

const UserList: React.FC = () => {
    return (
        <Container>
            <Role>Disponível - 1</Role>
            <UserRow nickname='Username' />

            <Role>Offline - 27</Role>
            <UserRow nickname='Username' isBot />
            <UserRow nickname='Username' />
            <UserRow nickname='Username' />
            <UserRow nickname='Username' />
            <UserRow nickname='Username' />
            <UserRow nickname='Username' />
            <UserRow nickname='Username' />
            <UserRow nickname='Username' />
            <UserRow nickname='Username' />
            <UserRow nickname='Username' />
            <UserRow nickname='Username' />
            <UserRow nickname='Username' />
            <UserRow nickname='Username' />
            <UserRow nickname='Username' />
            <UserRow nickname='Username' />
            <UserRow nickname='Username' />
            <UserRow nickname='Username' />
            <UserRow nickname='Username' />

        </Container>
    )
};

export default UserList;