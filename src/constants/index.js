import {
  airbnb,
  binance,
  coinbase,
  dropbox,
  nitk,
  cluboard,
  cash_flow,
  freadom,
  bank,
  gdsc,
  iris,
  IITR,
  ecell,
  genesis,
  graphql,
  portfolio,
  publiclab,
  zulip,
  cdc,
  chargeswap,
  placeicon,
  recruitment,
  huntly,
  oracle,
  comicify_ai,
  greentrust
} from "../assets";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineTwitter,
  AiFillHtml5,
  AiOutlineGoogle,
  AiOutlineGitlab,
} from "react-icons/ai";

import {
  SiDjango,
  SiSqlite,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiGraphql,
  SiPython,
  SiCplusplus,
  SiC,
  SiRubyonrails,
  SiJquery,
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiMysql,
  SiSolidity,
  SiNetlify,
  SiChartdotjs,
  SiVite,
  SiArduino,
  SiWeb3Dotjs,
  SiIpfs,
  SiDotnet,
  SiTwilio,
  SiFlutter,
  SiReplit,
  SiFlask,
  SiFigma,
  SiGooglemaps,
  SiOpenai,
  SiGooglecloud,
  SiNextdotjs,
  SiPowerbi,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiTableau,
  SiMicrosoftexcel,
  SiDatastax,
  SiDgraph,
  SiNintendo,
  SiMinds,
  SiTextpattern,
} from "react-icons/si";

import {
  FaHardHat
} from "react-icons/fa";

import {
  IoIosNotificationsOutline
} from "react-icons/io";

import { DiCss3, DiJava, DiMsqlServer, DiRuby } from "react-icons/di";

export const resumeLink = "https://drive.google.com/file/d/1dN7xcPWlbnafRttQtZPBF255Bt2P9kFX/view?usp=drive_link";
export const repoLink = "https://github.com/akash-prajapati123";

export const callToAction = "https://www.linkedin.com/in/akash-kumar-62775925b";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "extraCurricular",
    title: "Extra Curricular",
  },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

export const educationList = [
  {
    id: "education-1",
    icon: nitk,
    title: "National Institute of Technology, Trichy",
    degree: "Bachelor of Technology",
    duration: "December 2021 - May 2025",
    content1: "Major: Production Engineering (9.03 cgpa)",
    content2: "Minor: Computer Science Engineering ",
  },
];

export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-1",
        icon: SiCplusplus,
        name: "C++",
      },
      {
        id: "pl-2",
        icon: SiPython,
        name: "Python",
      },
    
      {
        id: "pl-4",
        icon: SiC,
        name: "C",
      },
      {
        id: "pl-5",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-6",
        icon: DiCss3,
        name: "CSS",
      },
      ,
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      {
        id: "f-1",
        icon: SiPandas,
        name: "Pandas",
      },
      {
        id: "f-2",
        icon: SiNumpy,
        name: "Numpy",
      },
      {
        id: "f-3",
        icon: SiPython,
        name: "Sk-Learn",
      },
      {
        id: "f-4",
        icon: SiPython,
        name: "Matplotlib",
      },
      {
        id: "f-5",
        icon: SiPython,
        name: "NLTK",
      },
      ,
    ],
  },
  {
    title: "Tools",
    items: [
      {
        id: "t-1",
        icon: SiMysql,
        name: "MySQL",
      },
      {
        id: "t-2",
        icon: SiPowerbi,
        name: "Power_BI",
      },
      {
        id: "t-3",
        icon: SiVisualstudiocode,
        name: "VS Code",
      },
      {
        id: "t-4",
        icon: SiTableau,
        name: "Tableau",
      },
      {
        id: "t-5",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-6",
        icon: SiMicrosoftexcel,
        name: "Ms-Excel",
      },
     
      
    ],
  },
];

export const experiences = [
 
  {
    organisation: "IIT ROORKEE",
    logo: IITR,
    link: "https://www.iitr.ac.in/",
    positions: [
      {
        title: "Data Science Intern",
        duration: "JUN 2023 - AUG 2023",
        content: [
          {
            text: "worked to develop a react application integrated with potato disease classification model using a convolutional neural network (CNN) architecture. By using this application users can upload potato plant images and receive accurate disease classification results. Additionally, the application suggests appropriate medicines for disease prevention and control based on the predicted disease category.",
            link: "",

          },
        ],
      },
      
    ],
  },
  {
    organisation: "Festember",
    logo: cdc,
    link: "https://festember.com/23/",
    positions: [
      {
        title: "Manager Festember OC",
        duration: "AUG 2022 - JAN 2024",
        content: [
          {
            text: "A team of 80 for Festember’22 Inter college fest of NIT Trichy hosting over 18,500 from 500+ Institutes Organising Numerous events, delegated tasks in the design, scheduling, ambience,  publicity, campus engagement, online presence and social responsibility subteams and the marketing activities of the fest.",
            link: "",
          },
        ],
      },
    ],
  },
];

