---
collection: projects
title: "LSTMs-for-Flow-simulation"
image: /images/formula_student/lstm_cell.png
tags: 
- Deep Learning
- Time Series
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
<div class="button-container">
    <a href="https://github.com/JavalVyas2000/LSTMs-for-Flow-simulation" class="icon-button arxiv-button">
        <i class="fab fa-github"></i>
        <span>GitHub</span>
    </a>
</div>

<p>In this project, I focused on using Long Short-Term Memory (LSTM) networks for flow simulation, a technique commonly used in various fields such as fluid dynamics, traffic modeling, and system design. The goal of this research was to explore how LSTMs, a type of Recurrent Neural Network (RNN), can be leveraged to predict and simulate flow behavior over time.</p>

<h3>Motivation and Objectives:</h3>

<p>Flow simulation is typically a complex problem that involves modeling how quantities like fluids, traffic, or data flow within a system. Traditional methods often rely on physical equations or numerical methods, which can be computationally expensive and time-consuming. In contrast, machine learning-based approaches offer the potential for data-driven predictions that are faster and can scale better with large datasets.</p>

<p>The key objective of this project was to explore whether LSTMs, which are well-known for their ability to capture temporal dependencies in sequential data, could effectively learn and simulate flow behavior. By leveraging LSTMs, this project aimed to learn flow dynamics directly from data, without relying on explicitly programmed physical equations.</p>

<h3>Key Contributions:</h3>
<ul>
    <li><strong>Application of LSTMs to Flow Simulation:</strong>This work demonstrated that LSTMs could effectively be applied to simulate flow behavior. The model was trained on historical flow data, learning the temporal dependencies and patterns that govern the flow dynamics.</li>
    <li><strong>Learning Flow Dynamics from Data:</strong>One of the major accomplishments was enabling the LSTM to learn flow simulation directly from the data. The LSTM model was able to recognize patterns in sequential flow data and predict future flow states based on past observations.</li>
    <li><strong>Integration with Flow Systems:</strong>The LSTM model was tested on various types of flow simulations, ranging from fluid dynamics to traffic flow, to evaluate its ability to handle different systems and scenarios. This approach shows potential for replacing or complementing traditional simulation methods.</li>
</ul>

<p> The ability to learn flow dynamics from data offers a flexible and scalable solution to flow simulation challenges. This method also opens the door for future applications of LSTMs and other deep learning models in real-time simulation and predictive modeling.</p>