import React from 'react'

const SectionUI = ({isRelative, className, paddingStyle, children}) => {
  return (
    <section className={`${isRelative ? '' : 'relative'} ${className}  ${paddingStyle ? paddingStyle : " py-5 md:py-[50px]"}`}>
      <div className="container">
        {children}
      </div>
    </section>
  )
}

export default SectionUI