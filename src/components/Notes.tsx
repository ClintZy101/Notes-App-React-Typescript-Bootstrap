import * as React from 'react';
import { Button, Card } from 'react-bootstrap';
import { NoteProps } from '../models/note.model';

interface INotesProps {
    note: NoteProps
    handleDelete: (id:string) => void
}

const Notes: React.FunctionComponent<INotesProps> = ({ note, handleDelete }) => {
  return (
    <div className='mb-3'>
       <Card style={{backgroundColor: note.color}}>
        <Card.Body>
        <Card.Title>{note.title}</Card.Title>
        <Card.Text>{note.text}</Card.Text>
        <Card.Subtitle className='text-muted'>{note.date}</Card.Subtitle>
        <Button className='mb-3 mt-3' variant="danger" onClick={()=>handleDelete(note.id)}>Delete</Button>
        </Card.Body>
       </Card>
    </div>
  ) ;
};

export default Notes;
