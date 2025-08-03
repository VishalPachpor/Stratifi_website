<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>360° Rotating Image Globe - Enhanced Zoom</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            background: radial-gradient(ellipse at center, #0a0a23 0%, #000000 100%);
            overflow: hidden;
            font-family: 'Arial', sans-serif;
            height: 100vh;
        }

        .container {
            position: relative;
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            perspective: 1500px;
        }

        .globe-container {
            position: relative;
            width: 700px;
            height: 700px;
            cursor: grab;
            transform-style: preserve-3d;
            transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .globe-container:active {
            cursor: grabbing;
        }

        .image-item {
            position: absolute;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            overflow: hidden;
            border: 2px solid rgba(255, 255, 255, 0.2);
            box-shadow: 0 0 15px rgba(100, 200, 255, 0.3);
            transition: all 0.3s ease;
            cursor: pointer;
            transform-style: preserve-3d;
            left: 50%;
            top: 50%;
            margin-left: -25px;
            margin-top: -25px;
            backface-visibility: visible;
        }

        .image-item:hover {
            transform: scale(1.3) !important;
            border-color: rgba(100, 200, 255, 0.8);
            box-shadow: 0 0 25px rgba(100, 200, 255, 0.8);
            z-index: 1000;
        }

        .image-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .controls {
            position: fixed;
            top: 20px;
            left: 20px;
            z-index: 1000;
            color: white;
            background: rgba(0, 0, 0, 0.3);
            padding: 15px;
            border-radius: 10px;
            backdrop-filter: blur(10px);
        }

        .control-btn {
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.3);
            color: white;
            padding: 8px 12px;
            margin: 3px;
            border-radius: 6px;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 12px;
        }

        .control-btn:hover {
            background: rgba(100, 200, 255, 0.3);
            border-color: rgba(100, 200, 255, 0.8);
            transform: translateY(-2px);
        }

        .zoom-controls {
            position: fixed;
            bottom: 80px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 10px;
            z-index: 1000;
        }

        .zoom-btn {
            background: rgba(0, 0, 0, 0.6);
            border: 2px solid rgba(100, 200, 255, 0.3);
            color: white;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            cursor: pointer;
            font-size: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
        }

        .zoom-btn:hover {
            background: rgba(100, 200, 255, 0.3);
            border-color: rgba(100, 200, 255, 0.8);
            transform: scale(1.1);
        }

        .instructions {
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            color: rgba(255, 255, 255, 0.8);
            text-align: center;
            font-size: 14px;
            background: rgba(0, 0, 0, 0.3);
            padding: 10px 20px;
            border-radius: 20px;
            backdrop-filter: blur(10px);
        }

        .zoom-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 2000;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
        }

        .zoom-overlay.active {
            opacity: 1;
            visibility: visible;
        }

        .zoomed-image {
            max-width: 80%;
            max-height: 80%;
            border-radius: 15px;
            transform: scale(0.8);
            transition: transform 0.3s ease;
            box-shadow: 0 0 50px rgba(100, 200, 255, 0.5);
        }

        .zoom-overlay.active .zoomed-image {
            transform: scale(1);
        }

        .close-btn {
            position: absolute;
            top: 30px;
            right: 30px;
            background: rgba(255, 255, 255, 0.1);
            border: 2px solid rgba(255, 255, 255, 0.3);
            color: white;
            width: 45px;
            height: 45px;
            border-radius: 50%;
            cursor: pointer;
            font-size: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
        }

        .close-btn:hover {
            background: rgba(255, 100, 100, 0.3);
            border-color: rgba(255, 100, 100, 0.8);
        }

        /* Add some floating particles for atmosphere */
        .particle {
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(100, 200, 255, 0.3);
            border-radius: 50%;
            pointer-events: none;
            animation: float 10s infinite linear;
        }

        @keyframes float {
            0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(-10px) rotate(360deg); opacity: 0; }
        }

        /* Zoom level indicator */
        .zoom-indicator {
            position: fixed;
            top: 50%;
            right: 30px;
            transform: translateY(-50%);
            background: rgba(0, 0, 0, 0.3);
            padding: 15px 10px;
            border-radius: 25px;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .zoom-bar {
            width: 6px;
            height: 150px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 3px;
            position: relative;
            margin: 10px 0;
        }

        .zoom-level {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            background: linear-gradient(to top, #4ECDC4, #45B7D1, #96CEB4);
            border-radius: 3px;
            transition: height 0.3s ease;
        }

        .zoom-label {
            color: rgba(255, 255, 255, 0.8);
            font-size: 12px;
            text-align: center;
            margin: 5px 0;
        }

        /* Depth fog effect */
        .depth-fog {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            pointer-events: none;
            background: radial-gradient(ellipse at center, transparent 0%, rgba(0, 10, 35, 0.3) 70%, rgba(0, 5, 20, 0.8) 100%);
            opacity: 0;
            transition: opacity 0.5s ease;
            z-index: 100;
        }

        .depth-fog.active {
            opacity: 1;
        }

        /* Inside view effects */
        .inside-view-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            pointer-events: none;
            background: radial-gradient(ellipse at center, transparent 30%, rgba(0, 20, 50, 0.1) 60%, rgba(0, 10, 30, 0.4) 100%);
            opacity: 0;
            transition: opacity 0.5s ease;
            z-index: 50;
        }

        .inside-view-overlay.active {
            opacity: 1;
        }

        /* Enhanced particles for zoom effect */
        .zoom-particle {
            position: absolute;
            border-radius: 50%;
            pointer-events: none;
            background: radial-gradient(circle, rgba(100, 200, 255, 0.8) 0%, transparent 70%);
            animation: zoomFloat 8s infinite linear;
            opacity: 0;
        }

        @keyframes zoomFloat {
            0% { opacity: 0; transform: scale(0.1) translateZ(-1000px); }
            20% { opacity: 1; }
            80% { opacity: 1; }
            100% { opacity: 0; transform: scale(2) translateZ(1000px); }
        }

        /* Zoom status indicator */
        .zoom-status {
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(0, 0, 0, 0.6);
            color: white;
            padding: 10px 15px;
            border-radius: 20px;
            font-size: 14px;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(100, 200, 255, 0.3);
            opacity: 0;
            transform: translateY(-20px);
            transition: all 0.3s ease;
        }

        .zoom-status.visible {
            opacity: 1;
            transform: translateY(0);
        }

        .zoom-status.inside {
            border-color: rgba(255, 100, 100, 0.6);
            background: rgba(20, 0, 0, 0.6);
            color: #ffaaaa;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="globe-container" id="globeContainer"></div>
        
        <!-- Atmospheric effects -->
        <div class="depth-fog" id="depthFog"></div>
        <div class="inside-view-overlay" id="insideViewOverlay"></div>
        
        <div class="controls">
            <div style="margin-bottom: 10px; font-size: 14px; font-weight: bold;">Globe Controls</div>
            <button class="control-btn" onclick="toggleRotation()">⏸️ Toggle Rotation</button>
            <button class="control-btn" onclick="changeSpeed()">⚡ Speed: <span id="speedDisplay">1x</span></button>
            <button class="control-btn" onclick="resetView()">🔄 Reset View</button>
            <button class="control-btn" onclick="toggleDirection()">🔄 Reverse</button>
        </div>

        <div class="zoom-controls">
            <button class="zoom-btn" onclick="zoomIn()" title="Zoom In">+</button>
            <button class="zoom-btn" onclick="zoomOut()" title="Zoom Out">−</button>
        </div>

        <div class="zoom-indicator">
            <div class="zoom-label">Zoom</div>
            <div class="zoom-bar">
                <div class="zoom-level" id="zoomLevel"></div>
            </div>
            <div class="zoom-label" id="zoomText">1.0x</div>
        </div>

        <div class="zoom-status" id="zoomStatus">🌍 Outside View</div>
        
        <div class="instructions">
            <p>🖱️ Click and drag to rotate • 🔍 Click images to zoom • 🌍 Use +/- to zoom in/out from 1.0x • 🎯 Mouse wheel to zoom</p>
        </div>
    </div>

    <div class="zoom-overlay" id="zoomOverlay">
        <button class="close-btn" onclick="closeZoom()">&times;</button>
        <img class="zoomed-image" id="zoomedImage" src="" alt="">
    </div>

    <script>
        // Enhanced image URLs with more variety
        const imageUrls = [
            'https://via.placeholder.com/100x100/FF6B6B/FFFFFF?text=🎯',
            'https://via.placeholder.com/100x100/4ECDC4/FFFFFF?text=🌟',
            'https://via.placeholder.com/100x100/45B7D1/FFFFFF?text=💫',
            'https://via.placeholder.com/100x100/96CEB4/FFFFFF?text=🚀',
            'https://via.placeholder.com/100x100/FFEAA7/000000?text=⭐',
            'https://via.placeholder.com/100x100/DDA0DD/FFFFFF?text=🌙',
            'https://via.placeholder.com/100x100/98D8C8/FFFFFF?text=🔥',
            'https://via.placeholder.com/100x100/F7DC6F/000000?text=💎',
            'https://via.placeholder.com/100x100/BB8FCE/FFFFFF?text=🎨',
            'https://via.placeholder.com/100x100/85C1E9/FFFFFF?text=🎭',
            'https://via.placeholder.com/100x100/F8C471/FFFFFF?text=🎪',
            'https://via.placeholder.com/100x100/82E0AA/FFFFFF?text=🎵',
            'https://via.placeholder.com/100x100/F1948A/FFFFFF?text=🎸',
            'https://via.placeholder.com/100x100/85C1E9/FFFFFF?text=🎤',
            'https://via.placeholder.com/100x100/D2B4DE/FFFFFF?text=🎺',
            'https://via.placeholder.com/100x100/A9DFBF/FFFFFF?text=🥁',
            'https://via.placeholder.com/100x100/F9E79F/000000?text=🎹',
            'https://via.placeholder.com/100x100/AED6F1/FFFFFF?text=🎧',
            'https://via.placeholder.com/100x100/E8DAEF/FFFFFF?text=📸',
            'https://via.placeholder.com/100x100/A3E4D7/FFFFFF?text=🖼️',
            'https://via.placeholder.com/100x100/FADBD8/FFFFFF?text=🎬',
            'https://via.placeholder.com/100x100/D5DBDB/FFFFFF?text=📹',
            'https://via.placeholder.com/100x100/ABEBC6/FFFFFF?text=🔮',
            'https://via.placeholder.com/100x100/F4D03F/000000?text=✨',
            'https://via.placeholder.com/100x100/FF8A80/FFFFFF?text=💫',
            'https://via.placeholder.com/100x100/80CBC4/FFFFFF?text=🌈',
            'https://via.placeholder.com/100x100/81C784/FFFFFF?text=🍃',
            'https://via.placeholder.com/100x100/FFB74D/FFFFFF?text=🌻',
            'https://via.placeholder.com/100x100/9575CD/FFFFFF?text=🦋',
            'https://via.placeholder.com/100x100/64B5F6/FFFFFF?text=🐦',
            'https://via.placeholder.com/100x100/F06292/FFFFFF?text=🌺',
            'https://via.placeholder.com/100x100/4DB6AC/FFFFFF?text=🐠',
            'https://via.placeholder.com/100x100/AED581/FFFFFF?text=🌿',
            'https://via.placeholder.com/100x100/FFD54F/000000?text=☀️',
            'https://via.placeholder.com/100x100/E57373/FFFFFF?text=❤️',
            'https://via.placeholder.com/100x100/90CAF9/FFFFFF?text=💙'
        ];

        class EarthLikeGlobe {
            constructor() {
                this.container = document.getElementById('globeContainer');
                this.images = [];
                this.isRotating = true;
                this.isDragging = false;
                this.rotationSpeed = 1;
                this.direction = 1;
                this.rotationX = 0;
                this.rotationY = 0;
                this.targetRotationX = 0;
                this.targetRotationY = 0;
                this.mouseX = 0;
                this.mouseY = 0;
                this.radius = 280;
                
                // Enhanced zoom properties
                this.zoomLevel = 1.0;
                this.targetZoomLevel = 1.0;
                this.minZoom = 1.0; // Fixed to not zoom out beyond initial view
                this.maxZoom = 8.0;
                this.isInsideView = false;
                this.insideThreshold = 1.8;
                
                // Atmospheric effects
                this.depthFog = document.getElementById('depthFog');
                this.insideViewOverlay = document.getElementById('insideViewOverlay');
                this.zoomStatus = document.getElementById('zoomStatus');
                this.zoomParticles = [];
                
                this.init();
            }

            init() {
                this.createImageSphere();
                this.setupEventListeners();
                this.createParticles();
                this.createZoomParticles();
                this.startAnimation();
                this.updateZoomIndicator();
                this.updateAtmosphericEffects();
            }

            createImageSphere() {
                const imageCount = imageUrls.length;
                
                // Use Fibonacci sphere distribution for even spacing
                for (let i = 0; i < imageCount; i++) {
                    const phi = Math.acos(1 - 2 * (i + 0.5) / imageCount);
                    const theta = Math.PI * (1 + Math.sqrt(5)) * (i + 0.5);
                    
                    const imageData = {
                        element: null,
                        phi: phi,
                        theta: theta,
                        originalIndex: i,
                        x: 0,
                        y: 0,
                        z: 0
                    };
                    
                    const imageElement = document.createElement('div');
                    imageElement.className = 'image-item';
                    imageElement.innerHTML = `<img src="${imageUrls[i]}" alt="Image ${i + 1}">`;
                    
                    imageData.element = imageElement;
                    
                    // Add click event for zoom
                    imageElement.addEventListener('click', (e) => {
                        e.stopPropagation();
                        this.zoomImage(imageUrls[i]);
                    });
                    
                    this.container.appendChild(imageElement);
                    this.images.push(imageData);
                }
                
                this.updateImagePositions();
            }

            updateImagePositions() {
                // Update inside view status
                const wasInsideView = this.isInsideView;
                this.isInsideView = this.zoomLevel > this.insideThreshold;
                
                if (wasInsideView !== this.isInsideView) {
                    this.updateAtmosphericEffects();
                }

                this.images.forEach((imageData) => {
                    // Apply earth-like rotation to the sphere coordinates
                    const rotatedPhi = imageData.phi;
                    const rotatedTheta = imageData.theta + (this.rotationY * this.direction);
                    
                    // Convert spherical to Cartesian coordinates
                    const x = this.radius * Math.sin(rotatedPhi) * Math.cos(rotatedTheta);
                    const y = this.radius * Math.cos(rotatedPhi);
                    const z = this.radius * Math.sin(rotatedPhi) * Math.sin(rotatedTheta);
                    
                    // Apply additional X rotation for tilt effect
                    const cosX = Math.cos(this.rotationX);
                    const sinX = Math.sin(this.rotationX);
                    
                    const rotatedY = y * cosX - z * sinX;
                    const rotatedZ = y * sinX + z * cosX;
                    
                    imageData.x = x;
                    imageData.y = rotatedY;
                    imageData.z = rotatedZ;
                    
                    // Enhanced zoom effect with inside/outside view transition
                    let effectiveX, effectiveY, effectiveZ, screenX, screenY, scale;
                    
                    if (this.isInsideView) {
                        // Inside view: images appear around us, with inverted perspective
                        const inversionFactor = Math.max(0.5, 2 - this.zoomLevel * 0.3);
                        effectiveX = x * inversionFactor;
                        effectiveY = rotatedY * inversionFactor;
                        effectiveZ = rotatedZ * inversionFactor;
                        
                        const perspective = 800;
                        scale = Math.max(0.4, Math.min(3, perspective / (perspective + Math.abs(effectiveZ))));
                        screenX = effectiveX * scale * (1 + (this.zoomLevel - this.insideThreshold) * 0.2);
                        screenY = effectiveY * scale * (1 + (this.zoomLevel - this.insideThreshold) * 0.2);
                    } else {
                        // Outside view: normal perspective
                        const perspective = 1000;
                        effectiveZ = rotatedZ / this.zoomLevel;
                        scale = perspective / (perspective + effectiveZ);
                        screenX = (x / this.zoomLevel) * scale;
                        screenY = (rotatedY / this.zoomLevel) * scale;
                    }
                    
                    // Apply transform with enhanced scaling
                    const finalScale = Math.max(0.2, scale * (this.isInsideView ? 1.5 : this.zoomLevel * 0.5));
                    const transform = `translate3d(${screenX}px, ${screenY}px, ${effectiveZ || rotatedZ / this.zoomLevel}px) scale(${finalScale})`;
                    
                    imageData.element.style.transform = transform;
                    imageData.element.style.zIndex = Math.round(1000 + (effectiveZ || rotatedZ / this.zoomLevel));
                    
                    // Apply depth-based styling with inside/outside consideration
                    this.applyDepthStyling(imageData.element, effectiveZ || rotatedZ / this.zoomLevel, scale);
                });

                // Apply global zoom transform to the container
                const globalTransform = this.isInsideView ? 
                    `scale(${Math.min(2, this.zoomLevel * 0.7)})` : 
                    `scale(${this.zoomLevel})`;
                this.container.style.transform = globalTransform;
                
                // Update zoom particles animation
                this.updateZoomParticles();
            }

            applyDepthStyling(element, z, scale) {
                // Calculate visibility based on z-depth and zoom level
                const normalizedZ = (z + this.radius) / (2 * this.radius);
                let opacity = Math.max(0.1, Math.min(1, 0.3 + normalizedZ * 1.4));
                
                // When zoomed in, make images more visible
                if (this.zoomLevel > 1) {
                    opacity = Math.min(1, opacity * (1 + (this.zoomLevel - 1) * 0.5));
                }
                
                const blur = Math.max(0, (1 - normalizedZ) * (2 / this.zoomLevel));
                
                element.style.opacity = opacity;
                element.style.filter = blur > 0.5 ? `blur(${blur}px)` : 'none';
                
                // Size based on perspective and zoom
                const sizeMultiplier = Math.max(0.3, Math.min(2, scale * this.zoomLevel * 0.8));
                const baseSize = 50;
                const newSize = baseSize * sizeMultiplier;
                
                element.style.width = `${newSize}px`;
                element.style.height = `${newSize}px`;
                element.style.marginLeft = `${-newSize/2}px`;
                element.style.marginTop = `${-newSize/2}px`;
                
                // Adjust border and glow based on depth and zoom
                if (z > 50 * this.zoomLevel) {
                    element.style.borderColor = 'rgba(100, 200, 255, 0.8)';
                    element.style.boxShadow = `0 0 ${15 * this.zoomLevel}px rgba(100, 200, 255, 0.6)`;
                } else if (z < -50 * this.zoomLevel) {
                    element.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    element.style.boxShadow = '0 0 5px rgba(255, 255, 255, 0.1)';
                } else {
                    element.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                    element.style.boxShadow = `0 0 ${10 * this.zoomLevel}px rgba(100, 200, 255, 0.4)`;
                }
            }

            createParticles() {
                for (let i = 0; i < 20; i++) {
                    const particle = document.createElement('div');
                    particle.className = 'particle';
                    particle.style.left = Math.random() * 100 + 'vw';
                    particle.style.animationDelay = Math.random() * 10 + 's';
                    particle.style.animationDuration = (8 + Math.random() * 4) + 's';
                    document.body.appendChild(particle);
                }
            }

            createZoomParticles() {
                for (let i = 0; i < 15; i++) {
                    const particle = document.createElement('div');
                    particle.className = 'zoom-particle';
                    particle.style.width = (2 + Math.random() * 4) + 'px';
                    particle.style.height = particle.style.width;
                    particle.style.left = (Math.random() * 100) + 'vw';
                    particle.style.top = (Math.random() * 100) + 'vh';
                    particle.style.animationDelay = Math.random() * 8 + 's';
                    particle.style.animationDuration = (6 + Math.random() * 4) + 's';
                    document.body.appendChild(particle);
                    this.zoomParticles.push(particle);
                }
            }

            updateZoomParticles() {
                const particleIntensity = Math.max(0, (this.zoomLevel - 1) * 0.5);
                this.zoomParticles.forEach(particle => {
                    particle.style.opacity = Math.min(1, particleIntensity);
                    if (this.isInsideView) {
                        particle.style.animationPlayState = 'running';
                    } else {
                        particle.style.animationPlayState = 'paused';
                    }
                });
            }

            updateAtmosphericEffects() {
                // Update depth fog
                const fogIntensity = Math.max(0, Math.min(1, (this.zoomLevel - 1) * 0.4));
                if (this.depthFog) {
                    if (fogIntensity > 0.1) {
                        this.depthFog.classList.add('active');
                        this.depthFog.style.opacity = fogIntensity;
                    } else {
                        this.depthFog.classList.remove('active');
                    }
                }

                // Update inside view overlay
                if (this.insideViewOverlay) {
                    if (this.isInsideView) {
                        this.insideViewOverlay.classList.add('active');
                        const insideIntensity = Math.min(1, (this.zoomLevel - this.insideThreshold) * 0.3);
                        this.insideViewOverlay.style.opacity = insideIntensity;
                    } else {
                        this.insideViewOverlay.classList.remove('active');
                    }
                }

                // Update zoom status only when view changes, not continuously
                if (this.zoomStatus && !this.zoomStatus.classList.contains('visible')) {
                    if (this.isInsideView) {
                        this.zoomStatus.textContent = '🔍 Inside Globe View';
                        this.zoomStatus.classList.add('inside');
                    } else if (this.zoomLevel <= this.minZoom + 0.1) {
                        this.zoomStatus.textContent = '🌍 Default View';
                        this.zoomStatus.classList.remove('inside');
                    } else {
                        this.zoomStatus.textContent = '🔍 Zoomed View';
                        this.zoomStatus.classList.remove('inside');
                    }
                }
            }

            setupEventListeners() {
                // Mouse events
                this.container.addEventListener('mousedown', this.handleMouseDown.bind(this));
                document.addEventListener('mousemove', this.handleMouseMove.bind(this));
                document.addEventListener('mouseup', this.handleMouseUp.bind(this));
                
                // Touch events
                this.container.addEventListener('touchstart', this.handleTouchStart.bind(this), { passive: false });
                document.addEventListener('touchmove', this.handleTouchMove.bind(this), { passive: false });
                document.addEventListener('touchend', this.handleTouchEnd.bind(this));

                // Mouse wheel for zoom
                this.container.addEventListener('wheel', this.handleWheel.bind(this), { passive: false });
            }

            handleWheel(e) {
                e.preventDefault();
                const zoomDelta = e.deltaY > 0 ? -0.1 : 0.1;
                this.adjustZoom(zoomDelta);
            }

            handleMouseDown(e) {
                this.isDragging = true;
                this.mouseX = e.clientX;
                this.mouseY = e.clientY;
                this.container.style.cursor = 'grabbing';
            }

            handleMouseMove(e) {
                if (!this.isDragging) return;
                
                const deltaX = e.clientX - this.mouseX;
                const deltaY = e.clientY - this.mouseY;
                
                this.targetRotationY += deltaX * 0.01;
                this.targetRotationX += deltaY * 0.01;
                
                // Limit vertical rotation
                this.targetRotationX = Math.max(-Math.PI/3, Math.min(Math.PI/3, this.targetRotationX));
                
                this.mouseX = e.clientX;
                this.mouseY = e.clientY;
            }

            handleMouseUp() {
                this.isDragging = false;
                this.container.style.cursor = 'grab';
            }

            handleTouchStart(e) {
                if (e.touches.length === 1) {
                    e.preventDefault();
                    this.handleMouseDown({
                        clientX: e.touches[0].clientX,
                        clientY: e.touches[0].clientY
                    });
                }
            }

            handleTouchMove(e) {
                if (e.touches.length === 1) {
                    e.preventDefault();
                    this.handleMouseMove({
                        clientX: e.touches[0].clientX,
                        clientY: e.touches[0].clientY
                    });
                }
            }

            handleTouchEnd() {
                this.handleMouseUp();
            }

            startAnimation() {
                const animate = () => {
                    // Auto-rotate like Earth when not dragging
                    if (this.isRotating && !this.isDragging) {
                        this.targetRotationY += 0.005 * this.rotationSpeed * this.direction;
                    }
                    
                    // Smooth interpolation to target rotations
                    this.rotationY += (this.targetRotationY - this.rotationY) * 0.05;
                    this.rotationX += (this.targetRotationX - this.rotationX) * 0.05;
                    
                    // Smooth zoom interpolation
                    this.zoomLevel += (this.targetZoomLevel - this.zoomLevel) * 0.1;
                    
                    this.updateImagePositions();
                    this.updateZoomIndicator();
                    requestAnimationFrame(animate);
                };
                animate();
            }

            adjustZoom(delta) {
                this.targetZoomLevel = Math.max(this.minZoom, Math.min(this.maxZoom, this.targetZoomLevel + delta));
                
                // Show zoom status when adjusting
                if (this.zoomStatus) {
                    this.zoomStatus.classList.add('visible');
                    if (this.targetZoomLevel <= this.minZoom + 0.1) {
                        this.zoomStatus.textContent = '🌍 Default View (1.0x)';
                        this.zoomStatus.classList.remove('inside');
                    } else if (this.targetZoomLevel > this.insideThreshold) {
                        this.zoomStatus.textContent = '🔍 Inside Globe View';
                        this.zoomStatus.classList.add('inside');
                    } else {
                        this.zoomStatus.textContent = `🔍 Zoomed In (${this.targetZoomLevel.toFixed(1)}x)`;
                        this.zoomStatus.classList.remove('inside');
                    }
                    
                    // Auto-hide after 2 seconds
                    clearTimeout(this.statusTimeout);
                    this.statusTimeout = setTimeout(() => {
                        if (this.zoomStatus) {
                            this.zoomStatus.classList.remove('visible');
                        }
                    }, 2000);
                }
            }

            zoomIn() {
                this.adjustZoom(0.3);
            }

            zoomOut() {
                this.adjustZoom(-0.3);
            }

            updateZoomIndicator() {
                const zoomPercentage = ((this.zoomLevel - this.minZoom) / (this.maxZoom - this.minZoom)) * 100;
                const zoomLevelElement = document.getElementById('zoomLevel');
                const zoomTextElement = document.getElementById('zoomText');
                
                if (zoomLevelElement && zoomTextElement) {
                    zoomLevelElement.style.height = `${Math.max(2, zoomPercentage)}%`;
                    zoomTextElement.textContent = `${this.zoomLevel.toFixed(1)}x`;
                    
                    // Change color when at minimum zoom
                    if (this.zoomLevel <= this.minZoom + 0.1) {
                        zoomLevelElement.style.background = 'linear-gradient(to top, #4ECDC4, #45B7D1)';
                    } else {
                        zoomLevelElement.style.background = 'linear-gradient(to top, #4ECDC4, #45B7D1, #96CEB4)';
                    }
                }
            }

            zoomImage(imageSrc) {
                const overlay = document.getElementById('zoomOverlay');
                const zoomedImage = document.getElementById('zoomedImage');
                
                zoomedImage.src = imageSrc;
                overlay.classList.add('active');
            }

            toggleRotation() {
                this.isRotating = !this.isRotating;
            }

            changeSpeed() {
                this.rotationSpeed = this.rotationSpeed >= 3 ? 0.5 : this.rotationSpeed + 0.5;
                document.getElementById('speedDisplay').textContent = this.rotationSpeed + 'x';
            }

            toggleDirection() {
                this.direction *= -1;
            }

            resetView() {
                this.targetRotationX = 0;
                this.targetRotationY = 0;
                this.targetZoomLevel = 1.0;
                this.rotationSpeed = 1;
                this.direction = 1;
                this.isRotating = true;
                document.getElementById('speedDisplay').textContent = '1x';
            }
        }

        // Global functions for controls
        let globe;

        function toggleRotation() {
            globe.toggleRotation();
        }

        function changeSpeed() {
            globe.changeSpeed();
        }

        function toggleDirection() {
            globe.toggleDirection();
        }

        function resetView() {
            globe.resetView();
        }

        function zoomIn() {
            globe.zoomIn();
        }

        function zoomOut() {
            globe.zoomOut();
        }

        function closeZoom() {
            document.getElementById('zoomOverlay').classList.remove('active');
        }

        // Initialize the globe when page loads
        window.addEventListener('load', () => {
            globe = new EarthLikeGlobe();
        });

        // Close zoom overlay when clicking outside image
        document.getElementById('zoomOverlay').addEventListener('click', (e) => {
            if (e.target.id === 'zoomOverlay') {
                closeZoom();
            }
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            switch(e.key) {
                case ' ':
                    e.preventDefault();
                    toggleRotation();
                    break;
                case 'r':
                case 'R':
                    resetView();
                    break;
                case 's':
                case 'S':
                    changeSpeed();
                    break;
                case 'd':
                case 'D':
                    toggleDirection();
                    break;
                case '=':
                case '+':
                    e.preventDefault();
                    zoomIn();
                    break;
                case '-':
                case '_':
                    e.preventDefault();
                    zoomOut();
                    break;
            }
        });
    </script>
</body>
</html>