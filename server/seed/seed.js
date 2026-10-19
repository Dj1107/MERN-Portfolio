require("dotenv").config({ path: require("path").join(__dirname, "..", ".env") });
const mongoose = require("mongoose");
const Project = require("../models/Project");
const projects = require("./projects");

(async () => {
  if (!process.env.MONGODB_URI) {
    console.error("MONGODB_URI missing. Create server/.env from .env.example first.");
    process.exit(1);
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    await Project.deleteMany({});
    await Project.insertMany(projects);
    console.log(`Seeded ${projects.length} projects.`);
  } catch (err) {
    console.error("Seed failed:", err.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
})();
