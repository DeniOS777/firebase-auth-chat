import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getChat, sendMessage } from 'redux/chatOperations';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
    <div
      style={{
        margin: '0 auto',
        paddingLeft: '15px',
        paddingRight: '15px',
        maxWidth: '550px',
      }}
    >
      <h1 style={{ textAlign: 'center', fontSize: '26px' }}>
        You are welcom to the Google chat👋
      </h1>
      <Form
        className="d-flex gap-md-2"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <Form.Group className="mb-3 d-flex flex-grow-1">
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
  );
};
