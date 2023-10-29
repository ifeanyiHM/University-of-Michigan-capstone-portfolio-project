const data = [
  {
    link: "https://notal.vercel.app/",
    src: "./images/notal.png",
    alt: "notal app",
    title: "notal",
    body: "A personal journal to capture and reflect on my daily experiences and thoughts.&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;",
    element: "<br />",
    github: "https://github.com/ifeanyiHM/NOTAL",
  },
  {
    link: "https://interest-gamma.vercel.app/",
    src: "./images/interest.png",
    alt: "A-screenshot-of-interest",
    title: "interest",
    mlink: "https://www.pinterest.com/",
    mhead: "A",
    mbody: "Pinterest",
    body: "app clone that allows users to discover, save, and share inspiring images and ideas.",
    element: "<br />",
    github: "https://github.com/ifeanyiHM/Pinterest-Clone",
  },
  {
    link: "https://dashboard-theta-hazel.vercel.app/",
    src: "./images/dashboard.png",
    alt: "A dashboard",
    title: "material dashboard",
    alink:
      "https://demos.creative-tim.com/material-dashboard/pages/dashboard.html",
    abody: "original db ",
    body: " A material dashboard that provides users with an intuitive interface for managing and visualizing data and information.",
    element: "<br />",
    github: "https://github.com/ifeanyiHM/Dashboard",
  },
  {
    link: "https://ifeanyihm.github.io/Mailchimp_landing_page/",
    src: "./images/mailchimp.png",
    alt: "mailchimp clone",
    title: "cloned - malichimp's lp",
    mlink:
      "https://mailchimp.com/grow-with-mailchimp/?ds_c=3Q_AOC_Google_Search_US_EN_Brand_Acq_Alpha&gclid=CjwKCAiAksyNBhAPEiwAlDBeLHHwgN-lzYcxzo2iOZaidfEC0z-d-iARIvn2N6O6lUewvQ1mw3TrNRoC72sQAvD_BwE&gclsrc=aw.ds",
    mhead: "A responsive webpage for mobile and desktop device, a clone of",
    mbody: "MAILCHIMP",
    body: "landing page",
    github: "https://github.com/ifeanyiHM/Dashboard",
  },
  {
    link: "https://ifeanyihm.github.io/Metabnb/",
    src: "./images/metabnb.png",
    alt: "A-screenshot-of-metabnb",
    title: "metabnb",
    body: " This app provides a platform in the Meta space where vacati homes and condos are purchased or rented like Airbnb.",
    github: "https://github.com/ifeanyiHM/Metabnb",
  },
  {
    link: "https://ifeanyimichael.vercel.app/",
    src: "./images/portfolio.png",
    alt: "A-capstone-project-screenshot",
    title: "project portfolio",
    body: " A responsive single page application for mobile, desktop and tablet device. (A capstone project portfolio)",
    github:
      "https://github.com/ifeanyiHM/University-of-Michigan-capstone-portfolio-project",
  },
  {
    link: "https://new-skill-tech.vercel.app/",
    src: "./images/contact.png",
    alt: "A-screenshot-of-the-contact-app",
    title: "a contact app",
    body: " This app provides the ability to create, store, edit, save and delete contact.",
    github: "https://github.com/ifeanyiHM/NewSkillTech",
  },
  {
    link: "https://ifeanyihm.github.io/A-React-calculator-app/",
    src: "./images/calculator.png",
    alt: "A-screenshot-of-the-calculator-app",
    title: "a calculator app",
    body: " A calculator app that carries out the basic calculator functions.",
    github: "https://github.com/ifeanyiHM/A-React-calculator-app",
  },
  {
    link: "https://ifeanyihm.github.io/Slack-HNG9-Stage1-task-/",
    src: "./images/linktree.png",
    alt: "A-screenshot-of-the-app",
    title: "a linktree app",
    body: " This app allows you to refrence different landing page.",
    github: "https://github.com/ifeanyiHM/Slack-HNG9-Stage1-task-",
  },
  {
    link: "https://ifeanyihm.github.io/My-First-Project/",
    src: "./images/portr.png",
    alt: "A-screenshot-of-my-first-project",
    title: "cloned webpage - gomycode",
    mlink: "https://gomycode.com/NG-EN/store",
    mhead: "A responsive webpage for mobile and desktop device cloned from",
    mbody: "GOMYCODE",
    body: " IT instute website",
    github: "https://github.com/ifeanyiHM/My-First-Project",
  },
  {
    link: "https://ifeanyihm.github.io/My-Second-Project/",
    src: "./images/portb.png",
    alt: "A-screenshot-of-my-second-project",
    title: "cloned webpage - uol",
    mlink:
      "https://www.london.ac.uk/applications/funding-your-study#block-studentinformation-menu",
    mhead: "A three layout responsive webpage cloned from the",
    mbody: "UNIVERSITY OF LONDON",
    body: "website.&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;",
    github: "https://github.com/ifeanyiHM/My-Second-Project",
  },
];

const generateHTML = (res) => {
  return `
    <div class="card-di" data-aos="fade-up">
    <div class="out_div">
      <a href="${res.link}" target="_blank"
        ><img
          class="out"
          src="${res.src}"
          alt="${res.alt}"
      /></a>
    </div>
    <div class="contin">
      <h2>${res.title.toUpperCase()}</h2>
      <p>
        ${res.mhead ? res.mhead : ""}
        ${
          res.mlink
            ? `<a href="${res.mlink}" target="_blank">
              ${res.mbody}
            </a>`
            : ""
        }
        ${res.body}
        ${
          res.alink
            ? `<a href="${res.alink}" target="_blank">${res.abody}</a>`
            : ""
        }
      </p>
      ${res.element ? res.element : ""}
      <div class="icn">
        <a
          class="bot"
          href="${res.link}"
          target="_blank"
          >Live</a
        >
        <a
          href="${res.github}"
          target="_blank"
          ><img src="icons/github.svg" alt="a-link-to-the-source-code"
        /></a>
      </div>
    </div>
  </div>
     
`;
};

const projectSummary = document.querySelector(".project_summary");
const projectContainer = document.querySelector(".project_container");

data
  .slice(0, 3)
  .map((result) =>
    projectSummary.insertAdjacentHTML("beforeend", generateHTML(result))
  );

data.map((result) =>
  projectContainer.insertAdjacentHTML("beforeend", generateHTML(result))
);
