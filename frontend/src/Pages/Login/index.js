import React , { useState }  from 'react'
// import { useHistory } from 'react-router-dom';
// import { useAuth } from './AuthContext';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    // const history = useHistory();
    // const { login } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        // if (login(username, password)) {
        // //   history.push('/');
        // } else {
        //   setError('Invalid username or password');
        // }
      };

  return (
    <div>
          <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}
