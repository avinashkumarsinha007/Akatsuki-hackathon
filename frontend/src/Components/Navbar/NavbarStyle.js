import styled from 'styled-components'

export const NavContainer = styled.div`
display: flex;
justify-content:space-between;
top:0;
position: sticky;
padding: 1.5rem 0rem;
z-index:3
`

export const ContainerOne = styled.div`
margin-left: 10rem;
cursor: pointer;
//medium screen
@media screen and (max-width:900px){
margin-left: 3rem;
transition: 0.5 ease-out;
}
//small screen
@media screen and (max-width:500px){
margin-left: 2rem;
transition: 0.5 ease-out;
}
`


export const ContainerTwo = styled.div`
display: flex;
align-items: center;
margin-right:10rem;
column-gap: 2rem;
cursor: pointer;
//medium screen
@media screen and (max-width:700px) {
margin-left: 3rem;  
}
@media screen and (max-width:500px){
display: none;
}
`
export const ContainerThree = styled.div`
display: none;
@media screen and (max-width:500px){
display:flex;
justify-content: center;
align-items: center;
margin-right: 1rem;
}
` 
export const ContainerFour= styled.div`
display: none;
position: relative;
&.hide  {
    display:none;
}
&.show {  
position: sticky;
top: 4rem;
background-image: linear-gradient(to right, #ff758c 0%, #ff7eb3 100%);
width :100%;
display:block;
margin-top: 0.5rem;
border-top: none;
text-align:center;
z-index:999;
}
`
export const H4=styled.h4`
padding:1rem 0rem;
margin-top: -1.3rem;
`