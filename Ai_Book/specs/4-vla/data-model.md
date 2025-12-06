# Data Model: Vision-Language-Action (VLA) System

## Core Entities

### 1. VLACommand
Represents a high-level command from the user that needs to be processed by the VLA system.

**Fields**:
- `id`: Unique identifier for the command
- `raw_input`: Original user input (text or voice transcription)
- `intent`: Parsed intent from language understanding
- `objects`: List of relevant objects identified
- `locations`: Spatial references in the command
- `constraints`: Safety, temporal, or other constraints
- `status`: Current processing status (pending, processing, completed, failed)
- `created_at`: Timestamp of command creation
- `completed_at`: Timestamp of command completion

**Validation Rules**:
- `raw_input` must not be empty
- `status` must be one of the defined status values
- `created_at` must be before `completed_at` if command is completed

### 2. VisionPerception
Represents the visual perception data captured and processed by the system.

**Fields**:
- `id`: Unique identifier for the perception data
- `timestamp`: When the perception was captured
- `detected_objects`: List of objects identified in the scene
- `object_properties`: Properties of each detected object (position, orientation, etc.)
- `spatial_relationships`: Relationships between objects
- `environment_state`: Overall state of the observed environment
- `confidence_scores`: Confidence in each detection

**Validation Rules**:
- `timestamp` must be in the past or present
- `confidence_scores` must be between 0 and 1
- `detected_objects` must have corresponding properties

### 3. LanguageInterpretation
Represents the processed language understanding from the command.

**Fields**:
- `id`: Unique identifier for the interpretation
- `original_command`: The original command text
- `parsed_intent`: Structured representation of the intent
- `entities`: Named entities identified in the command
- `action_sequence`: Sequence of actions to be performed
- `context`: Contextual information for interpretation
- `confidence`: Confidence in the interpretation

**Validation Rules**:
- `confidence` must be between 0 and 1
- `parsed_intent` must be a valid structured intent
- `action_sequence` must contain at least one action

### 4. CognitivePlan
Represents the high-level plan generated from the language interpretation and visual perception.

**Fields**:
- `id`: Unique identifier for the plan
- `command_id`: Reference to the original command
- `tasks`: Sequence of high-level tasks to be performed
- `constraints`: Constraints to be respected during execution
- `estimated_time`: Estimated time to complete the plan
- `risk_assessment`: Assessment of potential risks
- `fallback_plans`: Alternative plans if primary plan fails

**Validation Rules**:
- `tasks` must form a valid sequence
- `estimated_time` must be positive
- `risk_assessment` must be completed

### 5. ActionExecution
Represents the execution of a specific action by the robot.

**Fields**:
- `id`: Unique identifier for the execution
- `plan_id`: Reference to the parent plan
- `action_type`: Type of action being executed
- `parameters`: Parameters for the action
- `start_time`: When the action started
- `end_time`: When the action ended
- `success`: Whether the action was successful
- `error_message`: Error message if action failed
- `feedback`: Feedback from the execution

**Validation Rules**:
- `start_time` must be before `end_time` if action is completed
- `success` must be true if no `error_message` is present
- `action_type` must be a valid action type

### 6. RobotState
Represents the current state of the robot.

**Fields**:
- `id`: Unique identifier for the state snapshot
- `timestamp`: When the state was recorded
- `position`: Current position of the robot
- `orientation`: Current orientation of the robot
- `joint_positions`: Positions of all robot joints
- `gripper_state`: State of the robot's gripper(s)
- `battery_level`: Current battery level
- `active_tasks`: Currently active tasks

**Validation Rules**:
- `battery_level` must be between 0 and 100
- `position` and `orientation` must be valid coordinates
- `joint_positions` must be within robot limits

### 7. StudentLearningPath
Tracks the student's progress through the VLA module.

**Fields**:
- `id`: Unique identifier for the learning path
- `student_id`: Identifier for the student
- `current_chapter`: Current chapter in the module
- `completed_chapters`: List of completed chapters
- `exercise_scores`: Scores on exercises
- `project_status`: Status of capstone project
- `last_accessed`: When the student last accessed the module

**Validation Rules**:
- `current_chapter` must be a valid chapter in the module
- `exercise_scores` must be between 0 and 100
- `student_id` must be unique

## Relationships

### Command Processing Flow
```
VLACommand --[generates]--> LanguageInterpretation
LanguageInterpretation --[combined with]--> VisionPerception
LanguageInterpretation + VisionPerception --[generates]--> CognitivePlan
CognitivePlan --[executed as]--> ActionExecution
```

### State Tracking
```
ActionExecution --[updates]--> RobotState
StudentLearningPath --[tracks]--> VLACommand (progress)
```

## State Transitions

### VLACommand States
- `pending` → `processing` → `completed` | `failed`
- `processing` → `cancelled` (by user or system)

### ActionExecution States
- `pending` → `in_progress` → `completed` | `failed`
- `in_progress` → `paused` → `in_progress` | `cancelled`

### StudentLearningPath States
- `not_started` → `in_progress` → `completed`
- `in_progress` → `on_hold` (optional)