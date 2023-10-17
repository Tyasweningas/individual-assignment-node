import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from "react-chat-engine-advanced"

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '7539c268-316f-4c89-8893-4bdd5b1a7eae', 
        props.user.username, 
        props.user.secret
    );

    return (
    <div style={{ height: '100vh' }}>
         <MultiChatSocket {...chatProps} />
         <MultiChatWindow {...chatProps} style={{height: '100%'}}/>
    </div>
    )
}

export default ChatsPage