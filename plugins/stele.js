import fetch from "node-fetch"
import { sticker } from '../lib/sticker.js'
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `fitur ini lagi eror, males benerin🙏🏻`
}
handler.help = ['stikertele <url>']
handler.tags = ['sticker']
handler.command = /^(stele)$/i

handler.limit = 1

export default handler

const delay = time => new Promise(res => setTimeout(res, time))