window.addEventListener("DOMContentLoaded", init);

function init() {
    //ここに処理を追加

    const width = 960;
    const height = 540;

    // レンダラーを作成
    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector("#myCanvas")
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0xffffff, 1.0);

    //シーンを作成
    const scene = new THREE.Scene();

    //カメラを作成
    // new THREE.PerspectiveCamera(画角、アスペクト比、描画開始距離、描画終了距離)
    const camera = new THREE.PerspectiveCamera(
        90,
        800 / 600,
        1,
        10000
    );
    camera.position.set(0, 0, +1000);

    //箱を作成
    //enw THREE.BoxGeometry(幅、高さ、奥行き)
    const geometry = new THREE.BoxGeometry(500, 500, 500);
    const material = new THREE.MeshStandardMaterial({
        color: 0x0000ff
    });
    //new THREE.mesh(ジオメトリ、マテリアル)
    const box = new THREE.Mesh(geometry, material);
    // シーンに追加
    scene.add(box);

    //平行光源
    //new THREE.DirectionalLight(色)
    const light = new THREE.DirectionalLight(0xfffffff);
    light.position.set(1, 1, 1);
    light.intensity = 2; //光の強さを倍に
    //シーンに追加
    scene.add(light);

    //初回実行
    tick();

    function tick() {
        requestAnimationFrame(tick);

        //箱を回転させる
        box.rotation.x += 0.01;
        box.rotation.y += 0.01;

        // レンダリング
        renderer.render(scene, camera);
    }

}