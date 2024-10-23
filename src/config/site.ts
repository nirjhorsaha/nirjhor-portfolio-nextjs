export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Nirjhor Saha",
  description: "Welcome to Nirjhor Saha's Personal Portfolio",

  navItems: [
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Experience",
      href: "/experience",
    },
    {
      label: "Work",
      href: "/work",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],

  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],

  links: {
    github: "https://github.com/nirjhorsaha",
    twitter: "https://x.com/Nirjhor_SB",
    discord: "https://discord.gg/790481446833750028",
  },
};
