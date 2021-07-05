/** @format */

import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router';
import User from '../User/User';
import { useDispatch, useSelector } from 'react-redux';
import { createName } from '../../redux/actions/userAction';

function Login({ setPrivatPage }) {
  const [avatar, setAvatar] = useState(null);
  const [selector, setSelector] = useState('bottts');
  const [name, setName] = useState('');

  const history = useHistory();
  const dispatch = useDispatch();

  async function getAvatar() {
    await axios
      .get(
        `https://avatars.dicebear.com/api/${selector}/aa.svg
      `
      )
      .then((data) => {
        setAvatar(data.config.url);
      });
  }

  useEffect(() => {
    if (selector) getAvatar();
  }, [selector]);

  return (
    <>
      <div class='text-center d-flex flex-column justify-content-center align-items-center wv-150 vh-100'>
        <h4>Enter your name</h4>
        {avatar && (
          <>
            <img src={avatar} style={{ maxWidth: '200px' }} />
          </>
        )}
        <Form
          onChange={(e) => setSelector(e.target.value)}
          onSubmit={(e) => {
            e.preventDefault();
            setPrivatPage(e.target.name.value);
            dispatch(createName(e.target.name.value));
            history.push('/game');
          }}
        >
          <Form.Group controlId='exampleForm.ControlSelect1'>
            <Form.Label>Avatar</Form.Label>
            <Form.Control as='select'>
              <option value='bottts'>Bottts</option>
              <option value='human'>Human</option>
              <option value='male'>Male</option>
              <option value='female'>Female</option>
              <option value='avataaars'>Hippi</option>
              <option value='micah'>Micah</option>
            </Form.Control>

            <Form.Control name='name' type='text' placeholder='Name' />
          </Form.Group>
          <Button type='submit' onClick={(e) => setName(e.target.name.value)}>
             Enter
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Login;
