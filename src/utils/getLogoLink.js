import { DIARY_ROUTE, PROFILE_ROUTE, WELCOME_PAGE_ROUTE } from "./const";

const getLogoLink = (isVerify, user) => {
  return isVerify
    ? user.profileSettings
      ? DIARY_ROUTE
      : PROFILE_ROUTE
    : WELCOME_PAGE_ROUTE;
    
};

export default getLogoLink;
