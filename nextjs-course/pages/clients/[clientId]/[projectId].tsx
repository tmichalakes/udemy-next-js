import MainMenuBar from "@/common/components/MainMenuBar";
import { useRouter } from "next/router";

const ClientProject = ():JSX.Element => {
    const router = useRouter();

    const { clientId, projectId } = router.query;

    return <div>
        <h1>Client Project</h1>
        <MainMenuBar />
        <div>
            <p>clientId: {clientId}</p>
            <p>projectId: {projectId}</p>
        </div>
    </div>
}

export default ClientProject;