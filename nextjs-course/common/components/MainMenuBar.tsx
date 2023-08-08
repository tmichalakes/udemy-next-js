import LinkBar, { LinkBarLink } from "./LinkBar";

const mainMenuLinks: Array<LinkBarLink> = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/products", text: "Products" },
    { href: "/clients", text: "Our Clients" },
    { href: "/blog", text: "Blogosphere" }
]
const MainMenuBar = (): JSX.Element => {
    return <LinkBar links={mainMenuLinks} />
}

export default MainMenuBar;