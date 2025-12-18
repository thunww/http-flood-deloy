const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { SECRET, EXPIRE } = require("../config/jwt");

// Predefined users
const users = [
  {
    email: "admin@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    email: "user1@gmail.com",
    password: bcrypt.hashSync("111111", 10),
  },
  {
    email: "user2@gmail.com",
    password: bcrypt.hashSync("222222", 10),
  },
  {
    email: "user3@gmail.com",
    password: bcrypt.hashSync("333333", 10),
  },
  {
    email: "user4@gmail.com",
    password: bcrypt.hashSync("444444", 10),
  },
];

exports.login = async (email, password) => {
  const user = users.find((u) => u.email === email);
  if (!user) throw new Error("Email incorrect");

  const match = bcrypt.compareSync(password, user.password);
  if (!match) throw new Error("Wrong password");

  return jwt.sign({ email }, SECRET, { expiresIn: EXPIRE });
};
