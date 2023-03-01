import svgCart from '/src/assets/cart.svg'
import { motion } from 'framer-motion'
interface cartProps {
    text: number,
    checkout: any
}

export default function Cart(props: cartProps) {
    return (
        <motion.span onClick={props.checkout} whileHover={{ rotate: 360}} transition={{duration: .7}} className='relative flex justify-center items-center w-14 h-14 mr-8 bg-[#ffcd3e] rounded-[50%] cursor-pointer'>
            <motion.div ><motion.img src={svgCart} alt="cart" className='h-10 w-10 scale-flip-horizontal' id='cart'/></motion.div>
            {props.text > 0 && <span className="absolute bottom-1/4 left-1/2 text-white bg-[#d64937] w-5 h-5 rounded-[50%] flex justify-center items-center z-[100]">{props.text}</span>}
        </motion.span>
    )
}