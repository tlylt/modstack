import { Button } from '@chakra-ui/button'
import { useDisclosure } from '@chakra-ui/hooks'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Card, { Module } from '../components/Card'
import Search from '../components/Search'
import StackReport from '../components/StackReport'
import modules from '../modstack.json'
export const Home = (): JSX.Element => {
  const [query, setQuery] = useState('')
  const [filteredModules, setFilteredModules] = useState<Module[]>(modules)
  const [selectedModules, setSelectedModules] = useState<Module[]>([])
  const { isOpen, onOpen, onClose } = useDisclosure()

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
    <div className="bg-gray-100 h-screen">
      <Head>
        <title>ModStack</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"
        />
      </Head>
      <main className="bg-gray-100 mx-auto flex flex-col items-center gap-4 min-h-screen">
        <div className="flex items-center m-10">
          <img src="/modstack.png" className="w-14" />
          <h1 className="text-3xl">University Module Stack</h1>
        </div>
        <Search query={query} setQuery={setQuery} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <div>
            <Button
              variant="outline"
              colorScheme="cyan"
              onClick={onOpen}
              isDisabled={selectedModules.length === 0}
            >
              My Tech Stack Summary
            </Button>
            <div className="pl-4 italic">
              Selected Modules: {selectedModules.length}
            </div>
          </div>
          <StackReport
            selectedModules={selectedModules}
            isOpen={isOpen}
            onClose={onClose}
          />
          {filteredModules.map((module, index) => (
            <Card
              module={module}
              key={index}
              selectedModules={selectedModules}
              setSelectedModules={setSelectedModules}
            />
          ))}
        </div>
      </main>
      <footer className="bg-gray-100 h-20 border-t justify-content text-center flex-1">
        ©{new Date().getFullYear()}{' '}
        <a href="https://github.com/tlylt" target="_blank" rel="noreferrer">
          tlylt
        </a>
      </footer>
    </div>
  )
}

export default Home
