"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [tasks, setTasks] = useState([])
  const submithandle = (e) => {
    e.preventDefault()
    setTasks([...tasks, { title, desc }])
    settitle("")
    setdesc("")
  }
  let renderTask = <p>No Task is available</p>
  if (tasks.length > 0) {
     const deletehandler=(i)=> {
       const remove=[...tasks]
       remove.splice(i,1)
       setTasks(remove)
     }
    renderTask = tasks.map((t, i) => {
      return <div className='flex justify-around' key={i}>
        <h4 className='m-5 text-2xl font-semibold'>{t.title}</h4>
        <h4 className='m-5 text-xl font-semibold'>{t.desc}</h4>
        <button className='w-32 h-8 m-5 font-semibold text-white bg-blue-600 rounded-lg' onClick={deletehandler}>Delete</button>
      </div>
    })
  }
  return (
    <>
      <div className='flex items-center justify-center h-10 font-bold text-white bg-black'>Todo List</div>
      <form onSubmit={submithandle}>
        <input value={title} type='text' placeholder='Add Title here' className='p-3 m-5 border-2 rounded-xl border-zinc-900'
          onChange={(e) => {
            settitle(e.target.value)
          }} />
        <input type='text' placeholder='Add Description here' className='p-3 m-5 border-2 rounded-xl border-zinc-900' value={desc} onChange={(e) => {
          setdesc(e.target.value)
        }} />
        <button className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Add</button>
      </form>
      <div className='p-5 bg-slate-400'>{renderTask}</div>

    </>
  )
}

export default page