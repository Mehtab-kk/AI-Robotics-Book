---
title: Chapter-2 ROS 2 Nodes - Building Blocks of Robot Software
sidebar_position: 2
---

# ROS 2 Nodes - Building Blocks of Robot Software

## What is a Node?

A node is like a single worker in a factory. Each node has a specific job:
- One node might control the robot's camera
- Another node might process sensor data
- Yet another node might control the robot's movement

Nodes work together to make the robot function as a whole.

## Node Lifecycle

A ROS 2 node goes through several stages:

1. **Unconfigured**: The node is created but not yet ready to work
2. **Inactive**: The node is configured but not yet active
3. **Active**: The node is running and doing its job
4. **Activating/Deactivating**: The node is transitioning between states

## Modular Design

Nodes are designed to be modular, meaning:
- Each node does one job well
- Nodes can be reused in different robots
- Nodes can be replaced without affecting other parts
- Multiple nodes can run on the same computer or different computers

## Node-to-Node Communication

Nodes communicate with each other using:
- **Publishers**: Send information to other nodes
- **Subscribers**: Receive information from other nodes
- **Services**: Request specific actions from other nodes
- **Actions**: Coordinate complex tasks with other nodes

## Minimal Conceptual Node (Pseudocode)

```
# A simple conceptual node example
class SimpleNode:
    def __init__(self):
        # Initialize the node
        self.node_name = "simple_sensor_node"
        self.publisher = create_publisher(SensorData, "sensor_data")
        self.sensor = initialize_sensor()

    def main_loop(self):
        # Continuously read sensor data and publish it
        while True:
            sensor_reading = self.sensor.read()
            message = SensorData(value=sensor_reading)
            self.publisher.publish(message)
            sleep(0.1)  # Small delay

    def cleanup(self):
        # Clean up resources when done
        self.sensor.shutdown()
```

This pseudocode shows the basic structure of a node that reads sensor data and publishes it to other nodes.

---

**Previous**: [Chapter 1: Introduction to ROS 2](./chapter-1-introduction-to-ros2.md)
**Next**: [Chapter 3: Topics & Messages](./chapter-3-topics-messages-pubsub.md)