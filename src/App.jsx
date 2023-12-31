 
 import { Slideshow, Slide,TextoSlide} from "./Componentes/Slideshow"
import styled from "styled-components"
import img1 from './img/1.jpg'
import img2 from './img/2.jpg'
import img3 from './img/3.jpg'
import img4 from './img/4.jpg'


 
function App() {


   

  return (
    <>
      <main>
        <Titulo>Productos destacados</Titulo>
        <Slideshow controles={true}>
          <Slide> 
                <a href="https://www.pexels.com/es-es/foto/vista-de-pajaro-del-mar-durante-el-dia-3369569/">
                  <img src={img1} alt="" />
                </a>
                <TextoSlide /*colorFondo="#ff8000" colorTexto="#000"*/>
                  <p>15% de descuento</p>
                </TextoSlide>
            </Slide>
            <Slide> 
                <a href="https://www.pexels.com/es-es/foto/vista-de-pajaro-del-mar-durante-el-dia-3369569/">
                  <img src={img2} alt="" />
                </a>
                <TextoSlide>
                  <p>15% de descuento</p>
                </TextoSlide>
            </Slide>
            <Slide> 
                <a href="https://www.pexels.com/es-es/foto/vista-de-pajaro-del-mar-durante-el-dia-3369569/">
                  <img src={img3} alt="" />
                </a>
                <TextoSlide>
                  <p>15% de descuento</p>
                </TextoSlide>
            </Slide>
            <Slide> 
                <a href="https://www.pexels.com/es-es/foto/vista-de-pajaro-del-mar-durante-el-dia-3369569/">
                  <img src={img4} alt="" />
                </a>
                <TextoSlide>
                  <p>15% de descuento</p>
                </TextoSlide>
            </Slide>
        </Slideshow> 


        <Titulo>Productos destacados</Titulo>
        <Slideshow controles={true} autoplay={true} velocidad="500" intervalo="3000" >
        
        <Slide> 
                <a href="https://www.pexels.com/es-es/foto/vista-de-pajaro-del-mar-durante-el-dia-3369569/">
                  <img src={img1} alt="" />
                </a>
                <TextoSlide /*colorFondo="#ff8000" colorTexto="#000"*/>
                  <p>15% de descuento</p>
                </TextoSlide>
            </Slide>
            <Slide> 
                <a href="https://www.pexels.com/es-es/foto/vista-de-pajaro-del-mar-durante-el-dia-3369569/">
                  <img src={img2} alt="" />
                </a>
                <TextoSlide>
                  <p>15% de descuento</p>
                </TextoSlide>
            </Slide>
           
        </Slideshow> 
        
              
           
      </main>
       
    </>
  )
}

const Titulo = styled.p`
  font-size:18px;
  font-weight:700;
  text-transform:uppercase;
  margin-bottom:10px;
  
  
`;

export default App
