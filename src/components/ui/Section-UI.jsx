import React from 'react'

const SectionUI = ({isRelative, className, paddingStyle}) => {
  return (
    <div className={`${isRelative && 'relative'} ${className}  ${paddingStyle ? " py-10 md:py-[50px]" : paddingStyle}`}>
      <div className="container">
        
      </div>
    </div>
  )
}

export default SectionUI