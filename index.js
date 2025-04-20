
// Calling the id of the current page

const root = document.getElementById("root");

function CreateNameBlock(name) {
  const container = document.createElement("div");
  container.className = "name bg-light p-3 mb-2 text-dark border border-dark rounded";
  container.style.width = "300px";
  
  const heading = document.createElement("h1");
  heading.textContent = name;

  const paragraph = document.createElement("p");
  paragraph.textContent = `My name is ${name}.`;

  container.appendChild(heading);
  container.appendChild(paragraph);

  return container;

}

root.appendChild(CreateNameBlock("Bishal Kunwar Magar"));