import NavButtons from "../NavButtons"
import penguin from '/src/assets/penguin.svg'

export default function Nav() {
    return (
        <nav className="h-16 w-full bg-black opacity-80 flex justify-between">
            <div className="ml-8 flex">
                <div className="flex justify-center items-center"><img src={penguin} alt="penguinooo" className="w-12 h-12 hover:scale-110"/></div>
                <NavButtons text="Shed Aquarium" link="/"/>
                <NavButtons text="Home" link="/"/>
                <NavButtons text="Buy Tickets" link="/tickets"/>
            </div>
        </nav>
    )
}