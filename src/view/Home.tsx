import { motion } from "framer-motion"
import Cart from "../components/buttons/Cart/Cart"

const containerVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: { delay: .3, duration: .5}
    },
    exit: {
        x: '-100vh',
        transition: {ease: 'easeInOut' }
    }
}

export default function Home() {
    return (
        <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit" className="w-full h-full bg-[url('/src/assets/homepage.svg')]">
            <h1 className="text-5xl">Home Page</h1>
        </motion.div>
    )
}