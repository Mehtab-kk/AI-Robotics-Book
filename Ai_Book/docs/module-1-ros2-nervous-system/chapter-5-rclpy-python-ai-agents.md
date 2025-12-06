---
title: Chapter-5 rclpy - Connecting Python AI Agents to ROS 2
sidebar_position: 5
---

# rclpy - Connecting Python AI Agents to ROS 2

## What is rclpy?

rclpy is the Python library that allows Python programs to communicate with ROS 2. It's the bridge between Python AI agents and the ROS 2 robot middleware.

## Python AI → ROS Communication

Python is a popular language for AI development, and rclpy makes it easy to connect AI algorithms to robot hardware:

```
AI Algorithm (Python) ↔ rclpy ↔ ROS 2 ↔ Robot Hardware
```

## Conceptual Python Code Examples

### Simple Publisher Node
```python
import rclpy
from rclpy.node import Node
from std_msgs.msg import String

class AIPublisher(Node):
    def __init__(self):
        super().__init__('ai_publisher')
        self.publisher = self.create_publisher(String, 'ai_commands', 10)
        timer_period = 0.5  # seconds
        self.timer = self.create_timer(timer_period, self.timer_callback)

    def timer_callback(self):
        # AI decision here
        msg = String()
        msg.data = 'AI command: move forward'
        self.publisher.publish(msg)
        self.get_logger().info(f'Publishing: {msg.data}')

def main(args=None):
    rclpy.init(args=args)
    ai_publisher = AIPublisher()
    rclpy.spin(ai_publisher)
    ai_publisher.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

### Simple Subscriber Node
```python
import rclpy
from rclpy.node import Node
from sensor_msgs.msg import LaserScan

class AISubscriber(Node):
    def __init__(self):
        super().__init__('ai_subscriber')
        self.subscription = self.create_subscription(
            LaserScan,
            'laser_scan',
            self.listener_callback,
            10)
        self.subscription  # prevent unused variable warning

    def listener_callback(self, msg):
        # AI processing of sensor data
        min_distance = min(msg.ranges)
        if min_distance < 1.0:  # If obstacle is closer than 1 meter
            self.get_logger().info('AI: Obstacle detected, planning new path')

def main(args=None):
    rclpy.init(args=args)
    ai_subscriber = AISubscriber()
    rclpy.spin(ai_subscriber)
    ai_subscriber.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

## AI → Controller Communication Conceptually

1. **Perception**: AI receives sensor data through ROS topics
2. **Decision Making**: AI algorithms process the data and make decisions
3. **Action**: AI sends commands back to robot controllers via ROS topics/services/actions
4. **Feedback**: AI receives results and adjusts future decisions

This creates a complete loop where AI agents can perceive, think, and act through the robot's ROS 2 interface.

---

**Previous**: [Chapter 4: Services & Actions](./chapter-4-services-actions-parameters.md)
**Next**: [Chapter 6: URDF Basics](./chapter-6-urdf-basics-humanoid-body.md)