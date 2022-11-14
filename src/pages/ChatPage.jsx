import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getChat, sendMessage } from 'redux/chatOperations';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const ChatPage = () => {
  const messages = useSelector(state => state.chat);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    const form = e.currentTarget;
    e.preventDefault();
    dispatch(sendMessage(form.elements.message.value));
    form.reset();
  };

  useEffect(() => {
    dispatch(getChat());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div
        style={{
          margin: '0 auto',
          marginBottom: '20px',
          paddingLeft: '15px',
          paddingRight: '15px',
          maxWidth: '450px',
        }}
      >
        <h1 style={{ textAlign: 'center', fontSize: '24px' }}>
          You are welcom to the Google chat👋
        </h1>
        <Form
          className="d-flex gap-md-2"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <Form.Group className="d-flex flex-grow-1">
            <Form.Control
              id="message"
              type="text"
              name="message"
              placeholder="Enter your message..."
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Send
          </Button>
        </Form>
      </div>
      <ul
        className="d-grid gap-3 p-0 m-0"
        style={{
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          listStyle: 'none',
        }}
      >
        {messages.map(({ id, message, username }) => (
          <li
            className="d-flex gap-3 flex-column p-3"
            style={{
              backgroundColor: 'lightgrey',
              borderRadius: '8px',
              boxShadow:
                '0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0)',
            }}
            key={id}
          >
            <p
              className="m-0 px-2 py-1 align-self-end align-items-center text-white"
              style={{
                borderRadius: '8px',
                backgroundColor: 'darkgray',
              }}
            >
              {username}
            </p>
            <p
              className="m-0 bg-white px-2 py-1 align-self-start"
              style={{
                borderRadius: '8px',
                boxShadow:
                  '0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0)',
              }}
            >
              {message}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};
