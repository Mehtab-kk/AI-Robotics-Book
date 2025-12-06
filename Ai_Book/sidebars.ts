import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Physical AI and Humanoid Robotics',
      items: [
        {
          type: 'category',
          label: 'Module 1: The Robotic Nervous System (ROS 2)',
          items: [
            'module-1-ros2-nervous-system/chapter-1-introduction-to-ros2',
            'module-1-ros2-nervous-system/chapter-2-ros2-nodes-building-blocks',
            'module-1-ros2-nervous-system/chapter-3-topics-messages-pubsub',
            'module-1-ros2-nervous-system/chapter-4-services-actions-parameters',
            'module-1-ros2-nervous-system/chapter-5-rclpy-python-ai-agents',
            'module-1-ros2-nervous-system/chapter-6-urdf-basics-humanoid-body',
            'module-1-ros2-nervous-system/chapter-7-building-simple-humanoid-urdf',
            'module-1-ros2-nervous-system/chapter-8-launch-files-simulation-test',
          ],
        },
        {
          type: 'category',
          label: 'Module 2: Digital Twin (Gazebo & Unity)',
          items: [
            'module-2-digital-twin/chapter-1-introduction-to-digital-twins',
            'module-2-digital-twin/chapter-2-gazebo-physics-simulation',
            'module-2-digital-twin/chapter-3-creating-simple-simulations',
            'module-2-digital-twin/chapter-4-unity-basics',
            'module-2-digital-twin/chapter-5-sensor-simulation',
            'module-2-digital-twin/chapter-6-robot-interaction-in-unity',
            'module-2-digital-twin/chapter-7-combining-gazebo-unity',
            'module-2-digital-twin/chapter-8-mini-project-digital-twin-test',
          ],
        },
        {
          type: 'category',
          label: 'Module 3: AI Robot Brain (NVIDIA Isaac)',
          items: [
            'module-3-ai-robot-brain/chapter-01-intro-isaac',
            'module-3-ai-robot-brain/chapter-02-photorealistic-simulation',
            'module-3-ai-robot-brain/chapter-03-isaac-ros-basics',
            'module-3-ai-robot-brain/chapter-04-vslam',
            'module-3-ai-robot-brain/chapter-05-nav2-path-planning',
            'module-3-ai-robot-brain/chapter-06-sensor-integration',
            'module-3-ai-robot-brain/chapter-07-ai-action-planning',
            'module-3-ai-robot-brain/chapter-08-mini-project',
          ],
        },
        {
          type: 'category',
          label: 'Module 4: Vision-Language-Action (VLA)',
          items: [
            'module-4-vla/chapter-1-introduction-to-vla',
            'module-4-vla/chapter-2-voice-to-action-whisper',
            'module-4-vla/chapter-3-language-understanding-llms',
            'module-4-vla/chapter-4-vision-for-vla',
            'module-4-vla/chapter-5-cognitive-planning-pipeline',
            'module-4-vla/chapter-6-simulated-action-execution',
            'module-4-vla/chapter-7-vla-stack-integration',
            'module-4-vla/chapter-8-capstone-autonomous-humanoid',
          ],
        },
      ],
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
