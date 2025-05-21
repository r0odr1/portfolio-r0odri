import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

interface DropdownMenuPortalProps {
  open: boolean;
  anchorRect: DOMRect | null;
  children: React.ReactNode;
  onClose?: () => void;
}

const DropdownMenuPortal: React.FC<DropdownMenuPortalProps> = ({ open, anchorRect, children, onClose }) => {
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose?.();
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClick);
      document.body.style.overflow = 'visible';
    }
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [open, onClose]);

  if (!open || !anchorRect) return null;

  // Posiciona el menú justo al lado del botón que lo abre (derecha, alineado arriba)
  const style: React.CSSProperties = {
    position: 'absolute',
    top: anchorRect.top + window.scrollY,
    left: anchorRect.right + 8 + window.scrollX, // 8px de margen
    zIndex: 2000,
  };

  return ReactDOM.createPortal(
    <div ref={menuRef} style={style}>
      {children}
    </div>,
    document.body
  );
};

export default DropdownMenuPortal;