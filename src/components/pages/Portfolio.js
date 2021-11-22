import React from "react";
import Project from './Project';



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