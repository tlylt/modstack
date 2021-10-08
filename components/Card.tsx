export interface Module {
  dateUpdated: string
  link: string
  moduleCode: string
  moduleName: string
  school: string
  stack: Array<string>
}

export default function Card({ module }: { module: Module }): JSX.Element {
  return (
    <div className="w-64 border p-4 shadow-sm rounded hover:border-yellow-700">
      <div className="flex gap-2">
        <h3 className="font-bold">{module.moduleCode}</h3>
        <a href={module.link} className="" target="_blank" rel="noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#597e8d"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="cursor-pointer"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" />
            <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" />
          </svg>
        </a>
      </div>
      <p>{module.moduleName}</p>
      <hr className="my-2" />
      {module.stack.map((module) => (
        <li
          className="text-xs p-1 border-2 rounded-full w-24 hover:bg-white hover:text-black mr-4"
          key={module}
        >
          {module}
        </li>
      ))}
    </div>
  )
}
