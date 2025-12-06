---
title: Chapter-3 Creating Simple Simulations
sidebar_position: 3
---

# Creating Simple Simulations

## Loading Your Module 1 URDF into Gazebo

In Module 1, you created a humanoid URDF (Unified Robot Description Format) model. Now we'll bring that virtual robot into Gazebo for physics simulation. The URDF file contains all the information Gazebo needs to understand your robot's structure, joints, and physical properties.

### Steps to Load Your URDF in Gazebo (Conceptual)

1. **Prepare your URDF**: Ensure your Module 1 humanoid URDF includes physical properties
2. **Convert to Gazebo model**: Package your URDF as a Gazebo model
3. **Launch in simulation**: Start Gazebo with your robot model

### Basic URDF Requirements for Gazebo

Your URDF should include:
- **Inertial properties**: Mass, center of mass, and inertia for each link
- **Collision geometry**: How your robot interacts physically with the world
- **Visual geometry**: How your robot appears visually
- **Joint limits**: Safe movement ranges for each joint

## Running Basic Motion Tests

Once your robot is loaded in Gazebo, you can test its basic movements:

### Joint Movement Tests
1. **Individual Joint Testing**: Move each joint independently to verify range of motion
2. **Torso Movement**: Test upper body movements
3. **Arm Movements**: Check reach and dexterity
4. **Leg Movements**: Verify stance and stepping capabilities

### Physics Interaction Tests
1. **Gravity Response**: Does the robot respond correctly to gravity?
2. **Collision Detection**: Does the robot interact properly with the ground and objects?
3. **Stability**: Is the robot stable in its default pose?

## Visualizing Joints and Sensors

### Joint Visualization
Gazebo provides tools to visualize:
- **Joint positions**: Current angles of each joint
- **Joint velocities**: How fast joints are moving
- **Joint efforts**: How much force is being applied

### Sensor Visualization (Conceptual)
Your robot can have virtual sensors that provide:
- **Camera feeds**: Visual information from the robot's perspective
- **LiDAR data**: Distance measurements to surrounding objects
- **IMU readings**: Information about orientation and acceleration

## Mini-Exercise: Basic Robot Simulation

Follow these conceptual steps to run your first simulation:

1. **Load your URDF**: Import your Module 1 humanoid model into Gazebo
2. **Set initial pose**: Position your robot in a stable starting position
3. **Run physics simulation**: Start the physics engine to see gravity effects
4. **Test joint movements**: Send simple commands to move individual joints
5. **Observe behavior**: Watch how your robot responds to basic commands

### Expected Outcomes
- Your robot should stand or sit stably (depending on initial pose)
- Joints should move within their defined limits
- The robot should respond appropriately to gravity
- No unexpected collisions or physics errors should occur

## Safety Considerations in Simulation

Even in simulation, it's important to:
- **Set joint limits**: Prevent damaging movements
- **Use soft controllers**: Avoid excessive forces
- **Test gradually**: Start with simple movements before complex behaviors
- **Monitor behavior**: Watch for unexpected interactions

## Connecting to ROS 2

Your simulated robot connects to ROS 2 through:
- **Robot State Publisher**: Publishes joint positions to ROS topics
- **Joint State Publisher**: Provides current joint states
- **Controllers**: Allow ROS 2 nodes to control robot movements

This integration allows you to use the ROS 2 knowledge from Module 1 to control your simulated robot.

---

**Previous**: [Chapter 2: Gazebo Physics Simulation](./chapter-2-gazebo-physics-simulation.md)
**Next**: [Chapter 4: Unity Basics](./chapter-4-unity-basics.md)