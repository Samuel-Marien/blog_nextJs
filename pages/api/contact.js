import { MongoClient } from 'mongodb'

async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'bad inputs!' })
    }

    // Store in a DB
    const newMessage = {
      email,
      name,
      message
    }

    let client

    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.tlrjikq.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`
    // const connectionString = `mongodb+srv://${process.env.DEV_DB_USER}:${process.env.DEV_DB_PASS}@${process.env.DEV_DB_CLUSTER}.tlrjikq.mongodb.net/${process.env.DEV_DB_NAME}?retryWrites=true&w=majority`

    try {
      client = await MongoClient.connect(connectionString)
    } catch (error) {
      res.status(500).json({ message: 'Could not connect to DB' })
      return
    }

    const db = client.db()

    try {
      const result = await db.collection('messages').insertOne(newMessage)
      newMessage.id = result.insertedId
    } catch (error) {
      client.close()
      res.status(500).json({ message: 'Storing message failed!' })
      return
    }

    client.close()

    res
      .status(201)
      .json({ message: 'Successfully stored message', message: newMessage })
  }
}

export default handler
