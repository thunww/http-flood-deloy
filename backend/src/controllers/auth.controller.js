const authService = require("../services/auth.service");

exports.login = (req, res) => {
  authService
    .login(req.body.email, req.body.password)
    .then((token) => res.json({ token }))
    .catch((err) => res.status(401).json({ message: err.message }));
};

exports.home = (req, res) => {
  res.json({
    message: `Welcome ${req.user.email}`,
    email: req.user.email, // ← thêm dòng này
  });
};
