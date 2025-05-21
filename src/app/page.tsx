'use client';
import { useState } from 'react';
import Image from 'next/image';

// Datos de los grupos y estudiantes
const grupos = [
  {
    id: "grupo1",
    nombre: "Grupo 1",
    estudiantes: [
      
    ]
  },
  {
    id: "grupo2",
    nombre: "Grupo 2",
    estudiantes: [
      
    ]
  },
  {
    id: "grupo3",
    nombre: "Grupo 3",
    estudiantes: [
      
    ]
  },
  {
    id: "gillingham",
    nombre: "Gillingham",
    estudiantes: [
      
    ]
  },
  {
    id: "bishops",
    nombre: "Bishops",
    estudiantes: [
      "Julieta Grimaldi",
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
      "Lautaro Puglelli",
      "Fermin Rionda",
      "Guillermina Rionda",
      "Juana Ramos",
      "Maia Ciatei",
      "Kevin Lin",
      "Tomas Fernandez Bosaleh",
      "Trinidad Cervigni",
      "Martina Leguizamon"
    ]
  },
  {
    id: "harry-potter",
    nombre: "Harry Potter",
    estudiantes: [
      
    ]
  },
  {
    id: "estadio",
    nombre: "Estadio",
    estudiantes: [
      "Mateo Nieto Rivarola",
      "Santiago Hawes",
      "Olivia Hawes",
      "Maria Lucia Fernandez Cossa",
      "Pedro Rodriguez",
      "Clara Bembirre",
      "Brunella Bulfone Parisi",
      "Tomas Aebi",
      "Renata Tedesco",
      "Mora Santiago",
      "Paulina Botana",
      "Felicia Villanova",
      "Delfina Traverso",
      "Ana Paula Chertudi",
      "Arkin Lin",
      "Felipe Losinno",
      "Luca Aleaga",
      "Facundo Puglelli",
      "Lautaro Puglelli",
      "Fermin Rionda",
      "Guillermina Rionda",
      "Pedro Ramos",
      "Juana Ramos",
      "Maia Ciatei",
      "Isabella Soricelli",
      "Kevin Lin",
      "Alejo Di Tata"

    ]
  },
  {
    id: "no-estadio",
    nombre: "No estadio",
    estudiantes: [
      "Augusta Perich",
      "Sofia Sallago Gimenez",
      "Ariana Avril Tato",
      "Isabella Carelle",
      "Clara Fernandez May",
      "Lucia Cavallaro",
      "Santiago Mendez",
      "Macarena Fernandez Pointeau",
      "Julietra Grimaldi",
      "Rafaela Minoliti",
      "Anita Mangiaterra",
      "Clara Hombria Beres",
      "Pilar Conde",
      "Tiziana Malacisa",
      "Emilia Cravero",
      "Ema Muniz Barreto",
      "Ornella Bava",
      "Mia Grillo Albornoz",
      "Mia Silveyra Rodriguez",
      "Isabella Toffoli",
      "Josefina Gauthier",
      "Pilar Rios",
      "Valentina Margaria",
      "Santino Barcas",
      "Magdalena Barcas",
      "Emilia Trombetta",
      "Tomas Fernandez Bosaleh",
      "Trinidad Cervigni",
      "Martina Leguizamon"

      
    ]
  },
  {
    id: "lion-king",
    nombre: "Lion King",
    estudiantes: [
      
    ]
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
                    className="w-4 h-4 rounded border-gray-300"
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
