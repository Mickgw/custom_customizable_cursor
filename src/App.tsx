// import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import ProjectList from "./components/ProjectList/ProjectList";

function App() {
    // const lenis = useLenis((scroll) => {
    //     // called every scroll
    // });

    return (
        <>
            {/* <ReactLenis root> */}
            <header className="fixed inset-0 z-[9999] h-[100px] bg-white shadow-md">
                <div className="container h-full flex items-center">
                    <h2>Custom cursor</h2>
                </div>
            </header>
            <main>
                <div className="container py-20"></div>
                <ProjectList />
                <ProjectList />
                <ProjectList />
            </main>
            <footer className="h-[400px]">
                <div className="container">
                    <h2>Footer</h2>
                </div>
            </footer>
            {/* </ReactLenis> */}
        </>
    );
}

export default App;
