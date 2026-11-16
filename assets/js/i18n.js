/* Traductions anglaises. Le français est le texte d'origine, dans index.html. */
window.I18N_EN = {
  "skip": "Skip to content",
  "nav.about": "About", "nav.projects": "Projects", "nav.skills": "Skills", "nav.path": "Journey", "nav.contact": "Contact",

  "hero.pill": "Looking for a work-study position in robotics",
  "hero.role": "Robotics · Embedded systems · Software",
  "hero.lead": "Student at EPITECH Benin and president of the TekBot robotics club. I build systems that connect code to the physical world, with a clear goal: advanced robotics for heavy machinery, from industry and mining to construction and autonomous vehicles.",
  "hero.cta1": "See the projects",
  "hero.cta2": "Download résumé",
  "arm.title": "Two-joint robotic arm following the cursor through inverse kinematics",
  "arm.hint": "Move your cursor: the arm follows it",
  "arm.hint.t": "Touch the area: the arm follows your finger",
  "f1.k": "President", "f2.k": "Internship", "f3.k": "3rd year", "f4.k": "English B2", "f4.v": "Immersion in Accra",

  "about.k": "About",
  "about.h": "From code to hardware, I want to make heavy machines safer and more autonomous.",
  "about.p1": "I am a third-year student at <strong>EPITECH Benin</strong> in Cotonou. Project-based learning gave me solid foundations in C and C++: Unix shell, real-time network servers, cryptography, circuit simulation.",
  "about.p2": "I chair <strong>TekBot EPITECH</strong>, the school's robotics club. There I led the camera-controlled robotic hand, worked on autonomous navigation with ROS 2, and shipped the club's intranet to production. An internship at <strong>ENGIE Benin</strong> gave me a first look at industrial operations.",
  "about.alt": "Portrait of KANGNI Jean-Daniel",

  "projects.k": "Projects",
  "projects.h": "What I have built",
  "projects.sub": "From robotics to software. For each team project, I state my role.",
  "code": "Source code", "solo": "Personal", "team": "Team", "team6": "Team of 6", "lead": "Project lead", "prod": "In production", "proto": "Unfinished prototype",
  "t.3d": "3D printing",
  "epitech.priv": "EPITECH project · private code",

  "p1.k": "Robotics · TekBot", "p1.role": "Project lead",
  "p1.t": "Hand Bot, a camera-controlled robotic hand",
  "p1.d": "A 3D-printed hand mirrors, in real time, the gestures filmed by a webcam. MediaPipe tracks the finger joints, Python derives the angles and sends them over Bluetooth to an Arduino that drives the servomotors. I led the technical team and tracked the project.",
  "p1.flow": "Processing chain: webcam, MediaPipe, Python, HC-05 Bluetooth, Arduino, 3D-printed hand",
  "p1.n1": "video stream", "p1.n2": "21 points / hand", "p1.n3": "angles → setpoints", "p1.n4": "Bluetooth serial", "p1.n5": "servo PWM", "p1.n6t": "3D hand", "p1.n6": "4 servomotors",

  "p2.k": "Mobile robotics · Bootcamp",
  "p2.t": "A* autonomous navigation with ROS 2",
  "p2.d": "The TekBot robot reaches a chosen point in a simulated maze. A* plans the path, a controller follows it, and the lidar triggers replanning when an unexpected obstacle appears. Gazebo, RViz2, Docker and unit tests.",
  "p2.alt": "Occupancy map of the TekBot maze",
  "p2.tag": "A* · occupancy grid",
  "p2.priv": "Private bootcamp repository · code on request",

  "p3.k": "IoT &amp; embedded · Hackathon",
  "p3.t": "GreenTrack, smart irrigation for green spaces",
  "p3.d": "Built for ANAP: an ESP32 node measures soil moisture, computes a thirst index specific to each species and drives a solenoid valve, even without network access. Dashboard, map and 3D digital twin of a park in Cotonou.",
  "p3.alt": "3D digital twin of a park in Cotonou in GreenTrack",

  "p4.k": "Cryptography · EPITECH", "p4.role": "Team · ~2/3 of commits",
  "p4.t": "MY_PGP, cryptography written in C",
  "p4.d": "XOR, AES, RSA and a PGP-style hybrid scheme, with no cryptography library at all. Big integer arithmetic is written by hand and everything is validated against test vectors.",

  "p5.k": "Web · Construction", "p5.tag": "Construction client",
  "p5.t": "Sky Benin BTP, website and admin panel",
  "p5.d": "Website for a construction company, animated with GSAP, with a secure admin panel: the client manages projects and content without touching the code.",
  "p5.alt": "Home page of the Sky Benin BTP website",

  "others.h": "Other projects",
  "o.nts": "Logic circuit simulator in C++, with circuits modelled as component graphs.",
  "o.intra.t": "TekBot intranet",
  "o.intra": "Video training with quizzes, projects, scheduling and attendance for the club. Roles and secure authentication.",
  "o.zappy": "Real-time non-blocking multi-client server core and the server, AI and 3D client protocol.",
  "o.fs": "Inertial glove on ESP32 to fly a drone over MAVLink, with a checksummed Bluetooth protocol.",
  "o.rtype": "Networked shoot'em up for up to 4 players on a custom game engine.",
  "o.bern": "Full deployment of an application on Kubernetes (Azure AKS) with a private Docker registry.",
  "o.rpg": "Browser-based 3D adventure game inspired by the Kingdom of Dahomey, with synthesized music.",

  "skills.k": "Skills", "skills.h": "Spec sheet",
  "sk.robot": "Robotics &amp; embedded", "sk.astar": "A* path planning", "sk.servo": "Servomotors", "sk.imu": "IMU &amp; sensor fusion",
  "sk.lang": "Languages", "sk.ai": "Vision &amp; AI", "sk.sys": "Systems &amp; real time", "sk.mux": "Multiplexed I/O",
  "sk.crypto": "Cryptography", "sk.shell": "Unix shell", "sk.tools": "Tools", "sk.langs": "Spoken languages",
  "sk.fr": "French · native", "sk.en": "English · B2",

  "path.k": "Journey", "path.h": "Experience &amp; education", "path.exp": "Experience", "path.edu": "Education",
  "tl.1.d": "Since 2026", "tl.1.t": "President, TekBot EPITECH",
  "tl.1": "I lead the school's robotics association and coordinate its projects. I designed and shipped its intranet to production.",
  "tl.2.t": "Intern, ENGIE Benin",
  "tl.2": "Immersion in an industrial environment alongside the technical teams. Contributed to a platform managing site access authorizations, built with FastAPI and React.",
  "tl.3.t": "Project lead, Hand Bot",
  "tl.3": "Led the club's robotic hand, from computer vision to servomotor control.",
  "tl.4.t": "Hackathon, GreenTrack",
  "tl.4": "Smart irrigation IoT platform built for ANAP, from ESP32 firmware to a 3D digital twin.",
  "tl.5.d": "Selection", "tl.5.t": "AWAKE 2027 challenge",
  "tl.5": "Selected for this autonomous vehicle challenge, in a mechanics and integration role. The edition was cancelled.",
  "tl.e1.t": "EPITECH Benin, Cotonou",
  "tl.e1": "Bachelor in information technology, currently in third year. C, C++, Python, networking, systems and AI.",
  "tl.e2.d": "Jan. – Jul. 2024", "tl.e2.t": "BT Institute, Accra (Ghana)",
  "tl.e2": "Immersion year in English as a foreign language. B2 level.",
  "tl.e3.t": "Baccalauréat, science track (C)",
  "tl.e3": "CSJML Lefaucon, Abomey-Calavi.",

  "contact.k": "Contact",
  "contact.h": "Let's talk robotics.",
  "contact.sub": "I am looking for a work-study position in robotics and embedded systems. A question, an opportunity or a project? Write to me.",
  "contact.cv": "Résumé (PDF, French)",
  "footer.top": "Back to top ↑"
};
window.I18N_META = {
  fr: {
    title: "KANGNI Jean-Daniel · Robotique & systèmes embarqués",
    description: "Portfolio de KANGNI Jean-Daniel, étudiant en 3e année à EPITECH Bénin et président du club de robotique TekBot. Robotique, systèmes embarqués, vision par ordinateur.",
    langBtn: "EN", langLabel: "Switch to English", themeLabel: "Changer de thème", menuOpen: "Ouvrir le menu", menuClose: "Fermer le menu"
  },
  en: {
    title: "KANGNI Jean-Daniel · Robotics & embedded systems",
    description: "Portfolio of KANGNI Jean-Daniel, third-year student at EPITECH Benin and president of the TekBot robotics club. Robotics, embedded systems, computer vision.",
    langBtn: "FR", langLabel: "Passer en français", themeLabel: "Toggle theme", menuOpen: "Open menu", menuClose: "Close menu"
  }
};
