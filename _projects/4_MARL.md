---
title: "Multi Agent Reinforcement Learning for Warehouses"
excerpt: "Short description of portfolio item number 2 <br/><img src='/images/500x300.png'>"
collection: projects
image: /images/projects/MARL/city-map.png
background: "#D8BFD8"
tags: 
- Robotics
- Controls 
- Planning
- Simulation
- Reinforcement Learning
- Machine Learning
---

<style>
    .image-container {
      text-align: center;
    }
    .responsive-image {
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


<div class="button-container">
    <div class="button-group">
        <a href="https://github.com/FarStryke21/16831-Project" class="icon-button github-button">
            <i class="fab fa-github"></i>
            <span>GitHub</span>
        </a>
        <a href="/files/16_831_project.pdf" class="icon-button github-button">
            <i class="fas fa-file-alt"></i>
            <span>Article</span>
        </a>
    </div>
</div>

-----------
# Problem Statement
We study the problem of implementing a centralized Multi-Agent Reinforcement Learning (MARL) environment for Multi-Agent Path Finding (MAPF) problems. MAPF is the problem of looking for collision-free paths for a group of agents from their corresponding start to goal locations. The importance of MAPF comes from its wide application in multi-robot coordination systems in automated warehouses, multi-robot assembly in manufacturing scenarios, and traffic coordination in crossovers. The designed environment can be found at [here](https://github.com/VineetTambe/gym-multigrid/tree/CNN) and the multi-agent -rl policy and training code can be found at [here](https://github.com/VineetTambe/multi-agent-rl/tree/CNN).

<div class="image-container">
    <img src="/images/projects/MARL/MAPF.png" alt="Centered Image" class="responsive-image" style="width: 1fr">
</div>

-------------
# Environment Modelling

The MARL and MAPF communities are trying to solve the same problem with different approaches. However, the lack of a common environment prevents an apples-to-apples comparison of the results. To resolve this we built a gymnasium-minigrid based simulation environment that can load map layouts from the standard benchmark MAPF configuration or scenario files. A few examples of the environment with various configuration files can be seen in the figures.

<div class="image-container">
    <img src="/images/projects/MARL/warehouse-environment.png" alt="Centered Image" class="responsive-image" style="width: 1fr">
</div>

---------------
# Observation Space
The observation space is a list of 7xHxW for N agents i.e. Nx7xHxW for N agents.
The H and W parameters can be passed as environment arguments and represent the height and width of the view that the agent see's in front of it.
Every channel in the HxW image represents the following:

<div class="image-container">
    <img src="/images/projects/MARL/observation-space.png" alt="Centered Image" class="responsive-image" style="width: 1fr">
</div>

-----------------------
# Policy Architecture and Training

In our work, we tackle this problem using a centralized approach. All the work that is out there approaches this problem by training decentralized policy for each agent or decentralized policy with "communication" for MARL.

To do so we first stack the N x C x H x W observation (where C is the number of channels, H & W are the height and width of the observation images respectively) into a  N x C x H x W matrix - this is our state s. This is passed through a CNN feature extractor head to get a feature vector of size 128.

The CNN feature extractor has a simple architecture with 2 convolution layers and the output of this is passed to a single-layer MLP which gives this figure.

<div class="image-container">
    <img src="/images/projects/MARL/feature-extractor-arch.png" alt="Centered Image" class="responsive-image" style="width: 1fr">
</div>

We use stable-baselines-3 to train our policy by leveraging the standardized implementation of PPO. The high-level architecture can be seen in this figure. 

<div class="image-container">
    <img src="/images/projects/MARL/net_arch.png" alt="Centered Image" class="responsive-image" style="width: 1fr">
</div>

The fully-connected network used for the policy and value function is a 2-layer MLP of size 64. The trained model predicts a N x 4 matrix which is our action matrix $A$ given the stacked observation matrix $s$. This is passed to the environment via the 'step' function to get the next observation.

------------------
# Results

Through our work, we managed to accomplish the following:

1. An efficient simulation environment to train RL against where maps can be generated from benchmark MAPF scenario configs.
2. A rich image observation space that comprises of:
    1. Egocentric view of the agent
    2. Goal position
    3. Orientation of the agent
    4. Edge weights
3. A continuous action space - capturing the probability of actions to take for each agent.
4. We were able to set up training of a centralized policy using PPO to predict the actions for each agent given the image observation for each agent. However, the policy performs poorly and is not able to route the agents to their goal location. We discuss ideas to improve the results in the Future Work Section. Figure \ref{experiments} shows the various experiments we tried while training the model and improving the environment and our approach.

<div class="image-container">
    <img src="/images/projects/MARL/experiments.png" alt="Centered Image" class="responsive-image" style="width: 1fr">
</div>
