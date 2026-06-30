'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

// Datos de los grupos y estudiantes
const grupos = [
  {
    id: "grupoEscocia",
    nombre: "Grupo Escocia",
    estudiantes: [
      "Maria Eugenia Acerola",
      "Agustina Garillo",
      "Isabel Hernandez Borghetti",
      "Angela Amiano",
      "Victoria Bermudez Reigada",
      "Faustino Rojas Alonso",
      "Tomas Ciammella",
      "Lautaro Leandro Oses Dañilu",
      "Samira Fernandez Nieva",
      "Josefina Barletta",
      "Ines Steñac",
    ].sort()
  },
  {
    id: "grupoLondres",
    nombre: "Grupo Londres",
    estudiantes: [
      "Teresa Abril Otarola",
      "Santino Di Benedetto",
      "Nahari Sofia Grande",
      "Lola Goethe Diaz",
      "Olivia Marques Del Rio",
      "Santiago Botticelli",
      "Juan Bautista Leon Sgroi",
      "Helena Bacon Montes",
      "Mateo Muniz Barreto",
      "Facundo Arrambide",
      "Ana Belen Pereyra",
      "Judith Toniolo Comini",
      "Santiago Mateo Flores",
      "Selene Zilber",
    ].sort()
  },
  {
    id: "grupoHP",
    nombre: "Grupo Harry Potter",
    estudiantes: [
      "Santino Di Benedetto",
      "Nahari Sofia Grande",
      "Olivia Marques Del Rio",
      "Helena Bacon Montes",
      "Samira Fernandez Nieva",
      "Josefina Barletta",  
      "Victoria Bermudez Reigada",
      "Ines Steñac",
      "Angela Amiano",
      "Ana Belen Pereyra",
      "Judith Toniolo Comini",
      "Santiago Mateo Flores",
      "Faustino Rojas Alonso",
    ].sort()
  },
  {
    id: "grupoNOHP",
    nombre: "Grupo No Harry Potter",
    estudiantes: [
      "Teresa Abril Otarola",
      "Lola Goethe Diaz",
      "Santiago Botticelli",
      "Juan Bautista Leon Sgroi",
      "Mateo Muniz Barreto",
      "Facundo Arrambide",
      "Maria Eugenia Acerola",
      "Agustina Garillo",
      "Isabel Hernandez Borghetti",
      "Tomas Ciammella",
      "Lautaro Leandro Oses Dañilu",
      "Selene Zilber",
    ].sort()
  },
  {
    id: "GrupoLK",
    nombre: "Grupo Lion King",
    estudiantes: [
      "Angela Amiano",
      "Judith Toniolo Comini",
      "Helena Baccon Montes",
      "Faustino Rojas Alonso ",
      "Ana Belen Pereyra",
      "Victoria Bermudez Reigada",
      "Maria Eugenia Acerola",
      "Faustino Rojas Alonso ",
      "Santiago Botticelli",
      "Samira Fernandez Nieva",
      "Josefina Barletta",
    ].sort()
  }, 
  {
    id: "GrupoNOLK",
    nombre: "Grupo No Lion King",
    estudiantes: [
    ].sort()
  }

];

export default function Home() {
  const [asistencias, setAsistencias] = useState<Record<string, Record<string, boolean>>>({});
  const [grupoSeleccionado, setGrupoSeleccionado] = useState<string | null>(null);

  // Cargar asistencias desde localStorage al montar el componente
  useEffect(() => {
    const savedAsistencias = localStorage.getItem('asistencias');
    if (savedAsistencias) {
      try {
        setAsistencias(JSON.parse(savedAsistencias));
      } catch (error) {
        console.error('Error al cargar asistencias:', error);
      }
    }
  }, []);

  // Guardar asistencias en localStorage cada vez que cambien
  useEffect(() => {
    localStorage.setItem('asistencias', JSON.stringify(asistencias));
  }, [asistencias]);

  const toggleAsistencia = (grupoId: string, estudiante: string) => {
    setAsistencias(prev => ({
      ...prev,
      [grupoId]: {
        ...prev[grupoId],
        [estudiante]: !prev[grupoId]?.[estudiante]
      }
    }));
  };

  const resetAsistencias = () => {
    setAsistencias({});
    localStorage.removeItem('asistencias');
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

        {/* Botón de Reset */}
        <div className="mt-8 text-center">
          <button
            onClick={resetAsistencias}
            className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-sm"
          >
            Resetear todas las asistencias
          </button>
        </div>

        <footer className="mt-12 text-center text-sm text-gray-500">
          <p>The Bridge Educational 2024</p>
        </footer>
      </main>
    </div>
  );
}
