import { useState } from 'react'
import { MessageInput } from './components/MessageInput';
import ChatList from './components/ChatList';
import dayjs from 'dayjs';

import './App.css'

function App() {
  const now = dayjs().valueOf();

  const [chatList, setchatList] = useState([
    { text: 'Hello chatbot', from: 'user', time: now, id: 'id1' },
    { text: 'Hi how can i help you?', from: 'robot', time: now, id: 'id2' },
    { text: 'How are you?', from: 'user', time: now, id: 'id3' },
    { text: 'I am fine 😊', from: 'robot', time: now, id: 'id4' }
  ]);

  return (
    <div className="app-container">
      <ChatList ChatList={chatList} />
      <MessageInput
        ChatList={chatList}
        setChatList={setchatList}
      />
    </div>
  );
}

export default App;
