<template>
  <div id="my-three" ref="screenDom" />
</template>

<script setup lang="ts">
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { onMounted, ref, onUnmounted } from "vue"
const screenDom = ref()
onMounted(() => {
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(50, screenDom.value.clientWidth / screenDom.value.clientHeight, 0.1, 1000)
  camera.position.set(5, 10, 10)

  const renderer = new THREE.WebGLRenderer()
  renderer.setSize(screenDom.value.clientWidth, screenDom.value.clientHeight)
  screenDom.value.appendChild(renderer.domElement)
  const geometry = new THREE.BoxGeometry(5, 5, 5)
  const materialBasic = new THREE.MeshLambertMaterial({
    color: 0x00ff00, // 绿色
    wireframe: false //是否将几何体渲染为线框，默认值为false（即渲染为平面多边形）
  })
  const mesh = new THREE.Mesh(geometry, materialBasic) //网络模型对象Mesh
  scene.add(mesh)
  camera.lookAt(0, 0, 0)
  mesh.position.set(3, 0, 0)

  const spotLight1 = new THREE.SpotLight(0xffffff, 1) //(光照颜色, 光照强度)
  spotLight1.position.set(10, 10, 10)
  const spotLight2 = new THREE.SpotLight(0xffffff, 1) //(光照颜色, 光照强度)
  spotLight2.position.set(-10, -10, -10)
  scene.add(spotLight1, spotLight2)
  const axes = new THREE.AxesHelper(8) // 坐标系轴长设置为8
  scene.add(axes)

  const control = new OrbitControls(camera, renderer.domElement)
  control.addEventListener("change", () => {
    renderer.render(scene, camera) //监听鼠标，键盘事件
  })

  function render() {
    renderer.render(scene, camera)
  }
  render()
  window.onresize = function () {
    renderer.setSize(screenDom.value.clientWidth, screenDom.value.clientHeight)
    camera.aspect = screenDom.value.clientWidth / screenDom.value.clientHeight
    camera.updateProjectionMatrix()
    render()
  }
})
//卸载
onUnmounted(() => {
  console.log("卸载")
})
</script>

<style lang="scss" scoped>
#my-three {
  width: 100%;
  height: 100%;
}
</style>
