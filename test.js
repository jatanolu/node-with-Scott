import { writeFile } from 'node:fs'
import fs from 'node:fs/promises'

const readPjson = async () => {
  const pjsonPath = new URL ('./package.json', import.meta.url).pathname
  console.log(JSON.parse(await fs.readFile(pjsonPath, 'utf-8')))
} 

const writePjson = async () => {
  const newFile = new URL ('./demo.js', import.meta.url).pathname
  await fs.writeFile(newFile, 'console.log("yooooo!")')
} 

readPjson()
writePjson()


const data = {
  shooting: 99,
  dribbling: 50,
  jumping: 40
}

const {shooting, jumping} = data
console.log(shooting + " " + jumping)
