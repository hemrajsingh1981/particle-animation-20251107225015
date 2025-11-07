let particles = [];
const numParticles = 200;

let canvas;

function setup() {
  // Create canvas that fills the window
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  // Attach canvas to the body
  document.body.appendChild(canvas.elt);
  // Set initial background color
  background(51); // Dark gray

  // Initialize particles
  for (let i = 0; i < numParticles; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  background(51); // Dark gray background

  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].display();
  }
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}

class Particle {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.size = random(2, 5);
    this.speed = random(0.5, 2);
    this.color = color(random(255), random(255), random(255), 150);
  }

  update() {
    this.y += this.speed;
    if (this.y > height) {
      this.y = 0;
      this.x = random(width);
    }
  }

  display() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.size, this.size);
  }
}
