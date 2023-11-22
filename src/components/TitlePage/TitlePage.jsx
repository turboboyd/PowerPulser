import css from './TitlePage.module.css';
import { motion } from 'framer-motion';

export default function TitlePage({ title }) {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className={css.title}>{title}</h1>
      </motion.div>
    </div>
  );
}
