import React from 'react'
import Macwindow from './Macwindow'
import "./note.scss"
const Note = () => {
  return (
    <Macwindow>
        <div id="note">
        <pre>{`Last login: Tue Jan 21 10:42:12 on console
sarthak@macbook ~ % whoami
Frontend Developer


sarthak@macbook ~ % echo "Hello, World!"
Hi, I'm Sarthak — a frontend developer who builds clean,
responsive, and interactive web experiences.

sarthak@macbook ~ % skills --list
React • JavaScript • HTML • CSS • SCSS • Git • UI/UX

sarthak@macbook ~ % status
Turning ideas into pixel-perfect interfaces.

sarthak@macbook ~ % _
`}</pre>

        </div>
    </Macwindow>
  )
}

export default Note
