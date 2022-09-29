import Logo from "/public/Imagotipo.png";

export default {
  config: {
    translations: {
      en: {
        "app.components.LeftMenu.navbrand.title": "Panel de Admin",
        "app.components.LeftMenu.navbrand.workplace": "Azteca Tools",
        "Auth.form.welcome.title": "Azteca Tools",
      },
    },
    locales: ["es"],
    auth: {
      logo: Logo,
    },
    menu: {
      logo: Logo,
    },
    theme: {
      colors: {
        primary100: "#e8ebf0",
        primary200: "#d0d7e0",
        primary400: "#7288a3",
        primary600: "#143966",
        primary700: "#143966",
        secondary100: "#fef6d3",
        secondary200: "#fee891",
        secondary500: "#fde37b",
        secondary600: "#fcd123",
        secondary700: "#fcd123",
        buttonPrimary500: "#143966",
        buttonPrimary600: "#143966",
      },
    },
    tutorials: false,
    notifications: { release: false },
  },
  bootstrap(app) {
    console.log(app);
  },
};
