---
collection: projects
title: "Traveling Salesman Problem (TSP) with Q-Learning"
image: /images/projects/tsp_with_rl/path_progress.png
tags: 
- RL
- Mathematical Optimization 
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
    h1, h2, h3 {
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
    <a href="https://github.com/JavalVyas2000/TSP_with_RL/tree/main" class="icon-button arxiv-button">
        <i class="fab fa-github"></i>
        <span>GitHub</span>
    </a>
</div>

<h2>Traveling Salesman Problem (TSP) with Q-Learning</h2>
<p>In this project, I focused on solving the Traveling Salesman Problem (TSP) using Q-Learning, a reinforcement learning technique. The TSP is a well-known combinatorial optimization problem that has critical applications, particularly in logistics, where optimizing delivery routes can significantly reduce operational costs. With the increasing popularity of e-commerce, it has become essential for logistics companies to efficiently plan their deliveries. Solving the TSP can also serve as a foundation for addressing more complex routing problems such as the Vehicle Routing Problem (VRP), Marine Routing Problem (MRP), and the Warehouse Placement Problem.</p>

<h3>Motivation and Challenges:</h3>
<p>
    The primary challenge with the TSP is that it is classified as an NP-Hard problem, meaning it is computationally expensive to solve optimally as the number of cities grows. The brute-force approach has a worst-case time complexity of O(n!), where n is the number of cities, making it impractical even for relatively small instances (e.g., 20 cities would result in computations on the order of 10^18). Consequently, there is a strong need for more efficient algorithms that can solve the TSP optimally and in a reasonable amount of time. Over the years, numerous mathematical heuristics have been proposed, but none provide an exact solution in polynomial time.
</p>


<h3>Innovation:</h3>
<p>
    Instead of relying on traditional heuristics, this project took a data-driven approach by implementing Q-Learning, a type of Reinforcement Learning (RL). In Q-Learning, an agent learns to take actions that maximize a long-term reward based on the current state. The state, in this case, corresponds to the current position of the salesman, and the actions represent the selection of the next city to visit. The optimal path is learned by the agent through trial and error, and the reward function is designed to encourage shorter, more efficient routes.
</p>

<p>
    The innovation of this project lies in applying reinforcement learning to TSP, allowing the algorithm to learn the optimal path through interactions with the environment rather than relying on pre-defined heuristics or exhaustive search. The input to the algorithm is the position of cities, and the output is the optimal path that minimizes the total distance traveled.
</p>

<h3>Key Contributions:</h3>

<ul>
    <li>Developed a Q-Learning-based approach to solve the TSP, which enables the model to learn the optimal route based on the city positions.</li>
    <li>Designed and implemented the reward function to encourage the learning agent to explore efficient routes while avoiding revisiting cities.</li>
    <li>Demonstrated the feasibility of using Reinforcement Learning to tackle NP-hard combinatorial problems like the TSP, providing an alternative to traditional heuristic-based methods.</li>
</ul>
<p>The project highlights the potential of Reinforcement Learning to address complex combinatorial optimization problems, and the methodology developed could be further extended to tackle even larger-scale instances of TSP and related problems.</p>

