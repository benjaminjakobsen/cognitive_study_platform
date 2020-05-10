const keys = require('../config/keys');
const jwt = require('jsonwebtoken');

function authenticate(req, res, next) {
  const token = req.header('token');
  if(token) {
    try {
      const decrypted = jwt.verify(token, keys.jwtSecret);
      req.body.id = decrypted.id;
      next()
    }
    catch(e) {
      res.status(400).json({log : "Wrong token, nice try"});
    }
  }
  else {
    res.status(401).json({ log: 'Denied, no token'});
  }
}

module.exports = authenticate;
