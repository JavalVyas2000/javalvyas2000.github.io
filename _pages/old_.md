---
layout: archive
title: "Research"
permalink: research/
author_profile: true
---

### Pose Estimation: Understanding what is where?

Link to Poster for Mechanical Engineering Masters Research Symposium 2024 is <a href="https://farstryke21.github.io/portfolio/files/Poster_finaldraft.pdf">here</a>!
<table style="border: none; border-collapse: collapse;">
  <tr>
    <td style="padding: 10px; border: none;">
      <div style="width: 400px; height: 300px; border-radius: 50px; overflow: hidden;">
        <img src="/portfolio/images/pose_estimate.png" alt="Project Image 2" style="width: 100%; height: 100%; object-fit: cover;">
      </div>
    </td>
    <td style="padding: 10px; border: none; vertical-align: top; font-size: 16px;">
    3D pose estimation is a pivotal facet of computer vision, transcending the limitations of its 2D counterpart by incorporating depth information. This process involves leveraging point clouds acquired from advanced sensors like LiDAR, stereo cameras, or depth cameras. The goal is to accurately determine the three-dimensional position and orientation of objects within a given scene. An instrumental player in this field is the Point Cloud Library (PCL), an open-source resource that provides an array of algorithms for processing and analyzing 3D point clouds. Whether it's filtering noise, segmenting data, extracting features, or facilitating visualization, PCL has become a cornerstone in applications such as robotics and augmented reality, enhancing the spatial comprehension of the environment.
    </td>
  </tr>
</table>
<p style="font-size:12pt;">
In recent strides, the advent of Neural Radiance Fields (NeRF) has revolutionized 3D scene reconstruction. NeRF stands out as a neural network-based technique that transcends traditional approaches by learning a volumetric representation of a scene through an implicit function. This groundbreaking methodology excels in capturing intricate details of both geometry and appearance, making it particularly adept at synthesizing high-fidelity 3D reconstructions from sparse and unstructured 2D views. NeRF's fusion of deep learning and implicit function representation proves to be a potent tool for rendering novel views of a scene and holds promise for elevating the precision and efficiency of 3D pose estimation across various domains.
</p>

### Coverage Viewpoint Generation: How to look at something in its entirety?
<table style="border: none; border-collapse: collapse;">
  <tr>
    <td style="padding: 10px; border: none;">
      <div style="width: 400px; height: 300px; border-radius: 50px; overflow: hidden;">
        <img src="/portfolio/images/viewpoint.png" alt="Project Image 2" style="width: 100%; height: 100%; object-fit: cover;">
      </div>
    </td>
    <td style="padding: 10px; border: none; vertical-align: top; font-size: 16px;">
    Coverage viewpoint generation for a model involves the strategic identification of key perspectives that comprehensively capture the entire object or scene of interest. In the realm of computer vision and robotics, this process is essential for optimizing the observation and analysis of a target, ensuring that critical details are captured from various angles. The goal is to strategically position viewpoints in a way that minimizes redundancy and maximizes the information gathered. Sophisticated algorithms and methodologies are employed to determine the optimal set of viewpoints, taking into account factors such as occlusions, object geometry, and scene complexity. This approach is particularly crucial for tasks like 3D reconstruction, object recognition, and surveillance, where a well-defined set of viewpoints enhances the efficiency and effectiveness of subsequent processing steps.
    </td>
  </tr>
</table>
<p style="font-size:12pt;">
Once coverage viewpoints are generated, the subsequent challenge lies in finding the most efficient path through them. This task involves planning a trajectory that seamlessly connects the selected viewpoints while optimizing for factors like travel distance, time, and energy consumption. Path planning algorithms, often rooted in robotics and artificial intelligence, are employed to compute the optimal route. These algorithms consider the spatial relationships between viewpoints and aim to minimize the overall traversal cost. The efficiency of the path is paramount, especially in applications like autonomous navigation, where a robot or a camera system needs to navigate through a space to capture relevant information. The successful integration of coverage viewpoint generation and efficient path planning is pivotal for enhancing the autonomy and performance of systems deployed in dynamic and complex environments.
</p>

