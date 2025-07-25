// Rope.jsx
import { useEffect, useRef } from "react";
import * as THREE from "three";

const Rope = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Spiral rope path generator
    const points = [];
    const segmentCount = 300;
    const radius = 0.15; // spiral radius
    const twist = 1; // number of spirals

    for (let i = 0; i <= segmentCount; i++) {
      const t = i / segmentCount;
      const y = -t * 10; // vertical rope
      const angle = t * Math.PI * 2 * twist;
      const x = Math.sin(angle) * radius;
      const z = Math.cos(angle) * radius;
      points.push(new THREE.Vector3(x, y, z));
    }

    const curve = new THREE.CatmullRomCurve3(points);
    const geometry = new THREE.TubeGeometry(curve, 500, 0.1, 12, false);

    // Texture-like material using color only (can upgrade to image texture)
    const material = new THREE.MeshStandardMaterial({
      color: 0xcc9900, // Rope-like dark yellow
      roughness: 0.9,
      metalness: 0.1,
    });

    const rope = new THREE.Mesh(geometry, material);
    scene.add(rope);

    // Add caps (frayed ends look)
    const capMaterial = new THREE.MeshStandardMaterial({ color: 0x664400 });
    const capGeometry = new THREE.SphereGeometry(0.13, 8, 6);
    const topCap = new THREE.Mesh(capGeometry, capMaterial);
    topCap.position.copy(points[0]);
    const bottomCap = new THREE.Mesh(capGeometry, capMaterial);
    bottomCap.position.copy(points[points.length - 1]);
    scene.add(topCap, bottomCap);

    // Light
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 10, 10);
    scene.add(light);

    // Animation (gentle swaying)
    let frame = 0;
    const animate = () => {
      frame += 0.01;
      for (let i = 0; i <= segmentCount; i++) {
        const t = i / segmentCount;
        const y = -t * 10;
        const angle = t * Math.PI * 2 * twist + frame;
        const x = Math.sin(angle) * radius;
        const z = Math.cos(angle) * radius;
        points[i].set(x, y, z);
      }
      curve.points = points;
      rope.geometry.dispose();
      rope.geometry = new THREE.TubeGeometry(curve, 500, 0.1, 12, false);

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      renderer.dispose();
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        width: "100px",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 10,
      }}
    />
  );
};

export default Rope;
