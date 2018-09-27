

// var camera, scene, renderer;
// var geometry, material, mesh;
// var target = new THREE.Vector3();

// var lon = 90, lat = 0;
// var phi = 0, theta = 0;

// var touchX, touchY;

// init();
// animate();

// function init() {
//     /**
//     * 添加相机
//      * @type {THREE.PerspectiveCamera}
//      */
//     camera = new THREE.PerspectiveCamera( 
//         75, // 相机视角的夹角
//         window.innerWidth / window.innerHeight,  // 相机画幅比
//         1, // 最近焦距
//         1000 // 最远焦距
//         ); 

//     /**
//      * 创建场景
//      * @type {THREE.Scene}
//      */
//     scene = new THREE.Scene();

//     /**
//      *正方体的6个面的资源及相关（坐标、旋转等）设置
//      */
//     var flipAngle = Math.PI, // 180度
//         rightAngle = flipAngle / 2, // 90度
//         tileWidth = 512; 
//     var sides = [{
//         url: "images/panorama.right.jpg", //right
//         position: [-tileWidth, 0, 0],
//         rotation: [0, rightAngle, 0]
//     }, {
//         url: "images/panorama.left.jpg", //left    
//         position: [tileWidth, 0, 0],
//         rotation: [0, -rightAngle, 0]
//     }, {
//         url: "images/panorama.top.jpg", //top
//         position: [0, tileWidth, 0],
//         rotation: [rightAngle, 0, Math.PI]
//     }, {
//         url: "images/panorama.bottom.jpg", //bottom
//         position: [0, -tileWidth, 0],
//         rotation: [-rightAngle, 0, Math.PI]
//     }, {
//         url: "images/panorama.front.jpg", //front
//         position: [0, 0, tileWidth],
//         rotation: [0, Math.PI, 0]
//     }, {
//         url: "images/panorama.back.jpg", //back
//         position: [0, 0, -tileWidth],
//         rotation: [0, 0, 0]
//     }];

//     for ( var i = 0; i < sides.length; i ++ ) {
//         var side = sides[ i ];
//         var element = document.getElementById("bg_section_"+i);
//         element.width = 1026;
//         element.height = 1026; // 2 pixels extra to close the gap.
//         // 添加一个渲染器
//         var object = new THREE.CSS3DObject( element );
//         object.position.fromArray( side.position );
//         object.rotation.fromArray( side.rotation );
//         scene.add( object );

//     }

//     renderer = new THREE.CSS3DRenderer(); // 定义渲染器
//     renderer.setSize( window.innerWidth, window.innerHeight ); // 定义尺寸
//     document.body.appendChild( renderer.domElement ); // 将场景到加入页面中

//     initDevices();
//     initMouseControl();

// }

// // 初始化控制器
// function initMouseControl() {
//     // mouseControl = new THREE.OrbitControls(camera);
//     document.addEventListener( 'mousedown', onDocumentMouseDown, false );
//     document.addEventListener( 'wheel', onDocumentMouseWheel, false );
//     document.addEventListener( 'touchstart', onDocumentTouchStart, false );
//     document.addEventListener( 'touchmove', onDocumentTouchMove, false );
//     window.addEventListener( 'resize', onWindowResize, false );

// }

// var controlsBtn= document.getElementById("controlBtn"); // 控制陀螺仪开关的按钮
// var isDeviceing = false; // 陀螺仪状态
// controlsBtn.addEventListener("touchend", controlDevice, true);
// isDeviceing == true ? $("#controlBtn").addClass("controlIconae") : $("#controlBtn").addClass("controlIcon");
// // 初始化陀螺仪
// function initDevices() {
//     deviceControl = new THREE.DeviceOrientationControls(camera);
// }
// /* 控制陀螺仪 */
// function controlDevice(event) {
//     if (isDeviceing == true) {
//         isDeviceing = false;
//         //关闭陀螺仪
//         $("#controlBtn").removeClass("controlIcon").addClass("controlIconae");
//     } else {
//         isDeviceing = true;
//         //开启陀螺仪
//         $("#controlBtn").removeClass("controlIconae").addClass("controlIcon");
//     }
// }

