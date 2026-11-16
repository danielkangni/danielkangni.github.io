/* Traductions anglaises. Le français est le texte d'origine, écrit dans index.html. */
window.I18N_EN = {
  "skip": "Skip to content",
  "nav.about": "About",
  "nav.projects": "Projects",
  "nav.skills": "Skills",
  "nav.path": "Journey",
  "nav.contact": "Contact",

  "hero.eyebrow": "EPITECH Benin · Cotonou · 3rd year",
  "hero.role": "Robotics, embedded systems &amp; software",
  "hero.lead": "I build systems that connect code to the physical world: computer vision, microcontrollers, mobile robotics. My goal: advanced robotics for heavy machinery, in industry, construction, mining and autonomous vehicles.",
  "hero.cta1": "See my projects",
  "hero.cta2": "Get in touch",
  "spec.focus": "Focus",
  "spec.focus.v": "Robotics &amp; embedded",
  "spec.club": "Club",
  "spec.stack": "Stack",

  "about.title": "About",
  "about.p1": "I am a third-year computer science student at <strong>EPITECH Benin</strong> in Cotonou. Project-based learning gave me solid foundations in C and C++: Unix shell, network servers, cryptography, game engines and ray tracing.",
  "about.p2": "I am also a member of <strong>TEKBOT EPITECH</strong>, the school's robotics club. That is where I move from code to hardware: a camera-controlled robotic hand, autonomous navigation with ROS 2, sensors on ESP32 and Arduino.",
  "about.p3": "I want to work on robotics for heavy machinery: making construction, mining and industrial machines safer and more autonomous. These are systems where mechanics, electronics and software must work together.",
  "ph.photo": "[ TO COMPLETE: profile photo ]",

  "projects.title": "Projects",
  "projects.intro": "A selection of projects, from robotics to software. For each team project, I state my share of the work.",
  "solo": "Personal project",
  "team": "Team",
  "code": "Source code",
  "t.3d": "3D printing",
  "epitech.private": "EPITECH project, private code",
  "ph.handbot": "[ TO COMPLETE: photo / video of the robotic hand ]",
  "ph.demo": "[ TO COMPLETE: demo link ]",

  "p1.meta": "Robotics · TEKBOT",
  "p1.title": "Hand Bot, a camera-controlled robotic hand",
  "p1.desc": "A 3D-printed hand mirrors, in real time, the gestures filmed by a webcam. MediaPipe detects the finger joints, Python computes the setpoints and sends them over Bluetooth (HC-05) to an Arduino that drives the servomotors.",

  "p2.meta": "Mobile robotics · TEKBOT bootcamp",
  "p2.title": "A* autonomous navigation with ROS 2",
  "p2.desc": "The TekBot robot reaches a chosen point in a simulated maze. An A* planner computes the path on an occupancy grid, a controller follows it, and the lidar detects unexpected obstacles to trigger replanning. Everything runs in Gazebo and RViz2, with a reproducible Docker environment and unit tests.",
  "p2.alt": "Maze occupancy map used by the A* planner",
  "p2.private": "Code in a private bootcamp repository, available on request",

  "p3.meta": "IoT &amp; embedded · Hackathon",
  "p3.title": "GreenTrack, smart irrigation for green spaces",
  "p3.desc": "A platform designed for ANAP during a hackathon: humidity sensors on ESP32 compute a thirst index specific to each tree species and drive a solenoid valve. The node stays autonomous without network access. A dashboard, a map and a 3D digital twin of a park in Cotonou complete the system.",
  "p3.alt": "3D digital twin of a park in Cotonou in GreenTrack",

  "p4.meta": "Cryptography · EPITECH",
  "p4.team": "Team · about 2/3 of the commits",
  "p4.title": "MY_PGP, cryptography in C",
  "p4.desc": "A C implementation, with no cryptography library, of XOR and AES ciphers, RSA asymmetric encryption with hand-written big integer arithmetic, and a PGP-style hybrid scheme. Everything is validated against test vectors.",

  "p5.meta": "Web · Construction client project",
  "p5.title": "Sky Benin BTP, showcase site and admin panel",
  "p5.desc": "Website for a construction company, with GSAP animations and a secure admin panel. The client edits projects, services and content without touching the code.",
  "p5.alt": "Home page of the Sky Benin BTP website",

  "others.title": "Other projects",
  "others.fs.badge": "Unfinished prototype",
  "others.fs": "An inertial glove (MPU6050, Mahony filter) on ESP32 to fly a drone over MAVLink, with a checksummed Bluetooth protocol.",
  "others.rtype": "Networked multiplayer shoot'em up for up to 4 players, on a custom C++20 game engine.",
  "others.rt": "Object-oriented ray tracing renderer in C++.",
  "others.zappy": "Multiplayer simulation: server, player AI and 3D graphical client.",
  "others.bern": "Full deployment of an application on Kubernetes (Azure AKS), with a private Docker registry.",
  "others.rpg": "Browser-based 3D adventure game inspired by the Kingdom of Dahomey, with synthesized music.",

  "skills.title": "Skills",
  "sk.robot": "Robotics &amp; embedded",
  "sk.astar": "A* path planning",
  "sk.servo": "Servomotors",
  "sk.imu": "IMU &amp; sensor fusion",
  "sk.lang": "Languages",
  "sk.ai": "AI &amp; vision",
  "sk.rl": "Reinforcement learning",
  "sk.sys": "Systems &amp; networking",
  "sk.shell": "Unix shell",
  "sk.crypto": "Cryptography",
  "sk.tools": "Tools",

  "path.title": "Journey",
  "tl.1.date": "2024 · present",
  "tl.1": "Computer science program, currently in third year. Project-based learning in C, C++, Python, networking, systems and AI.",
  "tl.2.date": "Club",
  "tl.2": "Member of the robotics club. Designed the Hand Bot robotic hand and took part in the robotics bootcamp (ROS 2, autonomous navigation).",
  "tl.3.date": "Selection",
  "tl.3.title": "AWAKE 2027 challenge",
  "tl.3": "Selected for the AWAKE 2027 autonomous vehicle challenge, in a mechanics and integration role. The edition was cancelled.",
  "tl.4.date": "2026",
  "tl.4.title": "Hackathon, GreenTrack project",
  "tl.4": "Designed a smart irrigation IoT platform for ANAP, from the ESP32 firmware to the 3D digital twin.",

  "contact.title": "Contact",
  "contact.intro": "A question, an opportunity or a robotics project? Write to me.",
  "contact.loc": "Location",
  "ph.email": "[ TO COMPLETE: email ]",
  "ph.linkedin": "[ TO COMPLETE: LinkedIn profile ]",
  "ph.cv": "[ TO COMPLETE: PDF résumé ]",
  "footer.top": "Back to top ↑"
};
window.I18N_META = {
  fr: {
    title: "KANGNI Jean-Daniel · Robotique & logiciel",
    description: "Portfolio de KANGNI Jean-Daniel, étudiant en 3e année à EPITECH Bénin. Robotique, systèmes embarqués, vision par ordinateur et logiciel.",
    langBtn: "EN", langLabel: "Switch to English",
    themeLabel: "Changer de thème", menuOpen: "Ouvrir le menu", menuClose: "Fermer le menu"
  },
  en: {
    title: "KANGNI Jean-Daniel · Robotics & software",
    description: "Portfolio of KANGNI Jean-Daniel, third-year student at EPITECH Benin. Robotics, embedded systems, computer vision and software.",
    langBtn: "FR", langLabel: "Passer en français",
    themeLabel: "Toggle theme", menuOpen: "Open menu", menuClose: "Close menu"
  }
};
