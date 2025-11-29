# Making Machines See: A Computer Vision Interactive Guide

[![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://vaishnevsreejeev.github.io/Computer-Vision-AI-Class-12-Teaching-Guide/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> **For Teachers:** This repository serves as a digital companion to **Unit 3: Making Machines See** of the Class 12 AI Curriculum. It transforms static textbook concepts into interactive web-based visualizations to help students understand how computers perceive images.

## 📖 About This Project

Computer Vision (CV) enables machines to "see" and interpret visual data much like humans. This web application is designed to demystify complex CV concepts through hands-on interaction, specifically tailored for the student handbook curriculum.

Instead of just reading about pixels and algorithms, students can interact with them directly in the browser.

## 📚 Curriculum Alignment

This tool is designed to support the following sections of the **Unit 3 Handbook**:

| Handbook Section | Topic | Web App Feature |
| :--- | :--- | :--- |
| **3.2.1** | **Basics of Digital Images** | **Pixel Playground:** Interactive grid showing how 0-255 values create grayscale and RGB images. |
| **3.3** | **CV Process Flow** | **The CV Pipeline:** A step-by-step visualizer of the 5 stages (Acquisition to High-Level Processing). |
| **3.3.3** | **Feature Extraction** | **Visual Filters:** Real-time demos of Edge Detection and Corner Detection algorithms. |
| **3.3.4** | **Detection/Segmentation** | **Segmentation Demo:** Visual difference between Semantic (class-based) and Instance (object-based) segmentation. |
| **3.7** | **OpenCV Logic** | **Code Playground:** Simplified visualizers for resizing and grayscale conversion logic. |

## ✨ Key Features

### 1. Interactive Modules
* **Binary Art & Pixels:** A digital version of *Activity 3.1*. Students can toggle bits to see how computers store images as sequences of numbers.
* **Resolution Simulator:** Visualize how pixel count affects image detail (Unit 3.2.2).

### 2. The Computer Vision Pipeline
A guided tour through the five stages of computer vision:
1.  **Acquisition:** Understanding inputs.
2.  **Preprocessing:** Noise reduction and normalization.
3.  **Feature Extraction:** Identifying edges and textures.
4.  **Detection/Segmentation:** Classification vs. Localization.
5.  **High-Level Processing:** Decision making.

### 3. ML Visualizer
* **KNN & Clustering:** Interactive graphs to explain how algorithms classify objects based on features (Unit 3.3.4).

### 4. Knowledge Check
* **Gamified Quiz:** A built-in quiz engine based on the *Competency Based Questions* from the handbook to test student retention.

## 👩‍🏫 Teacher's Guide: How to use this in class

1.  **Introduction (10 mins):** Use the **Pixel Playground** to demonstrate "How Machines See" (Unit 3.1). Show that an image is just a matrix of numbers.
2.  **Core Concepts (20 mins):** Walk through the **CV Pipeline** tab while explaining the textbook theory.
3.  **Activity Time (15 mins):**
    * Have students use the **ML Visualizer** to see classification in action.
    * *Optional:* If internet is available, link out to the **Teachable Machine** integration (Activity 3.2).
4.  **Wrap up:** Use the **Quiz** tab for a fun end-of-class assessment.

## 🛠️ Technical Details

This project was built to be lightweight and accessible in any classroom environment.

* **Framework:** React (via CDN for zero-build setup)
* **Styling:** Tailwind CSS
* **Icons:** Lucide React
* **Deployment:** Static HTML/JS (Runs offline if needed)

## 🚀 How to Run Locally

Since school computers often have restrictions, this app is designed to run without complex installations.

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/vaishnevsreejeev/Computer-Vision-AI-Class-12-Teaching-Guide.git](https://github.com/vaishnevsreejeev/Computer-Vision-AI-Class-12-Teaching-Guide.git)
    ```
2.  **Open in Browser:**
    Simply double-click `index.html`.
    * *Note for Developers:* For full functionality (like image uploads), it is recommended to run a simple local server to avoid CORS issues:
        ```bash
        python -m http.server
        ```

## 🤝 Contributing

We welcome contributions from students and teachers! If you have a new visualization idea for **OpenCV** or **Deep Learning** concepts, please open a pull request.

---
*Based on the "AI Student Handbook - Class 12" curriculum.*
