import Link from "next/link";

/**
 * Advantages of using Link
 * - It pre-fetches data
 * - It doesn't do a full load
 */

export type LinkBarLink = {text: string, href: string}

export type LinkBarProps = {
    links: Array<LinkBarLink>
}

const LinkBar = (props: LinkBarProps): JSX.Element => {
    const { links } = props;
    let linkCount = 0;

    return (
        <div>
            {links.map(link => 
                <span key={++linkCount}>
                    <Link href={link.href}>{link.text}</Link>&nbsp;
                </span>
            )}
        </div>
    )
}

export default LinkBar;