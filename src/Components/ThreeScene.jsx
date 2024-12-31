import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass";

const ThreeScene = () => {
  const containerRef = useRef();
  const [rotationSpeed, setRotationSpeed] = useState(0.8);
  const [bloomIntensity, setBloomIntensity] = useState(0.8);
  const [autoRotate, setAutoRotate] = useState(true);
  const [pulseEffect, setPulseEffect] = useState(true);

  useEffect(() => {
    let scene, camera, renderer, controls, clock;
    let torusKnot, shaderMaterial;
    let stars, starsGeometry, starsMaterial;
    let composer, bloomPass;

    const init = () => {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(
        50,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = 8;

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      containerRef.current.appendChild(renderer.domElement);

      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.autoRotate = autoRotate;
      controls.autoRotateSpeed = rotationSpeed;

      clock = new THREE.Clock();

      const geometry = new THREE.TorusKnotGeometry(2, 0.5, 300, 48);

      const vertexShader = `
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vPosition;
        
        uniform float time;
        
        void main() {
          vUv = uv;
          vNormal = normal;
          vPosition = position;
          
          vec3 newPosition = position + normal * sin(position.y * 5.0 + time) * 0.05;
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
        }
      `;

      const fragmentShader = `
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vPosition;

        uniform float time;
        uniform bool pulseEnabled;

        vec3 colorA = vec3(0.9, 0.1, 0.6);
        vec3 colorB = vec3(0.1, 0.8, 0.9);
        vec3 colorC = vec3(0.8, 0.3, 0.1);

        void main() {
          float pulse = pulseEnabled ? sin(time * 2.5) * 0.5 + 0.5 : 0.75;
          
          vec2 center = vec2(0.5, 0.5);
          float dist = distance(vUv, center);
          float gradient = smoothstep(0.1, 0.5, dist);
          
          float interference = sin(vPosition.x * 10.0 + time) * sin(vPosition.y * 10.0 + time) * 0.5 + 0.5;
          
          vec3 colorMix1 = mix(colorA, colorB, pulse * gradient);
          vec3 colorMix2 = mix(colorMix1, colorC, interference);
          
          vec3 viewDirection = normalize(cameraPosition - vPosition);
          float rim = 1.0 - max(dot(vNormal, viewDirection), 0.0);
          rim = pow(rim, 3.0);
          
          float holographic = sin(vPosition.x * 20.0 + time) * sin(vPosition.y * 20.0 + time) * 0.1;
          
          vec3 finalColor = colorMix2 + rim * 0.5 + holographic;
          
          gl_FragColor = vec4(finalColor, 1.0);
        }
      `;

      shaderMaterial = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0.0 },
          pulseEnabled: { value: pulseEffect },
        },
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
        wireframe: true,
      });

      torusKnot = new THREE.Mesh(geometry, shaderMaterial);
      scene.add(torusKnot);

      starsGeometry = new THREE.BufferGeometry();
      const starsVertices = [];
      const starsSizes = [];
      for (let i = 0; i < 15000; i++) {
        const x = (Math.random() - 0.5) * 2000;
        const y = (Math.random() - 0.5) * 2000;
        const z = (Math.random() - 0.5) * 2000;
        starsVertices.push(x, y, z);
        starsSizes.push(Math.random() * 2 + 0.5);
      }
      starsGeometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(starsVertices, 3)
      );
      starsGeometry.setAttribute(
        "size",
        new THREE.Float32BufferAttribute(starsSizes, 1)
      );

      const starsVertexShader = `
        attribute float size;
        varying float vSize;
        
        void main() {
          vSize = size;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `;

      const starsFragmentShader = `
        varying float vSize;
        
        void main() {
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard;
          
          float brightness = 1.0 - (dist * 2.0);
          brightness = pow(brightness, 3.0);
          
          gl_FragColor = vec4(1.0, 1.0, 1.0, brightness);
        }
      `;

      starsMaterial = new THREE.ShaderMaterial({
        vertexShader: starsVertexShader,
        fragmentShader: starsFragmentShader,
        transparent: true,
        depthWrite: false,
      });

      stars = new THREE.Points(starsGeometry, starsMaterial);
      scene.add(stars);

      composer = new EffectComposer(renderer);
      composer.addPass(new RenderPass(scene, camera));

      bloomPass = new UnrealBloomPass(
        new THREE.Vector2(window.innerWidth, window.innerHeight),
        0.8,
        0.3,
        0.85
      );
      composer.addPass(bloomPass);

      composer.addPass(new OutputPass(THREE.SRGBColorSpace));

      scene.background = new THREE.Color(0x020208);

      window.addEventListener("resize", onWindowResize, false);
    };

    const animate = () => {
      requestAnimationFrame(animate);

      const delta = clock.getDelta();
      shaderMaterial.uniforms.time.value += delta;

      stars.rotation.x += 0.0003;
      stars.rotation.y += 0.0002;
      stars.rotation.z += 0.0001;

      controls.update();
      composer.render();
    };

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      composer.setSize(window.innerWidth, window.innerHeight);
    };

    init();
    animate();

    return () => {
      // Cleanup on component unmount
      window.removeEventListener("resize", onWindowResize);
      renderer.dispose();
      composer.dispose();
    };
  }, [autoRotate, rotationSpeed, pulseEffect]);

  return (
    <div>
      <div ref={containerRef} style={{ width: "100vw", height: "10vh" }} />
      {/* <div
        className="controls"
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          color: "white",
          background: "rgba(0, 0, 0, 0.7)",
          padding: "15px",
          borderRadius: "8px",
          userSelect: "none",
        }}
      >
        <div className="slider-container">
          <label htmlFor="rotationSpeed">Rotation Speed</label>
          <input
            type="range"
            id="rotationSpeed"
            min="0"
            max="2"
            step="0.1"
            value={rotationSpeed}
            onChange={(e) => setRotationSpeed(parseFloat(e.target.value))}
          />
        </div>
        <div className="slider-container">
          <label htmlFor="bloomIntensity">Bloom Intensity</label>
          <input
            type="range"
            id="bloomIntensity"
            min="0"
            max="2"
            step="0.1"
            value={bloomIntensity}
            onChange={(e) => setBloomIntensity(parseFloat(e.target.value))}
          />
        </div>
        <div className="checkbox-container">
          <input
            type="checkbox"
            id="autoRotate"
            checked={autoRotate}
            onChange={(e) => setAutoRotate(e.target.checked)}
          />
          <label htmlFor="autoRotate">Auto Rotate</label>
        </div>
        <div className="checkbox-container">
          <input
            type="checkbox"
            id="pulseEffect"
            checked={pulseEffect}
            onChange={(e) => setPulseEffect(e.target.checked)}
          />
          <label htmlFor="pulseEffect">Pulse Effect</label>
        </div>
      </div> */}
    </div>
  );
};

export default ThreeScene;
