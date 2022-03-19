import type { NextApiRequest, NextApiResponse } from 'next'
import User from "@models/User"
import { dbConnect } from "@utils/mongoose"

dbConnect()

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req;

  switch (method) {
    case "GET":
      try {
        const users = await User.find()
        return res.status(200).json(users.map(e => e.email))
      } catch (error) {
        return res.status(400).json({ msg: error.message })
      }
    case "POST":
      try {
        const newTask = new User(body)
        const savedTask = await newTask.save()
        return res.status(201).json(savedTask)
      } catch (error) {
        return res.status(400).json({ msg: error.message })
      }
    default:
      return res.status(400).json({ msg: "This method is not supported" })
  }
}