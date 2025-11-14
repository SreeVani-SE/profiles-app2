import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ProfileCard from './components/ProfileCard.jsx';
import { profiles } from './data/profiles.js';

export default function App() {

  // Part 4 state
  const [people, setPeople] = useState(profiles);

  // Part 5 form state
  const [name, setName] = useState('');
  const trimmed = name.trim();
  const exists = people.some(
    p => p.name.toLowerCase() === trimmed.toLowerCase()
  );

  let error = '';
  if (!trimmed) error = 'Name is required';
  else if (exists) error = 'Name already exists';

  function handleSubmit(e) {
    e.preventDefault();
    if (error) return;

    const newPerson = {
      id: people.length > 0 ? Math.max(...people.map(p => p.id)) + 1 : 1,
      name: trimmed,
      likes: 0
    };

    setPeople(prev => [...prev, newPerson]);
    setName('');
  }

  return (
    <Container className="py-4">
      <h1 className="mb-4 text-center">Profiles</h1>

      {/* ADD PROFILE FORM */}
      <Form
        onSubmit={handleSubmit}
        className="d-flex justify-content-center gap-2 mb-4"
      >
        <Form.Group controlId="newName" style={{ maxWidth: "400px", width: "100%" }}>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={e => setName(e.target.value)}
            isInvalid={!!error && name.length > 0}
          />
          <Form.Control.Feedback type="invalid">
            {error}
          </Form.Control.Feedback>
        </Form.Group>

        <Button type="submit" variant="primary">
          Add
        </Button>
      </Form>

      {/* PROFILE CARDS */}
      <Row xs={1} md={2} lg={3}>
        {people.map(p => (
          <Col key={p.id}>
            <ProfileCard
              id={p.id}
              name={p.name}
              likes={p.likes}
              setPeople={setPeople}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
