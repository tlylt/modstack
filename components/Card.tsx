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
    <div className="border p-4 shadow-sm rounded hover:bg-gray-200">
      <h3>{module.moduleCode}</h3>
      <p>{module.moduleName}</p>
      {module.stack.map((module) => (
        <li key={module}>{module}</li>
      ))}
    </div>
  )
}
