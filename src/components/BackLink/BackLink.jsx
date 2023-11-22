import React from 'react'
import { Link } from 'react-router-dom'
import css from './BackLink.module.css'
import Icon from 'components/ComponIcon/Icon'
import { EXERCISES_ROUTE } from 'utils/const'



const BackLink = ({to}) => {
  return (
      <>
      <Link to={EXERCISES_ROUTE} className={css.link} >
        <Icon className={css.svgBack} iconId="Arrow-back" />
        Back
      </Link>
      </>
  )
}

export default BackLink