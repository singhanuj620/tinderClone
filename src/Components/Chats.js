import React from 'react'
import '../Css/Chats.css'
import Chat from './Chat'

const Chats = () => {
    return (
        <div className="chats">
            <Chat
                name = "Amita"
                message = "Hello Anuj ❤ !!"
                timestamp ="1 min ago"
                profilePic="faces/image-1.png"
            />

            <Chat
                name = "Roshni"
                message = "Hey !!"
                timestamp ="20 min ago"
                profilePic="faces/image-2.png"
            />

            <Chat
                name = "Sonali"
                message = "Whassup... 😎😎"
                timestamp ="40 min ago"
                profilePic="faces/image-3.png"
            />

            <Chat
                name = "Nishu"
                message = "How are you Anuj ? 🔥🔥🔥"
                timestamp ="5 sec ago"
                profilePic="faces/image-4.png"
            />
        </div>
    )
}

export default Chats
