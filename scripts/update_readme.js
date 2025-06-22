const fs = require("fs");
const { execSync } = require("child_process");

// Expanded mood array with more positive options
const moods = [
  "motivated",
  "happy",
  "grateful",
  "excited",
  "joyful",
  "content",
  "optimistic",
  "inspired",
  "enthusiastic",
  "productive",
  "peaceful",
  "energetic",
  "determined",
  "creative",
];

/**
 * Returns a mood based on the current day
 * @returns {string} Mood of the day
 */
const getMoodByDay = () => {
  const today = new Date().getDay();
  return moods[today % moods.length];
};

/**
 * Generates dynamic content for the README
 * @returns {string} Formatted README content
 */
const generateReadmeContent = () => {
  const todaysMood = getMoodByDay();
  return `[![hero](./hero.png?raw=true)](https://yayamohamed.com)

## Innovative Full Stack JavaScript Developer

![Profile Views](https://komarev.com/ghpvc/?username=yaya12085&color=brightgreen) [![committers.top badge](https://user-badge.committers.top/ivory_coast_public/Yaya12085.svg)](https://user-badge.committers.top/ivory_coast_public/Yaya12085)

> "Today's Mood: **${todaysMood}**" ⚡

### About Me
* 🌍 Based in Ivory Coast (Côte d'Ivoire)
* 💼 Full Stack Developer with expertise in JavaScript, React, and Node.js
* 🚀 Passionate about building innovative web and mobile applications

### Connect With Me
* 🌐 Portfolio: [yayamohamed.com](https://yayamohamed.com)
* ✉️ Email: [yayamohamed883@gmail.com](mailto:yayamohamed883@gmail.com) / [contact@yayamohamed.com](mailto:contact@yayamohamed.com)
* 📱 Phone/WhatsApp: [+225 0574801791](tel:+2250574801791)
* 🔗 LinkedIn: [https://linkedin.com/in/yayadev](https://linkedin.com/in/yayadev)
`;
};

/**
 * Updates the README file and commits changes
 */
const updateReadme = () => {
  try {
    // Generate and write README content
    const readmeContent = generateReadmeContent();
    fs.writeFileSync("README.md", readmeContent);
    console.log("✅ README.md has been updated successfully!");

    // Stage and commit changes to git
    try {
      execSync("git add README.md");
      execSync(
        'git commit -m "Update README with latest mood: ' + getMoodByDay() + '"'
      );
      console.log("✅ Changes committed to git repository!");
    } catch (gitError) {
      console.warn("⚠️ Git operations failed:", gitError.message);
      console.log("README was updated but changes were not committed.");
    }
  } catch (error) {
    console.error("❌ Error updating README:", error.message);
    process.exit(1);
  }
};

// Execute the update
updateReadme();
