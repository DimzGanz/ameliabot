import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let caption = `*Waalaikummussalam warahmatullahi wabarokatuh*
`

conn.sendButton( m.chat, caption, `Salam`, [['Waalaikummussalam','warahmatullahi wabarokatuh']], m)

       }
handler.customPrefix = /^(assalamualaikum|salam)$/i
handler.command = new RegExp

export default handler