import { CreateRoomSchema, CreateUserSchema, SignInSchema } from '@repo/common/types';
import { JWT_TOKEN } from '@repo/backend-common/config';
import express from 'express';
import { middleware } from './middleware.js';
import jwt from 'jsonwebtoken';

const app = express();

app.post('/signup', (req, res) => {
  // db call

  const data = CreateUserSchema.safeParse(req.body);
  if (!data.success) {
    return res.status(400).json({
      message: 'Invalid input'
    })
  }

  res.json({
    userid: "123"
  })
})

app.post('/signin', (req, res) => {

  const data = SignInSchema.safeParse(req.body);
  if (!data.success) {
    return res.status(400).json({
      message: 'Invalid input'
    })
  }

  const userId = 1
  const token = jwt.sign({
    userId
  }, JWT_TOKEN)

  res.json({
    token
  })
})

app.post('/room', middleware, (req, res) => {
  // db call

  const data = CreateRoomSchema.safeParse(req.body);
  if (!data.success) {
    return res.status(400).json({
      message: 'Invalid input'
    })
  }

  res.json({
    roomId: 123
  })
})

app.listen(3000, () => {
  console.log('App is running')
})