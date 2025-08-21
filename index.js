const express = require('express');
const { default: mongoose } = require('mongoose');

const app = express();

app.use(express.json());
mongoose.connect('mongodb+srv://prernadandge110:JUCUnx0cdy3yptI0@cluster0.o6uw4ta.mongodb.net/').then(() => console.log("connected"));

const userschema = mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true }
    }
);

const User = mongoose.model("User", userschema);

userData = null;


app.post('/register', async (req, res) => {
    const { name, email, no, pass } = req.body;

    if (!name || !email) {
        res.status(400).send('please fill all required fields');
    }

    else {
        res.json({
            "Name": name,
            "Email Address": email,


        });
    }
    const newUser = new User({ name, email });
    await newUser.save();

    userData = { name, email, no, pass };
    res.json('xyz');
    // user: userData

});



app.get('/profile')

app.listen(8000)

