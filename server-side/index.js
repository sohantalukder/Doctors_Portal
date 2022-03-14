const express = require('express');
const app = express();
const cors = require('cors');
const admin = require('firebase-admin');
require('dotenv').config();
const { MongoClient } = require('mongodb');

const port = process.env.PORT || 5000;

//doctors-portal-adminsdk.json
const serviceAccount = require('./doctors-portal-adminsdk.json');

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
});

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.kyofh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

async function verifyToken(req, res, next) {
	if (req.headers?.authorization?.startsWith('Bearer ')) {
		const token = req.headers.authorization.split(' ')[1];
		try {
			const decodedUser = await admin.auth().verifyIdToken(token);
			req.decodedEmail = decodedUser.email;
		} catch (e) {}
	}
	next();
}
async function run() {
	try {
		await client.connect();
		const database = client.db('doctors_portal');
		const appointmentsCollection = database.collection('appointments');
		const usersCollection = database.collection('users');

		// Appointments Get Post
		app.get('/appointments', verifyToken, async (req, res) => {
			const email = req.query.email;
			const day = parseFloat(req.query.day);
			const month = req.query.month;
			const year = parseFloat(req.query.year);
			const date = [day, month, year];
			const query = { email: email, date: date };
			const cursor = appointmentsCollection.find(query);
			const appointment = await cursor.toArray();
			res.json(appointment);
		});
		app.post('/appointments', async (req, res) => {
			const appointment = req.body;
			const result = await appointmentsCollection.insertOne(appointment);
			console.log('Added Appointments');
			res.json(result);
		});

		// Users Get Post
		app.get('/users/:email', async (req, res) => {
			const email = req.params.email;
			const query = { email: email };
			const user = await usersCollection.findOne(query);
			let isAdmin = false;
			if (user?.role === 'admin') {
				isAdmin = true;
			}
			res.json({ admin: isAdmin });
		});
		app.post('/users', async (req, res) => {
			const user = req.body;
			const result = await usersCollection.insertOne(user);
			// console.log('Users');
			res.json(result);
		});
		app.put('/users', async (req, res) => {
			const user = req.body;
			const filter = { email: user.email };
			const options = { upsert: true };
			const updateDoc = { $set: user };
			const result = await usersCollection.updateOne(
				filter,
				updateDoc,
				options
			);
			res.json(result);
		});

		app.put('/users/admin', verifyToken, async (req, res) => {
			const user = req.body;
			const requester = req.decodedEmail;
			if (requester) {
				const requesterAccount = await usersCollection.findOne({
					email: requester,
				});
				if (requesterAccount.role === 'admin') {
					const filter = { email: user.email };
					const updateDoc = { $set: { role: 'admin' } };
					const result = await usersCollection.updateOne(filter, updateDoc);
					res.json(result);
				}
			} else {
				res
					.status(401)
					.json({ message: 'You do not have permission to make admin' });
			}
		});

		console.log('Connected successfully to Database');
	} finally {
		// Ensures that the client will close when you finish/error
		// await client.close();
	}
}
run().catch(console.dir);
app.get('/', (req, res) => {
	res.send('Doctors Portal is running!');
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
