import React from 'react'
import { Button } from './ui/button'

type Props = {
    noteId: number
}

const deleteButton = ({ noteId }: Props) => {
  return (
    <Button variant={'destructive'} size='sm' onClick={() => {
        const confirm = window.confirm('Are you sure you want to delete this note?')
        if(!confirm) return;
        
    }}>

    </Button>>
  )
}

export default deleteButton