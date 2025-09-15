import SideBar from "../components/SideBar"
import ChatHeader from "../components/ChatHeader"
import MessageList from "../components/MessageList"
import ChatFooter from "../components/ChatFooter"

const Chat = () => {
    return (
        <>
        <section class="principal">
            <SideBar />
            <hr/>
            <main class="chat-layout">
                <ChatHeader />
                <hr/>
                <MessageList />
                <ChatFooter />
            </main>
        </section>
        </>
    )
}

export default Chat