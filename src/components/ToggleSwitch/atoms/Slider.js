import styled from 'styled-components';

export const Slider = styled.span`
position: absolute;
cursor: pointer;
top:0;
left:0;
right: 0;
bottom: 0;
background-color: #ccc;
-webkit-transition: .4s;
transition: .4s;
border-radius: ${props => props.defaultHeight};

::before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%;
}
`;

export const CheckedSlider = styled(Slider)`
    background-color: ${props => props.color};
    ::before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }
`;