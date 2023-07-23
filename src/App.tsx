import Footer from "./components/Footer";
import Header from "./components/Header";
import ProjectCardGrid from "./components/ProjectCardGrid/ProjectCardGrid";
import ProjectList from "./components/ProjectList/ProjectList";

function App() {
    return (
        <>
            <Header />
            <main>
                <div className="container pt-32">
                    <h2 className="font-light">
                        Behold, my labor of cursor love! I've brewed a pixelated
                        marvel, brimming with charm and zest. It dances across
                        your screen with a mischievous wink, optimized for
                        nimble clicks and whimsical travels. And fear not, dear
                        user, for I've sprinkled it with customization magic,
                        allowing your cursor dreams to run wild!
                    </h2>
                </div>
                <ProjectList />
                <ProjectCardGrid />
            </main>
            <Footer />
        </>
    );
}

export default App;
