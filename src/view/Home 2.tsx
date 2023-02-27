import { motion } from "framer-motion"
import homepageImg from '/src/assets/jellyfish.jpeg'
import HomePage from "../components/buttons/HomePage/HomePage"

const containerVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: { delay: .1, duration: .1}
    },
    exit: {
        opacity: .5,
        transition: {ease: 'easeInOut' }
    }
}
// bg-[url('/src/assets/homepage.webp')]

export default function Home() {
    return (
        <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit" className="h-[100vh]" >
            <img src={homepageImg} alt="turtle bg image" className="w-full h-full absolute z-[-10]"/>
            <div className="flex flex-col">
                <div className="basis-[4rem]"></div>
                <div className="basis-[50rem]">
                    <HomePage />
                </div>
            </div>
        </motion.div>
    )
}