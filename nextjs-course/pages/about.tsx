import MainMenuBar from "@/common/components/MainMenuBar";

const About = (): JSX.Element => {
    return <div>
        <h1>About Us</h1>
        <MainMenuBar />
        <ul>
            <li>Name: Grimble</li>
            <li>Location: Antarctica</li>
            <li>Hobbies: Elephant Seal Wrestling, Penguinism (The Penguin Religion)</li>
        </ul>
    </div>
}

export default About;