export const openSourceContributions = [
  {
    id: "os-1",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "pull-request",
    status: "merged",
    title:
      "Move _wiki to old table look, common template for email and settings digest only",
    link: "https://github.com/publiclab/plots2/pull/10731",
    number: "#10731",
    date: "Feb 24 2022",
    linesAdded: "101",
    linesDeleted: "48",
  },
  {
    id: "os-2",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "pull-request",
    status: "merged",
    title: "Combine templates for email digest and settings digest",
    link: "https://github.com/publiclab/plots2/pull/10681",
    number: "#10681",
    date: "Feb 9 2022",
    linesAdded: "86",
    linesDeleted: "106",
  },
  {
    id: "os-3",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "pull-request",
    status: "merged",
    title: "Fix reverse chronological sorting on inline grids",
    link: "https://github.com/publiclab/plots2/pull/11114",
    number: "#11114",
    date: "May 4 2022",
    linesAdded: "1",
    linesDeleted: "1",
  },
  {
    id: "os-4",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "pull-request",
    status: "merged",
    title: "style: Make post page footer responsive",
    link: "https://github.com/publiclab/plots2/pull/10634",
    number: "#10634",
    date: "Feb 24 2022",
    linesAdded: "64",
    linesDeleted: "8",
  },
  {
    id: "os-5",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "issue",
    status: "closed",
    title: "Typos in Translation_System.md",
    link: "https://github.com/publiclab/plots2/issues/11120",
    number: "#11120",
    date: "May 6 2022",
    linesAdded: "",
    linesDeleted: "",
  },
  {
    id: "os-6",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "issue",
    status: "closed",
    title: "Missing translations on layouts/_header.html.erb",
    link: "https://github.com/publiclab/plots2/issues/11115",
    number: "#11115",
    date: "May 4 2022",
    linesAdded: "",
    linesDeleted: "",
  },
  {
    id: "os-7",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "issue",
    status: "closed",
    title: "Missing translation of 'This is part of' on _tagging.html.erb",
    link: "https://github.com/publiclab/plots2/issues/10986",
    number: "#10986",
    date: "Apr 8 2022",
    linesAdded: "",
    linesDeleted: "",
  },
  {
    id: "os-8",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "issue",
    status: "closed",
    title: "Wrong closing heading tag in _digest.html.erb",
    link: "https://github.com/publiclab/plots2/issues/10985",
    number: "#10985",
    date: "Apr 8 2022",
    linesAdded: "",
    linesDeleted: "",
  },
  {
    id: "os-9",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "issue",
    status: "closed",
    title: "Add class to center wiki.scraped_image in wikis template",
    link: "https://github.com/publiclab/plots2/issues/10797",
    number: "#10797",
    date: "Mar 18 2022",
    linesAdded: "",
    linesDeleted: "",
  },
  {
    id: "os-10",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "issue",
    status: "closed",
    title: "Images on /wiki are not center aligned",
    link: "https://github.com/publiclab/plots2/issues/10755",
    number: "#10755",
    date: "Mar 4 2022",
    linesAdded: "",
    linesDeleted: "",
  },
  {
    id: "os-11",
    organisation: "Zulip",
    logo: zulip,
    repo: "zulip",
    type: "pull-request",
    status: "merged",
    title: "invitations: Check invitation from a now-deactivated user.",
    link: "https://github.com/zulip/zulip/pull/20206",
    number: "#20206",
    date: "Dec 30 2021",
    linesAdded: "31",
    linesDeleted: "1",
  },
  {
    id: "os-12",
    organisation: "Zulip",
    logo: zulip,
    repo: "zulip",
    type: "pull-request",
    status: "merged",
    title: "invitations: Check invitation from a now-deactivated user.",
    link: "https://github.com/zulip/zulip/pull/20206",
    number: "#20206",
    date: "Dec 30 2021",
    linesAdded: "31",
    linesDeleted: "1",
  },
  {
    id: "os-13",
    organisation: "Zulip",
    logo: zulip,
    repo: "zulip",
    type: "pull-request",
    status: "merged",
    title: "authentication: Fix placeholder realms for redirects.",
    link: "https://github.com/zulip/zulip/pull/19689",
    number: "#19689",
    date: "Sep 9 2021",
    linesAdded: "1",
    linesDeleted: "1",
  },
  {
    id: "os-14",
    organisation: "Zulip",
    logo: zulip,
    repo: "zulip",
    type: "pull-request",
    status: "merged",
    title: "message_editing : Fix topic edit propagate option cut-off",
    link: "https://github.com/zulip/zulip/pull/19760",
    number: "#19760",
    date: "Feb 10 2022",
    linesAdded: "9",
    linesDeleted: "8",
  },
];

