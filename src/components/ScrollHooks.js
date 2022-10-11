import { cleanup } from "@testing-library/react";
import React, {useState, useEffect} from "react";

export default function ScrollHooks() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const detectarScroll = () => {
            setScrollY(window.pageYOffset);
        }
        //detectarScroll();
        window.addEventListener("scroll", detectarScroll);
    }, [scrollY]);

    return(
        <>
            <h2>Hooks - useEffect y el ciclo de vida</h2>
            <p>Scroll Y del navegador {scrollY} px</p>
        </>
    );
}