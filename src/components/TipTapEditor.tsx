'use client'

import React from 'react'
import { EditorContent, useEditor } from '@tiptap/react'
import { StarterKit } from '@tiptap/starter-kit'

type Props = {}

const TipTapEditor = (props: Props) => {
    const [ editorState, setEditorState ] = React.useState('');
    const editor = useEditor ({
        autofocus: true, // automatically focus on the editor when the page loads
        extensions: [StarterKit], // add the starter kit extension
        content: editorState,
        onUpdate:({editor}) => {
            setEditorState(editor.getHTML()); // get the HTML back and bind it back to the internal local state
        },
    })
  return (
    <div>
        <div>
            <EditorContent editor={editor} />
        </div>
    </div>
  )
}

export default TipTapEditor