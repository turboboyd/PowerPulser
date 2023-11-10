import css from './ContainerBackgraund.module.css'

const ContainerBackgraund = ({children}) => {
    return (
             <div className={css.backgroundContainer} >
                {children}
             </div>
       );
  };
  
  export default ContainerBackgraund;