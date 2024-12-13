---
title: "Panel Gap Identification for Automobiles"
excerpt: "Short description of portfolio item number 3 <br/><img src='/images/500x300.png'>"
image: /images/projects/PanelGap_CV/icon.png
tags: 
- Computer Vision 
- Inspection
- Embedded Systems
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

    .video-container {
        text-align: center;
        margin: 20px;
    }
    .video-container video {
        max-width: 100%;
        height: auto;
    }
    .video-caption {
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
        <a href="https://github.com/FarStryke21/Panel_Gap_Detection"
         class="icon-button github-button">
            <i class="fab fa-github"></i>
            <span>GitHub</span>
        </a>
    </div>
</div>
## Problem Statement

Panel gaps in automotives can lead to increased aerodynamic drag, reducing fuel efficiency and causing unwanted noise at high speeds. They may also allow water and debris to enter, potentially leading to rust and damage to internal components. Additionally, noticeable panel gaps can negatively impact the vehicle's aesthetic appeal and perceived build quality.

<div class="image-container">
    <img src="/images/projects/PanelGap_CV/Contours.png" alt="Description of the image">
    <div class="image-caption">Panel Gaps in Cars</div>
</div>

The objective of this project was to develop a tool which can be deployed in industries to automate the process of quality metrology of automotive panel gaps. To make things interesting, we only stuck to traditional Computer Vision methods. No machine learning!

## Approach

The project aimed to develop a computer vision system capable of detecting and measuring panel gaps using a camera. The solution involved capturing images of a car's exterior, running panel gap detection software on these images, and creating a 2D or 3D model of the car to visualize and analyze the gaps. Key technical methods included global thresholding, contour detection, image masking, structure from motion, and point cloud coordinate logging. The system could measure the panel gaps and compare them against expected values to identify defects.

<div class="image-container">
    <img src="/images/projects/PanelGap_CV/measurements.jpg" alt="Description of the image">
    <div class="image-caption">Measuring the Panel Gaps</div>
</div>

## Results

<div class="image-container">
    <img src="/images/projects/PanelGap_CV/panel_detect.png" alt="Description of the image">
    <div class="image-caption">Gradient Identification of error areas</div>
</div>

The system successfully measured panel gaps, provided color mapping to visualize variations, and allowed setting quality assurance tolerances. It classified panel gaps as acceptable or defective based on predefined thresholds. Future improvements include enhancing depth mapping, point cloud generation, and adding classification functionality to isolate non-panel gap features. This automated approach offers significant potential for improving quality control in automotive manufacturing, reducing costs, and enhancing production processes.

<div class="video-container">
    <video controls>
        <source src="/images/projects/PanelGap_CV/Demo.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Demonstration of the mobile version in realtime</div>
</div>
