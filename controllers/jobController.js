// 7. controllers/jobController.js
const Job = require("../models/Job");
const nodemailer = require("nodemailer");

exports.createJob = async (req, res, next) => {
  try {
    const { title, description, experienceLevel, candidates, endDate } =
      req.body;
    const job = new Job({ ...req.body, company: req.user.id });
    await job.save();

    res.status(201).json({ message: "Job created successfully", job });
  } catch (error) {
    next(error);
  }
};

exports.getJobs = async (req, res, next) => {
  try {
    const jobs = await Job.find({ company: req.user.id });
    res.status(200).json(jobs);
  } catch (error) {
    next(error);
  }
};

exports.sendJobEmails = async (req, res, next) => {
  try {
    const { jobId, emails } = req.body;
    const job = await Job.findById(jobId);

    if (!job) return res.status(404).json({ message: "Job not found" });

    const transporter = require("../config/emailConfig");

    const emailPromises = emails.map((email) => {
      return transporter.sendMail({
        from: process.env.EMAIL,
        to: email,
        subject: `Job Opportunity: ${job.title}`,
        text: `Job Details: \n${job.description}`,
      });
    });

    await Promise.all(emailPromises);
    res.status(200).json({ message: "Emails sent successfully" });
  } catch (error) {
    next(error);
  }
};
