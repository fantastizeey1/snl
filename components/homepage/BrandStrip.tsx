// components/homepage/BrandStrip.tsx
// Server Component — zero client JS shipped.
// Retains 100% of your exact global CSS class architecture.

const LOGOS = [
  { name: 'Microsoft', className: 'font-sans font-bold tracking-tight opacity-80' },
  { name: 'Oracle', className: 'serif-i font-bold tracking-wide opacity-75' },
  { name: 'Huawei', className: 'font-mono-svc tracking-widest uppercase opacity-65 text-[11px]' },
  { name: 'Heirs Holdings', className: 'serif font-semibold opacity-85' },
] as const

export default function BrandStrip() {
  return (
    <div className="brand-strip">
      <div className="brand-strip-label">Leadership forged at</div>
      <div className="brand-divider" aria-hidden="true" />

      <div className="brand-logos">
        {LOGOS.map((logo, idx) => (
          <div key={logo.name} className="flex items-center gap-5">
            {/* Using your design system's typography tokens to differentiate text logos */}
            <span className={`brand-logo ${logo.className}`}>
              {logo.name}
            </span>
            {idx < LOGOS.length - 1 && (
              <span className="brand-sep" aria-hidden="true" />
            )}
          </div>
        ))}
      </div>

      {/* Founder attribution — layout driven entirely by your CSS margin-left: auto */}
      <div className="brand-strip-founder">
        <div
          className="founder-avatar"
          aria-hidden="true"
          style={{
            background: 'linear-gradient(135deg, var(--goldM) 0%, var(--gold-deep) 100%)',
            boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.2)'
          }}
        >
          S
        </div>
        <div>
          <div className="founder-name">Sophia Sankey</div>
          {/* Swapped to your custom mono token to give an editorial credential feel */}
          <div className="founder-title font-mono-svc tracking-wider text-[10px]">
            Founder &amp; CEO, SNL Services
          </div>
        </div>
      </div>
    </div>
  )
}