# Conceptual Interfaces and Communication Protocols

**Date**: 2025-12-05 | **Spec**: ../specs/Physical AI and Humanoid Robotics/spec.md | **Plan**: ../specs/Physical AI and Humanoid Robotics/plan.md

## Summary

This document describes the conceptual interfaces and communication protocols central to the robotics and AI systems covered in the "Physical AI and Humanoid Robotics" book. While not formal API schemas, these define how different components (software modules, simulation environments, AI models, and robot hardware/software) interact and exchange data.

## ROS 2 Interfaces

ROS 2 serves as the primary middleware for inter-component communication.

-   **Nodes**: Independent computational processes (e.g., `robot_controller_node`, `perception_node`, `voice_command_node`).
-   **Topics**: Asynchronous, publish-subscribe data streams.
    -   `sensor_msgs/msg/Image`: Camera images from simulated sensors.
    -   `sensor_msgs/msg/PointCloud2`: LiDAR and Depth camera data.
    -   `sensor_msgs/msg/Imu`: Inertial measurement unit data.
    -   `geometry_msgs/msg/Twist`: Velocity commands for robot movement.
    -   `sensor_msgs/msg/JointState`: Current state of robot joints.
    -   `std_msgs/msg/String`: Text-based commands (e.g., from Whisper).
-   **Services**: Synchronous request-response communication for discrete tasks.
    -   `std_srvs/srv/Trigger`: Simple activate/deactivate commands.
    -   Custom service definitions for specific robot actions (e.g., object manipulation requests).
-   **Actions**: Long-running, goal-oriented communication with feedback.
    -   `nav2_msgs/action/NavigateToPose`: For commanding the robot to a specific pose.
    -   Custom action definitions for complex behaviors (e.g., "pick up object").
-   **Parameters**: Configuration values accessible and modifiable at runtime.

## Simulation Interfaces (Gazebo, Unity, NVIDIA Isaac Sim)

These define how external controllers and AI models interact with the simulated environment.

-   **Robot Control Input**: Commands (e.g., joint torques, velocities, positions) sent to the simulated robot's actuators.
-   **Sensor Data Output**: Streams of simulated sensor readings (camera, LiDAR, IMU) provided by the simulator to ROS 2 topics or directly to AI perception modules.
-   **Environment Manipulation**: Interfaces for dynamically changing the simulation environment (e.g., spawning/despawning objects, modifying physics properties).
-   **Reset/Pause/Step**: Commands to control the simulation lifecycle.

## AI Model Interfaces

These specify the input and output formats for various AI components.

-   **Perception Models (e.g., Isaac ROS)**:
    -   **Input**: `sensor_msgs/msg/Image`, `sensor_msgs/msg/PointCloud2`.
    -   **Output**: Object detection results (bounding boxes, class labels), VSLAM maps (`nav_msgs/msg/OccupancyGrid`), pose estimates.
-   **Voice-to-Text (OpenAI Whisper)**:
    -   **Input**: Audio (raw audio data).
    -   **Output**: Transcribed text (`std_msgs/msg/String`).
-   **Cognitive LLM Planning (e.g., for VLA)**:
    -   **Input**: Text-based user command (`std_msgs/msg/String`), current robot state, perceived environment state.
    -   **Output**: High-level action plan (structured text or JSON describing sequence of ROS 2 actions).
-   **Navigation Stack (Nav2)**:
    -   **Input**: Robot pose, goal pose, occupancy grid map.
    -   **Output**: Path plan (`nav_msgs/msg/Path`), velocity commands.

## Humanoid Interaction Interfaces

-   **Voice Input**: User speech (audio) fed to Whisper.
-   **Text Command Interpretation**: LLM processing of transcribed text.
-   **Visual/Auditory Feedback**: Robot responses (e.g., synthesized speech, on-screen text, visual cues in simulation) to the user.

## Relationships and Data Flows

These interfaces collectively enable complex data flows, as illustrated conceptually in the `data-model.md` graph. For instance:

1.  **User Voice Command** → **Whisper** (audio-to-text) → **LLM** (text-to-action plan).
2.  **LLM Action Plan** → **ROS 2 Action Client** → **Nav2** (path planning) → **Motion Controller** (low-level commands).
3.  **Simulated Robot** → **Sensors** → **Perception Pipeline (Isaac ROS)** → **ROS 2 Topics** (sensor data).
4.  **Perception Data** → **LLM** (for context), **Nav2** (for mapping/localization).

These interconnections form the backbone of the embodied intelligence demonstrated throughout the book.
