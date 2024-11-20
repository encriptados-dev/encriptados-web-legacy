import Image from "next/image";

type CardOfPostProps = {
  image: string;
  title: string;
  description: string;
  author: string;
};

export default function CardOfPost({
  image,
  title,
  description,
  author,
}: CardOfPostProps) {
  return (
    <div className="max-w-sm rounded-2xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.1)]">
      <div className="relativ w-full overflow-hidden rounded-t-xl">
        <Image
          alt={title}
          className="object-cover"
          height={300}
          src={image}
          style={{
            objectFit: "cover",
          }}
          width={400}
        />
      </div>
      <div className="mt-4 space-y-2 p-4">
        <h3 className="line-clamp-2 text-base font-semibold leading-tight text-gray-900">
          {title}
        </h3>
        <p className="line-clamp-2 text-sm leading-normal text-gray-600">
          {description}
        </p>
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 overflow-hidden rounded-full bg-gray-200">
              <Image
                alt={author}
                className="h-full w-full object-cover"
                height={24}
                src="/placeholder.svg"
                width={24}
              />
            </div>
            <span className="text-sm text-gray-600">{author}</span>
          </div>
          <a className="text-sm font-medium text-black" href="#">
            Leer más →
          </a>
        </div>
      </div>
    </div>
  );
}
