import express from 'express'

const app = express();

app.get('/profile', (req, res) => {
	res.send("getting profile...")
})

app.get('/', (req, res) => {
	res.send("Getting root...")
})

app.get('/', (req, res) => {
	const user = {
		name: 'Enoch Stilleto',
		Hobby: 'cooking'
	}
	res.send(user);
})

app.listen(3000)
