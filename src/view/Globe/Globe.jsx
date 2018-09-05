import './Globe.css';
import React, { Component } from 'react';
import * as THREE from 'three';
var box;
var renderer, scene, camera, light, light1, light2, raycaster, mouse, webgl, regionR = 50;
var sphere, sphere1, sphere2, sphere3, sphere4, sphere5, sphere6, sphere7, sphere8, sphere9;
var num = 10, han = 0.02, num1 = 5, han1 = 0.02, num2 = -5, han2 = 0.02, num3 = -7, han3 = 0.02, num4 = -10, han4 = 0.02, num5 = -14, han5 = 0.02;
function add() {
  num += han;
  if (num >= 14) {
    han = -0.02
  } else if (num <= 10) {
    han = 0.02
  }
}
function add1() {
  num1 += han1;
  if (num1 >= 14) {
    han1 = -0.02
  } else if (num1 <= 10) {
    han1 = 0.02
  }
}
function add2() {
  num2 += han2;
  if (num2 >= 0) {
    han2 = -0.02
  } else if (num2 <= -5) {
    han2 = 0.02
  }
}
function add3() {
  num3 += han3;
  if (num3 >= -4.2) {
    han3 = -0.02
  } else if (num3 <= -7) {
    han3 = 0.02
  }
}
function add4() {
  num4 += han4;
  if (num4 >= -5) {
    han4 = -0.02
  } else if (num4 <= -13) {
    han4 = 0.02
  }
}
function add5() {
  num5 += han5;
  if (num5 >= -10) {
    han5 = -0.02
  } else if (num5 <= -17) {
    han5 = 0.02
  }
}

