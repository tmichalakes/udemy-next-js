import MainMenuBar from "@/common/components/MainMenuBar";
import { useRouter } from "next/router";

const BlogPosts = ():JSX.Element => {
    const router = useRouter();

    console.log(router.query);

    return (
        <div>
            <h1>Blog Posts!</h1>
            <MainMenuBar />
        </div>
    )
}

export default BlogPosts;