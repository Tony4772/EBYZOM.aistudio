import React from 'react';

interface ClientPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ClientPortalModal: React.FC<ClientPortalModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
      <div className="bg-surface-container-lowest max-w-xl w-full rounded-2xl shadow-2xl border border-[#dce9ff] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#e5eeff] bg-inverse-surface text-inverse-on-surface flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-primary/20 text-primary-fixed flex items-center justify-center">
              <span className="material-symbols-outlined text-[18px]">verified_user</span>
            </div>
            <div>
              <h3 className="font-title-md text-sm font-bold leading-tight">
                Portal de Seguimiento & Sprint Staging
              </h3>
              <p className="font-code text-[11px] text-inverse-on-surface/70">
                EBYZOM E.I.R.L. • Cliente Activo (Demo)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-inverse-on-surface/70 hover:bg-white/10 transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          {/* Active Sprint Overview */}
          <div className="p-4 rounded-xl bg-surface-container-low border border-[#dce9ff] space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-code text-xs text-primary font-bold uppercase">
                  Sprint 03 / 04 • En Curso
                </span>
                <h4 className="font-title-md text-base text-on-surface font-bold">
                  App Móvil Android - Distribución Mayorista
                </h4>
              </div>
              <span className="px-2.5 py-1 bg-primary text-white text-xs font-bold rounded-full font-code">
                75% Completado
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
              <div className="bg-primary h-full rounded-full w-3/4"></div>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center text-xs pt-1 font-code">
              <div className="p-2 bg-surface-container-lowest rounded-lg">
                <span className="text-on-surface-variant block text-[10px]">Entregables</span>
                <span className="font-bold text-on-surface">6 de 8</span>
              </div>
              <div className="p-2 bg-surface-container-lowest rounded-lg">
                <span className="text-on-surface-variant block text-[10px]">Pruebas QA</span>
                <span className="font-bold text-primary">100% OK</span>
              </div>
              <div className="p-2 bg-surface-container-lowest rounded-lg">
                <span className="text-on-surface-variant block text-[10px]">Lanzamiento</span>
                <span className="font-bold text-secondary">24 Octubre</span>
              </div>
            </div>
          </div>

          {/* Test Staging Links */}
          <div className="space-y-2">
            <span className="text-xs font-semibold text-on-surface uppercase tracking-wider block">
              Entornos de Prueba para el Cliente
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <a
                href="https://wa.me/51906591037?text=Solicito%20acceso%20a%20la%20demo%20de%20App%20Android"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-[#dce9ff] bg-surface-container-lowest hover:bg-surface-container-low transition-colors flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[20px]">android</span>
                  <div className="text-left">
                    <span className="text-xs font-bold block text-on-surface">Descargar APK Staging</span>
                    <span className="text-[10px] text-on-surface-variant">Build v1.4.2-staging</span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-xs text-primary">download</span>
              </a>

              <a
                href="https://wa.me/51906591037?text=Solicito%20credenciales%20del%20panel%20web"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-[#dce9ff] bg-surface-container-lowest hover:bg-surface-container-low transition-colors flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[20px]">desktop_windows</span>
                  <div className="text-left">
                    <span className="text-xs font-bold block text-on-surface">Panel Web Admin</span>
                    <span className="text-[10px] text-on-surface-variant">staging.ebyzom.pe</span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-xs text-secondary">open_in_new</span>
              </a>
            </div>
          </div>

          {/* Legal and SLA badges */}
          <div className="p-3 rounded-lg bg-surface-container text-xs text-on-surface-variant space-y-1">
            <div className="flex items-center justify-between text-on-surface font-semibold">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-primary text-[16px]">security</span>
                Contrato NDA #EBZ-2025-081
              </span>
              <span className="text-primary font-code">Vigente</span>
            </div>
            <p className="text-[11px]">
              Repositorio Git privado transferido en cada cierre de hito conforme a la Ley de Derecho de Autor peruana.
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-full py-2.5 bg-primary text-white font-medium rounded-lg hover:bg-primary-container text-sm transition-colors"
          >
            Cerrar Ventana
          </button>
        </div>
      </div>
    </div>
  );
};
