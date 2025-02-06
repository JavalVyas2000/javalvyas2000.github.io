---
collection: projects
title: "Traveling Salesman Problem (TSP) with Q-Learning"
image: /images/projects/procurement_of_contract/network_topology.png
tags: 
- Stochastic Programming
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
    <a href="https://github.com/JavalVyas2000/procurement_of_contract" class="icon-button arxiv-button">
        <i class="fab fa-github"></i>
        <span>GitHub</span>
    </a>
</div>

## Introduction
In this project, we examine the production planning decisions in a chemical process network, focusing on the optimization of contract selection under uncertainty with suppliers and product selling price optimization. The study primarily investigates the procurement contracts that manufacturers may enter into with suppliers and how these decisions influence the overall supply chain performance.

## Key Aspects of the Study:

- Contract Models:
The study introduces and analyzes three types of quantity-based procurement contracts:

    - Discount after a certain purchased amount: Provides a price reduction once a threshold is crossed.
    - Bulk discount: A discount applied for large volume orders.
    - Fixed duration contracts: Contracts with a set timeframe, potentially with fixed prices or discounts.
- Manufacturer-Centric Framework:
The framework in this study is manufacturer-centric, meaning the contract structure (prices, quantity thresholds, etc.) is pre-defined, leaving the manufacturer with the decision of whether or not to accept the contracts offered by the supplier. The manufacturer also determines the prices for the finished products.

- Production and Pricing Decisions:
A primary decision the manufacturer faces is choosing the most optimal procurement contract to secure raw materials at the best prices. In parallel, they must also determine selling prices for the products they produce, taking into account market dynamics, demand, and cost structure.

- Price- and Demand-Responsive Models:
The study includes models that capture market dynamics through two approaches:

    - Price-response model: The demand is expressed as a function of the selling price.
    - Demand-response model: The relationship is inverted, where the price is a function of the demand.

## Assumptions and Future Work:

Several assumptions were made to simplify the analysis:

- The contract structure is fixed and predetermined, with no room for negotiation between the manufacturer and supplier. While this assumption may not fully reflect real-world negotiations, it is suitable for the scope of this study.
- Operating, inventory, and inter-site transfer costs are considered deterministic. Future work could relax this assumption to account for stochastic costs, introducing more uncertainty into the planning process.

## Impact and Potential Applications:

This framework provides valuable insights into the decision-making process of manufacturers in supply chain management, particularly in situations where they must balance procurement contracts and product pricing under uncertain conditions. It offers a structured approach for evaluating contract options and setting pricing strategies that can improve profitability and operational efficiency. Future work could expand on this foundation by incorporating more dynamic cost models and negotiating scenarios between manufacturers and suppliers.