const ChatFooter = () => {
    return (
        <footer class="chat-footer">
            <div class="text-box">
                <input type="text" placeholder="Enter text here..." id="input-message" />
                <button id="send-button"><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
            </div>
        </footer>
    )
}

export default ChatFooter;