---
title: Chapter-6 URDF Basics - The Humanoid Robot Body
sidebar_position: 6
---

# URDF Basics - The Humanoid Robot Body

## What is URDF?

URDF stands for Unified Robot Description Format. It's an XML-based format that describes a robot's physical properties:
- Shape and appearance
- Joints and connections
- Sensors and actuators
- Mass and inertial properties

## Links, Joints, and Sensors in URDF

### Links
Links represent the rigid parts of a robot:
- Robot torso
- Arms and legs
- Head
- Hands and feet

Each link has:
- Visual properties (shape, color, mesh)
- Collision properties (for physics simulation)
- Inertial properties (mass, center of mass)

### Joints
Joints connect links together:
- **Revolute**: Rotating joints (like elbows, knees)
- **Prismatic**: Sliding joints (like linear actuators)
- **Fixed**: Permanent connections (no movement)
- **Continuous**: Joints that can rotate infinitely

### Sensors
URDF can describe where sensors are placed:
- Cameras
- IMU (Inertial Measurement Unit)
- Force/torque sensors
- LiDAR units

## How to Read Simple URDF Files

A basic humanoid URDF looks like this:

```xml
<?xml version="1.0"?>
<robot name="simple_humanoid">
  <!-- Torso link -->
  <link name="torso">
    <visual>
      <geometry>
        <box size="0.3 0.2 0.5"/>
      </geometry>
      <material name="blue">
        <color rgba="0 0 1 1"/>
      </material>
    </visual>
    <collision>
      <geometry>
        <box size="0.3 0.2 0.5"/>
      </geometry>
    </collision>
    <inertial>
      <mass value="5.0"/>
      <inertia ixx="1.0" ixy="0.0" ixz="0.0" iyy="1.0" iyz="0.0" izz="1.0"/>
    </inertial>
  </link>

  <!-- Head link connected to torso -->
  <link name="head">
    <visual>
      <geometry>
        <sphere radius="0.1"/>
      </geometry>
    </visual>
  </link>

  <!-- Joint connecting torso to head -->
  <joint name="neck_joint" type="revolute">
    <parent link="torso"/>
    <child link="head"/>
    <origin xyz="0 0 0.3"/>
    <axis xyz="0 1 0"/>
    <limit lower="-0.5" upper="0.5" effort="10.0" velocity="1.0"/>
  </joint>
</robot>
```

## RViz Visualization Conceptually

RViz is ROS's 3D visualization tool. It can:
- Display robot models in 3D
- Show sensor data overlaid on the robot
- Animate joint movements
- Visualize navigation paths
- Display camera feeds in their proper positions

RViz helps you see how your robot will look and behave before running it on real hardware or in simulation.

---

**Previous**: [Chapter 5: rclpy Basics](./chapter-5-rclpy-python-ai-agents.md)
**Next**: [Chapter 7: Building Humanoid URDF](./chapter-7-building-simple-humanoid-urdf.md)