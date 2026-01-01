// ENV Config
export const ENV = {
  APP_NAME: import.meta.env.VITE_APP_NAME || "Attendance System",
  APP_API: import.meta.env.VITE_APP_API + "/api",
  NODE_ENV: import.meta.env.VITE_NODE_ENV || "development",
};

// Regex patterns
export const REGEX = {
  EMAIL:
    /^(?![-_.])[a-zA-Z0-9]+(?:[._-][a-zA-Z0-9]+)*@([a-zA-Z0-9]+(-[a-zA-Z0-9]+)*\.)+[a-zA-Z]{2,10}$/,
  USER_ID: /^(?!.*[._-]{2})[a-zA-Z0-9]+([._-]?[a-zA-Z0-9])*$/,
};

// Images
export const IMAGES = {
  LOGO: "/assets/images/logo.png",
  LOGO_SM: "/assets/images/logo-sm.png",
  avatar: "/assets/images/avatar.svg",
};
