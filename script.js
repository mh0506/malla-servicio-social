const semestres = [
  {
    nombre: "1° Semestre",
    ramos: [
      "Introducción al Trabajo Social",
      "Antropología General",
      "Taller de Vinculación Laboral en Contextos del Trabajo Social",
      "Computación Básica",
      "Desarrollo de Habilidades Comunicativas",
      "Taller de Nivelación Matemática"
    ]
  },
  {
    nombre: "2° Semestre",
    ramos: [
      "Psicología Evolutiva",
      "Políticas Públicas y Sociales en Chile",
      "Taller de Vinculación Laboral Prog. Sociales e Información Social",
      "Manejo de Información Social",
      "Familia",
      "Desarrollo de Habilidades Comunicativas"
    ]
  },
  {
    nombre: "3° Semestre",
    ramos: [
      "Salud Comunitaria",
      "Beneficios Previsionales y de Salud",
      "Taller de Vinculación Laboral y Salud Pública",
      "Legislación y Trabajo Social",
      "Grupos y Comunidades",
      "Taller de Desarrollo Personal I",
      "Ética Profesional"
    ]
  },
  {
    nombre: "4° Semestre",
    ramos: [
      "Administración General",
      "Taller de Redes Sociales",
      "Taller de Vinculación Laboral RSE y Medio Ambiente",
      "Desarrollo Local",
      "Técnicas de Administración Presupuestaria",
      "Electivo de Formación Profesional I",
      "Taller de Desarrollo Personal II"
    ]
  },
  {
    nombre: "5° Semestre",
    ramos: [
      "Economía y Sociedad",
      "Planificación Social",
      "Elementos Teóricos y Metodológicos para la Intervención",
      "Metodología de la Investigación Social",
      "Sociología General",
      "Inglés Básico I"
    ]
  },
  {
    nombre: "6° Semestre",
    ramos: [
      "Gestión de Recursos Humanos y Beneficios Laborales",
      "Taller de Habilidades Directivas",
      "Módulo de Integración Teórico-Práctico de Diagnóstico Social",
      "Taller de Investigación Aplicada",
      "Taller de Preparación Laboral",
      "Inglés Básico II"
    ]
  },
  {
    nombre: "7° Semestre",
    ramos: [
      "Taller de Formulación y Evaluación de Proyectos Sociales",
      "Módulo de Intervención y Evaluación Social",
      "Taller de Sistematización",
      "Electivo de Formación Profesional II",
      "Cultura y Valores"
    ]
  },
  {
    nombre: "8° Semestre",
    ramos: [
      "Proyecto de Título",
      "Práctica Profesional Integral",
      "Taller de Competencias Profesionales",
      "Electivo de Formación Profesional III"
    ]
  }
];

// Obtener el progreso guardado desde localStorage
const savedProgress = JSON.parse(localStorage.getItem("progresoRamos")) || {};

const container = document.querySelector(".semestres-container");

semestres.forEach((semestre, semestreIndex) => {
  const semestreDiv = document.createElement("div");
  semestreDiv.className = "semestre";

  const title = document.createElement("h2");
  title.textContent = semestre.nombre;
  semestreDiv.appendChild(title);

  semestre.ramos.forEach((ramo, ramoIndex) => {
    const id = `s${semestreIndex}-r${ramoIndex}`;
    const ramoDiv = document.createElement("div");
    ramoDiv.className = "ramo";

    const texto = document.createElement("span");
    texto.textContent = ramo;

    const estado = document.createElement("span");
    estado.className = "estado";

    // Verifica si este ramo ya fue marcado
    const isTachado = savedProgress[id] === true;
    if (isTachado) {
      ramoDiv.classList.add("tachado");
      estado.textContent = "✅";
    } else {
      estado.textContent = "⭕";
    }

    ramoDiv.appendChild(texto);
    ramoDiv.appendChild(estado);

    ramoDiv.addEventListener("click", () => {
      const currentlyTachado = ramoDiv.classList.toggle("tachado");
      estado.textContent = currentlyTachado ? "✅" : "⭕";
      savedProgress[id] = currentlyTachado;
      localStorage.setItem("progresoRamos", JSON.stringify(savedProgress));
    });

    semestreDiv.appendChild(ramoDiv);
  });

  container.appendChild(semestreDiv);
});
