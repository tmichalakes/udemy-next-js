import { useRouter } from "next/router";

const ClientProject = ():JSX.Element => {
    const router = useRouter();

    const { clientId, projectId } = router.query;

    return <div>
        <h1>Client Project</h1>
        <p>clientId: {clientId}</p>
        <p>projectId: {projectId}</p>
    </div>
}

export default ClientProject;