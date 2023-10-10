import { Editor } from '@tiptap/react'
import { Bold, Code, CodepenIcon, Heading1, Heading2, Heading3, Italic, List, ListOrdered, Quote, Strikethrough} from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'

type Props = {
    editor: Editor
}

const TipTapMenuBar = ({ editor }: Props) => {
  return (
    <div className="flex flex-wrap gap-1">
        <Button 
            onClick={()=>editor.chain().focus().toggleBold().run()} 
            disabled={!editor.can().chain().focus().toggleBold().run()}
            className={editor.isActive('bold')? "is-active" : ""}
        >
            <Bold className="w-4 h-4"/>
        </Button>
        <Button 
            onClick={()=>editor.chain().focus().toggleItalic().run()} 
            disabled={!editor.can().chain().focus().toggleItalic().run()}
            className={editor.isActive('italic')? "is-active" : ""}
        >
            <Italic className="w-4 h-4"/>
        </Button>
        <Button 
            onClick={()=>editor.chain().focus().toggleStrike().run()} 
            disabled={!editor.can().chain().focus().toggleStrike().run()}
            className={editor.isActive('strike')? "is-active" : ""}
        >
            <Strikethrough className="w-4 h-4"/>
        </Button>
        <Button 
            onClick={()=>editor.chain().focus().toggleCode().run()} 
            disabled={!editor.can().chain().focus().toggleCode().run()}
            className={editor.isActive('code')? "is-active" : ""}
        >
            <Code className="w-4 h-4"/>
        </Button>
        <Button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive("codeBlock") ? "is-active" : ""}
      >
        <CodepenIcon className="w-4 h-4" />
      </Button>
        <Button 
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            className={editor.isActive("heading", { level: 1 }) ? "is-active" : ""}
        >
            <Heading1 className="w-4 h-4"/>
        </Button>
        <Button 
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            className={editor.isActive("heading", { level: 2 }) ? "is-active" : ""}
        >
            <Heading2 className="w-4 h-4"/>
        </Button>
        <Button 
            onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
            className={editor.isActive("heading", { level: 3 }) ? "is-active" : ""}
        >
            <Heading3 className="w-4 h-4"/>
        </Button>
        <Button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={editor.isActive("bulletList") ? "is-active" : ""}
        >
            <List className="w-4 h-4" />
        </Button>
        <Button
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={editor.isActive("orderedList") ? "is-active" : ""}
        >
            <ListOrdered className="w-4 h-4" />
        </Button>
        <Button
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={editor.isActive("blockquote") ? "is-active" : ""}
        >
            <Quote className="w-4 h-4" />
      </Button>
    </div>
  )
}

export default TipTapMenuBar