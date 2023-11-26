import Footer from "./components/Footer";
import Header from "./components/Header";
import ProjectCardGrid from "./components/ProjectCardGrid/ProjectCardGrid";
import ProjectList from "./components/ProjectList/ProjectList";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import InteractiveMarquee from "./components/InteractiveMarquee/InteractiveMarquee";

import thumbnail_1 from "./assets/images/DSC00674-min.jpg";
import thumbnail_2 from "./assets/images/GP5-15-min.jpg";
import thumbnail_3 from "./assets/images/GoodwoodDAY2-50-min.jpg";

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
                        Step into a space where creativity and practicality come
                        together, showcasing a collection of quietly crafted
                        components. Each element reflects a commitment to
                        thoughtful design rather than self-promotion. Whether
                        it's the subtle dance of a cursor or the gentle appeal
                        of an Interactive Marquee, these features highlight the
                        simple beauty of technology meeting a touch of
                        craftsmanship. This collection invites you to explore
                        without the need for grand declarations, allowing the
                        elements to quietly express the artful possibilities
                        within the digital landscape. Welcome to an unassuming
                        presentation where innovation gently unfolds, and each
                        component shares its story through modest elegance.
                    </h2>
                </div>

                <div className="w-full py-40">
                    <h1 className="container mb-4 text-[8vh]">
                        Interactive Marquee
                    </h1>
                    <div className="divider_ w-full h-px bg-gray-300 mb-20"></div>

                    <div className="container">
                        <h3 className="w-fit mb-4 rounded-full bg-gray-300 text-white px-10 py-3">
                            Marquee with text
                        </h3>
                    </div>
                    <InteractiveMarquee
                        speed={3}
                        gap={100}
                        skewStrength={3}
                        dragStrength={0.2}
                        scrollMovementSpeed={3}
                        initialDirection="right"
                        movementDamping={100}
                        movementStiffness={500}
                        className="mb-40"
                    >
                        <h1 className="text-[10vh] text-blue-700">
                            This is the InteractiveMarquee
                        </h1>
                    </InteractiveMarquee>

                    <div className="container">
                        <h3 className="w-fit mb-10 rounded-full bg-gray-300 text-white px-10 py-3">
                            Marquee with gallery (intitial direction <i>left</i>
                            )
                        </h3>
                    </div>

                    <InteractiveMarquee
                        speed={2}
                        gap={20}
                        skew={false}
                        dragStrength={0.3}
                        scrollMovementSpeed={1}
                        movementDamping={100}
                        movementStiffness={1000}
                        initialDirection="left"
                        className="mb-40"
                    >
                        <div className="w-screen flex-grow-1 grid grid-cols-3 gap-8 h-[300px]">
                            <div className="relative flex items-center justify-center overflow-hidden">
                                <img
                                    src={thumbnail_1}
                                    className="absolute w-full h-full inset-0 object-cover"
                                />
                            </div>
                            <div className="relative flex items-center justify-center pointer-events-none">
                                <img
                                    src={thumbnail_2}
                                    className="absolute w-full h-full inset-0 object-cover"
                                />
                            </div>
                            <div className="relative flex items-center justify-center pointer-events-none">
                                <img
                                    src={thumbnail_3}
                                    className="absolute w-full h-full inset-0 object-cover"
                                />
                            </div>
                        </div>
                    </InteractiveMarquee>

                    <div className="container">
                        <h3 className="w-fit mb-10 rounded-full bg-gray-300 text-white px-10 py-3">
                            Marquee with gallery (intitial direction{" "}
                            <i>right</i>)
                        </h3>
                    </div>
                    <InteractiveMarquee
                        speed={2}
                        gap={20}
                        skew={false}
                        dragStrength={0.3}
                        scrollMovementSpeed={1}
                        movementDamping={100}
                        movementStiffness={1000}
                        initialDirection="right"
                        className="py-4"
                    >
                        <div className="w-screen flex-grow-1 grid grid-cols-3 gap-8 h-[300px]">
                            <div className="relative flex items-center justify-center overflow-hidden pointer-events-none">
                                <img
                                    src={thumbnail_1}
                                    className="absolute w-full h-full inset-0 object-cover"
                                />
                            </div>
                            <div className="relative flex items-center justify-center pointer-events-none">
                                <img
                                    src={thumbnail_2}
                                    className="absolute w-full h-full inset-0 object-cover"
                                />
                            </div>
                            <div className="relative flex items-center justify-center pointer-events-none">
                                <img
                                    src={thumbnail_3}
                                    className="absolute w-full h-full inset-0 object-cover"
                                />
                            </div>
                        </div>
                    </InteractiveMarquee>
                </div>

                <div className="py-40">
                    <h1 className="container text-[8vh]">
                        Customizable cursor
                    </h1>
                    <div className="divider_ w-full h-px bg-gray-300"></div>

                    <div className="container py-20">
                        <div className="mb-40">
                            <h3 className="w-fit mb-10 rounded-full bg-gray-300 text-white px-10 py-3">
                                Cursor with video inside
                            </h3>
                            <ProjectList />
                        </div>

                        <div>
                            <h3 className="w-fit mb-10 rounded-full bg-gray-300 text-white px-10 py-3">
                                Cursor with simple element inside
                            </h3>
                            <ProjectCardGrid />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </ReactLenis>
    );
}

export default App;
