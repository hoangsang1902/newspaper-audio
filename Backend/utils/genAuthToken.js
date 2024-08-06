const jwt = require("jsonwebtoken");

const genAuthToken = (user) => {
  const jwtSecretKey = process.env.SECRET_KEY;
  const token = jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
    },
    jwtSecretKey
  );

  return token;
};

module.exports = genAuthToken;
