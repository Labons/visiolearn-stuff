function requireLogin(req, res, next) {
  if (!req.session.userId) {
    return res.status(401).send('Unauthorized. Please log in.');
  }
  next(); // continue to the next function or route
}

module.exports = requireLogin;
