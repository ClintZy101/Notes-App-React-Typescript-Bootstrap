import * as React from 'react';
import { setSyntheticLeadingComments } from 'typescript';
import { NoteProps } from '../models/note.model';
import Notes from './Notes';

interface INotesListProps {
    notes: NoteProps[]
    setNotes: React.Dispatch<React.SetStateAction<NoteProps[]>>
}

const NotesList: React.FunctionComponent<INotesListProps> = ({ notes, setNotes }) => {

    // const renderNotes = ():JSX.Element[] => {
    //     return notes.map(note => {
    //        return <Notes key={note.id} note={note} />
    //     })
    // }

    const handleDelete = (id: string) => {
        console.log('deleted note:', id)
        setNotes(notes.filter(note => note.id !== id))
    }

    const RenderNote = () => (
        <>
            {
                notes.map((note) => (
                    <Notes key={note.id} note={note} handleDelete={handleDelete} />
                ))
            }
        </>
    )

    return (
        <>
            <h2 className='mt-3'>Notes</h2>
            <RenderNote />
        </>
    );
};

export default NotesList;
