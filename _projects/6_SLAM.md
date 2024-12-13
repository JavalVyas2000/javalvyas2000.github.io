---
title: "Mobile Planning Platform for Inspection"
excerpt: "Short description of portfolio item number 3 <br/><img src='/images/500x300.png'>"
image: /images/projects/SLAM/icon.gif
tags: 
- Controls 
- Simulation
- Computer Vision
- SLAM
- Planning
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
        <a href="https://github.com/FarStryke21/MobileRobot_Sandbox"
         class="icon-button github-button">
            <i class="fab fa-github"></i>
            <span>UGV</span>
        </a>
    </div>
</div>

## Problem Statement

Factories face challenges in maintaining consistent product quality, operational efficiency, and worker safety through effective inspection processes. Traditional methods often rely on manual intervention or fixed machinery, limiting inspection frequency and accessibility to diverse factory environments.

Solution? Integrate autonomous mobile robots equipped with advanced sensors and cameras into factory inspection protocols. These robots can navigate independently across factory floors, accessing confined spaces and hazardous areas with ease. Through real-time data collection and integration with factory systems, they enable proactive maintenance and immediate corrective actions. This approach enhances inspection frequency, accuracy, and thoroughness, thereby optimizing production processes and ensuring high-quality standards while minimizing human exposure to risks.

## Adaptive Monte Carlo Localization

Adaptive Monte Carlo Localization (AMCL) addresses the challenges of robot localization in dynamic environments by leveraging probabilistic techniques. AMCL uses a particle filter approach where a cloud of particles represents the robot's possible poses. These particles are updated based on sensor measurements, adjusting their weights to reflect the likelihood of each pose being correct. Through iterative refinement, AMCL adapts its particle cloud dynamically, allowing the robot to accurately estimate its position and orientation amidst changing conditions. This adaptive nature enables AMCL to handle uncertainties effectively, making it suitable for real-world applications where precise localization is crucial for autonomous navigation and task execution.

<div class="image-container">
    <img src="/images/projects/SLAM/gazebo_base.png" alt="Description of the image">
    <div class="image-caption">A simple Gazebo factory setup</div>
</div>

A mock environment was created in Gazebo along with a simple mobile platform which could perform routine inspections with the onboard LiDAR and Depth Camera setup.

<div class="video-container">
    <video controls>
        <source src="/images/projects/SLAM/rviz_run.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">A sample inspection run using AMCL.</div>
</div>


## Visual Servoing

Visual servoing in the context of mobile robots for industrial inspection involves using visual feedback from cameras to control the robot's movements. This allows the robot to track objects of interests with a high degree of precision. The visual servoing package for this robot is currently under development. Stay tuned for updates!

