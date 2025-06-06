export default function Projects({
  name,
  img,
  alt,
  type,
  link,
  year,
  tools,
  darkText,
}) {
  return (
    <div>
      <a
        target="_blank"
        rel="noreferrer"
        href={link}
        className="img group inline-block overflow-hidden duration-200 ease-linear hover:rounded-3xl"
      >
        <img
          className="w-screen duration-700 ease-in-out group-hover:scale-105"
          src={img}
          alt={alt}
          width="800"
          height="600"
        />
      </a>
      <div className="mt-4">
        <div className="mb-3 flex space-x-2">
          <p className="flex items-center justify-center rounded-full border border-secondary-600 bg-transparent px-4 py-1 text-body-4 text-secondary-600 2xl:text-3xl">
            {year}
          </p>
          <p className="flex items-center justify-center rounded-full border border-secondary-600 bg-transparent px-4 py-1 text-body-4 text-secondary-600 2xl:text-3xl">
            {tools}
          </p>
        </div>
        <div className="2xl:space-y-3">
          <h3
            className={`text-works-title font-medium uppercase 2xl:text-5xl ${
              darkText ? "text-accent-100" : "text-primary-200"
            }`}
          >
            {name}
          </h3>
          <p
            className={`text-body-2 font-light 2xl:text-4xl ${
              darkText ? "text-accent-100" : "text-primary-400"
            }`}
          >
            {type}
          </p>
        </div>
      </div>
    </div>
  );
}
