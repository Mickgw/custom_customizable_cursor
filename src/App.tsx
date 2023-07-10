import Header from "./components/Header";
import ProjectList from "./components/ProjectList/ProjectList";

function App() {
    return (
        <>
            <Header />
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
        </>
    );
}

export default App;
