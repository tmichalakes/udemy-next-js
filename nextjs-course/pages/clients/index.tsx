import MainMenuBar from "@/common/components/MainMenuBar";
import Link from "next/link";
import { useRouter } from "next/router";

export type ClientInfo = {
    clientId: string,
    name: string,
    value: string
}

const clients: Array<ClientInfo> = [
    { clientId: "jimbus-flimbus", name: "Jimbus Q Flimbus", value: "$109" },
    { clientId: "criggly-clampus", name: "Ciggly Q Clampus", value: "$2,000" },
    { clientId: "horace-hambus", name: "Horace Q Hambus", value: "$8" },
    { clientId: "wimble-wombus", name: "Wimble Q Wombus", value: "$3,000,000" },
]

const ClientHome = ():JSX.Element => {
    const router = useRouter();

    console.log(router.query);
    const { clientId } = router.query;

    return <div>
        <h1>Client Home</h1>
        <MainMenuBar />
        <ul>
            {clients.map(client => 
                <li key={client.clientId}>
                    <Link href={{
                        pathname: "/clients/[clientId]",
                        query: { clientId: client.clientId}
                    }}>{client.name}; Value: {client.value}</Link>
                </li>    
            )}
        </ul>
    </div>
}

export default ClientHome;