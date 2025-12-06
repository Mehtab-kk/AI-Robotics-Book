# Data Model: The Robotic Nervous System (ROS 2)

## Entity: ROS2Node
**Description**: A process that performs computation in the ROS 2 system, representing a modular component of robot behavior
**Fields**:
- name: string - The unique identifier for the node
- namespace: string - Optional namespace for organizing nodes
- lifecycle: NodeLifecycle - The current state of the node (created, configured, activated, deactivated, cleaned up, unconfigured, finalized)
- publishers: list of Publisher - List of publishers this node owns
- subscribers: list of Subscriber - List of subscribers this node owns
- services: list of Service - List of services this node provides
- clients: list of Client - List of clients this node uses

## Entity: CommunicationPattern
**Description**: Methods for exchanging information between nodes in ROS 2
**Fields**:
- type: enum (Topic, Service, Action) - The type of communication pattern
- topic_name: string (for Topics) - The name of the topic for pub/sub communication
- service_name: string (for Services) - The name of the service for request/response communication
- action_name: string (for Actions) - The name of the action for goal-based communication
- message_type: string - The type of message used in communication
- qos_profile: QoSProfile - Quality of Service settings for the communication

## Entity: URDFModel
**Description**: Unified Robot Description Format files that describe robot physical properties
**Fields**:
- robot_name: string - The name of the robot
- links: list of URDFLink - List of physical components of the robot
- joints: list of URDFJoint - List of connections between links
- materials: list of URDFMaterial - List of materials used in the robot
- gazebo_extensions: list of GazeboExtension - Simulation-specific extensions

## Entity: URDFLink
**Description**: A physical component of a robot in URDF format
**Fields**:
- name: string - The unique identifier for the link
- visual: VisualGeometry - Visual representation of the link
- collision: CollisionGeometry - Collision properties of the link
- inertial: InertialProperties - Mass and inertia properties
- sensors: list of Sensor - Sensors attached to this link

## Entity: URDFJoint
**Description**: Connection between two links in a robot
**Fields**:
- name: string - The unique identifier for the joint
- type: enum (revolute, continuous, prismatic, fixed, floating, planar) - The type of joint
- parent: string - The name of the parent link
- child: string - The name of the child link
- origin: Pose - The position and orientation of the joint
- axis: Vector3 - The axis of rotation or translation

## Entity: LaunchFile
**Description**: Configuration files that define how to start multiple ROS 2 nodes together
**Fields**:
- file_name: string - The name of the launch file
- nodes: list of NodeLaunchConfig - List of nodes to launch
- parameters: dict - Parameters to pass to nodes
- remappings: list of Remapping - Topic/service remappings
- conditions: list of Condition - Conditional launch logic

## Entity: NodeLaunchConfig
**Description**: Configuration for launching a single ROS 2 node
**Fields**:
- package: string - The package containing the node
- executable: string - The executable name
- name: string - The name to give the node at runtime
- namespace: string - The namespace for the node
- parameters: dict - Parameters for the node
- remappings: list of Remapping - Topic/service remappings for this node