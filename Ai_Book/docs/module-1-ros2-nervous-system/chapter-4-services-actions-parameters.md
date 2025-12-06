---
title: Chapter-4 Services & Actions - Requesting Robot Behavior
sidebar_position: 4
---

# Services & Actions - Requesting Robot Behavior

## Services vs Actions

Both services and actions allow nodes to request specific behavior from other nodes, but they work differently:

### Services (Request/Response)
- **Synchronous**: Client waits for response
- **Simple**: One request, one response
- **Fast**: Good for quick operations
- **Example**: "What is the robot's current position?"

### Actions (Goal-Based Communication)
- **Asynchronous**: Client can do other things while waiting
- **Complex**: Goal, feedback, and result
- **Progress tracking**: Updates on how the task is going
- **Example**: "Move the robot to position X, and tell me how it's going"

## Services in Humanoid Movement

Services are used for immediate robot operations:

```
Client Node → Service Request → Server Node
"Move arm to position (x,y,z)" → "Moving arm..." → "Arm moved successfully"
```

Common service uses in humanoid robots:
- Setting joint positions
- Requesting sensor calibration
- Querying robot status
- Activating/deactivating systems

## Actions in Humanoid Movement

Actions are used for longer operations:

```
Client Node → Goal → Server Node
"Walk to target location" → Robot starts walking → Feedback: "50% complete"
                                    ↓
                            Result: "Arrived at target"
```

Common action uses in humanoid robots:
- Walking to a location
- Grasping an object
- Executing a complex motion sequence
- Performing a task with multiple steps

## Parameters for Robot Tuning

Parameters are configuration values that control robot behavior:
- Joint limits
- Movement speeds
- Safety thresholds
- Sensor calibration values

Parameters can be set at startup or changed during operation to tune robot performance.

## Use Cases in Humanoid Control

### Services Use Cases:
- Requesting immediate state information
- Triggering quick actions (LED on/off)
- Calibration requests
- Emergency stop commands

### Actions Use Cases:
- Navigation tasks
- Manipulation tasks
- Complex movement sequences
- Long-duration behaviors

---

**Previous**: [Chapter 3: Topics & Messages](./chapter-3-topics-messages-pubsub.md)
**Next**: [Chapter 5: rclpy Basics](./chapter-5-rclpy-python-ai-agents.md)