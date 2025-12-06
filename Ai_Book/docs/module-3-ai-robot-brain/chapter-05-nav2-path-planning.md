---
id: chapter-05-nav2-path-planning
title: "chapter-5 Nav2 Path Planning"
sidebar_position: 5
---

# Nav2 Path Planning

## Overview
Navigation 2 (Nav2) is ROS 2's state-of-the-art navigation framework that provides path planning and obstacle avoidance capabilities for mobile robots. In this chapter, we'll explore how Nav2 works with Isaac to enable intelligent navigation for humanoid robots.

**Nav2 (Navigation 2) (Nave aise 2):** ROS 2's navigation framework for path planning and obstacle avoidance.

## Nav2 Architecture
Nav2 consists of several key components that work together to enable robot navigation:

### Global Planner
- Computes the overall path from start to goal
- Considers static map information
- Generates optimal route considering costmap

### Local Planner
- Handles real-time obstacle avoidance
- Adjusts path based on sensor data
- Controls robot motion in immediate vicinity

### Costmap
- Represents environment with cost values
- Higher costs for obstacles and risky areas
- Lower costs for free space and preferred paths

## Nav2 in Isaac Environment
```python
# Nav2 path planner structure
class Nav2PathPlanner:
    def __init__(self):
        self.planner_name = "Isaac_Nav2_Planner"
        self.robot_type = "humanoid"  # bipedal, wheeled, aerial
        self.costmap_resolution = 0.05  # meters per cell
        self.inflation_radius = 0.5  # meters
        self.global_planner = "NavFn"  # A*, Dijkstra, etc.
        self.local_planner = "TebLocalPlanner"  # DWA, Trajectory, etc.

    def compute_path(self, start, goal):
        # Compute global path from start to goal
        global_path = self.global_planner.plan(start, goal, self.costmap)
        return global_path

    def update_costmap(self, observations):
        # Update costmap with new sensor observations
        self.costmap.update(observations)

    def execute_path(self, path, controller_config):
        # Execute path following with local obstacle avoidance
        return self.local_planner.execute(path, controller_config)
```

## Configuring Nav2 for Humanoid Robots
Humanoid robots have unique navigation requirements compared to wheeled robots:

### Special Considerations
- **Footstep Planning**: Account for bipedal locomotion
- **Balance Constraints**: Maintain center of gravity
- **Step Height**: Navigate stairs and obstacles appropriately
- **Stability**: Ensure stable walking patterns

### Configuration Parameters
- **Footprint**: Define humanoid robot shape and size
- **Velocity Limits**: Set appropriate linear and angular velocities
- **Acceleration Limits**: Ensure stable movement transitions
- **Tolerance Values**: Define acceptable navigation accuracy

## Example: Nav2 Configuration for Humanoid Robot
```python
# Isaac Nav2 configuration for humanoid robot
def configure_nav2_for_humanoid():
    nav2_config = {
        'planner_server': {
            'NavfnPlanner': {
                'use_astar': True,
                'allow_unknown': True
            },
            'GridBased': {
                'tolerance': 0.5,
                'use_final_approach_orientation': False
            }
        },
        'controller_server': {
            'TebLocalPlanner': {
                'max_vel_x': 0.5,      # Humanoid walking speed
                'max_vel_theta': 0.5,  # Angular velocity limit
                'acc_lim_x': 0.5,      # Acceleration limit
                'acc_lim_theta': 0.5,  # Angular acceleration limit
                'footprint_model': {
                    'type': 'polygon',
                    'vertices': [[0.2, 0.15], [0.2, -0.15], [-0.2, -0.15], [-0.2, 0.15]]
                }
            }
        },
        'costmap': {
            'resolution': 0.05,
            'inflation_radius': 0.6,  # Account for humanoid width
            'robot_radius': 0.3
        }
    }
    return nav2_config
```

## Integration with VSLAM
Nav2 works closely with VSLAM systems to enable autonomous navigation:

```
VSLAM Localization → Costmap Updates → Path Planning → Robot Control
```

## Mini-Exercise
Design a navigation scenario for a humanoid robot in an office environment. What special considerations would you need to account for compared to a wheeled robot?

## Summary
Nav2 provides sophisticated path planning capabilities for humanoid robots in the Isaac ecosystem. In the next chapter, we'll explore sensor integration for AI perception.