// /**
//  * 窗体大小改变
//  */
// function onWindowResize() {
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize( window.innerWidth, window.innerHeight );
// }

// /*
// 相机焦点跟着鼠标或手指的操作移动
//  */
// function onDocumentMouseDown( event ) {
//     event.preventDefault();
//     document.addEventListener( 'mousemove', onDocumentMouseMove, false );
//     document.addEventListener( 'mouseup', onDocumentMouseUp, false );

// }

// function onDocumentMouseMove( event ) {
//     var movementX = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
//     var movementY = event.movementY || event.mozMovementY || event.webkitMovementY || 0;
//     lon -= movementX * 0.1;
//     lat += movementY * 0.1;
// }

// function onDocumentMouseUp( event ) {
//     document.removeEventListener( 'mousemove', onDocumentMouseMove );
//     document.removeEventListener( 'mouseup', onDocumentMouseUp );
// }

// /**
//  * 鼠标滚轮改变相机焦距
//  */
// function onDocumentMouseWheel( event ) {
//     camera.fov += event.deltaY * 0.05;
//     camera.updateProjectionMatrix();
// }

// function onDocumentTouchStart( event ) {
//     event.preventDefault();
//     var touch = event.touches[ 0 ];
//     touchX = touch.screenX;
//     touchY = touch.screenY;

// }

// function onDocumentTouchMove( event ) {
//     event.preventDefault();
//     var touch = event.touches[ 0 ];
//     lon -= ( touch.screenX - touchX ) * 0.1;
//     lat += ( touch.screenY - touchY ) * 0.1;
//     touchX = touch.screenX;
//     touchY = touch.screenY;

// }

// /**
//  * 实时渲染函数
//  */
// function animate() {
//     requestAnimationFrame(animate);
//     // lon = Math.max(-180, Math.min(180, lon));//限制固定角度内旋转
//     // lon += 0.1;//自动旋转
//     lat = Math.max(-85, Math.min(85, lat)); //限制固定角度内旋转
//     phi = THREE.Math.degToRad(85 - lat);
//     theta = THREE.Math.degToRad(lon+180);
//     target.x = Math.sin(phi) * Math.cos(theta);
//     target.y = Math.cos(phi);
//     target.z = Math.sin(phi) * Math.sin(theta);
//     camera.lookAt( target );
//     camera.updateProjectionMatrix();
//     isDeviceing == false ? initMouseControl() : deviceControl.update();
//     renderer.render(scene, camera);
// }

// $('.btn1').on('touchstart',function(){
//     alert('第一个按钮被点击了');
// });
// $('.btn2').on('touchstart',function(){
//     alert('第二个按钮被点击了');
// });

// set the scene size
var WIDTH = 400,
    HEIGHT = 300;

// set some camera attributes
var VIEW_ANGLE = 45,
    ASPECT = WIDTH / HEIGHT,
    NEAR = 0.1,
    FAR = 10000;

// get the DOM element to attach to
var $container = document.getElementById('container');

// create a WebGL renderer, camera
// and a scene
var renderer = new THREE.WebGLRenderer();
var camera = new THREE.PerspectiveCamera(VIEW_ANGLE,
    ASPECT,
    NEAR,
    FAR);
var scene = new THREE.Scene();

// the camera starts at 0,0,0 so pull it back
camera.position.z = 300;

// start the renderer
renderer.setSize(WIDTH, HEIGHT);

// attach the render-supplied DOM element
$container.append(renderer.domElement);

// create the sphere's material
var sphereMaterial = new THREE.MeshLambertMaterial({
    color: 0xCC0000
});

// set up the sphere vars
var radius = 50,
    segments = 16,
    rings = 16;

// create a new mesh with sphere geometry -
// we will cover the sphereMaterial next!
var sphere = new THREE.Mesh(
    new THREE.SphereGeometry(radius, segments, rings),
    sphereMaterial);

// add the sphere to the scene
scene.add(sphere);

// and the camera
scene.add(camera);

// create a point light
var pointLight = new THREE.PointLight(0xFFFFFF);

// set its position
pointLight.position.x = 10;
pointLight.position.y = 50;
pointLight.position.z = 130;

// add to the scene
scene.add(pointLight);

// draw!
renderer.render(scene, camera);
