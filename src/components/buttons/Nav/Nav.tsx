import NavButtons from "./NavButtons"
import penguin from '/src/assets/penguin.svg'
import { motion } from "framer-motion"
import Cart from "../Cart/Cart"

export default function Nav() {
    return (
        <nav className="h-16 w-full bg-[#131921] opacity-80 flex justify-between absolute">
            <motion.div animate={{ y: 0 }} initial={{ y:-250 }} transition={{ delay: .5}} className="ml-8 flex">
                    <div className="flex justify-center items-center"><img src={penguin} alt="penguinooo" className="w-12 h-12 hover:scale-110"/></div>
                    <NavButtons text="Shed Aquarium" link="/"/>
                    <NavButtons text="Buy Tickets" link="/tickets"/>
            </motion.div>
            <Cart text={1}/>
        </nav>
    )
}