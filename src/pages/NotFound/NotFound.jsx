import { WelcomePage_ROUTE } from "../../utils/const"; 
import { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LogoPowerPulse from "../../images/svg/PowerPulse.svg";
import Vectorlogo from "../../images/svg/Vector_logo.svg";
import css from './NotFound.module.css'
import Container from "../../components/Container/Container";



const NotFound = () => {
  const location = useLocation();
  const goHomeLink = useRef(location?.state?.from ?? WelcomePage_ROUTE);

  return  <Container> 
   <div className={css.background}>
    <div className={css.block_error}>
     <Link className={css.logo_wrap} to={WelcomePage_ROUTE}>
        <div>
          <img className={css.logo} src={Vectorlogo} alt="Logo" />
        </div>
        <div>
          <img className={css.logo_text} src={LogoPowerPulse} alt="Logo" />
        </div>
      </Link>
<h1 className={css.title_one}>404</h1>
<p className={css.text_error}>  
  Sorry, you have reached a page that we could not find. It seems
              that you are lost among the numbers and letters of our virtual
              space. Perhaps this page went on vacation or decided to disappear
              into another dimension. We apologize for this inconvenience.
        </p>
        <Link className={css.link_goHome} to={goHomeLink.current}>
          Go Home
        </Link>
{/* 
        <div className={css.backgroundImageWrap}>
      <div className={css.backgroundImage}></div>
    </div> */}
</div>
</div>
  </Container>;
};

export default NotFound;
