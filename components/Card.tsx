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
      <h3 className="font-bold">{module.moduleCode}</h3>
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
