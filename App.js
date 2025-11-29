import React, { useState, useEffect, useRef } from 'react';
import {
    Eye, Camera, Layers, Grid3X3, Maximize, Activity,
    CheckCircle, Brain, Search, Scan,
    Zap, ArrowRight, MousePointer2, Scissors,
    Smartphone, FileText, ShieldAlert, Car, Stethoscope,
    Palette, Database, Network, Disc, Upload, Image as ImageIcon, X
} from 'lucide-react';

// --- Helper Components ---

const SectionTitle = ({ icon: Icon, title, subtitle }) => (
    <div className="mb-8 border-b border-gray-200 pb-4">
        <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-blue-100 rounded-xl text-blue-600 shadow-sm">
                <Icon size={28} />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
        </div>
        <p className="text-gray-600 ml-1 text-lg">{subtitle}</p>
    </div>
);

// --- 1. Introduction Section ---
const IntroSection = () => (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <SectionTitle
            icon={Eye}
            title="What is Computer Vision?"
            subtitle="Teaching machines to interpret the visual world."
        />

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-blue-100">
            <p className="text-gray-700 text-lg leading-relaxed">
                Computer Vision (CV) is a field of AI that enables computers to "see" and understand digital images.
                It involves capturing data (Sensing), processing it (Interpreting), and taking action.
                As defined in the textbook: <span className="italic text-blue-600">"CV derives meaningful information from digital images, videos and other visual inputs."</span>
            </p>
        </div>

        {/* Human vs Machine Comparison */}
        <div className="grid md:grid-cols-2 gap-8">
            <div className="relative group overflow-hidden bg-white p-8 rounded-2xl shadow-sm border-2 border-green-100 hover:border-green-300 transition-all">
                <div className="absolute top-0 right-0 bg-green-100 text-green-700 px-4 py-1 rounded-bl-xl font-bold text-xs tracking-wider">BIOLOGICAL</div>
                <div className="flex flex-col items-center text-center">
                    <div className="p-4 bg-green-50 rounded-full mb-4">
                        <Eye size={48} className="text-green-600" />
                    </div>
                    <h3 className="font-bold text-2xl mb-4 text-gray-800">Human Vision</h3>
                    <div className="w-full space-y-3 text-left text-gray-600">
                        <div className="flex justify-between border-b border-green-50 pb-2"><span>Sensor:</span> <span className="font-bold text-gray-800">Retina</span></div>
                        <div className="flex justify-between border-b border-green-50 pb-2"><span>Transmission:</span> <span className="font-bold text-gray-800">Optic Nerve</span></div>
                        <div className="flex justify-between border-b border-green-50 pb-2"><span>Processor:</span> <span className="font-bold text-gray-800">Visual Cortex</span></div>
                        <div className="flex justify-between pt-1"><span>Learning:</span> <span className="font-bold text-gray-800">Experience</span></div>
                    </div>
                </div>
            </div>

            <div className="relative group overflow-hidden bg-white p-8 rounded-2xl shadow-sm border-2 border-blue-100 hover:border-blue-300 transition-all">
                <div className="absolute top-0 right-0 bg-blue-100 text-blue-700 px-4 py-1 rounded-bl-xl font-bold text-xs tracking-wider">ARTIFICIAL</div>
                <div className="flex flex-col items-center text-center">
                    <div className="p-4 bg-blue-50 rounded-full mb-4">
                        <Camera size={48} className="text-blue-600" />
                    </div>
                    <h3 className="font-bold text-2xl mb-4 text-gray-800">Computer Vision</h3>
                    <div className="w-full space-y-3 text-left text-gray-600">
                        <div className="flex justify-between border-b border-blue-50 pb-2"><span>Sensor:</span> <span className="font-bold text-gray-800">Camera</span></div>
                        <div className="flex justify-between border-b border-blue-50 pb-2"><span>Transmission:</span> <span className="font-bold text-gray-800">Cables</span></div>
                        <div className="flex justify-between border-b border-blue-50 pb-2"><span>Processor:</span> <span className="font-bold text-gray-800">GPU/CPU</span></div>
                        <div className="flex justify-between pt-1"><span>Learning:</span> <span className="font-bold text-gray-800">Training Data</span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

// --- 2. Pixels, RGB & Resolution ---
const PixelLab = () => {
    // State for dynamic grid
    const [gridWidth, setGridWidth] = useState(8);
    const [gridHeight, setGridHeight] = useState(8);
    const [grid, setGrid] = useState(Array(64).fill(0)); // Default 8x8

    // RGB State
    const [r, setR] = useState(100);
    const [g, setG] = useState(150);
    const [b, setB] = useState(200);

    // Update grid when dimensions change
    useEffect(() => {
        const totalPixels = gridWidth * gridHeight;
        setGrid(Array(totalPixels).fill(0));
    }, [gridWidth, gridHeight]);

    const toggleCell = (index) => {
        const newGrid = [...grid];
        newGrid[index] = newGrid[index] === 0 ? 1 : 0;
        setGrid(newGrid);
    };

    return (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <SectionTitle
                icon={Grid3X3}
                title="How Machines See"
                subtitle="From Binary to RGB"
            />

            {/* 1. Binary Images & Resolution */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="font-bold text-xl mb-4 flex items-center gap-2 text-gray-800">
                    <MousePointer2 className="text-blue-500" /> 1. Binary Images & Resolution
                </h3>
                <p className="text-gray-600 mb-6">
                    Computers store black and white images as a grid of numbers.
                    <strong> 0 = Black, 1 = White</strong>.
                    <br />
                    The <strong>Resolution</strong> is the number of pixels (Width x Height).
                </p>

                {/* Controls for Grid Size */}
                <div className="flex flex-wrap gap-6 mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200 items-center">
                    <div className="flex items-center gap-3">
                        <label className="text-sm font-bold text-gray-700">Width:</label>
                        <input
                            type="number" min="2" max="20"
                            value={gridWidth}
                            onChange={(e) => setGridWidth(Math.min(20, Math.max(2, Number(e.target.value))))}
                            className="w-16 p-2 rounded border border-gray-300 text-center font-mono"
                        />
                    </div>
                    <span className="text-gray-400 font-bold">x</span>
                    <div className="flex items-center gap-3">
                        <label className="text-sm font-bold text-gray-700">Height:</label>
                        <input
                            type="number" min="2" max="20"
                            value={gridHeight}
                            onChange={(e) => setGridHeight(Math.min(20, Math.max(2, Number(e.target.value))))}
                            className="w-16 p-2 rounded border border-gray-300 text-center font-mono"
                        />
                    </div>
                    <div className="ml-auto text-sm text-blue-600 font-bold bg-blue-100 px-3 py-1 rounded-full">
                        Total Pixels: {gridWidth * gridHeight}
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Interactive Grid */}
                    <div className="flex flex-col items-center">
                        <div
                            className="grid gap-[1px] bg-gray-300 p-1 rounded shadow-inner transition-all duration-300"
                            style={{
                                gridTemplateColumns: `repeat(${gridWidth}, 1fr)`,
                                width: 'min(100%, 300px)',
                                aspectRatio: `${gridWidth}/${gridHeight}`
                            }}
                        >
                            {grid.map((cell, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => toggleCell(idx)}
                                    className={`w-full h-full transition-colors duration-100 ${cell === 1 ? 'bg-white' : 'bg-black'}`}
                                    title={`Pixel ${idx}`}
                                />
                            ))}
                        </div>
                        <div className="flex gap-4 mt-4">
                            <button onClick={() => setGrid(Array(gridWidth * gridHeight).fill(0))} className="text-sm text-red-500 font-bold hover:bg-red-50 px-3 py-1 rounded transition-colors">Clear (All Black)</button>
                            <button onClick={() => setGrid(Array(gridWidth * gridHeight).fill(1))} className="text-sm text-gray-500 font-bold hover:bg-gray-100 px-3 py-1 rounded transition-colors">Fill (All White)</button>
                        </div>
                    </div>

                    {/* Digital Representation */}
                    <div className="bg-slate-900 p-4 rounded-lg font-mono text-xs text-green-400 overflow-auto shadow-inner h-[300px] flex flex-col">
                        <div className="mb-2 text-gray-500 border-b border-gray-700 pb-1 flex justify-between">
                            <span>Digital Representation</span>
                            <span>{gridWidth}x{gridHeight} Matrix</span>
                        </div>
                        <div
                            className="grid gap-x-2 gap-y-1 text-center"
                            style={{ gridTemplateColumns: `repeat(${gridWidth}, 1fr)` }}
                        >
                            {grid.map((cell, idx) => (
                                <span key={idx} className={`${cell ? "text-white font-bold" : "text-gray-600"}`}>{cell}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. RGB Mixer */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="font-bold text-xl mb-4 flex items-center gap-2 text-gray-800">
                    <Palette className="text-purple-500" /> 2. RGB Color Model
                </h3>
                <p className="text-gray-600 mb-6">
                    Color images combine <strong>Red, Green, and Blue</strong> channels. Each channel has a value from 0 to 255 (8 bits).
                    Total colors = $256 \times 256 \times 256 \approx 16.7$ Million.
                </p>

                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div
                        className="w-40 h-40 rounded-full shadow-lg border-4 border-gray-100 transition-colors duration-75"
                        style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}
                    />
                    <div className="flex-1 w-full space-y-4">
                        {[{ l: 'Red', v: r, s: setR, c: 'accent-red-500', t: 'text-red-600' },
                        { l: 'Green', v: g, s: setG, c: 'accent-green-500', t: 'text-green-600' },
                        { l: 'Blue', v: b, s: setB, c: 'accent-blue-500', t: 'text-blue-600' }].map((channel) => (
                            <div key={channel.l}>
                                <div className={`flex justify-between text-sm font-bold ${channel.t} mb-1`}>
                                    <span>{channel.l}</span><span>{channel.v}</span>
                                </div>
                                <input
                                    type="range" min="0" max="255" value={channel.v}
                                    onChange={(e) => channel.s(Number(e.target.value))}
                                    className={`w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer ${channel.c}`}
                                />
                            </div>
                        ))}
                        <div className="bg-gray-100 p-2 rounded text-center font-mono text-sm mt-2">
                            Pixel Value: ({r}, {g}, {b})
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- 3. The Full CV Pipeline (Textbook Structure) ---
const PipelineDeepDive = () => {
    const [activeStage, setActiveStage] = useState('acquisition');
    const [brightness, setBrightness] = useState(100);
    const [noise, setNoise] = useState(false);
    const [grayscale, setGrayscale] = useState(0);
    const [contrast, setContrast] = useState(100);

    // Image State
    const [imageSrc, setImageSrc] = useState(null);
    const fileInputRef = useRef(null);

    // Default Cat Image (Public Placeholder closest to Ragdoll)
    const defaultImage = "https://images.unsplash.com/photo-1513245543132-31f507417b26?q=80&w=600&auto=format&fit=crop";

    useEffect(() => {
        // Set default image on mount if none
        if (!imageSrc) setImageSrc(defaultImage);
    }, []);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => setImageSrc(e.target.result);
            reader.readAsDataURL(file);
        }
    };

    // Stages based on textbook (3.3.1 - 3.3.5)
    const stages = [
        { id: 'acquisition', title: '1. Image Acquisition', icon: Camera },
        { id: 'preprocessing', title: '2. Preprocessing', icon: Scissors },
        { id: 'features', title: '3. Feature Extraction', icon: Scan },
        { id: 'detection', title: '4. Detection/Segmentation', icon: Search },
        { id: 'highlevel', title: '5. High-Level Processing', icon: Brain },
    ];

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <SectionTitle icon={Layers} title="The CV Pipeline" subtitle="The 5-Stage Process" />

            {/* Stepper Nav */}
            <div className="flex overflow-x-auto pb-4 gap-3 no-scrollbar">
                {stages.map((stage) => (
                    <button
                        key={stage.id}
                        onClick={() => setActiveStage(stage.id)}
                        className={`flex flex-col items-center min-w-[120px] p-3 rounded-xl border-2 transition-all ${activeStage === stage.id
                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                            : 'border-gray-200 bg-white text-gray-500 hover:border-gray-300'
                            }`}
                    >
                        <stage.icon size={24} className="mb-2" />
                        <span className="text-xs font-bold text-center">{stage.title}</span>
                    </button>
                ))}
            </div>

            {/* Dynamic Content */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm min-h-[500px] flex flex-col">

                {/* SHARED IMAGE VIEWPORT (Left/Top) & CONTROLS (Right/Bottom) */}

                {activeStage === 'acquisition' && (
                    <div className="flex flex-col items-center justify-center space-y-6 h-full">
                        <h3 className="text-2xl font-bold text-gray-800">Stage 1: Image Acquisition</h3>
                        <p className="text-gray-600 max-w-lg text-center">
                            The first step is capturing visual data. You can use the default sample or
                            <strong> upload the specific cat image</strong> you have!
                        </p>

                        <div className="relative w-64 h-64 bg-gray-100 rounded-xl overflow-hidden shadow-md border-2 border-gray-300">
                            {imageSrc ? (
                                <img src={imageSrc} alt="Acquired" className="w-full h-full object-cover" />
                            ) : (
                                <div className="flex items-center justify-center h-full text-gray-400">No Image</div>
                            )}
                        </div>

                        <div className="flex gap-4">
                            <button
                                onClick={() => fileInputRef.current.click()}
                                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-bold transition-colors"
                            >
                                <Upload size={20} /> Upload Image
                            </button>
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleFileUpload}
                                accept="image/*"
                                className="hidden"
                            />
                            <button
                                onClick={() => setImageSrc(defaultImage)}
                                className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 font-bold transition-colors"
                            >
                                Use Sample
                            </button>
                        </div>
                        <p className="text-xs text-gray-400">Supported: JPG, PNG, WEBP</p>
                    </div>
                )}

                {activeStage === 'preprocessing' && (
                    <div className="grid md:grid-cols-2 gap-8 h-full">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-gray-800">Stage 2: Preprocessing</h3>
                            <p className="text-gray-600">
                                Enhance the uploaded image to help the AI. Adjust the sliders to see how machines normalize data.
                            </p>

                            <div className="p-6 bg-gray-50 rounded-xl space-y-6 border border-gray-100">
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm font-bold text-gray-700">
                                        <span>Brightness</span>
                                        <span>{brightness}%</span>
                                    </div>
                                    <input type="range" min="0" max="200" value={brightness} onChange={(e) => setBrightness(e.target.value)} className="w-full accent-blue-600" />
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm font-bold text-gray-700">
                                        <span>Contrast</span>
                                        <span>{contrast}%</span>
                                    </div>
                                    <input type="range" min="0" max="300" value={contrast} onChange={(e) => setContrast(e.target.value)} className="w-full accent-purple-600" />
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm font-bold text-gray-700">
                                        <span>Grayscale</span>
                                        <span>{grayscale}%</span>
                                    </div>
                                    <input type="range" min="0" max="100" value={grayscale} onChange={(e) => setGrayscale(e.target.value)} className="w-full accent-gray-600" />
                                </div>

                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-bold text-gray-700">Noise Reduction (Blur)</span>
                                    <button
                                        onClick={() => setNoise(!noise)}
                                        className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${noise ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}
                                    >
                                        {noise ? 'Active' : 'Off'}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-center bg-gray-900 rounded-xl overflow-hidden relative shadow-inner min-h-[300px]">
                            {/* Live Image Filter View */}
                            {imageSrc && (
                                <img
                                    src={imageSrc}
                                    alt="Preprocessing"
                                    className="max-w-full max-h-full object-contain transition-all duration-200"
                                    style={{
                                        filter: `brightness(${brightness}%) contrast(${contrast}%) grayscale(${grayscale}%) blur(${noise ? '3px' : '0px'})`
                                    }}
                                />
                            )}
                            <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded text-xs backdrop-blur-sm">Live Preview</div>
                        </div>
                    </div>
                )}

                {activeStage === 'features' && (
                    <div className="grid md:grid-cols-2 gap-8 h-full">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-gray-800">Stage 3: Feature Extraction</h3>
                            <p className="text-gray-600">
                                The computer doesn't see the "Cat" yet. It looks for <strong>edges, curves, and textures</strong>.
                                <br /><br />
                                We can simulate "Edge Detection" by looking at high-contrast changes in the image.
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 bg-blue-50 rounded-lg text-center border border-blue-100">
                                    <Scan size={32} className="mx-auto text-blue-600 mb-2" />
                                    <h5 className="font-bold text-blue-900">Edge Detection</h5>
                                    <p className="text-xs text-blue-700 mt-1">Detecting boundaries</p>
                                </div>
                                <div className="p-4 bg-purple-50 rounded-lg text-center border border-purple-100">
                                    <Grid3X3 size={32} className="mx-auto text-purple-600 mb-2" />
                                    <h5 className="font-bold text-purple-900">Texture Analysis</h5>
                                    <p className="text-xs text-purple-700 mt-1">Fur patterns</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-center bg-black rounded-xl overflow-hidden relative shadow-inner min-h-[300px]">
                            {/* Simulated Edge Detection via CSS */}
                            {imageSrc && (
                                <img
                                    src={imageSrc}
                                    alt="Feature Extraction"
                                    className="max-w-full max-h-full object-contain"
                                    style={{
                                        filter: 'grayscale(100%) contrast(500%) invert(1)'
                                    }}
                                />
                            )}
                            <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded text-xs font-bold">Simulated Machine View</div>
                        </div>
                    </div>
                )}

                {activeStage === 'detection' && (
                    <div className="grid md:grid-cols-2 gap-8 h-full">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-gray-800">Stage 4: Detection</h3>
                            <p className="text-gray-600">
                                Now the AI identifies the object.
                                In <strong>Object Detection</strong>, it draws a bounding box around the identified subject.
                            </p>
                            <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded-r-lg">
                                <h5 className="font-bold text-green-900 flex items-center gap-2"><CheckCircle size={18} /> Detection Complete</h5>
                                <p className="text-sm text-green-800 mt-1">
                                    Class: <span className="font-bold">Cat (Ragdoll)</span><br />
                                    Confidence: <span className="font-bold">98.5%</span>
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center bg-gray-100 rounded-xl overflow-hidden relative shadow-inner min-h-[300px] border border-gray-200">
                            {imageSrc && (
                                <div className="relative inline-block">
                                    <img src={imageSrc} alt="Detection" className="max-w-full max-h-[300px] object-contain block" />
                                    {/* Simulated Bounding Box - Centered roughly as a demo for user uploaded images */}
                                    <div className="absolute top-[10%] left-[20%] right-[20%] bottom-[10%] border-4 border-green-500 rounded-lg shadow-[0_0_15px_rgba(34,197,94,0.5)] animate-pulse">
                                        <span className="absolute -top-8 left-0 bg-green-500 text-white px-2 py-1 text-xs font-bold rounded">Cat 98%</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {activeStage === 'highlevel' && (
                    <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
                        <Brain size={64} className="text-pink-500 animate-pulse" />
                        <h3 className="text-2xl font-bold text-gray-800">Stage 5: High-Level Processing</h3>
                        <p className="text-gray-600 max-w-md">
                            Final Decision Making. Based on the detection of a "Cat", the system can now perform an action.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl mt-4">
                            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm text-left">
                                <h5 className="font-bold text-gray-500 text-xs uppercase mb-2">Input Data</h5>
                                <div className="font-mono text-sm text-blue-600">
                                    Object: Cat<br />
                                    Breed: Ragdoll<br />
                                    Emotion: Calm
                                </div>
                            </div>
                            <div className="bg-gray-800 p-4 rounded-xl border border-gray-700 shadow-sm text-left">
                                <h5 className="font-bold text-gray-400 text-xs uppercase mb-2">System Action</h5>
                                <div className="font-mono text-sm text-green-400">
                                    {`> Action: DISPENSE_TREAT()`}<br />
                                    {`> Status: EXECUTING...`}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

// --- 4. NEW: ML Concepts (KNN vs K-Means Visualizer) ---
const MLVisualizer = () => {
    const [activeTab, setActiveTab] = useState('knn');
    const [points, setPoints] = useState([]);

    // KNN State
    const [kValue, setKValue] = useState(3);
    const [testPoint, setTestPoint] = useState(null);
    const [nearestNeighbors, setNearestNeighbors] = useState([]);

    // K-Means State
    const [centroids, setCentroids] = useState([]);
    const [kmeansStep, setKmeansStep] = useState(0); // 0: Init, 1: Assign, 2: Update
    const [assignments, setAssignments] = useState([]); // Index of centroid for each point

    // Concept State (Dynamic Dimensions)
    const [featurePixels, setFeaturePixels] = useState([0, 255, 0, 255]); // 2x2 grid example

    // Initialize random data
    useEffect(() => {
        const p = [];
        // Cluster A (Dogs - Low x, High y) - Orange
        for (let i = 0; i < 15; i++) p.push({ x: 40 + Math.random() * 60, y: 180 + Math.random() * 60, type: 'Dog', color: 'bg-orange-500' });
        // Cluster B (Cats - High x, Low y) - Purple
        for (let i = 0; i < 15; i++) p.push({ x: 180 + Math.random() * 60, y: 60 + Math.random() * 60, type: 'Cat', color: 'bg-purple-500' });
        setPoints(p);
        setAssignments(new Array(30).fill(-1)); // No assignment initially
    }, []);

    // --- KNN Logic ---
    const handleKNNClick = (e) => {
        if (activeTab !== 'knn') return;
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // 1. Calculate Distances
        const distances = points.map((p, i) => ({
            ...p,
            dist: Math.sqrt((p.x - x) ** 2 + (p.y - y) ** 2),
            id: i
        }));

        // 2. Sort and Find K Nearest
        distances.sort((a, b) => a.dist - b.dist);
        const neighbors = distances.slice(0, kValue);
        setNearestNeighbors(neighbors);

        // 3. Vote
        const votes = { Dog: 0, Cat: 0 };
        neighbors.forEach(n => votes[n.type]++);
        const prediction = votes.Dog > votes.Cat ? 'Dog' : 'Cat';

        setTestPoint({ x, y, prediction });
    };

    // --- K-Means Logic ---
    const resetKMeans = () => {
        setCentroids([]);
        setKmeansStep(0);
        setAssignments(new Array(points.length).fill(-1));
    };

    const nextKMeansStep = () => {
        if (kmeansStep === 0) {
            // Init: Place 2 Random Centroids
            setCentroids([
                { x: 100, y: 100, color: 'bg-red-500', label: 'A' },
                { x: 200, y: 200, color: 'bg-blue-500', label: 'B' }
            ]);
            setKmeansStep(1);
        } else if (kmeansStep === 1) {
            // Assign: Find nearest centroid for each point
            const newAssignments = points.map(p => {
                const d0 = Math.sqrt((p.x - centroids[0].x) ** 2 + (p.y - centroids[0].y) ** 2);
                const d1 = Math.sqrt((p.x - centroids[1].x) ** 2 + (p.y - centroids[1].y) ** 2);
                return d0 < d1 ? 0 : 1;
            });
            setAssignments(newAssignments);
            setKmeansStep(2);
        } else if (kmeansStep === 2) {
            // Update: Move centroids to average position
            const newCentroids = [...centroids];

            // Cluster 0
            const c0Points = points.filter((_, i) => assignments[i] === 0);
            if (c0Points.length > 0) {
                newCentroids[0].x = c0Points.reduce((sum, p) => sum + p.x, 0) / c0Points.length;
                newCentroids[0].y = c0Points.reduce((sum, p) => sum + p.y, 0) / c0Points.length;
            }

            // Cluster 1
            const c1Points = points.filter((_, i) => assignments[i] === 1);
            if (c1Points.length > 0) {
                newCentroids[1].x = c1Points.reduce((sum, p) => sum + p.x, 0) / c1Points.length;
                newCentroids[1].y = c1Points.reduce((sum, p) => sum + p.y, 0) / c1Points.length;
            }

            setCentroids(newCentroids);
            setKmeansStep(1); // Go back to assign
        }
    };

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <SectionTitle icon={Network} title="ML Concepts: KNN & K-Means" subtitle="Visualizing how AI classifies data" />

            {/* 1. Feature Vector Concept */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mb-8">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Database className="text-blue-500" /> Concept: From Image to Graph
                </h3>

                <div className="mb-6 text-sm text-gray-600 space-y-2">
                    <p>
                        Computers don't see "images". They see a <strong>list of numbers</strong> (a vector).
                    </p>
                    <p>
                        If an image has <strong>4 pixels</strong> (2x2), it is a single point in <strong>4-dimensional space</strong>.
                        We can map the first two pixels to X and Y coordinates to visualize it.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">

                    {/* LEFT: The Image Builder (2x2 Grid) */}
                    <div className="flex-1 w-full bg-gray-50 p-4 rounded-xl border border-gray-200">
                        <div className="flex justify-between items-center mb-4">
                            <h4 className="font-bold text-gray-700 text-sm uppercase">1. The Image (2x2 Pixels)</h4>
                        </div>

                        {/* Pixel Visuals */}
                        <div className="grid grid-cols-2 gap-1 w-32 mx-auto mb-6">
                            {featurePixels.map((val, i) => (
                                <div key={i} className="relative group">
                                    <div
                                        className="w-16 h-16 border-2 border-gray-400 flex items-center justify-center text-xs font-bold text-white shadow-sm transition-colors cursor-pointer hover:border-blue-400"
                                        style={{ backgroundColor: `rgb(${val},${val},${val})` }}
                                        onClick={() => {
                                            const newPixels = [...featurePixels];
                                            newPixels[i] = newPixels[i] === 0 ? 255 : 0; // Simple toggle for ease
                                            setFeaturePixels(newPixels);
                                        }}
                                        title="Click to toggle Black/White"
                                    >
                                        P{i + 1}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Sliders */}
                        <div className="space-y-3 max-h-40 overflow-y-auto pr-2">
                            {featurePixels.map((val, i) => (
                                <div key={i} className="flex items-center gap-3 text-xs">
                                    <span className="font-bold text-gray-500 w-6">P{i + 1}</span>
                                    <input
                                        type="range" min="0" max="255" value={val}
                                        onChange={(e) => {
                                            const newPixels = [...featurePixels];
                                            newPixels[i] = Number(e.target.value);
                                            setFeaturePixels(newPixels);
                                        }}
                                        className="flex-1 h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-blue-600"
                                    />
                                    <span className="font-mono w-8 text-right">{val}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <ArrowRight className="text-gray-300 hidden lg:block self-center" size={32} />

                    {/* MIDDLE: The Vector */}
                    <div className="flex-1 w-full bg-gray-900 p-4 rounded-xl border border-gray-800 text-green-400 font-mono shadow-inner self-stretch flex flex-col justify-center">
                        <h4 className="font-bold text-gray-500 text-xs uppercase mb-4 border-b border-gray-700 pb-2">2. Feature Vector</h4>
                        <div className="text-center text-lg break-all">
                            [ {featurePixels.join(', ')} ]
                        </div>
                        <div className="mt-4 text-xs text-gray-500 text-center">
                            This is how the AI "reads" the image.<br />
                            A vector of size {featurePixels.length}.
                        </div>
                    </div>

                    <ArrowRight className="text-gray-300 hidden lg:block self-center" size={32} />

                    {/* RIGHT: The Graph */}
                    <div className="flex-1 w-full bg-white p-4 rounded-xl border border-gray-200 self-stretch flex flex-col">
                        <h4 className="font-bold text-gray-700 text-sm uppercase mb-2">3. The Graph Point</h4>

                        <div className="relative w-full aspect-square border-l-2 border-b-2 border-gray-400 bg-gray-50 mb-2">
                            <div
                                className="absolute w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-lg transition-all duration-200"
                                style={{
                                    left: `${(featurePixels[0] / 255) * 100}%`,
                                    bottom: `${(featurePixels[1] / 255) * 100}%`,
                                    transform: 'translate(-50%, 50%)'
                                }}
                            />
                            <div className="absolute bottom-2 right-2 text-xs font-bold text-blue-600">P1 (X)</div>
                            <div className="absolute top-2 left-2 text-xs font-bold text-blue-600">P2 (Y)</div>
                        </div>

                        <div className="text-xs text-gray-500 text-center min-h-[40px]">
                            Plotting P1 vs P2.<br />
                            <span className="text-gray-400">P3 and P4 are hidden dimensions here.</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Interactive Graph (KNN vs K-Means) */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm min-h-[500px]">
                <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                    <h3 className="font-bold text-xl text-gray-800">Interactive Classifier</h3>
                    <div className="flex bg-gray-100 p-1 rounded-lg">
                        <button onClick={() => setActiveTab('knn')} className={`px-6 py-2 rounded-md text-sm font-bold transition-all ${activeTab === 'knn' ? 'bg-white shadow text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}>KNN (Supervised)</button>
                        <button onClick={() => setActiveTab('kmeans')} className={`px-6 py-2 rounded-md text-sm font-bold transition-all ${activeTab === 'kmeans' ? 'bg-white shadow text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}>K-Means (Unsupervised)</button>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* GRAPH AREA */}
                    <div className="md:col-span-2 relative h-[400px] bg-gray-50 border border-gray-300 rounded-xl cursor-crosshair overflow-hidden shadow-inner" onClick={handleKNNClick}>
                        {/* Grid Lines */}
                        <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 pointer-events-none opacity-10">
                            {Array(36).fill(0).map((_, i) => <div key={i} className="border border-gray-400" />)}
                        </div>

                        {/* Axis Labels */}
                        <div className="absolute bottom-2 right-4 text-xs font-bold text-gray-400">Feature X</div>
                        <div className="absolute top-4 left-2 text-xs font-bold text-gray-400">Feature Y</div>

                        {/* DATA POINTS */}
                        {points.map((p, i) => {
                            // Determine color based on mode
                            let colorClass = p.color;
                            if (activeTab === 'kmeans') {
                                if (assignments[i] === 0) colorClass = 'bg-red-400';
                                else if (assignments[i] === 1) colorClass = 'bg-blue-400';
                                else colorClass = 'bg-gray-400'; // Unassigned
                            }

                            return (
                                <div
                                    key={i}
                                    className={`absolute w-3 h-3 rounded-full border border-white shadow-sm transition-all duration-500 ${colorClass}`}
                                    style={{ left: p.x, top: p.y }}
                                />
                            );
                        })}

                        {/* KNN VISUALS */}
                        {activeTab === 'knn' && testPoint && (
                            <>
                                {/* Lines to Neighbors */}
                                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                                    {nearestNeighbors.map((n, i) => (
                                        <line
                                            key={i}
                                            x1={testPoint.x} y1={testPoint.y}
                                            x2={n.x} y2={n.y}
                                            stroke="rgba(0,0,0,0.2)" strokeWidth="2" strokeDasharray="4"
                                        />
                                    ))}
                                </svg>
                                {/* Test Point */}
                                <div
                                    className={`absolute w-5 h-5 border-2 border-white rounded-full shadow-xl animate-bounce z-10 ${testPoint.prediction === 'Dog' ? 'bg-orange-500' : 'bg-purple-500'}`}
                                    style={{ left: testPoint.x - 10, top: testPoint.y - 10 }}
                                />
                                <div className="absolute bg-white/90 backdrop-blur px-2 py-1 rounded text-xs font-bold shadow-sm pointer-events-none" style={{ left: testPoint.x + 10, top: testPoint.y - 10 }}>
                                    {testPoint.prediction}?
                                </div>
                            </>
                        )}

                        {/* K-MEANS VISUALS */}
                        {activeTab === 'kmeans' && centroids.map((c, i) => (
                            <div
                                key={i}
                                className={`absolute w-8 h-8 flex items-center justify-center rounded-full border-2 border-white shadow-xl transition-all duration-700 z-20 ${c.color} text-white font-bold`}
                                style={{ left: c.x - 16, top: c.y - 16 }}
                            >
                                {c.label}
                            </div>
                        ))}
                    </div>

                    {/* CONTROLS AREA */}
                    <div className="space-y-6">
                        {activeTab === 'knn' ? (
                            <div className="space-y-6 animate-in fade-in">
                                <div>
                                    <h4 className="font-bold text-blue-800 text-lg mb-2">K-Nearest Neighbors</h4>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        Supervised Learning. The algorithm classifies a new point based on the majority vote of its <strong>'K'</strong> nearest neighbors.
                                    </p>
                                </div>

                                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                                    <label className="text-xs font-bold text-blue-800 uppercase mb-2 block">Value of K: {kValue}</label>
                                    <input
                                        type="range" min="1" max="9" step="2"
                                        value={kValue} onChange={(e) => setKValue(Number(e.target.value))}
                                        className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                                    />
                                    <div className="flex justify-between text-xs text-blue-400 mt-1">
                                        <span>1</span><span>3</span><span>5</span><span>7</span><span>9</span>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="text-xs font-bold text-gray-400 uppercase">Instructions</div>
                                    <div className="flex items-center gap-2 text-sm text-gray-700">
                                        <MousePointer2 size={16} /> Click anywhere on the graph!
                                    </div>
                                </div>

                                {testPoint && (
                                    <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                                        <div className="text-xs font-bold text-gray-400 uppercase mb-2">Result</div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className={`w-3 h-3 rounded-full ${testPoint.prediction === 'Dog' ? 'bg-orange-500' : 'bg-purple-500'}`} />
                                            <span className="font-bold text-lg">It's a {testPoint.prediction}!</span>
                                        </div>
                                        <div className="text-xs text-gray-500">
                                            Based on {kValue} closest neighbors.
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="space-y-6 animate-in fade-in">
                                <div>
                                    <h4 className="font-bold text-blue-800 text-lg mb-2">K-Means Clustering</h4>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        Unsupervised Learning. The algorithm finds groups (clusters) in data without knowing labels beforehand.
                                    </p>
                                </div>

                                <div className="space-y-3">
                                    <div className={`p-3 rounded-lg border transition-all ${kmeansStep === 0 ? 'bg-blue-50 border-blue-200' : 'bg-white border-gray-100 opacity-50'}`}>
                                        <span className="font-bold text-blue-900 text-sm">Step 1: Initialization</span>
                                        <p className="text-xs text-blue-700">Place random centroids (Red & Blue).</p>
                                    </div>
                                    <div className={`p-3 rounded-lg border transition-all ${kmeansStep === 1 ? 'bg-blue-50 border-blue-200' : 'bg-white border-gray-100 opacity-50'}`}>
                                        <span className="font-bold text-blue-900 text-sm">Step 2: Assignment</span>
                                        <p className="text-xs text-blue-700">Color points based on nearest centroid.</p>
                                    </div>
                                    <div className={`p-3 rounded-lg border transition-all ${kmeansStep === 2 ? 'bg-blue-50 border-blue-200' : 'bg-white border-gray-100 opacity-50'}`}>
                                        <span className="font-bold text-blue-900 text-sm">Step 3: Update</span>
                                        <p className="text-xs text-blue-700">Move centroids to the center of their group.</p>
                                    </div>
                                </div>

                                <div className="flex gap-2">
                                    <button
                                        onClick={nextKMeansStep}
                                        className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
                                    >
                                        {kmeansStep === 0 ? 'Start Initialization' : kmeansStep === 1 ? 'Assign Points' : 'Update Centroids'}
                                    </button>
                                    <button
                                        onClick={resetKMeans}
                                        className="px-4 bg-gray-100 text-gray-600 rounded-xl font-bold hover:bg-gray-200"
                                    >
                                        Reset
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- 5. Applications ---
const ApplicationsSection = () => {
    const apps = [
        { title: "Healthcare", icon: Stethoscope, desc: "Tumour detection in MRI." },
        { title: "Automotive", icon: Car, desc: "Lane detection in self-driving cars." },
        { title: "Social Media", icon: Smartphone, desc: "Face filters & auto-tagging." },
        { title: "Security", icon: ShieldAlert, desc: "Surveillance & anomaly detection." },
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <SectionTitle icon={Zap} title="Applications" subtitle="Real-world Impact" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {apps.map((app, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all text-center group">
                        <div className="bg-blue-50 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600 group-hover:scale-110 transition-transform">
                            <app.icon size={28} />
                        </div>
                        <h3 className="font-bold text-gray-800 mb-2">{app.title}</h3>
                        <p className="text-sm text-gray-500">{app.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

// --- 6. Quiz Section (Full Textbook Questions) ---
const Quiz = () => {
    const [currentQ, setCurrentQ] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [selected, setSelected] = useState(null);

    // Questions from Page 63-64 of the PDF
    const questions = [
        {
            q: "1. The field of study that helps to develop techniques to help computers 'see' is:",
            options: ["Python", "Convolution", "Computer Vision", "Data Analysis"],
            correct: 2
        },
        {
            q: "2. Task of taking an input image and outputting/assigning a class label that best describes the image is:",
            options: ["Image classification", "Image identification", "Image localization", "Image prioritization"],
            correct: 0
        },
        {
            q: "3. Identify the incorrect option related to CV basics:",
            options: ["CV involves analyzing digital images.", "A digital image is a sequence of numbers.", "RGB color code is used ONLY for images taken using cameras.", "Image is converted into pixels."],
            correct: 2
        },
        {
            q: "4. The process of capturing a digital image or video using a digital camera/scanner is related to:",
            options: ["Image Acquisition", "Preprocessing", "Feature Extraction", "Detection"],
            correct: 0
        },
        {
            q: "5. Which algorithm may be used for supervised learning in computer vision?",
            options: ["KNN", "K-means", "K-fold", "KEAM"],
            correct: 0
        },
        {
            q: "6. A computer sees an image as a series of:",
            options: ["colors", "pixels", "objects", "all of the above"],
            correct: 1
        },
        {
            q: "7. ______ empowers computer vision systems to extract valuable insights and drive intelligent decision-making.",
            options: ["Low level processing", "High insights", "High-level processing", "None of the above"],
            correct: 2
        },
        {
            q: "8. In Feature Extraction, which technique identifies abrupt changes in pixel intensity and highlights boundaries?",
            options: ["Edge detection", "Corner detection", "Texture Analysis", "boundary detection"],
            correct: 0
        },
        {
            q: "9. Choose the incorrect statement related to preprocessing:",
            options: ["It enhances quality", "Noise reduction is used", "Histogram equalization adjusts contrast", "Edge detection is ensured in images"],
            correct: 3 // Edge detection is feature extraction, not preprocessing
        },
        {
            q: "10. 1 byte = ____ bits",
            options: ["10", "8", "2", "1"],
            correct: 1
        }
    ];

    const handleAnswer = (idx) => {
        setSelected(idx);
        if (idx === questions[currentQ].correct) setScore(score + 1);

        setTimeout(() => {
            if (currentQ < questions.length - 1) {
                setCurrentQ(currentQ + 1);
                setSelected(null);
            } else {
                setShowResult(true);
            }
        }, 1000);
    };

    const resetQuiz = () => {
        setCurrentQ(0);
        setScore(0);
        setShowResult(false);
        setSelected(null);
    };

    if (showResult) {
        return (
            <div className="bg-white p-10 rounded-2xl border border-gray-200 text-center space-y-6 shadow-lg">
                <CheckCircle size={80} className="text-green-500 mx-auto animate-bounce" />
                <h3 className="text-3xl font-bold text-gray-800">Quiz Complete!</h3>
                <p className="text-xl">You scored <span className="font-bold text-blue-600">{score} / {questions.length}</span></p>
                <button onClick={resetQuiz} className="px-8 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-bold transition-all">Try Again</button>
            </div>
        );
    }

    return (
        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-500">
            <SectionTitle icon={CheckCircle} title="Textbook Quiz" subtitle="Assess your knowledge" />

            <div className="mb-6 flex justify-between items-end border-b border-gray-100 pb-4">
                <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">Question {currentQ + 1} of {questions.length}</span>
                <div className="text-right">
                    <div className="text-xs text-gray-400 font-bold uppercase">Current Score</div>
                    <div className="text-2xl font-black text-blue-600">{score}</div>
                </div>
            </div>

            <p className="text-xl font-medium mb-8 text-gray-800 leading-relaxed">{questions[currentQ].q}</p>

            <div className="space-y-4">
                {questions[currentQ].options.map((opt, idx) => (
                    <button
                        key={idx}
                        onClick={() => handleAnswer(idx)}
                        disabled={selected !== null}
                        className={`w-full text-left p-5 rounded-xl border-2 transition-all font-medium text-lg ${selected === null
                            ? 'hover:bg-blue-50 border-gray-100 text-gray-700 hover:border-blue-200'
                            : selected === idx
                                ? idx === questions[currentQ].correct
                                    ? 'bg-green-50 border-green-500 text-green-800'
                                    : 'bg-red-50 border-red-500 text-red-800'
                                : idx === questions[currentQ].correct
                                    ? 'bg-green-50 border-green-500 text-green-800'
                                    : 'bg-gray-50 border-gray-100 opacity-50'
                            }`}
                    >
                        {opt}
                    </button>
                ))}
            </div>
        </div>
    );
};

// --- Main App ---

export default function ComputerVisionGuide() {
    const [activeSection, setActiveSection] = useState('intro');
    const [showLanding, setShowLanding] = useState(true);

    const navItems = [
        { id: 'intro', label: '1. Introduction', icon: Eye },
        { id: 'pixels', label: '2. Pixels & RGB', icon: Grid3X3 },
        { id: 'pipeline', label: '3. The Pipeline', icon: Layers },
        { id: 'ml', label: '4. KNN & K-Means', icon: Network },
        { id: 'apps', label: '5. Applications', icon: Smartphone },
        { id: 'quiz', label: '6. Quiz', icon: CheckCircle },
    ];

    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 font-sans selection:bg-blue-200 relative">
            {/* Landing Page Overlay - Always mounted, hidden via opacity to prevent 3D context loss/errors */}
            <div
                className={`fixed inset-0 z-50 transition-opacity duration-700 ${showLanding ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                aria-hidden={!showLanding}
            >
                {/* 
                     We keep this mounted to avoid 'removeChild' errors from the 3D library (Spline).
                     The 'pointer-events-none' class ensures it doesn't block clicks when hidden.
                 */}
                <LandingPage onStart={() => setShowLanding(false)} />
            </div>

            {/* Main Content - Always rendered but hidden initially */}
            <div className={`transition-opacity duration-1000 ${showLanding ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
                {/* Header */}
                <header className="bg-white border-b border-gray-200 sticky top-0 z-30 shadow-sm/50 backdrop-blur-md bg-opacity-90">
                    <div className="max-w-6xl mx-auto px-4 py-4 flex items-center gap-4">
                        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-2.5 rounded-xl shadow-lg shadow-blue-500/30">
                            <Activity size={24} />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-gray-900 tracking-tight">Making Machines See</h1>
                            <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Unit 3 • Student Handbook</p>
                        </div>
                    </div>
                </header>

                {/* Main Content Layout */}
                <main className="max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-12 gap-8">

                    {/* Sidebar Navigation */}
                    <nav className="md:col-span-3 lg:col-span-3">
                        <div className="sticky top-28 space-y-2">
                            {navItems.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => setActiveSection(item.id)}
                                        className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-bold transition-all duration-200 ${activeSection === item.id
                                            ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/20 translate-x-1'
                                            : 'bg-white text-gray-500 hover:bg-gray-100 border border-transparent hover:border-gray-200'
                                            }`}
                                    >
                                        <Icon size={18} />
                                        {item.label}
                                    </button>
                                );
                            })}

                            <div className="mt-8 bg-gradient-to-br from-indigo-50 to-blue-50 p-5 rounded-2xl border border-blue-100 text-xs text-indigo-900 shadow-inner">
                                <p className="font-bold mb-2 flex items-center gap-2 text-blue-700"><Zap size={14} /> Did you know?</p>
                                <p className="leading-relaxed opacity-80">
                                    Deep Learning models can now surpass human accuracy in identifying specific objects in images!
                                </p>
                            </div>
                        </div>
                    </nav>

                    {/* Dynamic Content Area */}
                    <div className="md:col-span-9 lg:col-span-9 pb-20">
                        {activeSection === 'intro' && <IntroSection />}
                        {activeSection === 'pixels' && <PixelLab />}
                        {activeSection === 'pipeline' && <PipelineDeepDive />}
                        {activeSection === 'ml' && <MLVisualizer />}
                        {activeSection === 'apps' && <ApplicationsSection />}
                        {activeSection === 'quiz' && <Quiz />}
                    </div>
                </main>
            </div>
        </div>
    );
}
