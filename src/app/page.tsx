'use client';
import { useState } from 'react';
import Image from 'next/image';

// Datos de los grupos y estudiantes
const grupos = [
  {
    id: "grupo1",
    nombre: "Grupo 1: Ceci",
    estudiantes: [
      "Julietra Grimaldi",
      "Rafaela Minoliti",
      "Clara Bembirre",
      "Brunella Bulfone Parisi",
      "Anita Mangiaterra", 
      "Clara Hombria Beres",
      "Pilar Conde",
      "Tiziana Malacisa",
      "Emilia Cravero",
      "Ema Muniz Barreto",
      "Ornella Bava",
      "Mia Grillo Albornoz",
      "Tomas Aebi",
    ].sort()
  },
  {
    id: "grupo2",
    nombre: "Grupo 2: Mica y Eleo",
    estudiantes: [
      "Alejo Di Tata",
      "Ana Paula Chertudi",
      "Delfina Traverso",
      "Emilia Trombetta",
      "Facundo Puglelli",
      "Felicia Villanova",
      "Felipe Losinno",
      "Fermin Rionda",
      "Guillermina Rionda",
      "Isabella Soricelli",
      "Juana Ramos",
      "Kevin Lin",
      "Lautaro Puglelli",
      "Luca Aleaga",
      "Maia Ciatei",
      "Magdalena Barcas",
      "Martina Leguizamon",
      "Mora Santiago",
      "Paulina Botana",
      "Pedro Ramos",
      "Santino Barcas",
      "Soledad Giunta",
      "Tomas Fernandez Bosaleh",
      "Trinidad Cervigni"
    ].sort()
  },
  {
    id: "grupo3",
    nombre: "Grupo 3: Martin y Luji",
    estudiantes: [
      "Ariana Avril Tato",
      "Arkin Lin",
      "Augusta Perich",
      "Clara Fernandez May",
      "Isabella Carelle",
      "Isabella Toffoli",
      "Josefina Gauthier",
      "Lucia Cavallaro",
      "Macarena Fernandez Pointeau",
      "Maria Lucia Fernandez Cossa",
      "Mateo Nieto Rivarola",
      "Mia Silveyra Rodriguez",
      "Olivia Hawes",
      "Pedro Rodriguez",
      "Pilar Rios",
      "Renata Tedesco",
      "Santiago Hawes",
      "Santiago Mendez",
      "Sofia Sallago Gimenez",
      "Valentina Margaria"
    ].sort()
  },
  {
    id: "vuelo1",
    nombre: "Vuelo AirEurope",
    estudiantes: [
      "Alejo Di Tata",
      "Ana Paula Chertudi",
      "Arkin Lin",
      "Daiana Micaela Antico",
      "Delfina Traverso",
      "Eleonora Lescano Schenone",
      "Emilia Trombetta",
      "Facundo Puglelli (otro regreso)",
      "Felicia Villanova",
      "Felipe Losinno",
      "Fermin Rionda Iglesias",
      "Guillermina Rionda Iglesias",
      "Isabella Soricelli Sosa",
      "Juana Ramos",
      "Kevin Lin",
      "Lautaro Puglelli (otro regreso)",
      "Luca Aleaga Arzani",
      "Maia Ciattei",
      "Magdalena Barcas",
      "Maria Trinidad Cervigni",
      "Martin Llado",
      "Mora Santiago Lena", 
      "Paulina Botana",
      "Pedro Ramos",
      "Santino Barcas",
      "Tomas Fernandez Bosaleh",
      "Soledad Giunta"
    ]
  },
  {
    id: "vuelo2",
    nombre: "Vuelo British con Escala",
    estudiantes: [
      "Anita Mangiaterra",
      "Ariana Avril Tato",
      "Augusta Perich",
      "Brunella Bulfone Parisi",
      "Catalina Hombria Beres (otro regreso)",
      "Cecilia Andrea Sanchez",
      "Clara Bembibre",
      "Clara Fernandez May",
      "Ema Muniz Barreto",
      "Isabella Carelle",
      "Isabella Toffoli",
      "Josefina Gauthier",
      "Julieta Elizabeth Grimaldi",
      "Lucia Cavallaro",
      "Maria de la Paz Insua",
      "Maria Emilia Cravero",
      "Maria Lucia Fernandez Cossa",
      "Mateo Nieto Rivarola",
      "Mia Delfina Grillo Albornoz",
      "Mia Silveyra Rodriguez",
      "Olivia Hawes",
      "Ornella Bava",
      "Pedro Rodriguez",
      "Pilar Abril Arena Conde",
      "Pilar Sofia Rios",
      "Rafaela Minoliti",
      "Renata Tedesco",
      "Santiago Hawes",
      "Santiago Martin Mendez",
      "Sofia Mailen Sallago Gimenez",
      "Tiziana Malacisa",
      "Valentina Margaria"
    ]
  },
  {
    id: "vuelo3",
    nombre: "Vuelo British Directo",
    estudiantes: [
      "Aebi Tomas Emiliano",
      "Fernandez Poinsteau Macarena",
      "Leguizamon Martina",
      "Llado Maria Lujan"
    ]
  },
  {
    id: "gillingham",
    nombre: "Gillingham",
    estudiantes: [
      "Alejo Di Tata",
      "Arkin Lin",
      "Ariana Avril Tato",
      "Augusta Perich",
      "Clara Fernandez May",
      "Delfina Traverso",
      "Emilia Trombetta",
      "Facundo Puglelli",
      "Felipe Losinno",
      "Felicia Villanova",
      "Isabella Carelle",
      "Isabella Soricelli",
      "Isabella Toffoli",
      "Josefina Gauthier",
      "Luca Aleaga",
      "Lucia Cavallaro",
      "Macarena Fernandez Pointeau",
      "Maria Lucia Fernandez Cossa",
      "Mateo Nieto Rivarola",
      "Mia Silveyra Rodriguez",
      "Mora Santiago",
      "Olivia Hawes",
      "Paulina Botana",
      "Pedro Ramos",
      "Pedro Rodriguez",
      "Pilar Rios",
      "Renata Tedesco",
      "Santiago Hawes",
      "Santiago Mendez",
      "Sofia Sallago Gimenez",
      "Valentina Margaria"
    ].sort()
  },
  {
    id: "bishops",
    nombre: "Bishops",
    estudiantes: [
      "Anita Mangiaterra",
      "Brunella Bulfone Parisi",
      "Clara Bembirre",
      "Clara Hombria Beres",
      "Ema Muniz Barreto",
      "Emilia Cravero",
      "Fermin Rionda",
      "Guillermina Rionda",
      "Juana Ramos",
      "Julieta Grimaldi",
      "Kevin Lin",
      "Lautaro Puglelli",
      "Maia Ciatei",
      "Martina Leguizamon",
      "Mia Grillo Albornoz",
      "Ornella Bava",
      "Pilar Conde",
      "Rafaela Minoliti",
      "Tiziana Malacisa",
      "Tomas Aebi",
      "Tomas Fernandez Bosaleh",
      "Trinidad Cervigni",
      "Soledad Giunta"
    ].sort()
  },
  {
    id: "harry-potter",
    nombre: "Harry Potter",
    estudiantes: [
      "Ana Paula Chertudi",
      "Ariana Tato",
      "Arkin Lin",
      "Augusta Perich",
      "Brunella Bulfone Parisi",
      "Clara Fernandez May",
      "Clara Hombria Beres",
      "Ema Muniz Barreto",
      "Emilia Cravero",
      "Emilia Trombetta",
      "Facundo Puglelli",
      "Fermin Rionda",
      "Guillermina Rionda",
      "Isabella Carelle",
      "Isabella Soricelli",
      "Isabella Toffoli",
      "Josefina Gauthier",
      "Juana Ramos",
      "Julieta Grimaldi",
      "Kevin Lin",
      "Lautaro Puglelli",
      "Luca Aleaga",
      "Macarena Fernandez Pointeau",
      "Maria Lucia Fernandez Cossa",
      "Martina Leguizamon",
      "Mateo Nieto Rivarola",
      "Mia Grillo Albornoz",
      "Mia Silveyra Rodriguez",
      "Mora Santiago",
      "Olivia Hawes",
      "Ornella Bava",
      "Pedro Rodriguez",
      "Pilar Conde",
      "Pilar Rios",
      "Rafaela Minoliti",
      "Renata Tedesco",
      "Santiago Hawes",
      "Sofia Sallago Gimenez",
      "Soledad Giunta",
      "Tomas Aebi",
      "Tomas Fernandez Bosaleh",
      "Trinidad Cervigni",
      "Valentina Margaria",
      "Santiago Mendez",
      "Anita Mangiaterra",
      "Maia Ciattei",
      "Alejo di Tata",
      "Leo Chertudi (PADRE)"
    ].sort()
  },
  {
    id: "Noharry-potter",
    nombre: "No Harry Potter",
    estudiantes: [
      "Clara Bembirre",
      "Delfina Traverso",
      "Felicia Villanova",
      "Felipe Losinno",
      "Lucia Cavallaro",
      "Magdalena Barcas",
      "Paulina Botana",
      "Pedro Ramos",
      "Santino Barcas",
      "Tiziana Malacisa"
    ].sort()
  },
  {
    id: "estadio",
    nombre: "Estadio",
    estudiantes: [
      "Alejo Di Tata",
      "Ana Paula Chertudi",
      "Arkin Lin",
      "Brunella Bulfone Parisi",
      "Clara Bembirre",
      "Delfina Traverso",
      "Facundo Puglelli",
      "Felicia Villanova",
      "Felipe Losinno",
      "Fermin Rionda",
      "Guillermina Rionda",
      "Isabella Soricelli",
      "Juana Ramos",
      "Kevin Lin",
      "Lautaro Puglelli",
      "Luca Aleaga",
      "Maria Lucia Fernandez Cossa",
      "Mateo Nieto Rivarola",
      "Mora Santiago",
      "Pedro Ramos",
      "Pedro Rodriguez",
      "Paulina Botana",
      "Renata Tedesco",
      "Santiago Hawes",
      "Soledad Giunta",
      "Tomas Aebi",
      "Olivia Hawes",
      "Maia Ciattei"
    ].sort()
  },
  {
    id: "no-estadio",
    nombre: "No estadio",
    estudiantes: [
      "Anita Mangiaterra",
      "Ariana Tato",
      "Augusta Perich",
      "Clara Fernandez May",
      "Clara Hombria Beres",
      "Emilia Cravero",
      "Emilia Trombetta",
      "Ema Muniz Barreto",
      "Isabella Carelle",
      "Isabella Toffoli",
      "Josefina Gauthier",
      "Julieta Grimaldi",
      "Lucia Cavallaro",
      "Macarena Fernandez Pointeau",
      "Magdalena Barcas",
      "Martina Leguizamon",
      "Mia Grillo Albornoz",
      "Mia Silveyra Rodriguez",
      "Ornella Bava",
      "Pilar Conde",
      "Pilar Rios",
      "Rafaela Minoliti",
      "Santiago Mendez",
      "Santino Barcas",
      "Sofia Sallago Gimenez",
      "Tiziana Malacisa",
      "Tomas Fernandez Bosaleh",
      "Trinidad Cervigni",
      "Valentina Margaria"
    ].sort()
  },
  {
    id: "lion-king",
    nombre: "Lion King",
    estudiantes: [
      "Ana Paula Chertudi",
      "Anita Mangiaterra",
      "Alejo Di Tata",
      "Arkin Lin",
      "Augusta Perich",
      "Clara Bembirre",
      "Delfina Traverso",
      "Ema Muniz Barreto",
      "Emilia Trombetta",
      "Facundo Puglelli",
      "Felipe Losinno",
      "Felicia Villanova",
      "Fermin Rionda",
      "Guillermina Rionda",
      "Isabella Carelle",
      "Isabella Soricelli",
      "Isabella Toffoli",
      "Josefina Gauthier",
      "Juana Ramos",
      "Kevin Lin",
      "Lautaro Puglelli",
      "Luca Aleaga",
      "Macarena Fernandez Pointeau",
      "Maia Ciatei",
      "Magdalena Barcas",
      "Maria Lucia Fernandez Cossa",
      "Martina Leguizamon",
      "Mateo Nieto Rivarola",
      "Mia Grillo Albornoz",
      "Mora Santiago",
      "Olivia Hawes",
      "Paulina Botana",
      "Pedro Ramos",
      "Pedro Rodriguez",
      "Pilar Conde",
      "Pilar Rios",
      "Rafaela Minoliti",
      "Renata Tedesco",
      "Santiago Hawes",
      "Santiago Mendez",
      "Santino Barcas",
      "Sofia Sallago Gimenez",
      "Soledad Giunta",
      "Tomas Aebi",
      "Tomas Fernandez Bosaleh",
      "Trinidad Cervigni",
      "Valentina Margaria",
      "Lucia Cavallaro",
      "Tiziana Malacisa"
    ].sort()
  },
  {
    id: "no-lion-king",
    nombre: "No Lion King",
    estudiantes: [
      "Ariana Tato",
      "Julieta Grimaldi",
      "Clara Fernandez May",
      "Brunella Bulfone Parisi",
      "Emilia Cravero",
      "Ornella Bava",
      "Mia Silveyra Rodriguez",
    ].sort()
  }
];

