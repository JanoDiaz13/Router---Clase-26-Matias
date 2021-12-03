import React from "react";
import {Routes,Route,Link} from 'react-router-dom'
import User1 from "./presentational/user1"
import User2 from "./presentational/user2"
import User3 from "./presentational/user3"

export default function Users() {
    return (
        <div>
            <ol>
                <li>
                    <Link to="/user1">Link 1</Link>
                </li>
                <li>
                    <Link to="/user2">Link 2</Link>
                </li>
                <li>
                    <Link to="/user3">Link 3</Link>
                </li>
            </ol>
            <section>
            <Routes>
                <Route index path="/user1" element = {<User1/>} />
                <Route  path="/user2" element = {<User2/>} />
                <Route  path="/user3" element = {<User3/>} />
            </Routes>
        </section>
        </div>
        
    )
}
