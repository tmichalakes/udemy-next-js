import { useRouter } from "next/router";

const Product = (): JSX.Element => {
    const router = useRouter();

    console.log(router.pathname);
    console.log(router.query);

    const {productId} = router.query;

    return <h1>It's a product with product id {productId}</h1>
};

export default Product;
