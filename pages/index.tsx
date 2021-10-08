import Head from 'next/head'
import { useEffect, useState } from 'react'
import Card, { Module } from '../components/Card'
import Search from '../components/Search'
import modules from '../modstack.json'
export const Home = (): JSX.Element => {
  const [query, setQuery] = useState('')
  const [filteredModules, setFilteredModules] = useState<Module[]>(modules)
  useEffect(() => {
    if (query.trim() === '') {
      setFilteredModules(modules)
    } else {
      setFilteredModules((filteredModules) =>
        filteredModules.filter(
          (module) =>
            module.moduleName.toLowerCase().includes(query.toLowerCase()) ||
            module.moduleCode.toLowerCase().includes(query.toLowerCase())
        )
      )
    }
  }, [query])
  return (
    <>
      <Head>
        <title>ModStack</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto flex flex-col items-center gap-4">
        <div className="flex items-center m-10">
          <img src="/modstack.png" className="w-14" />
          <h1 className="text-3xl">University Module Stack</h1>
        </div>
        <Search query={query} setQuery={setQuery} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredModules.map((module, index) => (
            <Card module={module} key={index} />
          ))}
        </div>
      </main>
    </>
  )
}

export default Home
