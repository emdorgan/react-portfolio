import React from "react";
import Project from './pages/Project';



export default function Portfolio(){
    return(
        <section>
            {/* Make this iterate over data, passing in the 2 urls, description, title, image source */}
            <Project />
            <Project />
            <Project />
        </section>
    )
}