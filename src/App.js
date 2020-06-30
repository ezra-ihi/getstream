import React from 'react';
import { Chat, Channel, ChannelList, Window } from 'stream-chat-react';
import { ChannelHeader, MessageList } from 'stream-chat-react';
import { MessageInput, Thread } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';

import 'stream-chat-react/dist/css/index.css';

const chatClient = new StreamChat('gx5a64bj4ptz');
const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoic25vd3ktZmxvd2VyLTgifQ.WrNrA7nKIzu_tKf9hM4UAyZ-2HUIuXjB2EAM7zkMSzk';

//const search = window.location.search;
//const params = new URLSearchParams(search);
//const uid = params.get('uid');
//const name = params.get('name');

let user_id = 'snowy-flower-8';
let user_name = 'Samir Mehta';

// if (uid && name) {
//   user_id = uid;
//   user_name = name;

//   console.log(user_name)
// }

chatClient.setUser(
  {
    id: user_id,
    name: user_name,
    //image: 'https://ironhorse.io/wp-content/uploads/2019/09/samir-mehta.jpg'
    image: 'https://getstream.io/random_svg/?id='+user_id+'&name='+user_name
  },
  userToken,
);

const filters = { type: 'messaging', members: { $in: ['snowy-flower-8'] } };
const sort = { last_message_at: -1 };
//const channels = chatClient.queryChannels(filters, sort);

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