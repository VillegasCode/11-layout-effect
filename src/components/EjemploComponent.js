import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

export const EjemploComponent = () => {


    const [mostrar, setMostrar] = useState(false);

    const caja = useRef();
    const boton = useRef();

    useLayoutEffect(()=> {
        console.log("useLayoutEffect: Componente cargado!!");
        // let caja = document.querySelector('#caja');
        
        console.log(boton.current.innerHTML);
        
        if(caja.current == null) return

        const {bottom} = boton.current.getBoundingClientRect();

        // setTimeout(()=> {
            caja.current.style.top = `${bottom + 45}px`;
            caja.current.style.left = `${bottom + 45}px`;
        // }, 2000);

    
    }, [mostrar]);

    // useEffect(()=> {
    //     console.log("useEffect: Componente cargado!!!");
        // let caja = document.querySelector('#caja');
        // caja.innerHTML.toString = "HOLAA 2";
        // console.log(caja.getBoundingClientRect());

    //     if(caja.current == null) return

    //     const {bottom} = boton.current.getBoundingClientRect();

    //     setTimeout(()=> {
    //         caja.current.style.top = `${bottom + 45}px`;
    //         caja.current.style.left = `${bottom + 45}px`;
    //     }, 2000);

    
    // }, [mostrar]);

  return (
    <div>
        <h1>Ejemplo useEffect y useLayoutEffect</h1>
        
        {/* <button onClick={()=> setMostrar(prev => prev + "paquito")}>Mostrar Mensaje</button> */}
        <button ref={boton} onClick={() => setMostrar(prev => {
            console.log(!prev);
            return !prev;
        })}>Mostrar Mensaje</button>

        {mostrar && (
            <div id='caja' ref={caja}>
                Hola, soy un mensaje {mostrar}
            </div>
        )}
        
    </div>
  )
}
