import styled from 'styled-components';
import { Work2 } from "./Work2";
import { Link as Scroll } from 'react-scroll';

export const Second = () => {
    return (
        <>
            <Work2 />
            <Scroll to="top" smooth={true} duration={600}>
                <Circle>
                <TopDirection></TopDirection>
                </Circle>
            </Scroll>
        </>
    );
};

const TopDirection = styled.div`
    display: inline-block;
    width: 18px;
    height: 18px;
    /* margin: 80px 10px 122px 10px; */
    border-top: 6px solid #FFF;
    border-right: 6px solid #FFF;
    transform: rotate(-45deg);
    /* margin-top: 80px; */
    position: absolute;
    top: 25px;
    left: 20px;
`;

const Circle = styled.div`
    cursor: pointer;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background-color: #EF75BE;
    position: relative;
    position: fixed;
    bottom: 25px;
    right: 20px;
`;