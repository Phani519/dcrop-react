import React from "react";


const date = new Date().getFullYear();
function Footer(){
    return <footer>
        <p className="text-center sticky bottom-0 ;">Mini Project (Batch - 11A) © {date}</p>
    </footer>
}

export default Footer;