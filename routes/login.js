const express = require('express');
const session = require('express-session');
const fs = require('fs');

const app = express();

// Configure session middleware
app.use(session({
  secret: '0000',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

const router = express.Router();

// Function to retrieve username from session
const getUsername = (req) => {
  return req.session.username;
};

// Function to append text to message.txt
const appendToMessageFile = (text, req) => {
  const username = getUsername(req);
  const message = `${username}: ${text}\n`;
  fs.appendFileSync('message.txt', message, (err) => {
    if (err) {
      console.error('Error appending to message.txt:', err);
    }
  });
};

// Function to read text from message.txt
const readMessageFile = () => {
  try {
    const data = fs.readFileSync('message.txt', 'utf8');
    return data;
  } catch (err) {
    console.error('Error reading message.txt:', err);
    return '';
  }
};

// Login route (GET) - Sends login form
router.get("/login", (req, res, next) => {
  res.send('<form action="/login" method="POST"><input type="text" name="username" id="username"><button type="submit">Login</button></form>');
});

// Login route (POST) - Handles login and redirects
router.post("/login", (req, res, next) => {
  const { username } = req.body;

  // Ensure session is initialized before setting username
  if (!req.session) {
    req.session = {};
  }

  req.session.username = username;

  res.redirect("/chat");
});

// Chat route (GET) - Sends chat form and message content
router.get("/chat", (req, res, next) => {
  const messageContent = readMessageFile();
  const username = getUsername(req);
  res.send(`
    <div>${messageContent}</div>
    <form action="/chat" method="POST">
      ${username ? `<input type="text" name="chat_box" id="chat_box" value="${username}: ">` : '<input type="text" name="chat_box" id="chat_box">'}
      <button type="submit">Send</button>
    </form>
  `);
});

// Chat route (POST) - Handles chat message and redirects
router.post("/chat", (req, res, next) => {
  const { chat_box } = req.body;
  appendToMessageFile(chat_box, req);
  res.redirect("/chat");
});

app.use(router);

module.exports = app;