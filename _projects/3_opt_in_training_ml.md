---
collection: projects
title: "Second Order training methods for ML"
image: /images/projects/optimization_in_training_ml/second_order_methods.png
tags: 
- Machine Learning
- Mathematical Optimization
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
    <a href="https://github.com/JavalVyas2000/project_10625" class="icon-button arxiv-button">
        <i class="fab fa-github"></i>
        <span>GitHub</span>
    </a>
</div>

## Introduction
The goal of this project was to develop a logistic regression surrogate for a supply chain production problem. The machine learning (ML) model aims to predict the feasibility of a given supply chain scenario, based on the available supply and demand quantities. A supply chain may face feasibility issues due to factors such as mass imbalances or a shortage of time to fulfill the demands. By building this surrogate model, the project seeks to provide a method for predicting such imbalances and offer early detection of potential issues before they escalate.

## Motivation and Objective:

Supply chain problems are complex and often involve nonlinear relationships between various parameters. In order to optimize these processes and predict their feasibility, we employ a machine learning model that can estimate the feasibility of supply chain scenarios. The objective of this project is to train this model efficiently using four different optimization algorithms to compare their convergence rates and computational costs, ultimately helping to choose the best method for this problem.

## Key Contributions:

- Logistic Regression Surrogate for Supply Chain Feasibility Prediction:
We developed a logistic regression surrogate model to predict whether a given supply chain problem will be feasible, based on supply and demand data. The model helps to identify potential issues such as mass imbalances or time shortages early in the process, allowing for better decision-making and proactive planning.

- Optimization Algorithms for Model Training:
Four different optimization algorithms were implemented to train the model’s parameters:

  - Newton’s Method with Armijo Backtracking Line Search: A second-order optimization method used to improve convergence.
  - Newton’s Method with Armijo Backtracking Line Search and Strong Wolfe Conditions: A variation of Newton's method that incorporates stronger conditions for line search, further improving convergence.
  - Nesterov Accelerated Gradient Descent (NAG): A first-order method that speeds up convergence by using momentum.
  - Distributed Vanilla Gradient Descent: A parallelized first-order optimization technique to handle large datasets and improve computation efficiency.

- Real-World Application of Optimization Methods:
The motivation behind implementing these algorithms was twofold:

  - Comparing Convergence Rates: The project aimed to provide real evidence regarding the performance of exact inverse Hessian calculations in Newton’s method, demonstrating its faster convergence rate compared to first-order methods, albeit at a higher computational cost.
  - Expanding Knowledge of Optimization Algorithms: This project was also an opportunity to gain hands-on experience implementing Nesterov’s Accelerated Gradient Descent and Distributed Vanilla Gradient Descent, which were relatively less common in the user’s previous work.

- Performance Evaluation:
While the expectation was that all optimization algorithms would provide similar testing accuracies, the focus was on evaluating the rate of convergence. The project assessed how quickly each method converged to the optimal solution, and how efficiently it handled large-scale problems.

## Impact and Applications:

This research has broader implications for the supply chain optimization field, particularly in predicting and managing feasibility issues in production processes. By leveraging machine learning and optimization techniques, the project demonstrates how logistic regression surrogates can be used to predict issues such as mass imbalances or time shortages before they become significant problems.

Additionally, this work contributes to the field of optimization by comparing the effectiveness of different algorithms in solving complex supply chain problems. The insights gained from this research can inform future developments in both machine learning model training and optimization techniques, leading to more efficient and scalable solutions.


