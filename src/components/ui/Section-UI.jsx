import React from 'react'

const SectionUI = ({isRelative, className, paddingStyle, children}) => {
  return (
    <section className={`${isRelative && 'relative'} ${className}  ${paddingStyle ? " py-10 md:py-[50px]" : paddingStyle}`}>
      <div className="container">
        {children}
      </div>
    </section>
  )
}

export default SectionUI