

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
          name: "Resume",
          link: "/resume",
          leavesWebsite: false,
        },
        {
          name: "About",
          link: "/about",
          leavesWebsite: false,
        },
      ],
    },
    {
      title: "Social",
      links: [
        {
          name: "Twittter",
              link: "https://twitter.com/duke_eth",
              icon: "https://pngimg.com/uploads/twitter/twitter_PNG6.png",
          leavesWebsite: true,
        },
        {
          name: "LinkedIn",
            link: "https://www.linkedin.com/in/shubham-kunwar-90ba441ba",
            icon: "https://pngimg.com/uploads/linkedIn/linkedIn_PNG7.png",
          leavesWebsite: true,
        },
        {
          name: "Instagram",
            link: "https://instagram.com/rabbitar.sol?igshid=YmMyMTA2M2Y=",
            icon: "https://pngimg.com/uploads/instagram/instagram_PNG3.png",
          leavesWebsite: true,
        },
       
        {
          name: "Discord",
            link: "https://discord.com/invite/JhPbme5A5h",
            icon: "https://cdn2.iconfinder.com/data/icons/gaming-platforms-squircle/250/discord_squircle-256.png",
          leavesWebsite: true,
        },
      ],
    },
  ],
  support: {
    buymeacoffee: "kunwar",
    paypal: "kunwar",
    message: "I appreciate your support very much! 💙",
  },
};
