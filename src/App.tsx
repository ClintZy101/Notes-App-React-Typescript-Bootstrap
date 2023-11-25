import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CreateNotes from "./components/CreateNotes";
import Header from "./components/Header";
import NotesList from "./components/Noteslist";
import { NoteProps } from "./models/note.model";


function App() {

  const [notes, setNotes] = useState<NoteProps[]>([{
    id: (new Date).toString(),
    title: 'Meetings',
    text: "Schedule Meetin with UI/UX Team",
    color: "dfdfdf",
    date: (new Date).toString()
  }])

  return (
    <>
      <Header />
    <Container className="mt-5">
      <Row>
        <Col>
          <NotesList notes={notes} setNotes= { setNotes } />
          <CreateNotes notes={notes}  setNotes={ setNotes }/>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default App;
