import React from 'react';
import Svg, {
    Path,
    Circle,
} from 'react-native-svg';


export default function Back () {
    return(
        <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <Circle cx="16" cy="16" r="16" fill="#7fb249" fillOpacity="0.35"/>
            <Path d="M19.5 23L12.5 16L19.5 9" stroke="#05102F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </Svg>
    );
}
