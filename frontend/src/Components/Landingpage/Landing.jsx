import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { Footer } from '../Footer/Footer'
import { Container, Div1, Div2, Div3, Div4, Img, Img2, Span, Sub1, Sub2, Sub3, Sub4, Sub5, Sub6 } from './LandingSytle'
export const Landing =() =>{
    const [test,setTest] = useState(false)
    const [chat,setChat] = useState(false)
    if(test){
      return  <Redirect to='/testregister' />
    }
    if(chat){
        return  <Redirect to='/join' />
      }
    return(
        <>
         <Container>
             <Sub1>
                 <Div1 onClick={()=>setTest(true)}>
                     <p style={{marginTop:"1.2rem"}}>Secondary School</p>
                 </Div1>
                 <p className="p1">Click here</p>
                 <Div2 onClick={()=>setTest(true)}>
                     <p style={{marginTop:"1.2rem"}}>Senior School</p>
                 </Div2>
                 <p className="p2">Click here</p>
             </Sub1>
             <Img src="https://chatteris.org.hk/wp-content/uploads/2019/09/98234798327498723984.jpg" alt="blank"/>
              <Sub2>
                 <Div3>
                    <h2>Our Story</h2>
                     <p className="p3">
                        The foundation was started in 1990 when our founding trustees launched a volunteering scheme of visits to local secondary schools to provide students with extra opportunities to practise their English.<br/><br/>
                        Realising a far larger scheme was needed, the trustees formed the Chatteris Educational Foundation and started raising funds to bring English tutors to Hong Kong to be placed in schools. Although a lot has changed in this time, we have always remained true to the lessons learnt by our founding trustees when volunteering all those years ago. Offering students opportunities for authentic, relaxed, and communicative use of English transforms their views of the language, especially for those from challenging socio-economic backgrounds, and our enthusiastic and committed tutors continue to provide such opportunities to this day.<br/><br/>
                        Today, Chatteris places a team of over 100 English tutors full time in 50 partner schools across three different age groups: primary, secondary and post-secondary. We also run short courses for schools, experiential learning opportunities for students, and deliver multiple community outreach initiatives to serve less privileged groups in Hong Kong society. 
                     </p>
                  </Div3>
                  <Div4>
                      <Img2 src="https://chatteris.org.hk/wp-content/uploads/2019/07/Untitled-4.png" alt="blank"/>
                  </Div4>
              </Sub2>
              <Sub3>
                  <h2>Our Values</h2>
                   <Sub4>
                       <div>
                           <img src="https://chatteris.org.hk/wp-content/uploads/2019/10/value1.png" alt="blank"/>
                           <p>Auto Proctor</p>
                       </div>
                       <div>
                           <img src="https://chatteris.org.hk/wp-content/uploads/2019/10/value1.png" alt="blank"/>
                           <p>Dont't use Phone</p>
                       </div>
                       <div>
                           <img src="https://chatteris.org.hk/wp-content/uploads/2019/10/value1.png" alt="blank"/>
                           <p> Adaptable</p>
                       </div>
                       <div>
                           <img src="https://chatteris.org.hk/wp-content/uploads/2019/10/value1.png" alt="blank"/>
                           <p>Exam Managment</p>
                       </div>
                   </Sub4>
              </Sub3>
              <Sub5>
                <h2>What we Do</h2>  
                <Sub6>
                       <div>
                           <p>Secondary</p>
                           <img src="https://images.pexels.com/photos/5212359/pexels-photo-5212359.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="blank"/>
                           <p>At First we register Student to our website and take feed from student about result which he get from CBSE and he is not satisfiy with result we conduct test</p>
                       </div>
                       <div>
                           <p>Senior</p>
                           <img src="https://images.pexels.com/photos/3184636/pexels-photo-3184636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="blank"/>
                           <p>At First we register Student to our website and take feed from student about result which he get from CBSE and he is not satisfiy with result we conduct test</p>
                       </div>
                       <div>
                           <p>Graduate</p>
                           <img src="https://images.pexels.com/photos/1699414/pexels-photo-1699414.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="blank"/>
                           <p>In Future our team is planning to do same thing for Graduate Student also</p>
                       </div>
                   </Sub6>
              </Sub5>
              <Span onClick={()=>setChat(true)}><img src="https://img.icons8.com/material-rounded/24/000000/chat--v1.png" alt="blank" style={{width:"3rem",color:"#fff"}}></img></Span>
              <Footer/> 
         </Container>
        </>
    )
}