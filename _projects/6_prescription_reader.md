---
collection: projects
title: "Text Reader"
image: /images/projects/prescription_reader/ocr.png
tags: 
- Computer Vision
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
In this project, a Prescription Reader was developed using Tesseract-OCR, an open-source optical character recognition (OCR) tool, to convert scanned prescription images into editable strings. The application was specifically designed for the healthcare industry, where prescriptions are scanned, and the patient's history is updated in a database. This approach helps doctors access a patient's medical history more efficiently, which can be particularly useful when treating new patients or managing long-term care.

## Motivation and Objective:

- Image Scanning and OCR Conversion:
The prescription is scanned in an image format, and Tesseract-OCR is used to extract the text from the image. The system then converts the image data into machine-readable text, which can be directly fed into a healthcare database to update the patient's history.

- Basic Functionality:
The application is relatively rudimentary, as it was developed during a hackathon. However, the core function of transforming scanned prescription images into editable text was successfully implemented.

- Future Scope:
While the current implementation focuses on basic OCR conversion, there is a strong potential to enhance the system using deep learning techniques to assist the classical OCR. This could improve accuracy, especially in cases where handwritten text is involved or the image quality is suboptimal.


------------------------
## Current Constraints:

The current version of the prescription reader has certain limitations:

- The text must be scanned in a well-lit environment to ensure optimal OCR accuracy.
- The prescription must not be written on a ruled piece of paper, as the OCR may misinterpret the lines as part of the text.
These constraints are acknowledged and are areas where future iterations can be improved to handle more diverse scenarios and increase the application's robustness.

## Impact and Potential Applications:

This application has significant potential in the healthcare industry by making it easier for doctors to access and update patient histories quickly. By reducing manual data entry, it can save time and reduce human error. Future iterations incorporating deep learning could help in improving OCR accuracy, even in challenging conditions like low lighting or complicated handwriting.

