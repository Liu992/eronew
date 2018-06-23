
import React, { Component } from 'react';
import * as THREE from 'three';

class Globe1 extends Component {
  constructor(props) {
    super(props)
    this.init = this.init.bind(this)
  }
  componentDidMount() {
    this.init();
  }
  init() {
    // create a scene, that will hold all our elements such as objects, cameras and lights.
    var scene = new THREE.Scene();

    // create a camera, which defines where we're looking at.
    var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

    // create a render and set the size
    var webGLRenderer = new THREE.WebGLRenderer();
    webGLRenderer.setClearColor(new THREE.Color(0xEEEEEE, 1.0));
    webGLRenderer.setSize(window.innerWidth, window.innerHeight);
    webGLRenderer.shadowMapEnabled = true;

    var cube = new THREE.Mesh(new THREE.CubeGeometry(55, 55, 55));
    // new THREE.MeshFaceMaterial(materials));  
    scene.add(cube);  
    
    // add the sphere to the scene

    // position and point the camera to the center of the scene
    camera.position.x = -30;
    camera.position.y = 40;
    camera.position.z = 50;
    camera.lookAt(new THREE.Vector3(10, 0, 0));

    // add the output of the renderer to the html element
    document.getElementById("WebGL1-output").appendChild(webGLRenderer.domElement);

    // call the render function
    var step = 0;


    render();

    function render() {

      cube.rotation.y = step += 0.01;

      // render using requestAnimationFrame
      requestAnimationFrame(render);
      webGLRenderer.render(scene, camera);
    }
    
  }



  render() {
    return (
      <div id='WebGL1-output' disabled></div>
    )
  }
}

export default Globe1;