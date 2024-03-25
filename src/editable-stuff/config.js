// Navigation Bar SECTION
const navBar = {
  show: true,
 };
 
 
 // Main Body SECTION
 const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Vatsal",
  middleName: "",
  lastName: "Bhanderi",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/VatsalBhanderi",
    },
    // {
    //   image: "fa-facebook",
    //   url: "https://www.facebook.com/hashirshoaeb",
    // },
    // {
    //   image: "fa-instagram",
    //   url: "https://www.instagram.com/hashirshoaeb/",
    // },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/vatsal-bhanderi/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/vatsalbhanderi/",
    },
  ],
 };
 
 
 // ABOUT SECTION
 // If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
 //a) your Instagram username
 //      i.e:profilePictureLink:"johnDoe123",
 //b) a link to an hosted image
 //      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
 //c) image in "editable-stuff" directory and use require("") to import here,
 //      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
 //d) If you do not want any picture to be displayed, just leave it empty :)
 //      i.e: profilePictureLink: "",
 // For Resume either provide link to your resume or import from "editable-stuff" directory
 //     i.e resume: require("../editable-stuff/resume.pdf"),
 //         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
 
 
 const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/IMG_0569.png"),
  height: 400,
  width: 300,
  message:
    "I am Vatsal Bhanderi, MS Software Engineering graduate student from San Jose State University, and a bachelors in Computer Science from BITS Pilani. I am a forward-looking Software Engineer with 3 years background in building scalable web‐apps in a fast‐paced, deadline‐driven environment using REST, MVC and Microservices architecture. Experienced in all aspects of software development lifecycle, from concept through to development and delivery.",
  resume: "https://docs.google.com/document/d/1h8uZXVL5zWNR8LOIRHJfK3P267NKsrIDc1ceV4usgRw/edit?usp=sharing",
 };
 
 
 // PROJECTS SECTION
 // Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
 //      i.e: reposLength: 0,
 // If you want to display specfic projects, add the repository names,
 //      i.e ["repository-1", "repo-2"]
 const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "VatsalBhanderi", //i.e."johnDoe12Gh"
  reposLength: 3,
  specificRepos: ["Distributed-File-Storage-gRPC", "Bhojan-Treehacks"],
 };
 
 
 // Leadership SECTION
 const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: require("../editable-stuff/IMG_0569.png"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
      img: require("../editable-stuff/IMG_0569.png"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
 };
 
 
 // SKILLS SECTION
 const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    {name: "Java", value: 90},
    { name: "Python", value: 80 },
    { name: "SQL", value: 90 },
    { name: "Data Structures", value: 85 },
    { name: "Jenkins-Docker", value: 75 },
    { name: "JavaScript", value: 60 },
    { name: "NoSQL", value: 65 },
    { name: "HTML/CSS", value: 60 },
    { name: "C#", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented"},
    { name: "Collaboration"},
    // { name: "Positivity", value: 75 },
    // { name: "Adaptability", value: 85 },
    // { name: "Problem Solving", value: 75 },
    // { name: "Empathy", value: 90 },
    // { name: "Organization", value: 70 },
    // { name: "Creativity", value: 90 },
  ],
 };
 
 
 // GET IN TOUCH SECTION
 const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "vbhanderi6@gmail.com",
 };
 
 
 const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer II',// Here Add Company Name
      companylogo: require('../assets/img/fico.png'),
      companyname: 'FICO',
      date: 'June 2019 – June 2022',
    },
    {
      role: 'Software Engineering Intern',
      companylogo: require('../assets/img/here.png'),
      companyname: 'Here Technologies',
      date: 'July 2018 – Dec 2018',
    },
  ]
 }
 
 
 // Blog SECTION
 // const blog = {
 //   show: false,
 // };
 
 
 export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
 
 
 
 