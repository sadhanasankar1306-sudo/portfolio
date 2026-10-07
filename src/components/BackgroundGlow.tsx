export function BackgroundGlow() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
      {/* Deep base canvas */}
      <div className="absolute inset-0 bg-[#0B1020]" />

      {/* Subtle developer grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage: `radial-gradient(rgba(99, 102, 241, 0.4) 1px, transparent 1px)`,
          backgroundSize: '36px 36px',
        }}
      />

      {/* Subtle top ambient glow for Hero */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[720px] h-[480px] bg-gradient-to-b from-[#6366F1]/15 via-[#22D3EE]/8 to-transparent rounded-full blur-[140px] opacity-70" />

      {/* Subtle side ambient glow for projects */}
      <div className="absolute top-[40%] -right-40 w-[600px] h-[500px] bg-[#6366F1]/8 rounded-full blur-[160px] opacity-50" />
      <div className="absolute top-[70%] -left-40 w-[550px] h-[500px] bg-[#22D3EE]/6 rounded-full blur-[160px] opacity-40" />

      {/* Clean vignette overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0B1020]/90" />
    </div>
  );
}
