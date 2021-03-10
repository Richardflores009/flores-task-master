import React from 'react'
import { NavLink} from 'react-router-dom'


function Header(){

        return(
            <header>
                <nav>
                    <ul className="NavClass">
                        <li>
                            <NavLink exact to="/chat">
                                Chat 
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/">
                                Join
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        )
}

export {Header}