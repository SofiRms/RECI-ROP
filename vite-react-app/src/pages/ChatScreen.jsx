import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext';

import '../assets/Login.css';
import { NavBar } from '../ui/NavBar';

export const ChatScreen = () => {
    const { user } = useContext(AuthContext);
    

    const [allMessages, setAllMessages] = useState([]);
    console.log(user)

    const [chat, setChat] = useState({
        message: '',
        user: user.username
    });

    const { message } = chat;
    console.log(chat.username)

    // ESCUCHA NUEVOS MENSAJES
    useEffect(() => {
        socket.on('new-message', data => {
            setAllMessages(data);
        })

        return () => socket.off('new-message');
    }, [socket])


    // ALMACENA EN EL ESTADO LOS VALORES INGRESADOS EN EL INPUT 
    const handleInputChange = ({ target }) => {
        setChat({
            ...chat,
            [target.name]: target.value
        });
    }

    // ENVIAR NUEVO MENSAJE
    const handleSendMessage = (e) => {
        e.preventDefault();
        if (chat.message.length < 1) return alert('No puede enviar mensajes vacíos!')

        socket.emit('new-message', chat)

        setChat({
            ...chat,
            message: ''
        })
    }


    return (
        <p></p>
    )
}
