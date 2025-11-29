import os
import re

def read_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        return f.read()

# HTML Template
html_template = """<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>Computer Vision Guide</title>
    <script src='https://cdn.tailwindcss.com'></script>
    <script type='importmap'>
    {
        "imports": {
            "react": "https://esm.sh/react@18.2.0?dev",
            "react/jsx-runtime": "https://esm.sh/react@18.2.0/jsx-runtime?dev",
            "react-dom/client": "https://esm.sh/react-dom@18.2.0/client?dev",
            "lucide-react": "https://esm.sh/lucide-react@0.300.0?dev"
        }
    }
    </script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js" crossorigin="anonymous"></script>
    <style>
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .animate-in { animation: fadeIn 0.5s ease-out; }
        .zoom-in { animation: zoomIn 0.5s ease-out; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes zoomIn { from { opacity: 0.9; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
        
        /* Custom Scrollbar for Matrix View */
        .custom-scrollbar::-webkit-scrollbar { width: 6px; height: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #1e293b; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #475569; border-radius: 3px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #64748b; }
    </style>
</head>
<body class='bg-gray-50'>
    <div id='root'></div>
    
    <script>
      window.onerror = function(message, source, lineno, colno, error) {
        console.error("Global Error:", message, source, lineno, error);
        document.getElementById('root').innerHTML = `
          <div style='color: #7f1d1d; padding: 20px; font-family: monospace; background: #fef2f2; border: 1px solid #f87171; margin: 20px; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);'>
            <h1 style='font-size: 1.25rem; font-weight: bold; margin-bottom: 10px;'>Application Error</h1>
            <p style="margin-bottom: 8px;"><strong>Message:</strong> ${message}</p>
            <p style="margin-bottom: 8px;"><strong>Source:</strong> ${source}:${lineno}</p>
            <pre style='background: #fff; padding: 12px; overflow: auto; border-radius: 4px; border: 1px solid #fee2e2;'>${error ? error.stack : 'No stack trace available'}</pre>
            <p style="margin-top: 10px; font-size: 0.875rem; color: #991b1b;">Check the browser console (F12) for more details.</p>
          </div>
        `;
      };
    </script>

    <script type='text/babel' data-type='module'>
        import React, { useState, useEffect, useRef } from 'react';
        import { createRoot } from 'react-dom/client';
        
        // Lucide Icons
        import { 
          Eye, Camera, Layers, Grid3X3, Maximize, Activity, 
          CheckCircle, Brain, Search, Scan,
          Zap, ArrowRight, MousePointer2, Scissors, 
          Smartphone, FileText, ShieldAlert, Car, Stethoscope,
          Palette, Database, Network, Disc, Upload, X,
          Image
        } from 'lucide-react';
        
        const ImageIcon = Image;

// --- COMPONENT CODE START ---
%COMPONENT_CODE%
// --- COMPONENT CODE END ---

// --- APP CODE START ---
%APP_CODE%
// --- APP CODE END ---

        try {
            const root = createRoot(document.getElementById('root'));
            root.render(<ComputerVisionGuide />);
        } catch (err) {
            console.error("Render Error:", err);
            window.onerror(err.message, "App Render", 0, 0, err);
        }
    </script>
</body>
</html>"""

# Read Files
landing_code = read_file('components/LandingPage.js')
app_code = read_file('App.js')

# Process LandingPage.js
# Remove imports/exports
landing_code = re.sub(r'import\s+[\s\S]*?from\s+[\'"].*?[\'"];?', '', landing_code)
landing_code = landing_code.replace('export default LandingPage;', '')
landing_code = landing_code.replace('export default function LandingPage', 'function LandingPage')

# Process App.js
# Remove imports
app_code = re.sub(r'import\s+[\s\S]*?from\s+[\'"].*?[\'"];?', '', app_code)
# Remove default export
app_code = app_code.replace('export default function ComputerVisionGuide', 'function ComputerVisionGuide')

# Combine
final_html = html_template.replace('%COMPONENT_CODE%', landing_code).replace('%APP_CODE%', app_code)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(final_html)

print("Build complete: index.html updated.")
