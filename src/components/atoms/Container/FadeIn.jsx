import {keyframes, styled} from 'styled-components'

const FadeInAnimation = keyframes`
from {
transform: translateY(20px);
opacity: 0;
}
to {
transform: translateY(0);
opacity: 1;
}
`;


const FadeIn = styled.div`
animation: ${FadeInAnimation} 1s linear;`;

export default FadeIn