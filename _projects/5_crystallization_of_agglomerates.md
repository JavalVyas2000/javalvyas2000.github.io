---
collection: projects
title: "Estimation of Ozone in Atmosphere"
image: /images/projects/crystallization_of_agglomerates/classification.png
tags: 
- Machine Learning
background: "#A95C68" 
---
<style>
    .image-container {
      text-align: center;
    }
    .responsive-image {
      width: 500px; /* Set the desired width */
      height: auto; /* Maintain aspect ratio */
    }
    .button-container {
    width: 100%;
    display: flex;
    justify-content: left;
    }

    .button-group {
        display: flex;
        gap: 15px; /* Space between buttons */
        align-items: center;
    }

    .icon-button {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 15px;
        border: 2px solid black;
        background-color: white;
        color: black;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s ease;
        text-decoration: none !important;
    }

    .icon-button i {
        margin-right: 8px;
        font-size: 20px;
    }

    .icon-button:hover {
        background-color: black;
        color: white;
    }
</style>

<!-- <div class="button-container">
    <div class="button-group">
        <a href="https://github.com/FarStryke21/MAPF" class="icon-button github-button">
            <i class="fab fa-github"></i>
            <span>GitHub</span>
        </a>
        <a href="/files/16745_tyagi_gite_kokil_chulawala.pdf" class="icon-button github-button">
            <i class="fas fa-file-alt"></i>
            <span>Article</span>
        </a>
    </div>
</div> -->

---------------------
# Problem Statement

<div class="button-container">
    <a href="https://github.com/JavalVyas2000/Classification-of-Needle-like-crystals-using-Image-Analysis" class="icon-button arxiv-button">
        <i class="fab fa-github"></i>
        <span>GitHub</span>
    </a>
</div>

## Introduction
The objective of this project was to develop an image analysis method to determine particle agglomeration in the crystallization process. Monitoring particle behavior is essential for optimizing crystallization processes in industries like pharmaceuticals and chemicals. Agglomeration, where particles clump together, can influence the efficiency and quality of crystallization, making it crucial to detect and quantify agglomerates accurately.

## Motivation and Objective:

To achieve this, OpenCV, a widely used open-source computer vision library, was employed for image pre-processing and feature extraction. The overall process followed these steps:

- Image Pre-processing:
The raw images of the crystallization process were pre-processed to enhance the clarity of particle boundaries. This was done using:

    - Gaussian Blur to smooth out noise and improve the accuracy of edge detection.
    - Canny Edge Detection to detect the boundaries of the particles, which is crucial for identifying individual crystals and agglomerates.

- Feature Extraction and Classification:
Once the particles were delineated, several geometrical features were extracted to differentiate primary crystals from agglomerates. These features included:

    - Convexity
    - Concavity
    - Circularity

These features provided valuable insights into the shape and structure of the particles, which were used to classify them as either primary crystals or agglomerates.
- Contouring and Analysis:
Using OpenCV’s contouring functionalities, the boundaries of the particles were accurately determined. The contours were then analyzed based on the extracted features to classify the particles.


------------------------
## Initial Testing and Results:

The method was tested on an initial sample of 80 particles, and the classification accuracy was impressive, with 78 particles classified correctly. This resulted in an error rate of less than 3%, demonstrating the method’s effectiveness in identifying and classifying agglomerates.

While the initial tests showed promising results, the classification thresholds may need to be adjusted based on the specific setup of the system or varying conditions in different crystallization processes.

## Impact and Potential Applications:

This image analysis method provides a valuable tool for real-time monitoring of the crystallization process, enabling more precise control over particle behavior. By accurately identifying and quantifying agglomerates, the method can assist in optimizing crystallization parameters, improving product quality, and increasing process efficiency.