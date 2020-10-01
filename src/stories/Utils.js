import React from 'react'

export function StoryContainer ({ children }) {
  return (
    <div
      style={{
        backgroundColor: '#f0f0f0',
        borderRadius: '1em',
        padding: '.5em',
        fontFamily: 'Inter, sans-serif'
      }}
    >
      {children}
    </div>
  )
}

export function StoryChild ({ children }) {
  return (
    <div
      style={{
        backgroundColor: 'white',
        border: '1px dashed black',
        borderRadius: '.5em',
        padding: '.5em'
      }}
    >
      {children}
    </div>
  )
}
