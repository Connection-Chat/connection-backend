import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("token", token, {
    httpOnly: true, // prevent XSS attacks cross-site scripting attacks
    sameSite: "lax", // CSRF attacks cross-site request forgery attacks
    secure: process.env.NODE_ENV !== "development", // http or https
    maxAge: 1000 * 60 * 60 * 24 * 7, // MS
  });

  return token;
}