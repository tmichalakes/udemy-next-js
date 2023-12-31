import MainMenuBar from "@/common/components/MainMenuBar";
import { useRouter } from "next/router";

const Product = (): JSX.Element => {
    const router = useRouter();

    console.log(router.pathname);
    console.log(router.query);

    const {productId} = router.query;

    return (
        <div>
            <h1>It's a product with product id {productId}</h1>
            <MainMenuBar />
        </div>
    )
};

export default Product;
