
const InputUI = ({type , clasName , placeholder, onChange , register}) => {
  return (
    <>
      <input type={type} {...register} className={`${clasName} focus:outline-none focus:ring focus:ring-currentBlue px-4 py-3 w-full md:px-5 md:py-4 rounded-lg text-currentGray shadow-infoProductPrice`} placeholder={placeholder} onChange={onChange} />
    </>
  )
}

export default InputUI