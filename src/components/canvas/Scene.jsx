import { Canvas } from '@react-three/fiber';
import './Scene.css';
import Floor from './Floor/Floor';
import { useGLTF } from '@react-three/drei';
import { OrbitControls } from '@react-three/drei';

export default function MyScene() {
  const { nodes, materials } = useGLTF('/tankobon.gltf');
  return (
    <>
      <div className="scene">
        <Canvas className="canvas" shadows camera={{
          position: [-6, 7, 7]
        }}>
          <ambientLight color={"green"} intensity={0.9} />
          <pointLight position={[10, 15, 10]} />
          {/* <mesh>
            <boxGeometry />
            <meshStandardMaterial color="yellow" />
          </mesh> */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube.geometry}
            material={materials.Material}
            position={[1, 2, 1]}
          />
          <Floor />
          <OrbitControls />
        </Canvas>
      </div>
    </>
  );
}