import React from 'react'

const Background = () => {
    return (
        <div className="min-h-screen w-full relative bg-black">
    {/* Copper Forge Background with Top Glow */}
    <div
      className="absolute inset-0 z-0"
      style={{
        background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(249, 115, 22, 0.25), transparent 70%), #000000",
      }}
    />
  
    {/* Your Content/Components */}
  </div>
    )
}

export default Background