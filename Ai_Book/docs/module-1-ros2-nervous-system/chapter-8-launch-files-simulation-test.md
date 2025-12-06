---
title: Chapter-8 Launch Files & Humanoid Simulation Test
sidebar_position: 8
---

# Launch Files & Humanoid Simulation Test

## What are Launch Files?

Launch files are XML or Python files that define how to start multiple ROS 2 nodes together. They're like a recipe that tells ROS 2 exactly which nodes to run and how to configure them.

## Launch File Structure

A simple launch file for a humanoid robot might look like:

```python
from launch import LaunchDescription
from launch_ros.actions import Node
from ament_index_python.packages import get_package_share_directory
import os

def generate_launch_description():
    return LaunchDescription([
        # Robot state publisher to publish URDF
        Node(
            package='robot_state_publisher',
            executable='robot_state_publisher',
            name='robot_state_publisher',
            parameters=[{
                'robot_description': open(
                    os.path.join(get_package_share_directory('my_robot_description'),
                                'urdf', 'humanoid.urdf')
                ).read()
            }]
        ),

        # Joint state publisher (for simulation)
        Node(
            package='joint_state_publisher',
            executable='joint_state_publisher',
            name='joint_state_publisher'
        ),

        # Controller manager
        Node(
            package='controller_manager',
            executable='ros2_control_node',
            name='controller_manager'
        ),

        # Navigation node
        Node(
            package='my_navigation_package',
            executable='navigation_node',
            name='navigation_node'
        )
    ])
```

## Conceptual Simulation Startup Process

1. **Load Robot Model**: The URDF is loaded to define the robot's physical structure
2. **Initialize Controllers**: Joint controllers are started to manage robot movement
3. **Start Perception Nodes**: Sensor processing nodes begin handling data
4. **Launch Navigation**: Path planning and obstacle avoidance systems activate
5. **Connect Interfaces**: Visualization tools and user interfaces connect

## "Humanoid Startup Test" Instructions

This capstone exercise combines everything learned in this module:

### Step 1: Verify Robot Model
- Confirm the URDF loads without errors
- Check that all joints are properly connected
- Validate that sensor placements are correct

### Step 2: Test Communication
- Verify nodes can communicate via topics
- Test service calls between different components
- Ensure actions work for complex behaviors

### Step 3: Simulation Integration
- Load the robot model into a simulation environment
- Test joint movements within safe limits
- Verify sensor data is being published correctly

### Step 4: Basic Control
- Send simple movement commands to the robot
- Observe the robot's response in simulation
- Verify the control loop is functioning properly

### Step 5: System Integration
- Run multiple nodes simultaneously using launch files
- Monitor system performance and resource usage
- Document any issues or improvements needed

## Summary

Congratulations! You've completed Module 1: The Robotic Nervous System (ROS 2). You now understand:
- How ROS 2 serves as the communication backbone for humanoid robots
- How to structure robot software using nodes
- How different communication patterns work
- How to connect AI agents using rclpy
- How to describe robot structure with URDF
- How to coordinate multiple systems with launch files

This foundation prepares you for Module 2: Digital Twin, where you'll learn to create virtual replicas of physical robots.

---

**Previous**: [Chapter 7: Building Humanoid URDF](./chapter-7-building-simple-humanoid-urdf.md)