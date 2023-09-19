import Footer from "./components/Footer";
import Header from "./components/Header";
import ProjectCardGrid from "./components/ProjectCardGrid/ProjectCardGrid";
import ProjectList from "./components/ProjectList/ProjectList";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

import { useEffect, useRef } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
    useEffect(() => {
        AOS.init();
    }, []);

    const lenis = useLenis(({ scroll }: any) => {
        // called every scroll
    });

    return (
        <ReactLenis root>
            <Header />
            <main>
                <div className="container pt-32">
                    <h2 className="font-light mb-32">
                        Behold, my labor of cursor love! I've brewed a pixelated
                        marvel, brimming with charm and zest. It dances across
                        your screen with a mischievous wink, optimized for
                        nimble clicks and whimsical travels. And fear not, dear
                        user, for I've sprinkled it with customization magic,
                        allowing your cursor dreams to run wild!
                    </h2>
                    <h1 className="text-center mb-32">
                        Beneath are a couple of examples.
                    </h1>
                </div>
                <ProjectList />
                <ProjectCardGrid />
            </main>
            <Footer />
        </ReactLenis>
    );
}

export default App;
