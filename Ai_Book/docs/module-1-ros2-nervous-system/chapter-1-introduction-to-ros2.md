---
title: Chapter-1 Introduction to ROS 2
sidebar_position: 1
---

# Introduction to ROS 2

## What is ROS 2?

ROS 2 (Robot Operating System 2) is middleware that acts as the "nervous system" for robots. It allows different parts of a robot to communicate with each other, similar to how your nervous system allows different parts of your body to work together.

### Why Humanoids Need Middleware

Humanoid robots are complex systems with many components:
- Sensors that detect the environment
- Actuators that move the robot
- Controllers that make decisions
- Perception systems that understand the world

All these components need to share information quickly and reliably. ROS 2 provides this communication infrastructure.

## ROS 2 Architecture

ROS 2 uses a distributed architecture where each component runs as a separate process called a "node". These nodes communicate through:
- Topics (publish/subscribe)
- Services (request/response)
- Actions (goal-based communication)

## Key Differences: ROS 1 vs ROS 2

1. **Quality of Service (QoS)**: ROS 2 provides better control over message delivery
2. **Security**: ROS 2 includes built-in security features
3. **Real-time support**: ROS 2 has better real-time capabilities
4. **Multi-robot systems**: ROS 2 handles multiple robots more effectively

## Communication Patterns in Simple Terms

- **Topics**: Like a radio station broadcasting information to anyone who wants to listen
- **Services**: Like asking someone a question and waiting for their answer
- **Actions**: Like giving someone a complex task and getting updates on progress

---

**Next**: [Chapter 2: ROS 2 Nodes](./chapter-2-ros2-nodes-building-blocks.md)