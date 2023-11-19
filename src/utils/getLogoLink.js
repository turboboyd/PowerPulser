import { DIARY_ROUTE, PROFILE_ROUTE, WELCOME_PAGE_ROUTE } from "./const";

const getLogoLink = (isVerify, user) => {

  if (isVerify) {
    if (user.profileSettings) {
      return DIARY_ROUTE;
    } else {
      return PROFILE_ROUTE;
    }
  } else {
    return WELCOME_PAGE_ROUTE;
  }
};

export default getLogoLink;