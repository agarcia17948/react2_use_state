
import {useState} from 'react';
import styles from './Counter.module.css'

export function Counter() {

  /*variables de estado */
  
  const [arriba, setArriba] = useState(0);
  const [abajo, setAbajo] = useState(0);
  const [derecha, setDerecha] = useState(0);
  const [izquierda, setIzquierda] = useState(0);
  const [dy, setDy] = useState(0);
  const [dx, setDx] = useState(0);
  const [showResults, setShowResults] = useState(false);
  




  const pressArriba = () => {
    setArriba(arriba+1); 
    setDy(dy+1);
    
  }

  const pressAbajo = () => {
    setAbajo(abajo+1);  
    setDy(dy-1);
    
  }

  const pressDerecha= () => {
    setDerecha(derecha+1);
    setDx(dx+1); 
    
  }

  const pressIzquierda = () => {
    setIzquierda(izquierda+1);  
    setDx(dx-1); 
    
  }

  const showContador = () =>{
    setShowResults(!showResults);
  }

  return(
    <>
      <h1>lector de pasos</h1>  
      <hr></hr>

      <button>
        <img  className={styles.img}
              src='./images/arr.png'
              alt="up"
              onClick={pressArriba}
          />
      </button>
      <button>
        <img  className={styles.img}
              src='./images/aba.png'
              alt="down"
              onClick={pressAbajo}
          />
      </button>
      <button>
        <img  className={styles.img}
              src='./images/der.png'
              alt="right"
              onClick={pressDerecha}
          />
      </button>
      <button>
        <img  className={styles.img}
              src='./images/izq.png'
              alt="left"
              onClick={pressIzquierda}
          />
      </button>

      <button 
            className={styles.Boton}
            onClick={showContador}
      >      
        Desplazamiento Total
      </button>

      <h2>x,y({dx},{dy})</h2>
      {showResults 
          ? (<>
            <h3>pasos arriba:    {arriba}</h3>
            <h3>pasos abajo:     {abajo}</h3>
            <h3>pasos derecha:   {derecha}</h3>
            <h3>pasos izquierda: {izquierda}</h3>
            </>)
          : null
      }  

    </>
  );

}


