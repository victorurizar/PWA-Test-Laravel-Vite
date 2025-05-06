import React from "react";
import ReactDOM from "react-dom/client";
import Webcam from "react-webcam";

if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker
            .register("/build/sw.js")
            .then((registration) => {
                console.log("SW registrado con éxito:", registration.scope);
            })
            .catch((error) => {
                console.log("Error al registrar SW:", error);
            });
    });
}

const App = () => {
    return (
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <h1>PWA en Laravel y Vite con vite-plugin-pwa</h1>
            <Webcam />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
