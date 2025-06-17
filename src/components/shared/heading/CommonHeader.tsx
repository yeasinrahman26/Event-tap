import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const CommonHeader = ({title,section}:{title:string,section?:string}) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-xl font-laila md:text-4xl font-bold text-gray-900">{title}</h2>
      {section?.length  && 
          <Link href={`${section}`} className="text-rose-500 flex items-center text-sm hover:underline">
          View All  <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
      }
      </div>
  )
}

export default CommonHeader