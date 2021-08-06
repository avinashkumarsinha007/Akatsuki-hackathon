import styled from 'styled-components'

export const Container =  styled.div`

`
export const Sub1 = styled.div`
display: flex;
margin-top: 1rem;
`
export const Div1 = styled.div`
text-align: center;
font-size: 2rem;
flex-grow: 1;
height: 12vh;
color: #fff;
font-weight: bolder;
background-image: url('https://images.pexels.com/photos/5212337/pexels-photo-5212337.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');
background-repeat: no-repeat;
border: 0.3rem solid #006064;
background-size: 50vw;
opacity: 1;
:hover{
   opacity: 0.2;
   transition: 0.5s ease-out;
}
@media  screen and (max-width:500px){
font-size: 1rem;
}
`
export const Div2 = styled.div`
flex-grow: 1;
font-size: 2rem;
height: 12vh;
color: #000;
font-weight: bolder;
border: 0.3rem solid #4a0072;
background-image: url('https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');
background-repeat: no-repeat;
text-align: center;
background-size: 50vw;
opacity: 1;
:hover{
   opacity: 0.2;
   transition: 0.5s ease-out;
}
@media  screen and (max-width:500px){
font-size: 1rem;
}
`
export const Img =  styled.img`
width: 98.9vw;
margin-top: 1rem;
margin-bottom: 1rem;
`

export const Sub2 = styled.div`
display: flex;
`

export const Div3 = styled.div`
width: 28vw;
margin-left: 15rem;
@media screen and (max-width:500px){ 
margin-left:1rem;
width:50vw ;
}
`

export const Div4 = styled.div`
width: 30vw;
margin-left: 5rem;
@media screen and (max-width:500px){
margin-left: 0.5rem;
width: 20vw;
}
`
export const Img2 = styled.img`
width: 40vw;
margin-top: 0rem;
@media screen and (max-width:500px){
margin-top: 4rem;
}
`

export const Sub3 = styled.div`
text-align: center;
margin: auto;
`

export const Sub4 = styled.div`
padding-top: 1rem;
width: 60vw;
display: flex;
margin: auto;
justify-content: center;
column-gap: 3rem;
@media screen and (max-width:500px){
    width: 90vw;
    flex-wrap: wrap;
    column-gap: 1rem;
    margin: auto;
    img{
        width: 50px;
    }
}
`