export default async function StudentDetailById ({params}: {params: {studentId: string}}) {
    const studentId = params.studentId;
    return (
        <h1>student Id is {studentId}</h1>
    )
}
