book_title: "Physical AI and Humanoid Robotics"
audience: "Beginners, AI students, robotics learners"
writing_style:
  - professional
  - clear simple English
  - Roman Urdu examples allowed
  - high-level but beginner-friendly

theme: "AI systems in the physical world — Embodied Intelligence"
goal: "Bridge digital AI with physical humanoid robots using ROS 2, Gazebo, NVIDIA Isaac, and VLA."

quarter_overview: |
  The future of AI extends beyond digital spaces into the physical world.
  This capstone quarter introduces Physical AI—AI systems that function in reality and comprehend physical laws.
  Students learn to design, simulate, and deploy humanoid robots capable of natural human interactions using ROS 2, Gazebo, and NVIDIA Isaac.

modules:

  module_1:
    name: "The Robotic Nervous System (ROS 2)"
    focus: "Middleware for robot control"
    topics:
      - ROS 2 Nodes, Topics, and Services
      - Bridging Python Agents to ROS controllers using rclpy
      - Understanding URDF (Unified Robot Description Format) for humanoids

  module_2:
    name: "The Digital Twin (Gazebo & Unity)"
    focus: "Physics simulation and environment building"
    topics:
      - Physics, gravity, collisions simulation in Gazebo
      - High-fidelity rendering and interactions in Unity
      - Sensor simulation: LiDAR, Depth Cameras, IMUs

  module_3:
    name: "The AI-Robot Brain (NVIDIA Isaac)"
    focus: "Advanced perception and simulation"
    topics:
      - NVIDIA Isaac Sim (photorealistic simulation + synthetic data)
      - Isaac ROS (VSLAM, accelerated navigation)
      - Nav2: Path planning for bipedal humanoids

  module_4:
    name: "Vision-Language-Action (VLA)"
    focus: "LLMs + Robotics convergence"
    topics:
      - Voice-to-Action using OpenAI Whisper
      - Cognitive LLM Planning (e.g., 'Clean the room' → ROS 2 action plan)

  capstone:
    name: "Autonomous Humanoid Robot"
    description: |
      A simulated humanoid receives a voice command,
      performs SLAM, plans a path, navigates obstacles,
      identifies an object using computer vision,
      and manipulates it.

why_physical_ai_matters: |
  Humanoid robots fit perfectly in our human-centered world because they share our physical form
  and can be trained with abundant data.
  This marks a major shift from digital-only intelligence to embodied systems operating in real physical space.

learning_outcomes:
  - Understand Physical AI & Embodied Intelligence
  - Master ROS 2 for robot control
  - Build simulations with Gazebo and Unity
  - Develop AI pipelines using NVIDIA Isaac
  - Design humanoids for natural interaction
  - Integrate GPT models for conversational robotics

assessments:
  - "ROS 2 package development project"
  - "Gazebo simulation implementation"
  - "Isaac perception pipeline"
  - "Capstone: Full simulated humanoid robot with conversational AI"

hardware_requirements: |
  This course is computationally heavy: physics simulation (Isaac/Gazebo),
  visual perception (SLAM/CV), and generative AI (LLMs/VLA).