'use client'

import { useState, useEffect } from 'react'
import { FileText, Github, Linkedin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { useTheme } from './ThemeProvider'
import Header from './Header'
import Footer from './Footer'

const PersonalWebsite = () => {
  const { darkMode } = useTheme()
  // const [ showCursor, setShowCursor] = useState(true)

  // useEffect(() => {
  //   const cursorInterval = setInterval(() => {
  //     setShowCursor((prev) => !prev)
  //   }, 530)

  //   return () => clearInterval(cursorInterval)
  // }, [])


  return (
    <div className="min-h-screen flex flex-col bg-blue-100 dark:bg-gray-900 transition-all duration-500 ease-in-out relative overflow-hidden">
      <div
        className="absolute inset-0 bg-gray-900 transform transition-transform duration-500 ease-in-out origin-left"
        style={{ transform: darkMode ? 'scaleX(1)' : 'scaleX(0)' }}
      ></div>
      <Header currentPage=""/>
      <main className="relative z-10 flex-grow container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100 transition-colors duration-500">Pranay Gupta</h1>
        <p className="text-xl text-center mb-8 text-gray-900 dark:text-gray-100 transition-colors duration-500">
          Software Engineer. Builder. Cook.
        </p>

        <div className="flex justify-center space-x-6 mb-12">
          <Link
            href="/Pranay_Gupta_Resume.pdf"
            className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-500 transform hover:scale-105 group"
          >
            <FileText className="w-5 h-5" />
            <span className="relative">
              Resume
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-gray-900 dark:bg-white transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
            </span>
          </Link>
          <Link
            href="https://github.com/gupranay"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-500 transform hover:scale-105 group"
          >
            <Github className="w-5 h-5" />
            <span className="relative">
              GitHub
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-gray-900 dark:bg-white transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
            </span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/pranay-gupta1/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-500 transform hover:scale-105 group"
          >
            <Linkedin className="w-5 h-5" />
            <span className="relative">
              LinkedIn
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-gray-900 dark:bg-white transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
            </span>
          </Link>
        </div>

        <div className="space-y-8 max-w-2xl mx-auto">
          <Link
            href="https://annarborusa.org/"
            className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 group transition-all duration-500 transform hover:scale-105"
          >
            <Image
              src="/spark_logo.png"
              alt="Ann Arbor Spark logo"
              width={48}
              height={48}
              className="rounded-full"
            />
            <div className="text-center sm:text-left">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-gray-900 dark:group-hover:text-white transition-all duration-500">
                Ann Arbor Spark – Entrepreneurship Services Team
              </h2>
              <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-all duration-500">
                Full Stack Software Engineering Intern
              </p>
              <span className="block w-full h-0.5 bg-gray-900 dark:bg-white transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
            </div>
          </Link>
          <Link
            href="https://v1michigan.com/"
            className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 group transition-all duration-500 transform hover:scale-105"
          >
            <Image
              src="/v1_michigan_logo.jpeg"
              alt="V1 Michigan logo"
              width={48}
              height={48}
              className="rounded-full"
            />
            <div className="text-center sm:text-left">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-gray-900 dark:group-hover:text-white transition-all duration-500">
                V1 Michigan - Product Studio
              </h2>
              <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-all duration-500">
                Head of Product Studio & Recruitment
              </p>
              <span className="block w-full h-0.5 bg-gray-900 dark:bg-white transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
            </div>
          </Link>
          <Link
            href="https://aipisolutions.com/"
            className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 group transition-all duration-500 transform hover:scale-105"
          >
            <Image
              src="/aipisolutions_logo.jpeg"
              alt="AiPi Solutions logo"
              width={48}
              height={48}
              className="rounded-full"
            />
            <div className="text-center sm:text-left">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-gray-900 dark:group-hover:text-white transition-all duration-500">
                AiPi Solutions – Legal Infrastructure Team
              </h2>
              <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-all duration-500">
                Software Engineering + ML Intern
              </p>
              <span className="block w-full h-0.5 bg-gray-900 dark:bg-white transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
            </div>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default dynamic(() => Promise.resolve(PersonalWebsite), { ssr: false })