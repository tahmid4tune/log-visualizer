import express from 'express';
import path from 'path';
import fs from 'fs'
import WebSocket from 'ws'
import readLastLines from 'read-last-lines';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

const server = app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});

const webSocketServer = new WebSocket.Server({ server });
const logFilePath = path.join(__dirname, '../public/log.txt')

webSocketServer.on('connection', async (ws) => {
    ws.on('message', async () => {
        const fileData = await readLastLines.read(logFilePath, 10)
        webSocketServer.clients.forEach(async (client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(fileData)
            }
        })
    })
})

fs.watchFile(logFilePath, (curr, prev) => {
    const ws = new WebSocket('ws://127.0.0.1:3000/')
    ws.onopen = () => {
        ws.send('Fetch updated lines');
    }
    ws.onmessage = () => ws.close()
})