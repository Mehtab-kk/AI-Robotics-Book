---
title: Chapter-3 Topics & Messages - Pub/Sub Communication
sidebar_position: 3
---

# Topics & Messages - Pub/Sub Communication

## What is the Publish/Subscribe System?

The Publish/Subscribe (Pub/Sub) system is like a radio broadcast. One node (the publisher) sends out information, and any number of other nodes (subscribers) can listen to that information without the publisher knowing who is listening.

## How Topics Work

1. **Publisher**: A node that sends messages on a specific topic
2. **Topic**: A named channel where messages are sent
3. **Subscriber**: A node that receives messages from a specific topic
4. **Message**: The actual data being sent between nodes

## Message Flow Diagram

```
[Sensor Node]         [Control Node]
    |                      |
    | publishes sensor     | subscribes to
    | data to topic        | sensor data topic
    | "sensor_data"        | "sensor_data"
    |     ────────────────►|──┐
    |                      |  │
[Motor Node]              |  │ receives same
    | subscribes to       |◄─┘
    | sensor data topic   |
    | "sensor_data"       |
    |    ────────────────►|
```

## Message Types

ROS 2 has many standard message types:
- `std_msgs`: Basic data types (integers, floats, strings)
- `sensor_msgs`: Sensor data (images, laser scans, IMU data)
- `geometry_msgs`: Position and movement data
- `nav_msgs`: Navigation data

## Beginner Mini Exercise

Imagine you're building a robot that needs to avoid obstacles:

1. A LiDAR sensor node publishes distance measurements to topic `/laser_scan`
2. A perception node subscribes to `/laser_scan` and detects obstacles
3. A navigation node subscribes to obstacle information and plans safe paths
4. A control node receives movement commands and drives the robot

This is a classic example of how Pub/Sub allows different parts of a robot to work together without being directly connected.

---

**Previous**: [Chapter 2: ROS 2 Nodes](./chapter-2-ros2-nodes-building-blocks.md)
**Next**: [Chapter 4: Services & Actions](./chapter-4-services-actions-parameters.md)