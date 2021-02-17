import React from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'
export default function router() {
    const router = useRouter()
    return (
        <div>
            <Link href="/variables"><a>Variables page (Link)</a></Link>
            <br/>
            <a onClick={()=>router.push("/variables")}>Variables page (push)</a>
        </div>
    )
}
