function Projects() {
  return (
    <section style={{ padding: "2rem" }}>
      <h2>My Projects</h2>
      <div style={{ marginBottom: "1rem" }}>
        <h3>Portfolio Website</h3>
        <p>A personal portfolio built with React and Vite.</p>
        <a href="https://github.com/muzhganwafa/my-project.git" target="_blank">View Code</a> |{" "}
        <a href="https://my-recent-project.vercel.app/" target="_blank">Live Demo</a>
      </div>
      <div>
        <h3>Invoice App</h3>
        <p>A simple freelance invoice and client management app using JavaScript.</p>
        <a href="https://github.com/muzhganwafa/invoice.git" target="_blank">View Code</a> |{" "}
        <a href="https://muzhganwafa.github.io/invoice/" target="_blank">Live Demo</a>
      </div>
    </section>
  );
}

export default Projects;

