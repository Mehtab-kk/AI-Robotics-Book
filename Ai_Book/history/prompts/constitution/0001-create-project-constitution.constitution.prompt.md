---
id: 1
title: create-project-constitution
stage: constitution
date: 2025-12-06
surface: agent
model: claude-sonnet-4-5-20250929
feature: none
branch: master
user: Classic 220
command: /sp.constitution
labels: [constitution, setup, governance]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - .specify/memory/constitution.md
tests:
 - none
---

## Prompt

```
project_name: "Physical AI and Humanoid Robotics"
project_type: "AI/Spec-Driven Book Creation"
version: "v2.0"

mission:
  - Build a complete textbook that teaches Physical AI, humanoid robotics, ROS 2, Gazebo, Unity, NVIDIA Isaac, and VLA.
  - Convert complex robotics concepts into beginner-friendly, simple-English explanations.
  - Provide structured learning pathways from simulation → perception → humanoid control → VLA.
  - Produce a Docusaurus website deployed to GitHub Pages.
  - Apply Spec-Kit Plus workflow end-to-end for every chapter.

values:
  - Accuracy and technical correctness
  - Clarity (simple English + Roman Urdu examples allowed)
  - Beginner-friendly robotics education
  - Modular, reusable architecture
  - High-quality simulation-based learning
  - Safety, responsibility, and ethical AI usage

rules:
  - All content must be written in clear simple English.
  - Every chapter must follow Spec-Kit Plus phases (/specify → /plan → /tasks → /implement).
  - Examples must avoid unsafe or harmful robotics actions.
  - No hardware hacking instructions—simulation only.
  - All diagrams must be simple and beginner-friendly.
  - All code samples must be tested in ROS 2 Humble + Gazebo + Isaac Sim environment.
  - Maintain tone: professional, helpful, accessible for teens and beginners.
  - Use modular folder structure compatible with Docusaurus v3.
  - Follow book outline strictly unless modified by the spec writer.

agents:
  - content_writer:
      tool: Claude Code
      role: Writes chapters, converts theory into Markdown, produces examples.

  - technical_reviewer:
      role: Ensures correctness of robotics, ROS 2, Isaac, physics, and AI content.

  - simulation_expert:
      role: Provides Gazebo, Unity, and Isaac simulation workflows, pipelines, diagrams.

  - robotics_engineer:
      role: Ensures URDF, ROS 2 nodes, controllers, and navigation logic follow industry standards.

  - editor_for_simple_english:
      role: Simplifies language, removes jargon, keeps content readable for beginners.

deliverables:
  - A fully structured textbook with:
      • 4 Modules
      • 1 Capstone Project
      • define  chapters in total in (specify)
  - All chapters written in Markdown for Docusaurus.
  - A complete sidebar + navigation structure.
  - GitHub Pages deployment pipeline.
  - Simulation-ready examples for ROS 2, Gazebo, Unity, and Isaac.

book_overview:
  theme: "AI systems in the physical world (Embodied Intelligence)"
  goal: "Bridge the digital AI brain with the physical humanoid body"
  quarter_focus: "Teach students to control humanoid robots in simulation using AI-driven intelligence"
```

## Response snapshot

Created the project constitution file (.specify/memory/constitution.md) for the Physical AI and Humanoid Robotics book project with the following key elements:

1. Core Principles:
   - Technical Accuracy and Scientific Review
   - Simulation-First Approach
   - Beginner-Friendly Clarity
   - Spec-Driven Development
   - Modular and Reusable Architecture
   - Ethical AI and Safety Focus

2. Additional Constraints:
   - Technology Stack Requirements (ROS 2 Humble, Gazebo, Isaac Sim, Unity, VLA, Docusaurus)
   - Content Structure (4 Modules, Capstone Project, Markdown format)
   - Quality Standards (simple diagrams, tested code, beginner-focused)

3. Development Workflow:
   - Chapter Creation Process following Spec-Kit Plus phases
   - Review Process with technical, simulation, and editor reviews
   - Quality Gates for code, safety, and alignment

4. Governance:
   - Constitution supersedes all other practices
   - Amendment procedures and compliance requirements

## Outcome

- ✅ Impact: Created foundational governance document for the Physical AI and Humanoid Robotics book project
- 🧪 Tests: none
- 📁 Files: Created .specify/memory/constitution.md with version 1.0.0
- 🔁 Next prompts: Can proceed with /sp.specify to define feature specifications
- 🧠 Reflection: Constitution properly captures all specified requirements and constraints

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): N/A