import { motion } from "framer-motion"

const containerVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: { delay: 1.5, duration: 1.5}
    }
}

export default function Home() {
    return (
        <motion.div variants={containerVariants} initial="hidden" animate="visible" >
            <h1 className="text-5xl">Home Page</h1>
        </motion.div>
    )
}