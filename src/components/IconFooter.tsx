import styled from 'styled-components';


export const IconFooter = () => {
    return (
        <>
        <LayIcon>

        </LayIcon>
        <LayFooter></LayFooter>
        </>
    );
};

const LayIcon = styled.section`
    background-color: #F7F7F7;
    display:flex;
    height:280px;
    width:100%;
`;

const LayFooter = styled.section`
    background-color: #515151;
    height:64px;
    width:100%;
`;