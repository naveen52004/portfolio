/* ============================================================
   Naveen G Portfolio — JavaScript
   Three.js 3D Background + Interactions
   ============================================================ */

// ==================== THREE.JS SCENE ====================
(function initThreeJS() {
  const canvas = document.getElementById('bg-canvas');
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 55;

  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);

  // ---- Star field ----
  const starGeo = new THREE.BufferGeometry();
  const STAR_COUNT = 2800;
  const starPos = new Float32Array(STAR_COUNT * 3);
  for (let i = 0; i < STAR_COUNT * 3; i++) {
    starPos[i] = (Math.random() - 0.5) * 220;
  }
  starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
  const starMat = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.12,
    transparent: true,
    opacity: 0.55,
  });
  const stars = new THREE.Points(starGeo, starMat);
  scene.add(stars);

  // ---- Coloured nebula particles ----
  const nebulaGeo = new THREE.BufferGeometry();
  const NEBULA_COUNT = 400;
  const nebulaPos = new Float32Array(NEBULA_COUNT * 3);
  for (let i = 0; i < NEBULA_COUNT * 3; i++) {
    nebulaPos[i] = (Math.random() - 0.5) * 150;
  }
  nebulaGeo.setAttribute('position', new THREE.BufferAttribute(nebulaPos, 3));
  const nebulaMat = new THREE.PointsMaterial({
    color: 0x00d4ff,
    size: 0.3,
    transparent: true,
    opacity: 0.18,
  });
  const nebula = new THREE.Points(nebulaGeo, nebulaMat);
  scene.add(nebula);

  // ---- Wireframe shapes ----
  const wireMat = (hex, op) =>
    new THREE.MeshBasicMaterial({ color: hex, wireframe: true, transparent: true, opacity: op });

  const shapeData = [
    { geo: new THREE.IcosahedronGeometry(3.5, 0), color: 0x00d4ff, op: 0.18, x: 28,  y: 10, z: -20, rx: 0.004, ry: 0.006 },
    { geo: new THREE.TorusGeometry(2.8, 0.8, 8, 20), color: 0x7c3aed, op: 0.14, x: -28, y: -6, z: -16, rx: 0.005, ry: 0.003 },
    { geo: new THREE.OctahedronGeometry(3, 0),    color: 0x00d4ff, op: 0.12, x: 22,  y: -14, z: -26, rx: 0.003, ry: 0.007 },
    { geo: new THREE.TetrahedronGeometry(3, 0),   color: 0x10b981, op: 0.13, x: -22, y: 16,  z: -18, rx: 0.006, ry: 0.004 },
    { geo: new THREE.IcosahedronGeometry(2, 0),   color: 0xf59e0b, op: 0.1,  x: -38, y: -18, z: -30, rx: 0.007, ry: 0.005 },
    { geo: new THREE.TorusGeometry(1.8, 0.5, 6, 14), color: 0x7c3aed, op: 0.11, x: 38, y: 18, z: -28, rx: 0.004, ry: 0.008 },
  ];

  const shapes = shapeData.map(d => {
    const mesh = new THREE.Mesh(d.geo, wireMat(d.color, d.op));
    mesh.position.set(d.x, d.y, d.z);
    mesh.userData = { rx: d.rx, ry: d.ry, baseY: d.y };
    scene.add(mesh);
    return mesh;
  });

  // ---- Hero torus knot ----
  const knotGeo = new THREE.TorusKnotGeometry(5.5, 1.4, 120, 18);
  const knotMat = new THREE.MeshBasicMaterial({
    color: 0x00d4ff,
    wireframe: true,
    transparent: true,
    opacity: 0.1,
  });
  const torusKnot = new THREE.Mesh(knotGeo, knotMat);
  torusKnot.position.set(30, 0, -12);
  scene.add(torusKnot);

  // ---- Mouse parallax ----
  let targetX = 0, targetY = 0;
  let currentX = 0, currentY = 0;

  document.addEventListener('mousemove', e => {
    targetX = (e.clientX / window.innerWidth - 0.5) * 2;
    targetY = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  // ---- Animation loop ----
  const clock = new THREE.Clock();
  function animate() {
    requestAnimationFrame(animate);
    const t = clock.getElapsedTime();

    stars.rotation.y = t * 0.018;
    stars.rotation.x = t * 0.008;
    nebula.rotation.y = -t * 0.012;

    torusKnot.rotation.x = t * 0.18;
    torusKnot.rotation.y = t * 0.25;

    shapes.forEach((s, i) => {
      s.rotation.x += s.userData.rx;
      s.rotation.y += s.userData.ry;
      s.position.y = s.userData.baseY + Math.sin(t * 0.4 + i * 1.2) * 1.2;
    });

    // Smooth parallax
    currentX += (targetX * 6  - currentX) * 0.025;
    currentY += (-targetY * 4 - currentY) * 0.025;
    camera.position.x = currentX;
    camera.position.y = currentY;
    camera.lookAt(scene.position);

    renderer.render(scene, camera);
  }
  animate();

  // ---- Resize ----
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
})();


// ==================== NAVBAR ====================
const navbar    = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
  highlightActiveNav();
});

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

function highlightActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const links    = navLinks.querySelectorAll('a[href^="#"]');
  let current    = '';

  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });

  links.forEach(a => {
    a.classList.toggle('active-nav', a.getAttribute('href') === `#${current}`);
  });
}


// ==================== TYPING ANIMATION ====================
const typedEl = document.querySelector('.typed-text');
const phrases = [
  'Software Dev Engineer I',
  'Full Stack Developer',
  'React & Spring Boot Dev',
  'AI Integration Specialist',
  'Production Systems Engineer',
];
let pi = 0, ci = 0, deleting = false, speed = 80;

function type() {
  const phrase = phrases[pi];
  typedEl.textContent = deleting
    ? phrase.substring(0, --ci)
    : phrase.substring(0, ++ci);

  if (!deleting && ci === phrase.length)  { speed = 2000; deleting = true; }
  else if (deleting && ci === 0)          { deleting = false; pi = (pi + 1) % phrases.length; speed = 400; }
  else speed = deleting ? 38 : 80;

  setTimeout(type, speed);
}
setTimeout(type, 1200);


// ==================== SCROLL REVEAL ====================
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 90);
      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('[data-reveal]').forEach(el => revealObs.observe(el));


// ==================== SMOOTH SCROLL (fallback) ====================
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
