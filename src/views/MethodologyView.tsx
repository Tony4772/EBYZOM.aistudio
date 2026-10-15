import React, { useState } from 'react';
import { PageId } from '../components/Header';

interface MethodologyViewProps {
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: () => void;
}

export const MethodologyView: React.FC<MethodologyViewProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const [activePhase, setActivePhase] = useState(1);

  const phases = [
    {
      number: '01',
      phase: 1,
      name: 'Descubrimiento & Requerimientos',
      tag: 'Semana 1',
      icon: 'search_insights',
      color: 'primary',
      description:
        'Análisis en profundidad de los procesos operacionales, cuellos de botella de tu equipo y definición de la arquitectura de datos ideal.',
      deliverables: [
        'Documento de Especificación de Requerimientos de Software (SRS)',
        'Diagrama de Entidad-Relación (Base de Datos)',
        'Cronograma formal de hitos de entrega con fechas exactas',
        'Firma de Acuerdo de Confidencialidad bilateral (NDA)',
      ],
      clientRole: 'Sesión de 2 horas con los líderes de área para relevar flujos críticos.',
    },
    {
      number: '02',
      phase: 2,
      name: 'Diseño UX/UI & Prototipado Interactivo',
      tag: 'Semana 2',
      icon: 'draw',
      color: 'secondary',
      description:
        'Modelamos cada pantalla, botón y flujo de usuario en Figma de alta fidelidad. Tu equipo interactúa con el prototipo navegable antes de escribir código.',
      deliverables: [
        'Prototipo interactivo navegable para móviles y escritorio en Figma',
        'Guía de estilos corporativos, tipografía y tokens de diseño',
        'Validación de ergonomía en campo para operarios o conductores',
        'Aprobación formal del diseño previo a la fase de programación',
      ],
      clientRole: 'Revisión y validación de la experiencia de usuario y pantallas en Figma.',
    },
    {
      number: '03',
      phase: 3,
      name: 'Desarrollo Ágil (Scrum) & Pruebas QA',
      tag: 'Semanas 3 a 6',
      icon: 'terminal',
      color: 'primary',
      description:
        'Programación en sprints quincenales. Cada dos semanas te entregamos un avance tangible y funcional que puedes probar en servidores de prueba.',
      deliverables: [
        'Sprints quincenales con demos funcionales en servidor de staging',
        'Compilaciones APK de prueba para Android con distribución privada',
        'Pruebas unitarias, de integración y estrés de concurrencia',
        'Validación de seguridad contra inyecciones SQL y vulnerabilidades',
      ],
      clientRole: 'Reunión quincenal de 30 minutos para probar avances y retroalimentar.',
    },
    {
      number: '04',
      phase: 4,
      name: 'Despliegue, Lanzamiento & Garantía',
      tag: 'Semana Final',
      icon: 'rocket_launch',
      color: 'secondary',
      description:
        'Puesta en producción en la nube (AWS / Google Cloud) o publicación homologada en Google Play Store. Transferencia total de llaves y código fuente.',
      deliverables: [
        'Publicación y homologación aprobada en Google Play Console',
        'Configuración de dominio con SSL, CDN y respaldos automáticos en AWS',
        'Capacitación técnica y ejecutiva presencial o por videollamada',
        'Entrega del 100% de repositorios Git y credenciales maestras',
        'Inicio del periodo de 60 días de garantía técnica sin costo',
      ],
      clientRole: 'Recepción formal del sistema y capacitación a su personal.',
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative w-full overflow-hidden bg-surface-container-low py-space-xl lg:py-24 border-b border-[#dce9ff]">
        <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-space-xl">
          <div className="flex flex-col gap-space-sm max-w-3xl">
            <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-primary/10 text-primary font-code text-code border border-primary/20 w-fit">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              METODOLOGÍA DE INGENIERÍA RIGUROSA
            </div>
            <h1 className="font-display text-display text-on-surface tracking-tight">
              Sin sorpresas ni sobrecostos: De la idea a producción con Scrum
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Nuestro marco de trabajo garantiza visibilidad absoluta en cada etapa del desarrollo. Sabes en todo
              momento qué se está programando, cuándo se entrega y cuánto rinde tu inversión.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Phase Explorer */}
      <section className="w-full py-space-xl lg:py-24 bg-surface">
        <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-space-xl flex flex-col gap-space-xl">
          {/* Phase Selector Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-1.5 bg-surface-container rounded-2xl border border-[#dce9ff]">
            {phases.map((p) => (
              <button
                key={p.phase}
                onClick={() => setActivePhase(p.phase)}
                className={`py-3 px-4 rounded-xl text-left transition-all cursor-pointer flex items-center justify-between ${
                  activePhase === p.phase
                    ? 'bg-surface-container-lowest text-on-surface shadow-md font-bold'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-white/40'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`font-code text-xs px-2 py-0.5 rounded font-bold ${
                      p.color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'
                    }`}
                  >
                    {p.number}
                  </span>
                  <span className="text-xs sm:text-sm truncate">{p.name}</span>
                </div>
                <span className="material-symbols-outlined text-[18px]">
                  {activePhase === p.phase ? 'check_circle' : 'chevron_right'}
                </span>
              </button>
            ))}
          </div>

          {/* Active Phase Deep Dive Card */}
          {phases
            .filter((p) => p.phase === activePhase)
            .map((phase) => (
              <div
                key={phase.phase}
                className="bg-surface-container-lowest p-space-lg md:p-space-xl rounded-3xl shadow-xl border border-[#dce9ff] grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center animate-in fade-in duration-300"
              >
                <div className="lg:col-span-7 flex flex-col gap-space-md">
                  <div className="flex items-center gap-space-sm">
                    <span className="px-3 py-1 bg-primary text-white font-code text-xs font-bold rounded-lg">
                      Fase {phase.number}
                    </span>
                    <span className="font-code text-xs text-on-surface-variant font-semibold">
                      Duración Estimada: {phase.tag}
                    </span>
                  </div>

                  <h2 className="font-headline-lg text-headline-lg text-on-surface">
                    {phase.name}
                  </h2>

                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                    {phase.description}
                  </p>

                  <div className="space-y-2 pt-space-xs">
                    <span className="font-label-sm text-label-sm text-on-surface uppercase font-bold block">
                      Entregables Tangibles en esta Fase:
                    </span>
                    <ul className="space-y-2 font-body-sm text-body-sm text-on-surface-variant">
                      {phase.deliverables.map((del, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="material-symbols-outlined text-primary text-[20px] flex-shrink-0 mt-0.5">
                            task_alt
                          </span>
                          <span className="text-on-surface font-medium">{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 bg-surface-container-low rounded-xl border border-[#dce9ff] flex items-start gap-3 mt-2">
                    <span className="material-symbols-outlined text-secondary text-[22px] flex-shrink-0 mt-0.5">
                      person_pin
                    </span>
                    <div>
                      <span className="text-xs font-bold uppercase text-secondary block">
                        Participación Requerida del Cliente:
                      </span>
                      <p className="text-xs text-on-surface mt-0.5">{phase.clientRole}</p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 flex flex-col gap-space-md">
                  <div className="bg-gradient-to-br from-surface-container-high to-surface-container p-6 rounded-2xl border border-[#dce9ff] space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-code text-xs text-on-surface-variant uppercase font-bold">
                        Hitos de Control de Calidad
                      </span>
                      <span className="material-symbols-outlined text-primary">{phase.icon}</span>
                    </div>

                    <div className="space-y-3 font-code text-xs">
                      <div className="p-3 bg-surface-container-lowest rounded-lg border border-[#e5eeff] flex justify-between items-center">
                        <span>Revisión de Arquitectura</span>
                        <span className="text-primary font-bold">Aprobado</span>
                      </div>
                      <div className="p-3 bg-surface-container-lowest rounded-lg border border-[#e5eeff] flex justify-between items-center">
                        <span>Seguridad & Privacidad</span>
                        <span className="text-primary font-bold">Certificado</span>
                      </div>
                      <div className="p-3 bg-surface-container-lowest rounded-lg border border-[#e5eeff] flex justify-between items-center">
                        <span>Test en Dispositivos Reales</span>
                        <span className="text-primary font-bold">100% Passed</span>
                      </div>
                    </div>

                    <button
                      onClick={onOpenQuoteModal}
                      className="w-full py-3 bg-primary text-white font-title-md rounded-xl shadow-md hover:bg-primary-container transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>Iniciar Proyecto con este Flujo</span>
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};
