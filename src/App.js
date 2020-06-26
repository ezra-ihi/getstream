import React from 'react';
import { Chat, Channel, ChannelList, Window } from 'stream-chat-react';
import { ChannelHeader, MessageList } from 'stream-chat-react';
import { MessageInput, Thread } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';

import 'stream-chat-react/dist/css/index.css';

const chatClient = new StreamChat('gx5a64bj4ptz');
const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoic25vd3ktZmxvd2VyLTgifQ.WrNrA7nKIzu_tKf9hM4UAyZ-2HUIuXjB2EAM7zkMSzk';

chatClient.setUser(
  {
    id: 'snowy-flower-8',
    name: 'Samir Mehta',
    image: 'https://ironhorse.io/wp-content/uploads/2019/09/samir-mehta.jpg'
  },
  userToken,
);

const filters = { type: 'messaging', members: { $in: ['snowy-flower-8'] } };
const sort = { last_message_at: -1 };
const channels = chatClient.queryChannels(filters, sort);

const App = () => (
  <Chat client={chatClient} theme={'messaging light'}>
    <ChannelList
      filters={filters}
      sort={sort}
    />
    <Channel>
      <Window>
        <ChannelHeader />
        <MessageList />
        <MessageInput />
      </Window>
      <Thread />
    </Channel>
  </Chat>
);

export default App; 