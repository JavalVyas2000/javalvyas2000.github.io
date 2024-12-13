---
collection: projects
title: "Gaussian Splatting"
image: /images/projects/gaussian_splatting/gaussian_splatting.gif
tags: 
- Deep Learning
- Machine Learning 
- Computer Vision
background: "#A95C68" 
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
    h1, h2 {
        color: #2c3e50;
    }
    code {
        background-color: #f4f4f4;
        padding: 2px 4px;
        border-radius: 4px;
    }
    pre {
        background-color: #f4f4f4;
        padding: 10px;
        border-radius: 4px;
        overflow-x: auto;
    }
    .equation {
        font-style: italic;
        margin: 10px 0;
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
        <a href="https://github.com/FarStryke21/LearningFor3D_16825/tree/main/assignment4"
         class="icon-button github-button">
            <i class="fab fa-github"></i>
            <span>GitHub</span>
        </a>
    </div>
</div>


<h2>Overview</h2>
<p>In this project, we explore 3D Gaussian Splatting by building a simplified version of the 3D Gaussian rasterization pipeline introduced by the original paper. We create a rasterizer, use it to render pre-trained 3D Gaussians, and then optimize 3D Gaussians to represent custom scenes.</p>

<h2>3D Gaussian Rasterization</h2>
<p>We implement a 3D Gaussian rasterization pipeline in PyTorch. Our simplified implementation avoids many of the optimizations used by the official implementation for simplicity. We only use the view independent components of the spherical harmonic coefficients.</p>

<h3>Project 3D Gaussians to Obtain 2D Gaussians</h3>
<p>We project 3D Gaussians in the world space to 2D Gaussians on the image plane of a camera. Following equations (5) and (6) of the original paper, we obtain a 2D Gaussian that represents an approximation of the projection of a 3D Gaussian.</p>


<h3>Filter and Sort Gaussians</h3>
<p>Before starting the rasterization procedure, we sort the 3D Gaussians in increasing order by their depth value and discard 3D Gaussians whose depth value is less than 0.</p>

<h3>Compute Alphas and Transmittance</h3>
<p>Using the ordered and filtered 2D Gaussians, we compute their alpha and transmittance values at each pixel location in an image. 

<h3>Perform Splatting</h3>
<p>Using the computed alpha and transmittance values, we blend the color value of each 2D Gaussian to compute the color at each pixel.</p>
<p>We also compute the depth and silhouette (mask) maps.</p>

<p>After implementing the rasterizer, we test it by rendering views of a scene represented by pre-trained 3D Gaussians. Here is one frame of the GIF output:</p>

<div class="image-container">
    <img src="/images/projects/gaussian_splatting/q1_render.gif" alt="Description of the image">
</div>

<h2>Training 3D Gaussian Representations</h2>
<p>We use our 3D Gaussian rasterizer to train a 3D representation of a scene given posed multi-view data. We train a 3D representation of a toy cow using isotropic Gaussians.</p>

<h3>Setting Up Parameters and Optimizer</h3>
<p>We make the 3D Gaussian parameters trainable and set up the optimizer with different learning rates for each type of parameter.</p>

<h3>Perform Forward Pass and Compute Loss</h3>
<p>We render the 3D Gaussians to predict an image rendering viewed from a given camera and implement a loss function that compares the predicted image rendering to the ground truth image.</p>

<p>After training, we obtain the following training progress GIF:</p>


<div class="image-container">
    <img src="/images/projects/gaussian_splatting/q1_training_progress.gif" alt="Description of the image">
</div>

<p>And the final rendering GIF:</p>

<div class="image-container">
    <img src="/images/projects/gaussian_splatting/q1_training_final_renders.gif" alt="Description of the image">
</div>

<h2>Extensions</h2>
<h3>Rendering Using Spherical Harmonics</h3>
<p>We explore rendering 3D Gaussians with associated spherical harmonic components to model view-dependent effects. We modify the code to enable the utilization of spherical harmonics and render views of a scene represented by pre-trained 3D Gaussians.</p>

<h3>Training On a Harder Scene</h3>
<p>We train 3D Gaussians on a more challenging scene with randomly initialized points for the 3D Gaussian means. We experiment with techniques to improve performance, such as different learning rates, learning rate scheduling, SSIM loss, adaptive density control, initialization parameters, and using anisotropic Gaussians.</p>


<div class="image-container">
    <img src="/images/projects/gaussian_splatting/q1_harder_training_progress.gif" alt="Description of the image">
</div>

<div class="image-container">
    <img src="/images/projects/gaussian_splatting/q1_harder_training_final_renders.gif" alt="Description of the image">
</div>



<h2>Conclusion</h2>
<p>This project demonstrates the implementation and application of 3D Gaussian Splatting for representing and rendering 3D scenes. We build a simplified 3D Gaussian rasterizer, render pre-trained 3D Gaussians, and optimize 3D Gaussians to represent custom scenes. We also explore extensions such as rendering with spherical harmonics and training on harder scenes.</p>
