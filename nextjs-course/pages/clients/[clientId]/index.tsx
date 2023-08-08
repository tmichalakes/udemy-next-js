import MainMenuBar from "@/common/components/MainMenuBar";
import { useRouter } from "next/router";

export type ClientInfo = {
    clientId: string,
    name: string,
    value: string
}

const ClientHome = ():JSX.Element => {
    const router = useRouter();

    console.log(router.query);
    const { clientId } = router.query;

    const loadStuff = () => {
        router.push({
            pathname: "/clients/[clientId]/[projectId]",
            query: { clientId: clientId, projectId: "wibblyWumbly" }
        })
    }

    return <div>
        <h1>Client Home for client with clientId {clientId}</h1>
        <MainMenuBar />
        <button onClick={loadStuff}>Load stuff!</button>
    </div>
}

export default ClientHome;