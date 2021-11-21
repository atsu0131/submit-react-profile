import styled from 'styled-components';
import { Work2 } from "./Work2";

export const Second = () => {
    return (
        <>
            <Work2 />
            <a href="#">
                <Circle>
                <TopDirection></TopDirection>
                </Circle>
            </a>
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
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: #EF75BE;
  position: relative;
  position: fixed;
  bottom: 25px;
  right: 20px;
`;