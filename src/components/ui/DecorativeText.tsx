import type { CSSProperties } from 'react';

interface DecorativeTextProps {
  text: string;
  size?: string;
  opacity?: number;
  color?: string;
  position?: 'left' | 'right' | 'center';
  font?: 'bebas' | 'playfair';
}

export default function DecorativeText({
  text,
  size = '30vw',
  opacity = 0.04,
  color = 'currentColor',
  position = 'center',
  font = 'bebas',
}: DecorativeTextProps) {
  const positionStyle: CSSProperties =
    position === 'left'
      ? { left: '-0.05em' }
      : position === 'right'
      ? { right: '-0.05em' }
      : { left: '50%', transform: 'translate(-50%, -50%)' };

  const transformStyle: CSSProperties =
    position === 'center'
      ? {}
      : { transform: 'translateY(-50%)' };

  const style: CSSProperties = {
    position: 'absolute',
    top: '50%',
    ...positionStyle,
    ...transformStyle,
    fontSize: size,
    lineHeight: 1,
    fontFamily:
      font === 'playfair'
        ? '"Playfair Display", Georgia, serif'
        : '"Bebas Neue", sans-serif',
    fontWeight: font === 'playfair' ? 700 : 400,
    color,
    opacity,
    userSelect: 'none',
    pointerEvents: 'none',
    whiteSpace: 'nowrap',
    zIndex: 0,
  };

  return (
    <div aria-hidden="true" style={style}>
      {text}
    </div>
  );
}
