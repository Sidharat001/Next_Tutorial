import Link from "next/link";

export default function StudentDetails () {
    return (
        <div className="wrapper">
            <h1>Student Details</h1>
            <Link href="/studentdetails/1">Suraj</Link>
            <br></br>
            <br></br>
            <Link href="/studentdetails/2">Karthik</Link>
            <br></br>
            <br></br>
            <Link href="/studentdetails/3">Amit</Link>
            <br></br>
            <br></br>
            <Link href="/studentdetails/4">prateek</Link>
        </div>
    )
}