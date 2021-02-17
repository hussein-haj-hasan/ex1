import { findConfigFile } from "typescript";

import React,{useEffect,useState} from 'react'
import {useRouter} from 'next/router'
export async function getStaticProps(){
    return{
        props:{
            pid:"1h2s"
        }
    }
}
export default function variables(props) {
    const router = useRouter()
    const [t,setT] = useState("1")
    const [a,setA] = useState("h")
    useEffect(() => {
       router.push("/variables?counter=10",undefined,{shallow:true})
    }, [])
    useEffect(() => {
        setT("2")
    }, [router.query.counter])
    return (
        <div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis laboriosam earum ex suscipit placeat ipsa minus, labore nihil cum quisquam, nam minima aliquam sint adipisci dignissimos ut veniam? Consectetur, at!</p>
            <h1>{t}</h1>
            <h1>{a}</h1>
            <h1>{router.query.counter}</h1>
            <h1>{props.pid}</h1>
        </div>
    )
}
