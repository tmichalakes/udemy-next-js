import { useRouter } from "next/router";

const ClientHome = ():JSX.Element => {
    const router = useRouter();

    console.log(router.query);
    const { clientId } = router.query;

    return <div>
        <h1>Client Home for client with clientId {clientId}</h1>
    </div>
}

export default ClientHome;