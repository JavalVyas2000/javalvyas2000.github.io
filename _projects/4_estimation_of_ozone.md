---
collection: projects
title: "Estimation of Ozone in Atmosphere"
image: /images/projects/estimation_of_ozone/ozone_map.png
tags: 
- Machine Learning
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
    <a href="https://github.com/JavalVyas2000/Estimation-of-Tropospheric-Ozone-" class="icon-button arxiv-button">
        <i class="fab fa-github"></i>
        <span>GitHub</span>
    </a>
</div>
## Problem Statement
Tropospheric ozone is a major air pollutant that contributes to respiratory diseases, making its accurate estimation essential for public health and environmental protection. While stratospheric ozone protects us from harmful UV rays, tropospheric ozone, formed through reactions involving Volatile Organic Compounds (VOCs), Nitrogen Oxides (NOx), and other factors, is a serious concern. This research aimed to develop a machine learning-based model for estimating tropospheric ozone levels, using the publicly available AQ-bench dataset.

## Motivation and Objective:

The goal of this project was to estimate tropospheric ozone levels based on various factors that influence its formation. This is crucial for understanding air quality and mitigating the health risks associated with elevated ozone levels. The AQ-bench dataset, which contains 5577 records from different parts of the world between 2010 and 2014, was used as the basis for developing a benchmark model for ozone estimation.


------------------------
## Key Contributions:

- Feature Engineering for Enhanced Relevance:
To improve the accuracy of the model, extensive feature engineering was performed. The focus was on incorporating features that are critical for the formation of tropospheric ozone, such as VOC emissions, NOx levels, oxygen (O2) concentration, and water content—all integral components of the chemical reactions that lead to ozone formation.

- Understanding the Chemical Reaction:
The project delved into the details of the chemical reaction responsible for ozone formation in the troposphere. By considering factors like VOCs, NOx, and the availability of O2 and water, the project enhanced the model’s ability to predict ozone levels under various conditions.

- Ensemble Learning with Voting Regressor:
On the machine learning front, ensemble methods were utilized to improve model performance. A Voting Regressor was implemented, combining the strengths of multiple regression models. Specifically, Support Vector Regression (SVR) and Gradient Boosting Regressor were used as the base learners (voters) within the ensemble to generate more robust predictions.


## Impact and applications:
This research demonstrates the potential of using machine learning to estimate tropospheric ozone levels based on real-world data and chemical insights. By incorporating important features and leveraging ensemble methods, the model provides valuable insights into air quality and could be used in air pollution monitoring systems.

The successful application of this model can aid in environmental policy-making and public health initiatives by providing accurate predictions of ozone levels in various regions. Additionally, this approach can be adapted for other environmental and atmospheric predictions involving complex chemical processes.