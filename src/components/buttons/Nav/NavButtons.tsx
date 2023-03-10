import { motion } from "framer-motion"
import { Link } from "react-router-dom"

interface setProp {
    text: string,
    link: string
}

export default function NavButtons(props: setProp) {
    return (
        <motion.button whileHover={{ scale: 1.2}} whileTap={{ scale: 1.1}} className="text-[#ffcd3e] font-bold text-md sm:text-3xl outline-none mx-8 opacity-[100%]">
            <Link to={props.link}>{props.text}</Link>
        </motion.button>
    )
}