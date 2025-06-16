import SectionFive from '../../Components/Home/Section Five/SectionFive';
import SectionFour from '../../Components/Home/section four/SectionFour';
import SectionOne from '../../Components/Home/section one/SectionOne';
import SectionThree from '../../Components/Home/Section Three/SectionThree';
import SectionTwo from '../../Components/Home/section two/SectionTwo';
import './home.css';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
    </motion.div>
  );
};

export default Home;
