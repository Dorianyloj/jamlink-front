import { Components } from "../threed/";
import ThreeDFrame from "../threed/ThreeDFrame";
import { OrbitControls } from "@react-three/drei";

const Threed = () => {

    return (
        <ThreeDFrame>

            <Components.Cylinder />
            
            <Components.Sphere position={[-3, 0, 0]} color="#03fc18" speed={0.8} />
            <Components.Sphere position={[3, 0, 0]} color="#4a90e2" speed={1.2} />
            <Components.Box position={[0, 3, 0]} color="#ff6b35" speed={5} />
            <Components.Box position={[0, -3, 0]} color="#9b59b6" speed={1.4} />
            
            <OrbitControls 
                enablePan={true}
                enableZoom={true}
                enableRotate={true}
                minDistance={3}
                maxDistance={20}
            />
        </ThreeDFrame>
    );
};

export default Threed;