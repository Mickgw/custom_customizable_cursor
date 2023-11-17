import Footer from "./components/Footer";
import Header from "./components/Header";
import ProjectCardGrid from "./components/ProjectCardGrid/ProjectCardGrid";
import ProjectList from "./components/ProjectList/ProjectList";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import InteractiveMarquee from "./components/InteractiveMarquee/InteractiveMarquee";

function App() {
    useEffect(() => {
        AOS.init();
    }, []);

    useLenis(({}: any) => {
        // called every scroll
    });

    return (
        <ReactLenis
            root
            options={{
                duration: 0.85,
            }}
        >
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
                </div>

                <div className="flex py-40">
                    <InteractiveMarquee
                        speed={7}
                        gap={65}
                        skewStrength={200}
                        dragStrength={0.1}
                    >
                        <h1 className="text-[15vh]">
                            - This is the InteractiveMarquee
                        </h1>
                    </InteractiveMarquee>
                </div>

                <ProjectList />
                <ProjectCardGrid />
            </main>
            <Footer />
        </ReactLenis>
    );
}

export default App;
