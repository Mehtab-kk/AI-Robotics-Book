---
title: "Chapter-3 Language Understanding with LLMs"
sidebar_position: 3
---

# Language Understanding with LLMs

## The Role of Large Language Models in Robotics

Large Language Models (LLMs) serve as the "reasoning engine" in VLA systems. They take the text produced by speech recognition and transform it into structured plans that robots can execute. Unlike simple command-word matching, LLMs can understand context, break down complex tasks, and reason about how to achieve goals.

### What LLMs Bring to Robotics

- **Context Understanding**: Grasping the meaning behind words based on situation
- **Task Decomposition**: Breaking complex commands into simpler steps
- **Commonsense Reasoning**: Applying general knowledge to specific situations
- **Ambiguity Resolution**: Clarifying unclear instructions using context

## Converting Natural Language to Robot Actions

The key challenge is translating human-friendly language into precise robot instructions. Consider this example:

**Human Command**: "Please clean the living room before my guests arrive"

**LLM Processing**:
1. **Goal Identification**: Clean the living room
2. **Temporal Constraint**: Before guests arrive
3. **Task Decomposition**:
   - Identify objects that need cleaning
   - Plan cleaning sequence
   - Execute cleaning actions
   - Verify completion

### Action Translation Patterns

LLMs learn to map natural language to structured robot commands:

```
"Pick up the red ball" → [GRASP, target: "red ball", location: "current room"]
"Go to the kitchen" → [NAVIGATE, destination: "kitchen"]
"Turn on the light" → [ACTUATE, device: "light", action: "on"]
```

## Task Decomposition with LLM Reasoning

Complex tasks need to be broken down into executable steps. LLMs excel at this kind of reasoning:

### Example: Setting a Table
**Command**: "Set the table for four people"

**LLM Decomposition**:
1. **Reasoning**: "Setting a table requires plates, utensils, and glasses for each person"
2. **Planning**:
   - Get 4 plates
   - Get 4 sets of utensils
   - Get 4 glasses
   - Place items at table positions
3. **Execution**: Execute each sub-task sequentially

### Safety and Error Handling

LLMs can incorporate safety reasoning:

```
Input: "Throw the ball to me"
↓
Safety Check: Is throwing safe in this environment?
↓
Decision: Use gentle toss or ask for closer position
```

## Understanding Spatial Language

Robots must understand spatial relationships described in language:

### Location Descriptors
- **Relative**: "on the table", "next to the chair", "behind the door"
- **Absolute**: "in the kitchen", "at position X,Y"
- **Deictic**: "over there", "this one", "that thing" (requires shared attention)

### Navigation Commands
- **Path Planning**: "Go around the obstacle"
- **Wayfinding**: "Go to the room with the blue door"
- **Following**: "Follow me to the garden"

## Handling Ambiguous Instructions

LLMs can resolve many ambiguities through contextual reasoning:

### Contextual Disambiguation
```
Command: "Move the box"
Context: Robot is in a room with multiple boxes
LLM Reasoning: "The user was pointing at the small cardboard box"
Resolution: [MOVE, target: "small cardboard box"]
```

### Asking for Clarification
When insufficient context exists:
- "Which box would you like me to move?"
- "There are three red cups. Which one?"
- "I see two doors. Could you specify which one?"

## ROS-Style Action Translation

LLMs can be prompted to translate natural language into ROS-style action structures:

### Example Translation
```
Natural Language: "Please bring me the book from the shelf"
↓
ROS Action:
{
  "action": "navigation",
  "target_pose": {"position": "shelf_area"}
}
{
  "action": "manipulation",
  "task": "grasp_object",
  "object": "book",
  "location": "shelf"
}
{
  "action": "navigation",
  "target_pose": {"position": "user_location"}
}
{
  "action": "manipulation",
  "task": "release_object"
}
```

## Prompt Engineering for Robot Control

LLMs work better with structured prompts that guide their reasoning:

### Example Prompt Structure
```
You are a robot command interpreter. Convert the following human instruction
into robot actions. Think step by step:

Human: [instruction]
Context: [environment state, objects visible, etc.]
Goal: [what the user wants to achieve]

Think: [reasoning steps]
Actions: [structured robot commands]
```

## Limitations and Considerations

### Knowledge Limitations
- LLMs may hallucinate information about the current environment
- Real-time perception must ground LLM reasoning in reality
- LLMs may not know about specific robot capabilities

### Safety Constraints
- All LLM outputs must be validated for safety
- Robot should ask for clarification on ambiguous commands
- Emergency stop protocols must override LLM commands

### Performance Considerations
- LLM inference may be slow for real-time applications
- Local models may be needed for responsive interaction
- Caching common command translations can improve speed

## Practical Exercise: LLM Translation

Try translating these commands into robot actions:

### Exercise 1
**Command**: "Could you please put the dirty dishes in the sink?"

**LLM Processing**:
- Identify objects: "dirty dishes"
- Identify destination: "sink"
- Plan approach to dish location
- Grasp dishes (considering fragility)
- Navigate to sink
- Release dishes in sink

### Exercise 2
**Command**: "Show me how to make coffee"

**LLM Processing**:
- Recognize this as a demonstration request
- Identify coffee-making components (machine, cups, beans)
- Break down coffee-making process
- Execute actions while explaining each step

## Looking Forward: Language + Vision Integration

The next chapter explores how robots use vision systems to complement language understanding, creating more robust and accurate interpretation of human commands.

---

**Previous**: [Chapter 2: Voice-to-Action with Whisper (Conceptual)](./chapter-2-voice-to-action-whisper.md)
**Next**: [Chapter 4: Vision for VLA](./chapter-4-vision-for-vla.md)