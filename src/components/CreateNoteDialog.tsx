'use client'

import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Plus } from 'lucide-react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

type Props = {}

const CreateNoteDialog = (props: Props) => {
    const [ input, setInput ] = React.useState('') // create a new state variable called input and set it to an empty string
    const createNotebook = useMutation({
        mutationFn: async () => {
          const response = await axios.post("/api/createNoteBook", {
            name: input,
          });
          return response.data;
        },
      }); // create a new mutation called createNoteBook

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault() // to not submit the actual form
        if(input === '') {
            window.alert('Please enter a name for the note book! 🤓')
            return;
        }
        createNotebook.mutate(undefined, {
            onSuccess: ({note_id}) => {
                console.log('Yay! Note Book Created! 📓', {note_id});
            },
            onError: (error: any) => {
                console.error(error);
            }
        })
    };

    return (
        <Dialog>
            <DialogTrigger>
                <div className="border-dashed border-2 flex border-green-600 h-full rounded-lg items-center justify-center sm:flex-col hover:shadow-xl transition hover:-translate-y-1 flex-row p-4">
                    <Plus className="w-6 h-6 text-green-600" strokeWidth={3} />
                    <h2 className="font-semibold text-green-600 sm:mt-2">Create New Note Book</h2>
                </div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Create a New Note Book 📓
                    </DialogTitle>
                    <DialogDescription>
                        Enter the Note Book name below! 🤓
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit}>
                    <Input 
                        value={input} 
                        onChange={(e) => setInput(e.target.value)} 
                        placeholder="Name...😌" 
                    />
                    <div className="h-4"></div>
                    <div className="flex items-center gap-3">
                        <Button type='reset' variant={ 'secondary' }>Cancel</Button>
                        <Button type="submit" className='bg-green-600'>Create</Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default CreateNoteDialog