import React from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles'

import ChannelMessage from '../ChannelMessage';

const ChannelData: React.FC = () => {
    return (
        <Container>
            <Messages>
                <ChannelMessage
                    author='Username'
                    date="21/06/2020"
                    content='Teste de mensagem! Uhuu!'
                />

                {/* <ChannelMessage
                    author='Username'
                    date="21/06/2020"
                    content={
                        <>
                            <Mention>@Username</Mention>, esse foi um teste de mensagem do bot! Ebaa!
                        </>
                    }
                /> */}
            </Messages>

            <InputWrapper>
                <Input placeholder='Conversar em #geralzao' type='text' />
                <InputIcon />
            </InputWrapper>
        </Container>
    )
};

export default ChannelData;