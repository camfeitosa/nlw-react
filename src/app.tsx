import { useState } from 'react'
import logo from './assets/logo-nlw.svg'
import { NewNoteCard } from './components/new-note'
import { NoteCard } from './components/note-card'

// const note = {
//   date: new Date(),
//   content: 'Hello World'
// }

interface NewNoteCardProps{
  onNoteCreated : (content: string) => void
}

export function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      date: new Date(),
      content: 'Hello World'
    }
  ])

  function onNoteCreated(content: string){
    const newNote = {
      id: Math.random(),
      date: new Date(),
      content, 
    }

      setNotes([newNote, ...notes])
  }

  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={logo} alt='NLW Expert'/>

      <form className='w-full'>
        <input type="text" placeholder='Busque em suas notas...' className='w-full bg-transparent text-3xl font-semibold tracking-tight placeholder:text-slate-500 outline-none'/>
      </form>

      <div className='h-px bg-slate-700'/>

      <div className="grid grid-cols-3 auto-rows-[250px] gap-6">

        <NewNoteCard onNoteCreated= />
    
       {notes.map(note =>{
          return <NoteCard key={note.id} note={note} />
       })}
       
        

      </div>
    </div>
  )

}

