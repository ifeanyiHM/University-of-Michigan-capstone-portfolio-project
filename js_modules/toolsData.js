const skillData = document.querySelector(".lead");

const skill = [
  {
    icon: "./icons/html5.svg",
    alt: "html5-icon",
    title: "HTML-5",
  },
  {
    icon: "./icons/css3.svg",
    alt: "css3-icon",
    title: "CSS3",
  },
  {
    icon: "./icons/js.svg",
    alt: "javascript-icon",
    title: "JavaScript",
  },
  {
    icon: "./icons/react.svg",
    alt: "react-icon",
    title: "React",
  },
  {
    icon: "./icons/bootstrap.svg",
    alt: "bootstrap-icon",
    title: "Bootstrap",
  },
  {
    icon: "./icons/git-alt.svg",
    alt: "git-icon",
    title: "Git",
  },
  {
    icon: "./icons/github.svg",
    alt: "github-icon",
    title: "github",
  },
  {
    icon: "./icons/figma.svg",
    alt: "figma-icon",
    title: "Figma",
  },
  {
    icon: "./icons/tailwindcss-144.svg",
    alt: "tailwind-icon",
    title: "Tailwind",
  },
  {
    icon: "./icons/sass.svg",
    alt: "sass-icon",
    title: "Sass",
  },
];

const generateHTML = (res) => {
  return `
    <div class="icon" data-aos="fade-out">
            <img src="${res.icon}" alt="${res.alt}" />
            <p>${res.title}</p>
          </div>
    `;
};

skill.map((markup) =>
  skillData.insertAdjacentHTML("beforeend", generateHTML(markup))
);
