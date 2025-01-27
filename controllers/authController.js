// 6. controllers/authController.js
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Company = require("../models/Company");

exports.register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const company = new Company({ name, email, password: hashedPassword });
    await company.save();

    const token = jwt.sign({ id: company._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.status(201).json({ message: "Company registered", token });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const company = await Company.findOne({ email });
    if (!company) return res.status(404).json({ message: "Company not found" });

    const isMatch = await bcrypt.compare(password, company.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: company._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    next(error);
  }
};