### PointCloud Resgistration: Leveraging feature descriptors for the best results
<table style="border: none; border-collapse: collapse;">
  <tr>
    <td style="padding: 10px; border: none;">
      <div style="width: 400px; height: 300px; border-radius: 50px; overflow: hidden;">
        <img src="/portfolio/images/feature_descriptors.png" alt="Project Image 2" style="width: 100%; height: 100%; object-fit: cover;">
      </div>
    </td>
    <td style="padding: 10px; border: none; vertical-align: top; font-size: 16px;">
    Feature descriptors play a crucial role in the field of point cloud registration, where the goal is to align multiple 3D point clouds from different perspectives or at different times. These descriptors capture distinctive information about the local geometry or appearance of points, allowing for the identification and matching of corresponding features across different point clouds. In the context of point cloud registration, common feature descriptors include shape-based descriptors, such as the Fast Point Feature Histogram (FPFH) or the Signature of Histograms of Orientations (SHOT). These descriptors provide compact representations of local surface properties, aiding in the robust matching of points despite variations in pose or viewpoint. Feature descriptors are instrumental in the initial step of establishing correspondences between points in different point clouds, setting the foundation for subsequent alignment and registration processes.
    </td>
  </tr>
</table>
<p style="font-size:12pt;">
The use of feature descriptors in point cloud registration extends to various applications, including robotics, augmented reality, and 3D reconstruction. During the registration process, feature descriptors are employed to identify distinctive points in the source and target point clouds that share similar characteristics. Matching these descriptors allows for establishing correspondences between points in different views, enabling accurate alignment. This alignment is crucial for tasks such as simultaneous localization and mapping (SLAM) in robotics, where a mobile robot needs to navigate and build a map of its environment using multiple sensor readings. By leveraging feature descriptors, point cloud registration methods enhance the ability to align disparate views and integrate information from different perspectives, contributing to the overall accuracy and reliability of 3D spatial modeling and analysis.</p>

### Model Based Robotic Metrology Platform
<table style="border: none; border-collapse: collapse;">
  <tr>
    <td style="padding: 10px; border: none;">
      <div style="width: 400px; height: 300px; border-radius: 50px; overflow: hidden;">
        <img src="/portfolio/images/robotic_metrology.png" alt="Project Image 2" style="width: 100%; height: 100%; object-fit: cover;">
      </div>
    </td>
    <td style="padding: 10px; border: none; vertical-align: top; font-size: 16px;">
    Model-based robotic metrology proves particularly valuable in the context of additively manufactured parts, where precision and quality control are paramount. Additive manufacturing processes, such as 3D printing, produce complex geometries and intricate structures that demand meticulous inspection. A model-based robotic metrology platform, in this context, leverages the digital representation of the designed part, often generated through CAD, to guide robotic arms equipped with measurement devices. These devices, which could include laser scanners or coordinate measuring machines, collect data points on the additively manufactured part's surface. By comparing the acquired data to the digital model, the system ensures that the physical part aligns precisely with the intended design, detecting any deviations, inaccuracies, or defects. This approach enhances the quality control process for additively manufactured components, facilitating the production of parts with tight tolerances and meeting stringent quality standards.
    </td>
  </tr>
</table>
<p style="font-size:12pt;">
The applications of model-based robotic metrology in additive manufacturing extend beyond mere verification. It enables continuous monitoring of the manufacturing process, allowing for real-time adjustments to parameters such as layer thickness or print speed. By providing immediate feedback, the system contributes to the optimization of additive manufacturing processes, reducing the likelihood of defects and ensuring consistency across batches. Model-based robotic metrology thus plays a pivotal role in enhancing the reliability and efficiency of quality control for additively manufactured parts, supporting the growth and adoption of this innovative manufacturing technology across various industries.
</p>
