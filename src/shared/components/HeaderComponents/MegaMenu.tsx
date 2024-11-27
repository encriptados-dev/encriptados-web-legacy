import { motion } from "framer-motion";
import CategoryPreview from "./CategoryPreview";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

type MenuItem = {
  title: string;
  link: string;
  image?: string;
  description?: string;
};

type Category = {
  title: string;
  description: string;
  link: string; // Enlace a la categoría
  image?: string; // Imagen de la categoría
  items: MenuItem[];
};

type Props = {
  categories: Category[];
  activeCategory: number;
  setActiveCategory: (index: number) => void;
  hoveredItem: MenuItem | null;
  setHoveredItem: (item: MenuItem) => void;
  closeMegaMenu: () => void; // Función para cerrar el MegaMenu
};

export default function MegaMenu({
  categories,
  activeCategory,
  setActiveCategory,
  hoveredItem,
  setHoveredItem,
  closeMegaMenu,
}: Props) {
  const t = useTranslations("megaMenu");

  const activeCategoryData = categories[activeCategory] || {};
  const activeItems = activeCategoryData.items || [];
  const activeCategoryLink = activeCategoryData.link;
  const activeCategoryImage = activeCategoryData.image || "/placeholder.svg";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="absolute left-0 right-0 border-b border-[#1A1A1A] shadow-xl z-10 px-5 pt-4 pb-6"
      style={{
        background: "rgba(12, 12, 12, 0.85)",
        backdropFilter: "blur(42px)",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-20">
          {/* Categorías */}
          <div className="col-span-4 space-y-6">
            {categories.map((category, index) => (
              <Link
                href={category.link}
                key={index}
                className={`block p-4 rounded-lg ${
                  activeCategory === index
                    ? "bg-[#1A1A1A]"
                    : "hover:bg-[#1A1A1A]"
                }`}
                onClick={closeMegaMenu}
                onMouseEnter={() => setActiveCategory(index)}
              >
                <h3 className="text-white font-medium flex items-center">
                  {category.title}
                  {activeCategory === index && (
                    <ArrowRight className="w-4 h-4 ml-1" />
                  )}
                </h3>
                <p className="text-sm text-gray-400 mt-1">
                  {category.description}
                </p>
              </Link>
            ))}
          </div>

          {/* Contenido de la categoría activa */}
          {activeItems.length > 0 ? (
            <>
              <CategoryPreview
                items={activeItems}
                setHoveredItem={setHoveredItem}
                categoryLink={activeCategoryLink}
                closeMegaMenu={closeMegaMenu}
              />

              <div className="col-span-5">
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src={hoveredItem?.image || "/placeholder.svg"}
                    alt={
                      hoveredItem?.title || t("preview")
                    }
                    width={400}
                    height={300}
                    className="w-full object-cover rounded-xl"
                  />
                  <div className="p-4">
                    <h3 className="text-white font-medium">
                      {hoveredItem?.description ||
                        hoveredItem?.title ||
                        t("preview")}
                    </h3>
                    {hoveredItem?.link && (
                      <Link
                        href={hoveredItem.link}
                        className="inline-flex items-center text-sm text-[#44D3FF] hover:text-white mt-2 transition-colors"
                        onClick={closeMegaMenu}
                      >
                        {t("seeMore")}
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="col-span-6">
              <div className="rounded-xl overflow-hidden">
                <Image
                  src={activeCategoryImage}
                  alt={activeCategoryData.title || t("category")}
                  width={400}
                  height={300}
                  className="w-[550px] object-cover rounded-xl"
                />
                <div className="p-4">
                  <h3 className="text-white font-medium">
                    {activeCategoryData.description || t("category")}
                  </h3>
                  {activeCategoryLink && (
                    <Link
                      href={activeCategoryLink}
                      className="inline-flex items-center text-sm text-[#44D3FF] hover:text-white mt-2 transition-colors"
                      onClick={closeMegaMenu}
                    >
                      {t("seeMore")}
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
