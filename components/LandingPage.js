// components/LandingPage.js

function LandingPage({ onStart }) {
    return (
        <Card className="w-full h-screen bg-black/[0.96] relative overflow-hidden border-0 rounded-none">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />

            <div className="flex h-full flex-col md:flex-row z-10 relative">
                {/* Left content */}
                <div className="flex-1 p-8 md:p-16 flex flex-col justify-center text-left">
                    <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-6">
                        Computer Vision <br /> Guide
                    </h1>
                    <p className="mt-4 text-neutral-300 max-w-lg text-lg leading-relaxed mb-8">
                        Explore the fascinating world where machines learn to see.
                        From pixels to understanding, dive into the algorithms that power autonomous cars,
                        medical diagnostics, and more.
                    </p>

                    <button
                        onClick={onStart}
                        className="w-fit px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-neutral-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                    >
                        Start Learning
                    </button>
                </div>

                {/* Right content */}
                <div className="flex-1 relative min-h-[300px] md:min-h-full">
                    {/* Spline Scene */}
                    <SplineScene
                        scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                        className="w-full h-full"
                    />
                </div>
            </div>
        </Card>
    );
}
