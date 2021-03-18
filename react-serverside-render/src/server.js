require('babel-register')({
    presets: ['react'],
});

const express = require('express');
const app = express();
const React = require('react');
const ReactDOMServer = require('react-dom/server');

// Components
const App = require('./components/Component.jsx');

// Settings
app.set('PORT', 4000);

// Routes
app.get('/', (req, res) => {
    let html = ReactDOMServer.renderToString(React.createElement(App));
    res.send(html);
});

// Server
app.listen(app.get('PORT'), () => {
    console.log(`Server on >> http://localhost:${app.get('PORT')}`);
});
