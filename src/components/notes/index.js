import React, { useState, Fragment, useEffect } from "react"
import "../../styles/notes.scss"
import { Column, Button } from "rbx"
import { push as Menu } from "react-burger-menu"
import ListNotes from "../notes/list"
import NotesService from "../../services/notes"
import Editor from "../notes/editor"
import Search from "../notes/search"
function Notes(props) {
    const [notes, setNotes] = useState([])
    const [current_note, setCurrentNote] = useState({
        title: "",
        body: "",
        id: ""
    })
    async function fetchNotes() {
        const response = await NotesService.index()
        console.log(response)
        if (response.data.length >= 1) {
            setNotes(response.data.reverse())
            setCurrentNote(response.data[0])
        } else {
            setNotes([])
        }
    }
    const createNote = async () => {
        await NotesService.create()
        fetchNotes()
    }
    const deleteNote = async (note) => {
        await NotesService.delete(note._id)
        fetchNotes()
    }
    const updateNote = async (oldNote, params) => {
        const updateNote = await NotesService.update(oldNote._id, params)
        const index = notes.indexOf(oldNote)
        const newNotes = notes
        newNotes[index] = updateNote.data
        setNotes(newNotes)
        setCurrentNote(updateNote.data)
    }
    const searchNotes = async (query) => {
        const response = await NotesService.search(query)
        setNotes(response.data)
    }
    const selectNote = (id) => {
        const note = notes.find((note) => {
            return note._id === id
        })
        setCurrentNote(note)
    }
    useEffect(() => {
        fetchNotes()
    }, [])

    return (
        <Fragment>
            <div className="notes" id="notes">
                <Menu
                    pageWrapId={"notes-editor"}
                    isOpen={props.isOpen}
                    onStateChange={(state) => props.setIsOpen(state.isOpen)}
                    disableAutoFocus
                    outerContainerId={"notes"}
                    customBurgerIcon={false}
                    customCrossIcon={false}
                >
                    <Column.Group>
                        <Column size={10} offset={1}>
                            <Search
                                searchNotes={searchNotes}
                                fetchNotes={fetchNotes}
                            />
                        </Column>
                    </Column.Group>
                    <ListNotes
                        notes={notes}
                        selectNote={selectNote}
                        current_note={current_note}
                        createNote={createNote}
                        deleteNote={deleteNote}
                    />
                </Menu>

                <Column size={12} className="notes-editor" id="notes-editor">
                    <Editor note={current_note} updateNote={updateNote} />
                </Column>
            </div>
        </Fragment>
    )
}

export default Notes
