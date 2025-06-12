import React, {useRef} from "react";
import * as THREE from "three";

const Custom = (props) => {
    const meshRef = useRef();
    const heartShape = new THREE.Shape();
    const x = 0;
    const y = 0;
    heartShape.moveTo( x + 5, y + 5 );
    heartShape.bezierCurveTo( x + 5, y + 5, x + 4, y, x, y );
    heartShape.bezierCurveTo( x - 6, y, x - 6, y + 7,x - 6, y + 7 );
    heartShape.bezierCurveTo( x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19 );
    heartShape.bezierCurveTo( x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7 );
    heartShape.bezierCurveTo( x + 16, y + 7, x + 16, y, x + 10, y );
    heartShape.bezierCurveTo( x + 7, y, x + 5, y + 5, x + 5, y + 5 );

    const geometry = new THREE.ShapeGeometry( heartShape );

    return (
        <mesh geometry={geometry} ref={meshRef} {...props}>
            <meshStandardMaterial 
                color={props.color || "orange"}
            />
        </mesh>
    );
}

export default Custom;