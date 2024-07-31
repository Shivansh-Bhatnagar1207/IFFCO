import React from 'react'
import ReportForm from './ReportForm'

export default function Report() {
  return (
    <div className='w-screen h-screen bg-bgc overflow-auto '>
        <header className="bg-pri h-[8vh] font-bold text-white p-2 text-xl sticky top-0">
            Report Generation
        </header>
        <section>
        {/* <h2 className="p-3 text-2xl font-bold ">New Project</h2> */}
        <hr className='h-px bg-gray-300 border-0'/>

        <ReportForm/>
        </section>
    </div>
  )
}
