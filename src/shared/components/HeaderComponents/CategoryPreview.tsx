import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type MenuItem = {
  title: string;
  link: string; // Enlace a la sección o página
  description?: string;
};

type Props = {
  items: MenuItem[]; // Lista de elementos de la categoría
  setHoveredItem: (item: MenuItem) => void; // Actualiza el elemento seleccionado para la previsualización
  categoryLink?: string; // Enlace a la categoría principal (opcional)
  closeMegaMenu?: () => void; // Nueva función para cerrar el MegaMenu
};

export default function CategoryPreview({
  items,
  setHoveredItem,
  closeMegaMenu, // Recibe la función para cerrar el menú
}: Props) {
  const listRef = useRef<HTMLDivElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false); // Estado para controlar si se muestra todo

  useEffect(() => {
    const element = listRef.current;
    if (element) {
      // Detecta si el contenido se desborda
      setIsOverflowing(element.scrollHeight > element.clientHeight);
    }
  }, [items]);

  return (
    <div className="col-span-3">
      <div
        ref={listRef}
        className={`space-y-4 ${
          isExpanded ? "max-h-none" : "max-h-[400px] overflow-hidden"
        }`}
      >
        {/* Renderiza los elementos de la categoría */}
        {items.map((item, index) =>
          item.link ? (
            <Link
              passHref={true}
              key={index}
              href={item.link} // Usa el enlace definido en `item.link`
              className="block text-gray-300 hover:text-white transition-colors"
              onMouseEnter={() => setHoveredItem(item)} // Actualiza el estado del elemento seleccionado
              onClick={() => closeMegaMenu && closeMegaMenu()} // Cierra el menú si `closeMegaMenu` está definido
            >
              <div>
                <p className="font-medium">{item.title}</p>
              </div>
            </Link>
          ) : (
            <div key={index} className="block text-gray-500">
              {item.title} (Enlace no disponible)
            </div>
          )
        )}
      </div>

      {/* Botón para mostrar todos los elementos si se desborda */}
      {isOverflowing && !isExpanded && (
        <button
          onClick={() => setIsExpanded(true)} // Expande la lista al hacer clic
          className="inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors"
        >
          Ver todos
          <ArrowRight className="w-4 h-4 ml-1" />
        </button>
      )}
    </div>
  );
}
