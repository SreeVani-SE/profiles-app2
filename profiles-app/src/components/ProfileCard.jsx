import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function ProfileCard({ id, name, likes, setPeople }) {

  function handleLike() {
    setPeople(ps =>
      ps.map(p =>
        p.id === id ? { ...p, likes: p.likes + 1 } : p
      )
    );
  }

  return (
    <Card className="mb-3 shadow-sm">
      <Card.Body>
        <Card.Title className="h5 mb-1">{name}</Card.Title>
        <Card.Text className="mb-2">Likes: {likes}</Card.Text>

        <Button variant="primary" onClick={handleLike}>
          Like ❤️
        </Button>
      </Card.Body>
    </Card>
  );
}
