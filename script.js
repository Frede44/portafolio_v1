/*porcentaje = document.getElementById("porcentaje");

let porcentajeValue = 50;

const porcentajFrontentd = [
    { tecnologia: "HTML", porcentaje: 90 },
    { tecnologia: "CSS", porcentaje: 80 },
    { tecnologia: "JavaScript", porcentaje: 70 },
    { tecnologia: "React", porcentaje: 60 },
]

function dibujarPorcentaje() {
    porcentajFrontentd.forEach(tecnologia => {
        const barra = document.createElement("div");
        barra.classList.add("w-full", "bg-gray-300", "rounded-full", "mb-2");
        const relleno = document.createElement("div");
        relleno.classList.add("progress-blue", "h-4", "rounded-full");
        relleno.style.width = `${tecnologia.porcentaje}%`;
        barra.appendChild(relleno);
        const label = document.createElement("p");
        label.textContent = `${tecnologia.tecnologia}: ${tecnologia.porcentaje}%`;
        porcentaje.appendChild(label);
        porcentaje.appendChild(barra);
    });
}

dibujarPorcentaje();*/