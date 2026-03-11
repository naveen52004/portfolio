import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ThreeBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // ── Scene ──────────────────────────────────────────────
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 55

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(window.innerWidth, window.innerHeight)

    // ── Helpers ────────────────────────────────────────────
    const wm = (color, opacity = 0.18) =>
      new THREE.MeshBasicMaterial({ color, wireframe: true, transparent: true, opacity })
    const sm = (color, opacity = 0.8) =>
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity })
    const lm = (color, opacity = 0.35) =>
      new THREE.LineBasicMaterial({ color, transparent: true, opacity })

    // ── 1. Star field ──────────────────────────────────────
    const starGeo = new THREE.BufferGeometry()
    const starPos = new Float32Array(3000 * 3)
    for (let i = 0; i < 3000 * 3; i++) starPos[i] = (Math.random() - 0.5) * 230
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3))
    const stars = new THREE.Points(
      starGeo,
      new THREE.PointsMaterial({ color: 0xffffff, size: 0.1, transparent: true, opacity: 0.5 })
    )
    scene.add(stars)

    // ── 2. React Logo (3 orbital rings + nucleus) ──────────
    const reactGroup = new THREE.Group()
    const nucleus = new THREE.Mesh(new THREE.SphereGeometry(0.75, 16, 16), sm(0x00d4ff, 0.9))
    reactGroup.add(nucleus)

    const orbitTilt = [0, Math.PI / 3, -Math.PI / 3]
    orbitTilt.forEach(angle => {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(3.4, 0.07, 8, 64),
        new THREE.MeshBasicMaterial({ color: 0x00d4ff, transparent: true, opacity: 0.55 })
      )
      ring.rotation.x = angle
      reactGroup.add(ring)
    })
    reactGroup.position.set(28, 5, -14)
    scene.add(reactGroup)

    // ── 3. Database stack (stacked flat cylinders) ─────────
    const dbGroup = new THREE.Group()
    for (let i = 0; i < 4; i++) {
      const disk = new THREE.Mesh(new THREE.CylinderGeometry(2.3, 2.3, 0.38, 26), wm(0x7c3aed, 0.22))
      disk.position.y = i * 0.72 - 1.1
      dbGroup.add(disk)
    }
    const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 3.2, 8), wm(0x7c3aed, 0.14))
    pillar.position.y = 0.4
    dbGroup.add(pillar)
    dbGroup.position.set(-30, -5, -18)
    scene.add(dbGroup)

    // ── 4. Git commit graph ────────────────────────────────
    const gitGroup = new THREE.Group()
    const addLine = (pts, color, opacity) => {
      const g = new THREE.BufferGeometry().setFromPoints(pts)
      gitGroup.add(new THREE.Line(g, lm(color, opacity)))
    }
    addLine([new THREE.Vector3(-4, 0, 0), new THREE.Vector3(4, 0, 0)], 0xf59e0b, 0.45)
    const branchCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-1, 0, 0),
      new THREE.Vector3(0.2, 1.6, 0),
      new THREE.Vector3(2.2, 1.6, 0),
      new THREE.Vector3(3.2, 0, 0),
    ])
    addLine(branchCurve.getPoints(32), 0xf59e0b, 0.32)

    const commitPos = [[-4,0],[-1,0],[0.2,1.6],[2.2,1.6],[3.2,0],[4,0]]
    const cnGeo = new THREE.SphereGeometry(0.24, 8, 8)
    commitPos.forEach(([x, y]) => {
      const node = new THREE.Mesh(cnGeo, sm(0xf59e0b, 0.78))
      node.position.set(x, y, 0)
      gitGroup.add(node)
    })
    gitGroup.position.set(-22, 15, -20)
    scene.add(gitGroup)

    // ── 5. Gear / Cog ──────────────────────────────────────
    const gearGroup = new THREE.Group()
    gearGroup.add(new THREE.Mesh(new THREE.TorusGeometry(1.9, 0.3, 10, 42), wm(0xf59e0b, 0.22)))
    gearGroup.add(new THREE.Mesh(new THREE.TorusGeometry(0.62, 0.12, 8, 22), wm(0xf59e0b, 0.22)))
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2
      const tooth = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.68, 0.2), wm(0xf59e0b, 0.2))
      tooth.position.set(Math.cos(a) * 2.3, Math.sin(a) * 2.3, 0)
      tooth.rotation.z = a
      gearGroup.add(tooth)
    }
    gearGroup.position.set(37, -13, -22)
    scene.add(gearGroup)

    // ── 6. Terminal / Code editor box ─────────────────────
    const termGroup = new THREE.Group()
    termGroup.add(new THREE.Mesh(new THREE.BoxGeometry(5.6, 4, 0.22), wm(0x10b981, 0.2)))
    // Title bar
    termGroup.add(new THREE.Mesh(
      new THREE.BoxGeometry(5.6, 0.55, 0.25),
      new THREE.MeshBasicMaterial({ color: 0x10b981, transparent: true, opacity: 0.15 })
    )).position && null // inline trick won't work, let's do it properly:
    const titleBar = new THREE.Mesh(
      new THREE.BoxGeometry(5.6, 0.55, 0.25),
      new THREE.MeshBasicMaterial({ color: 0x10b981, transparent: true, opacity: 0.15 })
    )
    titleBar.position.y = 1.72
    termGroup.add(titleBar)
    // Code lines
    ;[3.2, 2.0, 3.8, 1.6].forEach((w, i) => {
      const line = new THREE.Mesh(
        new THREE.PlaneGeometry(w, 0.13),
        new THREE.MeshBasicMaterial({ color: 0x10b981, transparent: true, opacity: 0.38, side: THREE.DoubleSide })
      )
      line.position.set(-2.6 + w / 2 - 0.4, 0.9 - i * 0.62, 0.15)
      termGroup.add(line)
    })
    termGroup.position.set(-27, 17, -22)
    scene.add(termGroup)

    // ── 7. Microservices network ───────────────────────────
    const netGroup = new THREE.Group()
    const svcPos = [[0,0,0],[3.6,1.4,0],[3.6,-1.4,0],[-3.6,1.4,0],[-3.6,-1.4,0],[0,3.2,0]]
    const snGeo = new THREE.SphereGeometry(0.36, 10, 10)
    svcPos.forEach(([x, y, z]) => {
      const node = new THREE.Mesh(snGeo, sm(0x00d4ff, 0.62))
      node.position.set(x, y, z)
      netGroup.add(node)
    })
    const edges = [[0,1],[0,2],[0,3],[0,4],[0,5],[1,2],[3,4],[1,5]]
    edges.forEach(([a, b]) => {
      const g = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(...svcPos[a]),
        new THREE.Vector3(...svcPos[b]),
      ])
      netGroup.add(new THREE.Line(g, lm(0x00d4ff, 0.2)))
    })
    netGroup.position.set(27, -15, -20)
    scene.add(netGroup)

    // ── 8. DNA / Algorithm helix ───────────────────────────
    const helixGroup = new THREE.Group()
    const hPts1 = [], hPts2 = []
    for (let i = 0; i < 200; i++) {
      const t = (i / 200) * Math.PI * 6
      const y = i * 0.065 - 6.5
      hPts1.push(new THREE.Vector3(Math.cos(t) * 1.5, y, Math.sin(t) * 1.5))
      hPts2.push(new THREE.Vector3(Math.cos(t + Math.PI) * 1.5, y, Math.sin(t + Math.PI) * 1.5))
    }
    helixGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(hPts1), lm(0x00d4ff, 0.38)))
    helixGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(hPts2), lm(0x7c3aed, 0.38)))
    for (let i = 0; i < 14; i++) {
      const idx = Math.floor((i / 14) * 200)
      const t = (idx / 200) * Math.PI * 6
      const y = idx * 0.065 - 6.5
      const g = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(Math.cos(t) * 1.5, y, Math.sin(t) * 1.5),
        new THREE.Vector3(Math.cos(t + Math.PI) * 1.5, y, Math.sin(t + Math.PI) * 1.5),
      ])
      helixGroup.add(new THREE.Line(g, lm(0xffffff, 0.1)))
    }
    helixGroup.position.set(-36, 3, -26)
    scene.add(helixGroup)

    // ── 9. AI / Compute orb (icosahedron) ─────────────────
    const aiOrb = new THREE.Mesh(new THREE.IcosahedronGeometry(3, 1), wm(0x7c3aed, 0.14))
    aiOrb.position.set(40, 18, -28)
    scene.add(aiOrb)

    // ── 10. Server rack ─────────────────────────────────────
    const srvGroup = new THREE.Group()
    for (let i = 0; i < 3; i++) {
      const blade = new THREE.Mesh(new THREE.BoxGeometry(4.2, 0.75, 2.6), wm(0x00d4ff, 0.12))
      blade.position.y = i * 1.1 - 1.1
      srvGroup.add(blade)
    }
    srvGroup.position.set(-40, -14, -28)
    scene.add(srvGroup)

    // ── 11. Code brackets </ > floating ─────────────────────
    const bracketGroup = new THREE.Group()
    const bPts = [
      // < bracket
      new THREE.Vector3(-2, 1, 0), new THREE.Vector3(-3, 0, 0),
      new THREE.Vector3(-3, 0, 0), new THREE.Vector3(-2, -1, 0),
      // > bracket
      new THREE.Vector3(1, 1, 0), new THREE.Vector3(2, 0, 0),
      new THREE.Vector3(2, 0, 0), new THREE.Vector3(1, -1, 0),
      // / slash
      new THREE.Vector3(-0.4, 1, 0), new THREE.Vector3(0.4, -1, 0),
    ]
    const bGeo = new THREE.BufferGeometry().setFromPoints(bPts)
    bracketGroup.add(new THREE.LineSegments(bGeo, lm(0x00d4ff, 0.45)))
    bracketGroup.position.set(10, 20, -20)
    bracketGroup.scale.set(1.6, 1.6, 1.6)
    scene.add(bracketGroup)

    // ── 12. Curly braces { } ──────────────────────────────
    const curlyGroup = new THREE.Group()
    const makeCurly = (xOff) => {
      const pts = [
        new THREE.Vector3(xOff + 0.5, 1.4, 0),
        new THREE.Vector3(xOff + 0.1, 1, 0),
        new THREE.Vector3(xOff + 0.1, 0.2, 0),
        new THREE.Vector3(xOff - 0.3, 0, 0),
        new THREE.Vector3(xOff + 0.1, -0.2, 0),
        new THREE.Vector3(xOff + 0.1, -1, 0),
        new THREE.Vector3(xOff + 0.5, -1.4, 0),
      ]
      const c = new THREE.CatmullRomCurve3(pts)
      const g = new THREE.BufferGeometry().setFromPoints(c.getPoints(30))
      return new THREE.Line(g, lm(0x7c3aed, 0.4))
    }
    curlyGroup.add(makeCurly(-1.5))
    curlyGroup.add(makeCurly(1.5))
    curlyGroup.position.set(14, -20, -18)
    curlyGroup.scale.set(1.8, 1.8, 1.8)
    scene.add(curlyGroup)

    // ── Mouse parallax ─────────────────────────────────────
    let targetX = 0, targetY = 0, currentX = 0, currentY = 0
    const handleMouse = e => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 2
      targetY = (e.clientY / window.innerHeight - 0.5) * 2
    }
    document.addEventListener('mousemove', handleMouse)

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)

    // ── Animation loop ─────────────────────────────────────
    const startTime = performance.now()
    let animId

    function animate() {
      animId = requestAnimationFrame(animate)
      const t = (performance.now() - startTime) / 1000

      // Stars drift
      stars.rotation.y = t * 0.014
      stars.rotation.x = t * 0.005

      // React logo spins; nucleus pulses
      reactGroup.rotation.y = t * 0.42
      nucleus.scale.setScalar(1 + Math.sin(t * 2.2) * 0.09)

      // Database spins + bobs
      dbGroup.rotation.y = t * 0.28
      dbGroup.position.y = -5 + Math.sin(t * 0.48) * 1.1

      // Git graph floats
      gitGroup.position.y = 15 + Math.sin(t * 0.38 + 1.0) * 0.9

      // Gear spins continuously
      gearGroup.rotation.z = t * 0.65

      // Terminal rocks gently
      termGroup.position.y = 17 + Math.sin(t * 0.33 + 2.1) * 1.0
      termGroup.rotation.x = Math.sin(t * 0.18) * 0.06
      termGroup.rotation.y = Math.sin(t * 0.13) * 0.08

      // Network rotates + bobs
      netGroup.rotation.y = t * 0.14
      netGroup.position.y = -15 + Math.sin(t * 0.44 + 0.8) * 1.1

      // Helix rotates
      helixGroup.rotation.y = t * 0.22

      // AI orb rotates
      aiOrb.rotation.x = t * 0.24
      aiOrb.rotation.y = t * 0.33

      // Server rack bobs
      srvGroup.position.y = -14 + Math.sin(t * 0.52 + 3.0) * 0.9

      // Code brackets float + tilt
      bracketGroup.position.y = 20 + Math.sin(t * 0.3 + 0.5) * 1.2
      bracketGroup.rotation.z = Math.sin(t * 0.12) * 0.08

      // Curly braces float
      curlyGroup.position.y = -20 + Math.sin(t * 0.28 + 1.5) * 1.1

      // Camera parallax
      currentX += (targetX * 5  - currentX) * 0.022
      currentY += (-targetY * 3.5 - currentY) * 0.022
      camera.position.x = currentX
      camera.position.y = currentY
      camera.lookAt(scene.position)

      renderer.render(scene, camera)
    }
    animate()

    // ── Cleanup ─────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('mousemove', handleMouse)
      scene.traverse(obj => {
        if (obj.geometry) obj.geometry.dispose()
        if (obj.material) {
          if (Array.isArray(obj.material)) obj.material.forEach(m => m.dispose())
          else obj.material.dispose()
        }
      })
      renderer.dispose()
    }
  }, [])

  return <canvas ref={canvasRef} id="bg-canvas" />
}