export const projects = [
  {
    id: "project-1",
    title: "CineText Clustro",
    image: comicify_ai,
    content:
      "Developed a movie similarity analysis tool using Python, leveraging Natural Language Processing (NLP) techniques. Utilized NLTK for tokenization, stemming, and processing of movie plot summaries. Employed TF-IDF vectorization and K-means clustering for identifying and grouping similar movies, visualized clustering using dendrograms",
    stack: [
      {
        id: "icon-1",
        icon: SiNintendo,
        name: "NLP"
      },
      {
        id: "icon-2",
        icon: SiPython,
        name: "Pyhton"
      },
      {
        id: "icon-3",
        icon: SiGraphql,
        name: "K-means clustering"
      },
      {
        id: "icon-4",
        icon: SiPython,
        name: "Dendograms"
      },
      {
        id: "icon-5",
        icon: SiNumpy,
        name: "Numpy"
      },
      {
        id: "icon-6",
        icon: SiPandas,
        name: "Pandas"
      },
    ],
  },
  {
    id: "project-2",
    title: "AdventureView BI",
    image: greentrust,
    content:
      "Developed dynamic Power BI dashboards with AdventureWorks Dataset, enabling intuitive visualization and analysis of revenue, profit, and cost metrics. Leveraged advanced features including Q&A, Decomposition Tree, and Key Influencers to uncover customer-product dynamics, enriching strategic decision-making",
    stack: [
      {
        id: "icon-1",
        icon: SiPowerbi,
        name: "Power-BI"
      },
      {
        id: "icon-2",
        icon: SiDatastax,
        name: "DAX"
      },
      
    ],
  },
  {
    id: "project-3",
    title: "Predict Blood Donations",
    image: chargeswap,
    content:
      "Developed a blood donation prediction model using TPOT automated machine learning, achieving strong predictive performance. Implemented log normalization for a notable accuracy improvement from 74% to 78%. Evaluated TPOT and logistic regression models based on AUC scores, highlighting TPOT's superior predictive capability. The project showcased effective feature engineering and model optimization techniques.",
    stack: [
      {
        id: "icon-1",
        icon: SiMinds,
        name: "Machine Learning"
      },
      {
        id: "icon-2",
        icon: SiPython,
        name: "TPOT"
      },
      {
        id: "icon-3",
        icon: SiDgraph,
        name: "logistic regression"
      },
    ],
  },
  {
    id: "project-4",
    title: "Tableau Maven Insights: Unveiling Trends",
    image: placeicon,
    content:
      "Designed and deployed interactive Tableau dashboards using Maven Supplies dataset for cross-market analysis, category profitability insights, and customer segmentation. Utilized diverse data sources to drive KPI tracking and facilitate data-driven decision-making through engaging visualizations.",
    stack: [
      {
        id: "icon-1",
        icon: SiTableau,
        name: "Tableau"
      },
    ],
  },
];

export const blogPosts = [
  {
    id: "post-1",
    title: "Blog Post 01 - Title",
    link: "#",
    date: new Date().toLocaleDateString(), // Can be edited to any string format
    image: "https://via.placeholder.com/600/92c952",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-2",
    title: "Blog Post 02 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/d32776",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-3",
    title: "Blog Post 03 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/771796",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Organisations",
    value: "2+",
  },
  {
    id: "stats-2",
    title: "Issues Opened",
    value: "6+",
  },
  {
    id: "stats-3",
    title: "Pull Requests",
    value: "6+",
  },
];

export const extraCurricular = [
  {
    organisation: "Festember",
    title: "Manager",
    duration: "Aug 2022 -jan 2024",
    content: [
      {
        text: "Spearheaded a team of 80 for Festember’22 hosting over 18,500 from 500+ institutes. •	Organising Numerous events, delegated tasks in the design, scheduling, ambience, publicity, campus engagement, online presence and social responsibility subteams and the marketing activities of the fest.",
        link: "https://festember.com/23/",
      },
    ],
    logo: gdsc,
  },
  {
    organisation: "NSS",
    title: "Executive Committee Member ",
    content: [
      {
        text: "Volunteered (1/300) as an Executive Committee Member in the National Service Scheme, Nit Trichy. Received A & B level Certificate of NSS from Uttarakhand Government.",
      },
    ],
    logo: genesis,
  },
  {
    organisation: "INSPIRE",
    content: [
      {
        text: "Selected (1 in 15000) for the Innovation in Science Pursuit for Inspired Research (INSPIRE) exhibition program",
      
      },
    ],
    logo: iris,
  },
  {
    organisation: "ISCA",
    title: "Participant",
    content: [
      {
        text: "Got 4th position in a state-level science exhibition organized by the Indian Science Congress Association (ISCA).",
       
      },
    ],
    logo: ecell,
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/akash-kumar-62775925b/",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:akashkumar.nitt@gmail.com",
  },
];

export const aboutMe = {
    name: "Akash",
    tagLine: "Pre-Final Year NIT Trichy | Data Science Intern @ IIT ROORKEE | Festember | INSPIRE | POWER -BI |",
    intro: "Making sense of data through machine learning and statistics, and I bring data to life with tools like Power BI and Tableau. Problem-solving is my strong suit, and I'm all about finding smart solutions with data."
}