class Globe extends Component {
  constructor(props) {
    super(props)
    this.initThree = this.initThree.bind(this)
  }
  componentDidMount() {
    this.initThree();
    this.createLight();
    this.createSphere();
    this.cretemove();
    this.ajustCamera();
    this.screenChange();
    this.render2();
    this.resize();
  }
  resize=()=>{
    box = document.getElementsByTagName('canvas')[0];
    box.style.width = webgl.clientWidth + 'px';
    box.style.height = webgl.clientWidth + 'px';
  }
  screenChange=()=> {
    window.addEventListener('resize', this.resize);
  }
  initThree() {
    var requestAnimationFrame = window.requestAnimationFrame
      || window.mozRequestAnimationFrame
      || window.webkitRequestAnimationFrame
      || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
    webgl = document.getElementById('WebGL-output');
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(17, window.innerHeight / window.innerHeight);
    // camera = new THREE.PerspectiveCamera(17, window.innerWidth / window.innerHeight);
    camera.position.r = 0;

    renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      // preserveDrawingBuffer: true,
      precision: "highp"
    });
    renderer.setClearColor(0xFFFFFF, 0.0);
    renderer.setSize(webgl.clientWidth * 2, webgl.clientWidth * 2);
    // renderer.setSize(window.innerWidth * 2, window.innerHeight * 2);
    // 将渲染器的输出添加到html元素。
    webgl.appendChild(renderer.domElement);
  }
  render1 = () => {
    renderer.render(scene, camera);
  }
  render2 = () => {
    renderer.clear();
    add();
    add1();
    add2();
    add3();
    add4();
    add5();
    sphere9.position.y = num;
    sphere8.position.y = num1;
    sphere7.position.y = num2;
    sphere6.position.y = num3;
    sphere5.position.y = num4;
    sphere4.position.y = num5;
    scene.rotation.y -= -0.003;
    renderer.render(scene, camera);
    requestAnimationFrame(this.render2);
  }
  createLight() {
    light = new THREE.AmbientLight('#083A7F', .9, 0);
    light.position.set(0, 0, 0);//设置光源向量
    scene.add(light);

    light1 = new THREE.PointLight('#6A9FBD', 0.6, 0, 1, 0);// 颜色  距离 强度 位置
    light1.position.set(200, 100, 0);//设置光源向量
    scene.add(light1);

    light2 = new THREE.DirectionalLight('#6A9FBD', 0.55, 0, 1, 0);// .1
    light2.position.set(-200, -100, 80);//设置光源向量
    scene.add(light2);
  }
  cretemove = () => {
    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    if (window.innerWidth > 768) {
      webgl.onmousemove = (e) => {
        mouse.x = (e.clientX / window.innerWidth) * 2;
        mouse.z = - (e.clientY / window.innerHeight) * 2;
        raycaster.setFromCamera(mouse, camera);
        var ratio = (0.5 - (e.x / windowWidth)) * Math.PI;
        var y = (0.5 - (e.y / windowHeight)) * 100;
        camera.position.y = y;
        camera.position.r = ratio;
        this.ajustCamera();
      };
    }
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  }
  createSphere() {
    var sphereGeometry = new THREE.SphereGeometry(8, 100, 30);
    var sphereMaterial = new THREE.MeshLambertMaterial({ color: '#fff' });
    sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.x = 0;
    sphere.position.y = 0;
    sphere.position.z = 0;
    sphere.castShadow = true;
    sphere.name = 'sphere';
    scene.add(sphere);
    var sphereGeometry1 = new THREE.SphereGeometry(3, 100, 30);
    var sphereMaterial1 = new THREE.MeshLambertMaterial({ color: '#F3F3FA' });
    sphere1 = new THREE.Mesh(sphereGeometry1, sphereMaterial1);
    sphere1.position.x = 5;
    sphere1.position.y = 11;
    sphere1.position.z = 5;
    sphere1.castShadow = true;
    sphere1.name = 'sphere1';
    scene.add(sphere1);
    var sphereGeometry2 = new THREE.SphereGeometry(2, 100, 30);
    var sphereMaterial2 = new THREE.MeshLambertMaterial({ color: '#F3F3FA' });
    sphere2 = new THREE.Mesh(sphereGeometry2, sphereMaterial2);
    sphere2.position.x = 12;
    sphere2.position.y = 1;
    sphere2.position.z = 7;
    sphere2.castShadow = true;
    sphere2.name = 'sphere2';
    scene.add(sphere2);
    var sphereGeometry3 = new THREE.SphereGeometry(1.5, 100, 30);
    var sphereMaterial3 = new THREE.MeshLambertMaterial({ color: '#F3F3FA' });
    sphere3 = new THREE.Mesh(sphereGeometry3, sphereMaterial3);
    sphere3.position.x = -6;
    sphere3.position.y = 1;
    sphere3.position.z = 10;
    sphere3.castShadow = true;
    sphere3.name = 'sphere3';
    scene.add(sphere3);
    var sphereGeometry4 = new THREE.SphereGeometry(2.5, 100, 30);
    var sphereMaterial4 = new THREE.MeshLambertMaterial({ color: '#F3F3FA' });
    sphere4 = new THREE.Mesh(sphereGeometry4, sphereMaterial4);
    sphere4.position.x = 0;
    sphere4.position.y = -14;
    sphere4.position.z = 0;
    sphere4.castShadow = true;
    sphere4.name = 'sphere4';
    scene.add(sphere4);
    var sphereGeometry5 = new THREE.SphereGeometry(4, 100, 30);
    var sphereMaterial5 = new THREE.MeshLambertMaterial({ color: '#F3F3FA' });
    sphere5 = new THREE.Mesh(sphereGeometry5, sphereMaterial5);
    sphere5.position.x = 12;
    sphere5.position.y = -10;
    sphere5.position.z = -5;
    sphere5.castShadow = true;
    sphere5.name = 'sphere5';
    scene.add(sphere5);
    var sphereGeometry6 = new THREE.SphereGeometry(4, 100, 30);
    var sphereMaterial6 = new THREE.MeshLambertMaterial({ color: '#F3F3FA' });
    sphere6 = new THREE.Mesh(sphereGeometry6, sphereMaterial6);
    sphere6.position.x = -4;
    sphere6.position.y = -7;
    sphere6.position.z = 11;
    sphere6.castShadow = true;
    sphere6.name = 'sphere6';
    scene.add(sphere6);
    var sphereGeometry7 = new THREE.SphereGeometry(5, 100, 30);
    var sphereMaterial7 = new THREE.MeshLambertMaterial({ color: '#F3F3FA' });
    sphere7 = new THREE.Mesh(sphereGeometry7, sphereMaterial7);
    sphere7.position.x = -6;
    sphere7.position.y = -5;
    sphere7.position.z = -12;
    sphere7.castShadow = true;
    sphere7.name = 'sphere7';
    scene.add(sphere7);
    var sphereGeometry8 = new THREE.SphereGeometry(3, 100, 30);
    var sphereMaterial8 = new THREE.MeshLambertMaterial({ color: '#F3F3FA' });
    sphere8 = new THREE.Mesh(sphereGeometry8, sphereMaterial8);
    sphere8.position.x = 1;
    sphere8.position.y = 5;
    sphere8.position.z = -10;
    sphere8.castShadow = true;
    sphere8.name = 'sphere8';
    scene.add(sphere8);
    var sphereGeometry9 = new THREE.SphereGeometry(1, 100, 30);
    var sphereMaterial9 = new THREE.MeshLambertMaterial({ color: '#F3F3FA' });
    sphere9 = new THREE.Mesh(sphereGeometry9, sphereMaterial9);
    sphere9.position.x = -7;
    sphere9.position.y = 10;
    sphere9.position.z = -14;
    sphere9.castShadow = true;
    sphere9.name = 'sphere9';
    scene.add(sphere9);
    renderer.render(scene, camera);
  }
  ajustCamera = () => {
    var x = 2.5 * regionR * Math.cos(camera.position.r);
    var z = 2.5 * regionR * Math.sin(camera.position.r);
    camera.position.x = x;
    camera.position.z = z;
    camera.lookAt(new THREE.Vector3(0, 0, 0));
  }
  componentWillUnmount () {
    // this.render2() = 0
  }
  render() {
    return (
      <div id='WebGL-output' disabled ref="webgl"></div>
    )
  }
}

export default Globe;