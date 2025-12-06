---
title: Chapter-7 Building a Simple Humanoid URDF
sidebar_position: 7
---

# Building a Simple Humanoid URDF

## Creating a Humanoid Structure

A simple humanoid robot typically includes:
- Torso (main body)
- Head
- Two arms (left and right)
- Two legs (left and right)
- Joints connecting all parts

## Modular URDF Structure

The URDF should be organized in a modular way, where each body part is clearly defined:

```xml
<?xml version="1.0"?>
<robot name="simple_humanoid">
  <!-- Main body parts -->
  <link name="base_link">...</link>
  <link name="torso">...</link>
  <link name="head">...</link>

  <!-- Left arm -->
  <link name="left_shoulder">...</link>
  <link name="left_upper_arm">...</link>
  <link name="left_forearm">...</link>
  <link name="left_hand">...</link>

  <!-- Right arm -->
  <link name="right_shoulder">...</link>
  <link name="right_upper_arm">...</link>
  <link name="right_forearm">...</link>
  <link name="right_hand">...</link>

  <!-- Left leg -->
  <link name="left_hip">...</link>
  <link name="left_upper_leg">...</link>
  <link name="left_lower_leg">...</link>
  <link name="left_foot">...</link>

  <!-- Right leg -->
  <link name="right_hip">...</link>
  <link name="right_upper_leg">...</link>
  <link name="right_lower_leg">...</link>
  <link name="right_foot">...</link>

  <!-- Joints connecting the parts -->
  <joint name="torso_joint" type="fixed">
    <parent link="base_link"/>
    <child link="torso"/>
  </joint>

  <!-- Neck joint -->
  <joint name="neck_joint" type="revolute">
    <parent link="torso"/>
    <child link="head"/>
    <origin xyz="0 0 0.6"/>
    <axis xyz="0 1 0"/>
    <limit lower="-0.5" upper="0.5" effort="10.0" velocity="1.0"/>
  </joint>

  <!-- Example arm joint -->
  <joint name="left_shoulder_joint" type="revolute">
    <parent link="torso"/>
    <child link="left_shoulder"/>
    <origin xyz="0.1 0.2 0.4"/>
    <axis xyz="0 1 0"/>
    <limit lower="-1.57" upper="1.57" effort="10.0" velocity="1.0"/>
  </joint>

  <!-- Additional joints would follow the same pattern -->
</robot>
```

## Adding Sensors to URDF

Sensors are typically added as additional links connected with fixed joints:

```xml
<!-- IMU sensor -->
<link name="imu_link">
  <inertial>
    <mass value="0.01"/>
    <inertia ixx="0.0001" ixy="0" ixz="0" iyy="0.0001" iyz="0" izz="0.0001"/>
  </inertial>
</link>

<joint name="imu_joint" type="fixed">
  <parent link="torso"/>
  <child link="imu_link"/>
  <origin xyz="0 0 0.1" rpy="0 0 0"/>
</joint>

<!-- Camera sensor -->
<link name="camera_link">
  <visual>
    <geometry>
      <box size="0.02 0.05 0.02"/>
    </geometry>
  </visual>
</link>

<joint name="camera_joint" type="fixed">
  <parent link="head"/>
  <child link="camera_link"/>
  <origin xyz="0.05 0 0.05" rpy="0 0 0"/>
</joint>
```

## Joint Limits for Safety

Joint limits are critical for safe robot operation:

```xml
<joint name="elbow_joint" type="revolute">
  <parent link="upper_arm"/>
  <child link="forearm"/>
  <origin xyz="0 -0.3 0"/>
  <axis xyz="0 1 0"/>
  <!-- Limits prevent damage to the robot -->
  <limit lower="0.0" upper="2.5" effort="50.0" velocity="2.0"/>
</joint>
```

These limits ensure the robot doesn't move in ways that could damage itself or others.

---

**Previous**: [Chapter 6: URDF Basics](./chapter-6-urdf-basics-humanoid-body.md)
**Next**: [Chapter 8: Launch Files & Simulation](./chapter-8-launch-files-simulation-test.md)