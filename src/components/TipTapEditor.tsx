'use client'

import React from 'react'
import { EditorContent, useEditor } from '@tiptap/react'
import { StarterKit } from '@tiptap/starter-kit'
import TipTapMenuBar from './TipTapMenuBar'
import { Button } from './ui/button'
import { useDebounce } from '@/lib/useDebounce'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { NoteType } from '@/lib/db/schema'
import Text from '@tiptap/extension-text'

type Props = {note: NoteType}

const TipTapEditor = ({note}: Props) => {
    const [ editorState, setEditorState ] = React.useState(note.editorState || `<h1>${note.name}</h1>`);
    const saveNote = useMutation({
        mutationFn: async () => {
          const response = await axios.post("/api/saveNote", {
            noteId: note.id,
            editorState,
          });
          return response.data;
        },
    });

    const customText = Text.extend({
        addKeyboardShortcuts() {
            return {
                'Shift-a': () => {
                    console.log("Activate AI");
                    return true;
                },
            };
        },
    });

    const editor = useEditor ({
        autofocus: true, // automatically focus on the editor when the page loads
        extensions: [StarterKit], // add the starter kit extension
        content: editorState,
        onUpdate:({ editor }) => {
            setEditorState(editor.getHTML()); // get the HTML back and bind it back to the internal local state
        },
    });
    const debouncedEditorState = useDebounce(editorState, 500);
    React.useEffect(() => {
        // save to db
        if (debouncedEditorState === "") return;
        saveNote.mutate(undefined, {
            onSuccess: (data) => {
                console.log("success update!", data);
            },
            onError: (err) => {
                console.error(err);
            },
        });
    }, [debouncedEditorState]);

  return (
    <>
        <div className="flex">
            {editor && <TipTapMenuBar editor={editor}/> }
            <Button disabled variant={"outline"}>
                {saveNote.isLoading ? "Saving..." : "Saved"}
            </Button>
        </div>
        <div className="prose">
            <EditorContent editor={editor} />
        </div>
    </>
  )
}

export default TipTapEditor