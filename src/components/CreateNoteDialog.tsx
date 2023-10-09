'use client'

import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Plus } from 'lucide-react'
import { Input } from './ui/input'
import { Button } from './ui/button'

type Props = {}

const CreateNoteDialog = (props: Props) => {
    const [ input, setInput ] = React.useState('') // create a new state variable called input and set it to an empty string
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
                <form>
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