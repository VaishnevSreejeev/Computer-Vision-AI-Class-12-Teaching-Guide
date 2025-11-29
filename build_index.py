import os
import re

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
            "react-dom/client": "https://esm.sh/react-dom@18.2.0/client?dev",
            "lucide-react": "https://esm.sh/lucide-react@0.300.0?dev",
            "@splinetool/react-spline": "https://esm.sh/@splinetool/react-spline@4.0.0?external=react,react-dom",
            "@splinetool/runtime": "https://esm.sh/@splinetool/runtime@1.0.0"
        }
    }
    </script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js" crossorigin="anonymous"></script>
    <script>
        // Mock clsx/tailwind-merge for the cn utility since we don't have the full packages
        window.cn = function(...inputs) {
            return inputs.filter(Boolean).join(' ');
        };
    </script>
    <style>
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .animate-in { animation: fadeIn 0.5s ease-out; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
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
        
        // Correctly split imports for Babel Standalone
        import { 
          Eye, Camera, Layers, Grid3X3, Maximize, Activity, 
          CheckCircle, Brain, Search, Scan,
          Zap, ArrowRight, MousePointer2, Scissors, 
          Smartphone, FileText, ShieldAlert, Car, Stethoscope,
          Palette, Database, Network, Disc, Upload, X,
          Image
        } from 'lucide-react';
        
        const ImageIcon = Image;

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

def read_file(path):
    if os.path.exists(path):
        with open(path, 'r', encoding='utf-8') as f:
            return f.read()
    return ""

# Read all components
utils_code = read_file('lib/utils.js').replace('export function', 'function')
card_code = read_file('components/ui/card.js')
spotlight_code = read_file('components/ui/spotlight.js')
spline_code = read_file('components/ui/spline.js')
landing_code = read_file('components/LandingPage.js')
app_code = read_file('App.js')

# Remove the default export from App.js
app_code = app_code.replace('export default function ComputerVisionGuide', 'function ComputerVisionGuide')

# Remove imports from App.js
app_code = re.sub(r'import\s+[\s\S]*?from\s+[\'"].*?[\'"];?', '', app_code)

# Combine all code
full_code = f"""
{utils_code}
{card_code}
{spotlight_code}
{spline_code}
{landing_code}
{app_code}
"""

final_html = html_template.replace('%APP_CODE%', full_code)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(final_html)
