import { Link } from 'react-router-dom'
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage'
import css from './WelcomPage.module.css'
import Container from '../../components/Container/Container'
import Icon from '../../components/ComponIcon/Icon'
import { Section } from '../../components/Container'
import StatisticsInfo from '../../components/StatisticsInfo/StatisticsInfo'

const WelcomePage = () => {
  return (
    <Section className={css.section}>
      <Container>
        <h1 className={css.title}>
          Transforming your <span className={css.bodyText}>body</span> shape
          with Power Pulse
        </h1>
        <div className={css.icon}>
          <Icon className={css.exerciseArrowSvg} iconId="icon-line" />
        </div>
        <div className={css.buttonWrapper}>
          <Link className={css.buttonSignUp} to="/signup">
            sign up
          </Link>
          <Link className={css.buttonSignIn} to="/signin">
            sign in
          </Link>
        </div>
        <StatisticsInfo />
        <BackgroundImage />
      </Container>
    </Section>
  )
}

export default WelcomePage
