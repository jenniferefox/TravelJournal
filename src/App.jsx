import React from 'react'
import './App.css'
import Navbar from "./Navbar"
import data from "./data"
import Entry from "./Entry"

export default function App() {
  const entries = data.map(item => {
    return (
      <Entry
      key={item.id}
      {...item}
      />
    )
  })

  return (
    <div>
      <Navbar />
      <section className='entries-list'>
        {entries}
      </section>
    </div>
  )
};
