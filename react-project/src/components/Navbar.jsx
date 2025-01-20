import { NavLink } from "react-router";

export default function Navbar(){
    return(
        <>
            <header>
                <nav>
                    <div className="flex justify-between p-5 bg-[#38BDF8] text-white">
                        <span className="text-2xl">
                            Navbar
                        </span>
                        <div>
                            <ul className="flex items-center gap-5 text-lg">
                                <NavLink to="/">
                                    <li>Home</li>
                                </NavLink>
                                <NavLink to="/info">
                                    <li>Info</li>
                                </NavLink>
                                <NavLink to="/contacts">
                                    <li>Contacts</li>
                                </NavLink>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}