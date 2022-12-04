

import github_f from "../../Assets/github-f.svg"
import linkedin_f from "../../Assets/icons/linkedin-f.svg"
import dribbble from "../../Assets/icons/dribbble-f.svg"
import indiehackers from "../../Assets/icons/indiehackers-f.svg"
import mail from "../../Assets/icons/mail-f.svg"


export const footer = {
  columns: [
    {
      title: "Pages",
      links: [
        {
          name: "Home",
          link: "/",
          leavesWebsite: false,
        },
        // {
        //   name: "Blog",
        //   link: "/blog",
        //   leavesWebsite: false,
        // },
        {
          name: "Projects",
          link: "/project",
          leavesWebsite: false,
        },
        {
          name: "Blog",
          link: "/designs",
          leavesWebsite: false,
        },
      ],
    },
    {
      title: "Social",
      links: [
        {
          name: "Twittter",
          link: "https://github.com/braydentw",
              icon: "https://pngimg.com/uploads/twitter/twitter_PNG6.png",
          leavesWebsite: true,
        },
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/braydentw/",
            icon: "https://pngimg.com/uploads/linkedIn/linkedIn_PNG7.png",
          leavesWebsite: true,
        },
        {
          name: "Instagram",
          link: "https://dribbble.com/braydentw",
            icon: "https://pngimg.com/uploads/instagram/instagram_PNG3.png",
          leavesWebsite: true,
        },
       
        {
          name: "Email",
          link: "mailto:contact@braydentw.io",
            icon: "https://pngimg.com/uploads/gmail_logo/gmail_logo_PNG3.png",
          leavesWebsite: true,
        },
      ],
    },
  ],
  support: {
    buymeacoffee: "braydenw",
    paypal: "braydentw",
    message: "I appreciate your support very much! 💙",
  },
};
