const mood = [
  "motivated",
  "happy",
  "grateful",
  "excited",
  "joyful",
  "content",
  "optimistic",
];

const getMoodByDay = () => {
  const today = new Date().getDay();
  return mood[today % mood.length];
};

const readmeContent = `
Innovative Full Stack JavaScript Developer
-----------------------

* 🌍 I'm based in Ivory Coast(Côte d'Ivoire)

* 📄 See my portfolio at [yayamohamed.com](https://yayamohamed.com)

### You can:
* ✉️  mail me: [yayamohamed883@gmail.com](mailto:yayamohamed883@gmail.com) / [contact@yayamohamed.com](mailto:contact@yayamohamed.com)
* 🤳🏽 call or whatsapp me :  [+2250574801791](tel:+2250574801791) 

### Latest public projects

| 📱 Mobile App |🌐 Web |
|--|--|
| [Top Prevention Santé](https://play.google.com/store/apps/details?id=com.toppreventionsante&hl=fr&gl=US) | [Money Fusion](https://moneyfusion.net) |
| [Vendre Facilement](https://play.google.com/store/apps/details?id=com.scdigital.vendrefacilement2&hl=fr&gl=US) | [Evisioplus](https://evisioplus.com) |
| [Cath Appli Pro](https://play.google.com/store/apps/details?id=com.scdigital.cathapplipro&hl=fr&gl=US) |  [Livre Facebook](https://livre.sc-digital.org) |
| [Doraschool - Suivi scolaire](https://play.google.com/store/apps/details?id=com.doraschool&hl=fr&gl=US) | [Noukson Tech](https://nouksontects.com/) |
| +10|+50 |

* ⚡  Today's Mood: ${getMoodByDay()}
`;

const fs = require("fs");

fs.writeFileSync("README.md", readmeContent);

const { execSync } = require("child_process");

try {
  execSync("git add README.md");
} catch (error) {
  console.error("Error adding README.md to the staging area:", error.message);
  process.exit(1);
}