export default function Home() {
  const [asistencias, setAsistencias] = useState<Record<string, Record<string, boolean>>>({});
  const [grupoSeleccionado, setGrupoSeleccionado] = useState<string | null>(null);

  const toggleAsistencia = (grupoId: string, estudiante: string) => {
    setAsistencias(prev => ({
      ...prev,
      [grupoId]: {
        ...prev[grupoId],
        [estudiante]: !prev[grupoId]?.[estudiante]
      }
    }));
  };

  const grupoActual = grupos.find(g => g.id === grupoSeleccionado);

  return (
    <div className="min-h-screen bg-white font-['Montserrat']">
      <main className="max-w-2xl mx-auto p-4">
        <div className="text-center mb-8">
          <div className="mb-6">
            <Image
              src="/logo-the-bridge.png"
              alt="The Bridge"
              width={200}
              height={60}
              className="mx-auto"
            />
          </div>
          <h1 className="text-2xl font-semibold mb-2 text-gray-800">Lista de Asistencia</h1>
          <p className="text-sm text-gray-500">Seleccioná un grupo para tomar lista</p>
        </div>

        {!grupoSeleccionado ? (
          // Vista de Grupos
          <div className="space-y-3">
            {grupos.map((grupo) => (
              <button
                key={grupo.id}
                onClick={() => setGrupoSeleccionado(grupo.id)}
                className="w-full p-4 text-left bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-800">{grupo.nombre}</span>
                  <span className="text-sm text-gray-500">{grupo.estudiantes.length} estudiantes</span>
                </div>
              </button>
            ))}
          </div>
        ) : grupoActual ? (
          // Vista de Lista de Asistencia
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-800">{grupoActual.nombre}</h2>
              <button 
                onClick={() => setGrupoSeleccionado(null)}
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                ← Volver
              </button>
            </div>
            <div className="space-y-2">
              {grupoActual.estudiantes.map((estudiante) => (
                <div 
                  key={estudiante}
                  className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg"
                >
                  <span className="text-gray-800">{estudiante}</span>
                  <input
                    type="checkbox"
                    checked={asistencias[grupoActual.id]?.[estudiante] || false}
                    onChange={() => toggleAsistencia(grupoActual.id, estudiante)}
                    className="w-6 h-6 rounded border-gray-300 cursor-pointer"
                  />
                </div>
              ))}
            </div>
            <div className="mt-4 text-sm text-gray-500">
              Presentes: {Object.values(asistencias[grupoActual.id] || {}).filter(Boolean).length} / {grupoActual.estudiantes.length}
            </div>
          </div>
        ) : null}

        <footer className="mt-12 text-center text-sm text-gray-500">
          <p>The Bridge Educational 2024</p>
        </footer>
      </main>
    </div>
  );
}
