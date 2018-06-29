import './Globe.css';
import React, { Component } from 'react';
import * as THREE from 'three';
var renderer;
var scene;
var camera;
var light;
var light1;
var light2;
// var light3;
var raycaster;
var mouse;
var webgl;

class Globe extends Component {
    constructor(props) {
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
        camera = new THREE.PerspectiveCamera(17, window.innerHeight / window.innerHeight);
        camera.position.r = 0;

        renderer = new THREE.WebGLRenderer({
            alpha:true,
            antialias: true,
            preserveDrawingBuffer,
            precision: "highp"
        });
        renderer.setClearColor(0xFFFFFF, 0.0);
        renderer.setSize(webgl.clientWidth * 2, webgl.clientWidth * 2);
        // //设置light
        light = new THREE.AmbientLight('#083A7F', .9, 0);
        light.position.set(0, 0, 0);//设置光源向量
        scene.add(light);

        light1 = new THREE.PointLight('#6A9FBD', 0.6, 0, 1, 0);// 颜色  距离 强度 位置
        light1.position.set(200, 100, 0);//设置光源向量
        scene.add(light1);

        light2 = new THREE.DirectionalLight('#6A9FBD', 0.55, 0, 1, 0);// .1
        light2.position.set(-200, -100, 80);//设置光源向量
        scene.add(light2);

        // light3 = new THREE.DirectionalLight('#6A9FBD',  0.3, 0, 1, 0);// .1
        // light3.position.set(100, -50, 40);//设置光源向量
        // scene.add(light3);
        


        //球体
        var sphereGeometry = new THREE.SphereGeometry(8, 100, 30);
        var sphereMaterial = new THREE.MeshLambertMaterial({ color: '#fff' });
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
        var sphereGeometry1 = new THREE.SphereGeometry(3, 100, 30);
        var sphereMaterial1 = new THREE.MeshLambertMaterial({ color: '#F3F3FA' });
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
        var sphereGeometry2 = new THREE.SphereGeometry(2, 100, 30);
        var sphereMaterial2 = new THREE.MeshLambertMaterial({ color: '#F3F3FA' });
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
        var sphereGeometry3 = new THREE.SphereGeometry(1.5, 100, 30);
        var sphereMaterial3 = new THREE.MeshLambertMaterial({ color: '#F3F3FA' });
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
        var sphereGeometry4 = new THREE.SphereGeometry(2.5, 100, 30);
        var sphereMaterial4 = new THREE.MeshLambertMaterial({ color: '#F3F3FA' });
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
        var sphereGeometry5 = new THREE.SphereGeometry(4, 100, 30);
        var sphereMaterial5 = new THREE.MeshLambertMaterial({ color: '#F3F3FA' });
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
        var sphereGeometry6 = new THREE.SphereGeometry(4, 100, 30);
        var sphereMaterial6 = new THREE.MeshLambertMaterial({ color: '#F3F3FA' });
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
        var sphereGeometry7 = new THREE.SphereGeometry(5, 100, 30);
        var sphereMaterial7 = new THREE.MeshLambertMaterial({ color: '#F3F3FA' });
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
        var sphereGeometry8 = new THREE.SphereGeometry(3, 100, 30);
        var sphereMaterial8 = new THREE.MeshLambertMaterial({ color: '#F3F3FA' });
        var sphere8 = new THREE.Mesh(sphereGeometry8, sphereMaterial8);
        // position the sphere
        sphere8.position.x = 1;
        sphere8.position.y = 5;
        sphere8.position.z = -10;
        sphere8.castShadow = true;
        sphere8.name = 'sphere8';
        scene.add(sphere8);

        //球体
        var sphereGeometry9 = new THREE.SphereGeometry(1, 100, 30);
        var sphereMaterial9 = new THREE.MeshLambertMaterial({ color: '#F3F3FA' });
        var sphere9 = new THREE.Mesh(sphereGeometry9, sphereMaterial9);
        sphere9.position.x = -7;
        sphere9.position.y = 10;
        sphere9.position.z = -14;
        sphere9.castShadow = true;
        sphere9.name = 'sphere9';
        scene.add(sphere9);
        renderer.render(scene, camera);

        
        // setInterval(function () {
        //     sphere9.position.z = sphere9.translateZ = Math.round(Math.random() * 50)%5+10 ;
        //     sphere9.transformControl.position = -0.08
        // },2000)

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
        if (window.innerWidth > 768) {
            webgl.onmousemove = function (e) {
                mouse.x = (e.clientX / window.innerWidth) * 2;
                mouse.z = - (e.clientY / window.innerHeight) * 2;
                raycaster.setFromCamera(mouse, camera);
                var ratio = (0.5 - (e.x / windowWidth)) * Math.PI;
                var y = (0.5 - (e.y / windowHeight)) * 100;
                camera.position.y = y;
                camera.position.r = ratio;
                ajustCamera();
            };
        }
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        ajustCamera();

        var num = 10;
        let han = 0.02
        // #F3F3FA
        function add () {
            num += han;
            if (num >= 14) {
                han = -0.02
            }else if(num <= 10){
                han = 0.02
            }
        }

        var num1 = 5;
        let han1 = 0.02
        // #F3F3FA
        function add1 () {
            num1 += han1;
            if (num1 >= 14) {
                han1 = -0.02
            }else if(num1 <= 10){
                han1 = 0.02
            }
        }

        var num2 = -5;
        let han2 = 0.02
        // #F3F3FA
        function add2 () {
            num2 += han2;
            if (num2 >= 0) {
                han2 = -0.02
            }else if(num2 <= -5){
                han2 = 0.02
            }
        }

        var num3 = -7;
        let han3 = 0.02
        // #F3F3FA
        function add3 () {
            num3 += han3;
            if (num3 >= -4.2) {
                han3 = -0.02
            }else if(num3 <= -7){
                han3 = 0.02
            }
        }


        var num4 = -10;
        let han4 = 0.02
        // #F3F3FA
        function add4 () {
            num4 += han4;
            if (num4 >= -5) {
                han4 = -0.02
            }else if(num4 <= -13){
                han4 = 0.02
            }
        }



        var num5 = -14;
        let han5 = 0.02
        // #F3F3FA
        function add5 () {
            num5 += han5;
            if (num5 >= -10) {
                han5 = -0.02
            }else if(num5 <= -17){
                han5 = 0.02
            }
        }

        function render() { 
            add();
            add1();
            add2();
            add3();
            add4();
            add5();
            renderer.render(scene, camera);
            sphere9.position.y = num;
            sphere8.position.y = num1;
            sphere7.position.y = num2;
            sphere6.position.y = num3;
            sphere5.position.y = num4;
            sphere4.position.y = num5;
            scene.rotation.y -= -0.003;
            requestAnimationFrame(render);
        }
        render();
    }
    render() {
        return (
            <div id='WebGL-output' disabled ref="webgl"></div>
        )
    }
}

export default Globe;