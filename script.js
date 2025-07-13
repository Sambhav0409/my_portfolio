// Updated main.js with your exact profile data integration
const profileData = {
  name: "Sambhav Sachdeva",
  title: "AIML Enthusiast | Robotics Innovator @ PEC",
  tagline: "ROS2 & Gazebo | Building Autonomous Systems",
  bio: "Hille/Mma, Saulabara, Sachdeva, an AIML enthusiast and Robotics innovator at Punjab Engineering College.",
  education: "Punjab Engineering College - Robotics Engineering",
  expertise: [
    "ROS2 and Gazebo simulations",
    "Autonomous systems development",
    "AI/ML for robotics applications",
    "Embedded systems programming"
  ],
  projects: [
    {
      title: "ROS2 Navigation Stack",
      description: "Developed autonomous navigation system using ROS2"
    },
    {
      title: "Gazebo Simulation",
      description: "Created realistic robot simulation environments"
    }
  ]
};

// Initialize Three.js scene with profile integration
function initProfileUI() {
  const profileHeader = document.getElementById('profile-header');
  
  profileHeader.innerHTML = `
    <h1>${profileData.name}</h1>
    <h2>${profileData.title}</h2>
    <p class="highlight">${profileData.tagline}</p>
    <p>${profileData.bio}</p>
    
    <h3>Education</h3>
    <p>${profileData.education}</p>
    
    <h3>Expertise</h3>
    <ul>
      ${profileData.expertise.map(item => `<li>${item}</li>`).join('')}
    </ul>
  `;

  // Update projects section
  const projectsContent = document.getElementById('projects-content');
  projectsContent.innerHTML = `
    <h1>My Projects</h1>
    ${profileData.projects.map(project => `
      <div class="project">
        <h2>${project.title}</h2>
        <p>${project.description}</p>
      </div>
    `).join('')}
  `;
}

// Enhanced tank controls with ROS2/Gazebo theme
class TankController {
  constructor() {
    this.speed = 0.15;
    this.rotationSpeed = 0.03;
    this.maxSpeed = 0.5;
    this.health = 100;
    this.researchPoints = 0;
  }

  update(delta) {
    // Implement ROS2-like control system
    if (controls.up) this.accelerate(delta);
    if (controls.down) this.decelerate(delta);
    if (controls.left) this.rotateLeft(delta);
    if (controls.right) this.rotateRight(delta);
    
    // Simulate Gazebo physics
    this.applyFriction();
    this.updatePosition();
  }

  accelerate(delta) {
    this.speed = Math.min(this.maxSpeed, this.speed + delta * 0.1);
  }
  
  // Other control methods remain...
}

// Asteroid collection system with research points
function checkCollisions() {
  const tankBox = new THREE.Box3().setFromObject(tank);
  
  asteroids.forEach(asteroid => {
    const asteroidBox = new THREE.Box3().setFromObject(asteroid);
    
    if (tankBox.intersectsBox(asteroidBox)) {
      // Update research points instead of score
      tankController.researchPoints++;
      updateResearchDisplay();
      
      // Play collection sound
      soundManager.play('collect');
      
      // Respawn asteroid with Gazebo-like physics
      respawnAsteroid(asteroid);
      
      // Increase difficulty like progressive autonomy
      increaseDifficulty();
    }
  });
}

function updateResearchDisplay() {
  document.getElementById('score').innerHTML = `
    <span class="research-badge">ROS2 Research</span>
    <span class="points">${tankController.researchPoints}pts</span>
  `;
}

// Initialize everything
function init() {
  // Three.js initialization code...
  initProfileUI();
  
  // Create ROS2-themed tank
  createROSTank();
  
  // Set up Gazebo-like environment
  setupSimulationEnvironment();
  
  // Initialize sound manager with robotics sounds
  initSoundManager();
}

// ROS2/Gazebo specific additions
function createROSTank() {
  // Tank model with ROS2 colors (blue/green)
  const tankMaterial = new THREE.MeshStandardMaterial({
    color: 0x1155ff,
    metalness: 0.7,
    roughness: 0.3
  });
  
  // Add ROS2 logo decal
  const ros2Logo = new THREE.Mesh(
    new THREE.PlaneGeometry(1.5, 1.5),
    new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load('ros2-logo.png'),
      transparent: true
    })
  );
  ros2Logo.position.set(0, 1, -2);
  tank.add(ros2Logo);
}

function setupSimulationEnvironment() {
  // Add Gazebo-like grid floor
  const grid = new THREE.GridHelper(200, 50, 0x555555, 0x333333);
  grid.position.y = -5;
  scene.add(grid);
  
  // Add PEC logo in space
  const pecLogo = createLogo('pec-logo.png', 10);
  pecLogo.position.set(-30, 15, -100);
  scene.add(pecLogo);
}

// Initialize everything when DOM loads
document.addEventListener('DOMContentLoaded', () => {
  init();
  animate();
});