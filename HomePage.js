// Select the container where content will be injected
const reactivePage = document.querySelector('.reactivepage');

// Define the content for each section
const contentMap = {
  Experience: `
    <h3>📄 Infosys Limited   </h3>
    <h4>Designation : Senior System Engineer Bangalore, KA    </h4>
    <p>3.3 years of hands-on experience as Java Backend Developer in designing, developing, and maintaining scalable backend 
systems. Skilled in Java, Spring Boot, RESTful APIs, JPA, SQL, Neo4j, and Microservices architecture, with a focus on 
performance optimization and clean code practices. Strong problem-solving abilities, expertise in database management, and a 
proven track record of delivering efficient solutions that enhance user experience and meet business objectives. Committed to 
continuous learning and contributing value to both internal teams and customer-facing applications..</p>`,
  Skills: `
    <h2>🛠 Skills</h2>
    <ul>
      <li>Beginer : HTML, CSS, JavaScript</li>
      <li>Beginer  :React, Node.js</li>
      <li>Advanced :Java, Spring Boot, Microservices,RESTful APIs, Hibernate</li>
      <li>Advanced :SQL, PostGreSQL</li>
      <li>Advanced :Docker, Kubernetes,Jenkins, GitLab</li>
    </ul>
  `,
  about: `
    <h2>👨‍💼 About Me</h2>
    <p>I’m Mohan Kuchetti, a passionate Full Stack Developer with expertise in frontend and backend technologies.</p>
  `
};

// Handle click on nav links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent page reload
    const section = this.getAttribute('data-section');
    reactivePage.innerHTML = contentMap[section] || `<p>Content not found for ${section}</p>`;
  });
});
