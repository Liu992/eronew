import './Globe.css';
import React, { Component } from 'react';
import * as THREE from 'three';
var renderer;
var scene;
var camera;
var light;
var light1;
var light2;
var raycaster;
var mouse;
var webgl;
class Globe extends Component {
    constructor (props) {
        super(props)
        this.initThree = this.initThree.bind(this)
    }
    componentDidMount() {
        this.initThree();
        var box = document.getElementsByTagName('canvas')[0];
        box.style.width = webgl.clientWidth + 'px';
        box.style.height = webgl.clientWidth + 'px';
    }
    initThree() {
        webgl = document.getElementById('WebGL-output');
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(20, window.innerHeight/window.innerHeight);
        camera.position.r = 0;

        renderer = new THREE.WebGLRenderer({ 
            antialias: true, 
            antialias: true,
            maxLights:1,
            precision:"highp" 
        });
        renderer.setClearColor('white', 1.0);
        renderer.setSize(webgl.clientWidth*2, webgl.clientWidth*2);
        

        //设置light
        light = new THREE.AmbientLight('#9699b0', .9, 0);
        light.position.set(0, 0, 0);//设置光源向量
        scene.add(light);

        light1 = new THREE.PointLight('#D9dcdc', 0.3, 0);// 颜色  距离 强度 位置
        light1.position.set(200, 100, 50);//设置光源向量
        scene.add(light1);

        light2 = new THREE.DirectionalLight('#D9dcdc', 0.1, 0);
        light2.position.set(-300, -200, -800);//设置光源向量
        scene.add(light2);
       update()



        function ajustCamera() {
            var x = 2.5 * regionR * Math.cos(camera.position.r);
            var z = 2.5 * regionR * Math.sin(camera.position.r);
            camera.position.x = x;
            camera.position.z = z;
            camera.lookAt(new THREE.Vector3(0, 0, 0));
        }

        // Intersection
        raycaster = new THREE.Raycaster();
        mouse = new THREE.Vector2();

        // 将渲染器的输出添加到html元素。
        
        webgl.appendChild(renderer.domElement);

        var regionR = 50;
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        if (window.innerWidth>768) {

        webgl.onmousemove = function (e) {
            mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
            mouse.z = - (e.clientY / window.innerHeight) * 2 + 1;
            raycaster.setFromCamera(mouse, camera);
            var ratio = (0.5 - (e.x / windowWidth)) * Math.PI;
            var y = (0.5 - (e.y / windowHeight)) * 100;
            camera.position.y = y;
            camera.position.r = ratio;
            ajustCamera();
        };
        }
        renderer.shadowMapType=THREE.PCFSoftShadowMap;
        ajustCamera();
        // F3F3FA
        function update () {
            //球体
            var sphereGeometry = new THREE.SphereGeometry(8, 100, 60);
            var sphereMaterial = new THREE.MeshLambertMaterial({ color: 'F3F3FA' });
            var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
            // position the sphere
            sphere.position.x = 0;
            sphere.position.y = 0;
            sphere.position.z = 0;
            sphere.castShadow = true;
            sphere.name = 'sphere';
            // add the sphere to the scene
            scene.add(sphere);

            //球体
            var sphereGeometry1 = new THREE.SphereGeometry(3, 100, 60);
            var sphereMaterial1 = new THREE.MeshLambertMaterial({ color: 'F3F3FA' });
            var sphere1 = new THREE.Mesh(sphereGeometry1, sphereMaterial1);
            // position the sphere
            sphere1.position.x = 5;
            sphere1.position.y = 11;
            sphere1.position.z = 5;
            sphere1.castShadow = true;
            sphere1.name = 'sphere1';
            
            // add the sphere1 to the scene
            scene.add(sphere1);

            //球体
            var sphereGeometry2 = new THREE.SphereGeometry(2, 100, 60);
            var sphereMaterial2 = new THREE.MeshLambertMaterial({ color: 'F3F3FA' });
            var sphere2 = new THREE.Mesh(sphereGeometry2, sphereMaterial2);
            // position the sphere
            sphere2.position.x = 12;
            sphere2.position.y = 1;
            sphere2.position.z = 7;
            sphere2.castShadow = true;
            sphere2.name = 'sphere2';
            // add the sphere to the scene
            scene.add(sphere2);

            //球体
            var sphereGeometry3 = new THREE.SphereGeometry(1.5, 100, 60);
            var sphereMaterial3 = new THREE.MeshLambertMaterial({ color: 'F3F3FA' });
            var sphere3 = new THREE.Mesh(sphereGeometry3, sphereMaterial3);
            // position the sphere
            sphere3.position.x = -6;
            sphere3.position.y = 1;
            sphere3.position.z = 10;
            sphere3.castShadow = true;
            sphere3.name = 'sphere3';
            // add the sphere to the scene
            scene.add(sphere3);

            //球体
            var sphereGeometry4 = new THREE.SphereGeometry(2.5, 100, 60);
            var sphereMaterial4 = new THREE.MeshLambertMaterial({ color: 'F3F3FA' });
            var sphere4 = new THREE.Mesh(sphereGeometry4, sphereMaterial4);
            // position the sphere
            sphere4.position.x = 0;
            sphere4.position.y = -14;
            sphere4.position.z = 0;
            sphere4.castShadow = true;
            sphere4.name = 'sphere4';
            // add the sphere to the scene
            scene.add(sphere4);

            //球体
            var sphereGeometry5 = new THREE.SphereGeometry(4, 100, 60);
            var sphereMaterial5 = new THREE.MeshLambertMaterial({ color: 'F3F3FA' });
            var sphere5 = new THREE.Mesh(sphereGeometry5, sphereMaterial5);
            // position the sphere
            sphere5.position.x = 12;
            sphere5.position.y = -10;
            sphere5.position.z = -5;
            sphere5.castShadow = true;
            sphere5.name = 'sphere5';
            // add the sphere to the scene
            scene.add(sphere5);

            //球体
            var sphereGeometry6 = new THREE.SphereGeometry(4, 100, 60);
            var sphereMaterial6 = new THREE.MeshLambertMaterial({ color: 'F3F3FA' });
            var sphere6 = new THREE.Mesh(sphereGeometry6, sphereMaterial6);
            // position the sphere
            sphere6.position.x = -4;
            sphere6.position.y = -7;
            sphere6.position.z = 11;
            sphere6.castShadow = true;
            sphere6.name = 'sphere6';
            // add the sphere to the scene
            scene.add(sphere6);

            //球体
            var sphereGeometry7 = new THREE.SphereGeometry(5, 100, 60);
            var sphereMaterial7 = new THREE.MeshLambertMaterial({ color: 'F3F3FA' });
            var sphere7 = new THREE.Mesh(sphereGeometry7, sphereMaterial7);
            // position the sphere
            sphere7.position.x = -6;
            sphere7.position.y = -5;
            sphere7.position.z = -12;
            sphere7.castShadow = true;
            sphere7.name = 'sphere7';
            // add the sphere to the scene
            scene.add(sphere7);


            //球体
            var sphereGeometry8 = new THREE.SphereGeometry(3, 100, 60);
            var sphereMaterial8 = new THREE.MeshLambertMaterial({ color: 'F3F3FA' });
            var sphere8 = new THREE.Mesh(sphereGeometry8, sphereMaterial8);
            // position the sphere
            sphere8.position.x = 1;
            sphere8.position.y = 5;
            sphere8.position.z = -10;
            sphere8.castShadow = true;
            sphere8.name = 'sphere8';
            scene.add(sphere8);

            //球体
            var sphereGeometry9 = new THREE.SphereGeometry(1, 100, 60);
            var sphereMaterial9 = new THREE.MeshLambertMaterial({ color: 'F3F3FA' });
            var sphere9 = new THREE.Mesh(sphereGeometry9, sphereMaterial9);
            sphere9.position.x = -7;
            sphere9.position.y = 10;
            sphere9.position.z = -14;
            sphere9.castShadow = true;
            sphere9.name = 'sphere9';
            scene.add(sphere9);
            renderer.render(scene, camera);
        }
        
        function render() {
            renderer.render(scene, camera);
            scene.rotation.y -= -0.005;
            requestAnimationFrame(render);
        }
        render();
    }
    render() {
        return (
            <div id='WebGL-output' disabled></div>
        )
    }
}

export default Globe;