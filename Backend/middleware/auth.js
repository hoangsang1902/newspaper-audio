// const jwt = require("jsonwebtoken");

// const auth = (req, res, next) => {
//   const token = req.header("x-auth-token");
//   if (!token)
//     return res.status(401).send("Access denied. Not authenticated...");
//   try {
//     const jwtSecretKey = process.env.SECRET_KEY;
//     const user = jwt.verify(token, jwtSecretKey);

//     req.user = user;
//     next();
//   } catch (ex) {
//     res.status(400).send("Invalid auth token...");
//   }
// };

// module.exports = { auth };


const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  // Lấy token từ header "Authorization"
  const token = req.header("Authorization")?.replace("Bearer ", "");

  // Kiểm tra xem token có tồn tại không
  if (!token) {
    return res.status(401).send("Access denied. Not authenticated...");
  }

  try {
    const jwtSecretKey = process.env.SECRET_KEY;
    // Xác thực token
    const user = jwt.verify(token, jwtSecretKey);

    // Gán thông tin người dùng vào request
    req.user = user;
    next();
  } catch (ex) {
    res.status(400).send("Invalid auth token...");
  }
};

module.exports = { auth };
