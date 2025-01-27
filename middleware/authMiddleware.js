// 8. middleware/authMiddleware.js
// const jwt = require("jsonwebtoken");

// exports.authMiddleware = (req, res, next) => {
//   const token = req.headers["authorization"];
//   console.log("Received Token:", token);

//   if (!token) return res.status(401).json({ message: "Access denied" });

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded;
//     next();
//   } catch (error) {
//     res.status(400).json({ message: "Invalid token" });
//   }
// };

const jwt = require("jsonwebtoken");

exports.authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  console.log("Authorization Header:", authHeader); // Log the received header

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ message: "Access denied. Invalid token format." });
  }

  const token = authHeader.split(" ")[1]; // Extract the token part
  console.log("Extracted Token:", token); // Log the extracted token

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify the token
    req.user = decoded; // Attach decoded data (e.g., user ID) to the request object
    console.log("Decoded Payload:", decoded); // Log decoded payload for debugging
    next();
  } catch (error) {
    console.error("Token Verification Error:", error.message); // Log error for debugging
    return res.status(400).json({ message: "Invalid token" });
  }
};
