---
title: "Visual Odometry for Autonomous Navigation"
excerpt: "Short description of portfolio item number 3 <br/><img src='/images/500x300.png'>"
image: /images/projects/VisualOdom/icon.png
tags: 
- Computer Vision 
- Deep Learning
- Machine Learning
collection: projects
background: "#E6E6FA"
---

<style>
    .image-container {
        text-align: center;
        margin: 20px;
    }
    .image-container img {
        max-width: 100%;
        height: auto;
    }
    .image-caption {
        margin-top: 8px;
        font-size: 16px;
        color: #555;
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

<div class="button-container">
    <div class="button-group">
        <a href="https://github.com/FarStryke21/DeepVO" class="icon-button github-button">
            <i class="fab fa-github"></i>
            <span>GitHub</span>
        </a>
        <a href="/files/Visual_Odometry.pdf" class="icon-button github-button">
            <i class="fas fa-file-alt"></i>
            <span>Article</span>
        </a>
    </div>
</div>
## Problem Statement
Precise localization of mobile robots is crucial for autonomous navigation, motion tracking, and obstacle avoidance. Traditional localization methods like GPS, INS, and wheel odometry suffer from significant errors or high costs. Visual odometry (VO) presents a more accurate and cost-effective alternative. Our project aims to compare the effectiveness of traditional geometry-based VO with an end-to-end RNN+CNN model for trajectory estimation.

## Motivation
The motivation behind this project is to address the limitations of existing localization methods by exploring VO techniques. By leveraging image data, we aim to improve the accuracy and robustness of localization in environments where traditional methods fall short. The potential benefits include better performance in GPS-denied areas and more reliable navigation for autonomous systems.

## Approach
1. **Geometry-Based Methods**:
   - **Sparse Feature-Based Methods**: These methods extract and match feature points from images to estimate motion. While effective, they are prone to drift over time.
   - **Direct Methods**: These methods use photometric consistency to estimate the pose from all image pixels, providing higher accuracy in texture-less environments.

<div class="image-container">
    <img src="/images/projects/VisualOdom/stereobm.png" alt="Description of the image">
    <div class="image-caption">Using Stereo Block Matching for generating depth maps</div>
</div>


<div class="image-container">
    <img src="/images/projects/VisualOdom/stereosgbm.png" alt="Description of the image">
    <div class="image-caption">Using Stereo Semi-Global Block Matching for generating depth maps</div>
</div>

2. **Learning-Based Methods**:
   - **Deep Learning (DL)**: We employed CNNs and RNNs to learn features and model sequential information from large datasets. This approach bypasses the need for explicit geometric modeling, allowing the system to infer VO directly from sensor measurements.

<div class="image-container">
    <img src="/images/projects/VisualOdom/architecture.png" alt="Description of the image">
    <div class="image-caption">Model Architecture for Odometry</div>
</div>

## Solution
- **Geometry-Based VO**: We implemented traditional monocular VO using feature detection, tracking, and motion estimation techniques.
- **RNN+CNN Model**: We developed an end-to-end model utilizing a pre-trained FlowNet CNN and RNNs to predict vehicle trajectory directly from images.

#### Results
- **Experiments**: We conducted experiments on the KITTI dataset, training on 7 sequences and testing on 5 sequences.
- **Comparison**: Both methods performed comparably, with the RNN+CNN model demonstrating its potential by eliminating the need for prior system knowledge and directly inferring poses.

<div class="image-container">
    <img src="/images/projects/VisualOdom/05_rpy.png" alt="Description of the image">
    <div class="image-caption">Comparison of our results with ground truth</div>
</div>

#### Discussion
The results of our experiments show that the RNN+CNN model is a viable alternative to traditional geometry-based VO methods. The learning-based approach offers simplicity and potential for real-time applications without requiring pre-processed data or extensive geometric modeling. While both methods have their advantages, the RNN+CNN model's ability to learn directly from data makes it a promising solution for future autonomous navigation systems.

<div class="image-container">
    <img src="/images/projects/VisualOdom/05_path_3D.png" alt="Description of the image">
    <div class="image-caption">Plotting our results in 3D space against the ground truth</div>
</div>