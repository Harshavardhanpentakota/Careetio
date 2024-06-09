
export function Heading({ label,color }) {
    return <div className={`font-bold text-4xl text-black pt-6 ${color === 'white' ? 'text-white' : 'text-black'} `}>{label}</div>;
  }
  