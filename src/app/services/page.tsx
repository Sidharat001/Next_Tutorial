import Link from "next/link";

export default function Services () {
    return (
        <div className="wrapper">
            <h1>Service Page</h1>
            <Link href="/services/web">Web Servies</Link>
            <br></br>
            <br></br>
            <br></br>
            <Link href="/services/app">App Servies</Link>
        </div>
    )
}