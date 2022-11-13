import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getChat, sendMessage } from 'redux/chatOperations';

export const ChatPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(sendMessage(e.currentTarget.elements.message.value));
  };

  useEffect(() => {
    dispatch(getChat());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <p>Hello</p>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input
          id="message"
          type="text"
          name="message"
          placeholder="Enter message..."
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};
