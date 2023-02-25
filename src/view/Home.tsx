import { motion } from "framer-motion"
import homepageImg from '/src/assets/homepage.webp'

const containerVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: { delay: .1, duration: .1}
    },
    exit: {
        y: '100vh',
        opacity: .5,
        transition: {ease: 'easeInOut' }
    }
}
// bg-[url('/src/assets/homepage.webp')]

export default function Home() {
    return (
        <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit" className="h-[130vh]" >
            <img src={homepageImg} alt="turtle bg image" className="w-full h-full absolute z-[-10]"/>
            
            <h1 className="text-5xl">Home Page</h1>
        </motion.div>
    )
}