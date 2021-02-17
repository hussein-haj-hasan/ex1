import React from 'react'
import Image from "next/image"
import {photos} from '../photos'
export default function image(){
    const pictures = photos.map((photo)=>(
        <React.Fragment>
        <Image 
        src={photo.src} 
        width="300px"
        height="300px"
        layout="responsive"
        quality="75"
        loading="eager"
        objectFit="cover"

        />
        
        <br/>
        </React.Fragment>
    )
    )
    return(
        <React.Fragment>
            <h1>My Images</h1>
            <Image 
                src="/photos/11.jpg"
                layout="fill"
                quality="75"
                loading="eager"
                objectFit="cover"
                objectPosition="bottom center"
        />
          
            {/* {pictures} */}
        </React.Fragment>
    )
    
}