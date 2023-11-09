import { Link } from "react-router-dom";

import Button from "../../components/Button/Button";

const WelcomePage = () => {
  return (
    <>
      <div>WelcomePage</div>
      <Button text="text" />
      <Link to="/signup">
        <Button type="submit" text="Sign Up" />
      </Link>
      <Link to="/signin">
        <Button type="submit" text="Sign In" />
      </Link>
    </>
  );
};

export default WelcomePage;
