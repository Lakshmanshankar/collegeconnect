import React from 'react'
import Link from 'next/link'
function Footer() {
    return (
        <footer aria-label='footer'>
            <h1>About CollegeConnect</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, cum.</p>
            <div className="links">
                <Link href={"https://github.com/lakshamanshankarc/collogram"}>Github</Link>
            </div>
        </footer>
    )
}

export default Footer