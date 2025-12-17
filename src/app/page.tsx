import React from 'react'

const page = () => {
  return (
    <div><figure className="md:fbg-green-800 rounded-x5 p-8 green:bg-green-800">
  <img className="w-40 h-50 rounded-full mx-auto" src="/hasnain.jpeg" alt="" width="384" height="512"/>
  <div className="pt-6 text-center space-y-8"> 
    <blockquote>
      <p className="text-center font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-red-500 dark:text-blue-400">
        PAIB
      </div>
      <div className="text-green-700 dark:text blue-500">
        Staff Engineer,Ali Hasnain
      </div>
    </figcaption>
  </div>
</figure>
      
    </div>
  )
}

export default page
