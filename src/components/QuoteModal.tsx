import React, { useState } from 'react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: 'android' | 'web' | 'erp' | 'cloud';
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'android',
}) => {
  const [projectType, setProjectType] = useState<'android' | 'web' | 'erp' | 'cloud'>(defaultService);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [timeline, setTimeline] = useState('1m');
  const [notes, setNotes] = useState('');
  const [features, setFeatures] = useState<string[]>(['sunat', 'biometrics']);
  const [ndaRequested, setNdaRequested] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const toggleFeature = (featId: string) => {
    setFeatures(prev =>
      prev.includes(featId) ? prev.filter(f => f !== featId) : [...prev, featId]
    );
  };

  // Base pricing calculations in PEN (Soles)
  const basePrices: Record<string, number> = {
    android: 3850,
    web: 1490,
    erp: 5800,
    cloud: 2200,
  };

  const featureAddons: Record<string, { label: string; price: number }> = {
    sunat: { label: 'Integración Oficial SUNAT / OSE', price: 1200 },
    payments: { label: 'Pasarela Niubiz / Yape QR / Stripe', price: 850 },
    biometrics: { label: 'Autenticación Biométrica / FaceID', price: 650 },
    offline: { label: 'Modo Offline con Room SQLite', price: 750 },
    multisede: { label: 'Control Multi-Almacén y Sucursales', price: 1100 },
    whatsapp_api: { label: 'Alertas WhatsApp Cloud API', price: 550 },
  };

  const estimatedTotal = (basePrices[projectType] || 2500) +
    features.reduce((acc, feat) => acc + (featureAddons[feat]?.price || 0), 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendToWhatsApp = () => {
    const selectedFeaturesText = features.map(f => featureAddons[f]?.label).filter(Boolean).join(', ');
    const msg = `*SOLICITUD DE COTIZACIÓN - EBYZOM E.I.R.L.*%0A%0A` +
      `*Cliente:* ${name || 'Por definir'}%0A` +
      `*Empresa / RUC:* ${company || 'No indicado'}%0A` +
      `*Teléfono:* ${phone || 'No indicado'}%0A` +
      `*Email:* ${email || 'No indicado'}%0A` +
      `*Tipo de Proyecto:* ${projectType.toUpperCase()}%0A` +
      `*Plazo Estimado:* ${timeline}%0A` +
      `*Módulos Seleccionados:* ${selectedFeaturesText || 'Estándar'}%0A` +
      `*Presupuesto Estimado:* S/ ${estimatedTotal.toLocaleString()}%0A` +
      `*Requiere NDA:* ${ndaRequested ? 'SÍ' : 'NO'}%0A%0A` +
      `*Detalles:* ${notes || 'Consulta sobre alcance técnico y tiempos de entrega'}`;

    window.open(`https://wa.me/51906591037?text=${msg}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
      <div className="bg-surface-container-lowest max-w-2xl w-full rounded-2xl shadow-2xl border border-[#dce9ff] max-h-[92vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#e5eeff] flex items-center justify-between bg-surface-container-low">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
            <h2 className="font-title-lg text-lg text-on-surface font-bold">
              Cotizador Técnico & Presupuesto EBYZOM
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-semibold text-on-surface uppercase tracking-wider mb-2">
                  1. Seleccione el Tipo de Solución
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'android', label: 'App Android', icon: 'smartphone' },
                    { id: 'web', label: 'Web Jamstack', icon: 'language' },
                    { id: 'erp', label: 'ERP / SUNAT', icon: 'hub' },
                    { id: 'cloud', label: 'Cloud / APIs', icon: 'cloud_sync' },
                  ].map((item) => (
                    <button
                      type="button"
                      key={item.id}
                      onClick={() => setProjectType(item.id as any)}
                      className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-1.5 transition-all text-center cursor-pointer ${
                        projectType === item.id
                          ? 'border-primary bg-primary/10 text-primary font-bold shadow-sm'
                          : 'border-[#e5eeff] bg-surface-container-low text-on-surface hover:bg-surface-container'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[22px]">{item.icon}</span>
                      <span className="text-xs">{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Addon Features Selector */}
              <div>
                <label className="block text-xs font-semibold text-on-surface uppercase tracking-wider mb-2">
                  2. Módulos y Capacidades Opcionales
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {Object.entries(featureAddons).map(([key, data]) => {
                    const isChecked = features.includes(key);
                    return (
                      <button
                        type="button"
                        key={key}
                        onClick={() => toggleFeature(key)}
                        className={`px-3 py-2.5 rounded-lg border text-left flex items-center justify-between text-xs transition-all cursor-pointer ${
                          isChecked
                            ? 'border-primary bg-primary/5 text-primary font-semibold'
                            : 'border-[#e5eeff] bg-surface-container-lowest text-on-surface hover:bg-[#eff4ff]'
                        }`}
                      >
                        <span className="truncate pr-2">{data.label}</span>
                        <span className="font-code text-primary font-bold whitespace-nowrap">
                          +S/ {data.price}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Live Cost Meter */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-[#eff4ff] to-[#e5eeff] border border-[#dce9ff] flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wider text-secondary font-semibold block">
                    Inversión Estimada en Hitos
                  </span>
                  <span className="text-2xl font-bold font-display text-primary">
                    S/ {estimatedTotal.toLocaleString('es-PE')}
                  </span>
                  <span className="text-[11px] text-on-surface-variant block">
                    Incluye 60 días de garantía + 100% código fuente + Factura SUNAT
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-code bg-white px-2.5 py-1 rounded-full text-secondary font-bold shadow-sm border border-[#dce9ff]">
                    40% / 30% / 30%
                  </span>
                </div>
              </div>

              {/* Contact Data */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-on-surface-variant mb-1">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ej. Martín Rivas"
                    className="w-full px-3 py-2 text-sm bg-surface-container-low border border-[#dce9ff] rounded-lg focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-on-surface-variant mb-1">
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Ej. +51 906 591 037"
                    className="w-full px-3 py-2 text-sm bg-surface-container-low border border-[#dce9ff] rounded-lg focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-on-surface-variant mb-1">
                    Correo Corporativo *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="correo@empresa.com"
                    className="w-full px-3 py-2 text-sm bg-surface-container-low border border-[#dce9ff] rounded-lg focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-on-surface-variant mb-1">
                    Empresa o RUC (Opcional)
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Ej. 20614121042"
                    className="w-full px-3 py-2 text-sm bg-surface-container-low border border-[#dce9ff] rounded-lg focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              {/* Project Brief */}
              <div>
                <label className="block text-xs font-medium text-on-surface-variant mb-1">
                  Breve descripción del alcance esperado
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Detalles sobre usuarios, sucursales, o flujos específicos..."
                  className="w-full px-3 py-2 text-sm bg-surface-container-low border border-[#dce9ff] rounded-lg focus:outline-none focus:border-primary resize-none"
                />
              </div>

              {/* NDA Checkbox */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="nda-check-modal"
                  checked={ndaRequested}
                  onChange={(e) => setNdaRequested(e.target.checked)}
                  className="rounded text-primary focus:ring-0 cursor-pointer"
                />
                <label htmlFor="nda-check-modal" className="text-xs text-on-surface-variant cursor-pointer">
                  Deseo recibir primero un Acuerdo de Confidencialidad (NDA) firmado por EBYZOM.
                </label>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleSendToWhatsApp}
                  className="w-full py-3 px-4 rounded-xl bg-surface-container-high text-on-surface font-title-md text-sm font-semibold flex items-center justify-center gap-2 hover:bg-surface-container transition-all cursor-pointer border border-[#dce9ff]"
                >
                  <span className="material-symbols-outlined text-primary text-[20px]">chat</span>
                  <span>Enviar por WhatsApp</span>
                </button>
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-primary text-on-primary font-title-md text-sm font-semibold flex items-center justify-center gap-2 hover:bg-primary-container transition-all shadow-md cursor-pointer"
                >
                  <span>Generar Solicitud Formal</span>
                  <span className="material-symbols-outlined text-[18px]">send</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto">
                <span className="material-symbols-outlined text-4xl">task_alt</span>
              </div>
              <h3 className="font-headline-sm text-xl font-bold text-on-surface">
                ¡Solicitud de Cotización Registrada!
              </h3>
              <p className="text-sm text-on-surface-variant max-w-md mx-auto leading-relaxed">
                Hemos recibido su requerimiento para el proyecto <strong>{projectType.toUpperCase()}</strong> con un estimado de <strong>S/ {estimatedTotal.toLocaleString('es-PE')}</strong>.
                Un ingeniero de EBYZOM E.I.R.L. se contactará vía WhatsApp o correo en menos de 2 horas hábiles.
              </p>
              <div className="p-4 bg-surface-container-low rounded-xl text-left max-w-md mx-auto font-code text-xs space-y-1">
                <p><strong>N° Expediente:</strong> EBZ-{Math.floor(100000 + Math.random() * 900000)}</p>
                <p><strong>Contacto:</strong> {name || 'Cliente'} ({phone})</p>
                <p><strong>Garantía:</strong> 60 días + Factura SUNAT</p>
              </div>
              <div className="pt-3 flex gap-3 justify-center">
                <button
                  onClick={handleSendToWhatsApp}
                  className="px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-lg flex items-center gap-1.5 hover:bg-primary-container"
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  Abrir chat en WhatsApp
                </button>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-4 py-2.5 bg-slate-100 text-slate-700 text-sm font-medium rounded-lg hover:bg-slate-200"
                >
                  Cerrar
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
