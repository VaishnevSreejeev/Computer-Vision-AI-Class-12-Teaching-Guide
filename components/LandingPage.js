// components/LandingPage.js

function LandingPage({ onStart }) {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 text-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:16px_16px]"></div>

            <div className="z-10 max-w-2xl space-y-8 animate-in fade-in zoom-in duration-700">
                <div className="inline-block p-4 bg-blue-50 rounded-full mb-4">
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200 rotate-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M2 12h20" /><path d="M2 12l5-5" /><path d="M2 12l5 5" /></svg>
                    </div>
                </div>

                <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tight">
                    Computer Vision <br />
                    <span className="text-blue-600">From Scratch</span>
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed">
                    A beginner-friendly interactive guide to understanding how machines "see".
                    No complex math, just visual intuition.
                </p>

                <button
                    onClick={onStart}
                    className="group relative px-8 py-4 bg-gray-900 text-white font-bold text-lg rounded-full hover:bg-blue-600 transition-all duration-300 shadow-xl hover:shadow-blue-200 hover:-translate-y-1"
                >
                    Start Learning
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
                </button>
            </div>

            <div className="absolute bottom-8 text-gray-400 text-sm font-medium">
                Unit 3 • Artificial Intelligence
            </div>
        </div>
    );
}
