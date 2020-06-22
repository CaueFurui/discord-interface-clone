import React, { useRef, useEffect } from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles'

import ChannelMessage, { Mention } from '../ChannelMessage';

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;

        if (div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef])

    return (
        <Container>
            <Messages ref={messagesRef}>
                {Array.from(Array(15).keys()).map((n) => (
                    <ChannelMessage
                    key={n}
                    author='Username'
                    date='21/06/2020'
                    content='Teste de mensagem! Uhuu' />
                ))}

                <ChannelMessage
                    author='Username'
                    date="21/06/2020"
                    content={
                        <>
                            <Mention>@Username</Mention>, esse foi um teste de mensagem do bot! Ebaa!
                        </>
                    }
                    hasMention
                    isBot
                />
            </Messages>

            <InputWrapper>
                <Input placeholder='Conversar em #geralzao' type='text' />
                <InputIcon />
            </InputWrapper>
        </Container>
    )
};

export default ChannelData;