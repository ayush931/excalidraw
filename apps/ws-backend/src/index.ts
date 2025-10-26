import { JWT_TOKEN } from '@repo/backend-common/config';
import { WebSocketServer } from "ws";
import jwt, { JwtPayload } from 'jsonwebtoken';


const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws, request) => {
  const url = request.url;
  if (!url) return;

  const queryParams = new URLSearchParams(url.split('?')[1]);
  const token = queryParams.get('token') || '';

  const decode = jwt.verify(token, JWT_TOKEN);
  if (!decode || !(decode as JwtPayload).userId) {
    ws.close();
    return;
  }

  ws.on('message', (data) => {
    console.log('received: %s', data)
  })
})