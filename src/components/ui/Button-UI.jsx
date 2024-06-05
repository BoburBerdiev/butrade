import Link from "next/link"

const ButtonUI = ({text, clasName, onClick, href, leftIcon, rightIcon , type, target, btnFill , btnCard, btnIcon , btnHref }) => {
  return (
    <>
      {
        href ?

        <Link href={href}  target={target} className={`${clasName && clasName} ${btnIcon ? `bg-currentBlue w-full text-white flex items-center justify-center h-full p-[9px] ${btnHref ? 'rounded-full' : "rounded-lg" }` : `${btnFill ? `text-white bg-currentBlue py-2.5 px-5 md:px-10 rounded-[30px]` : `border  inline-flex hover:bg-currentBlue text-currentBlue duration-200 hover:text-white items-center gap-1.5 border-currentBlue ${btnCard ? " rounded-lg justify-center py-1.5 w-full md:py-2 " : " rounded-[30px] py-2.5 px-5 md:py-3 md:px-6" } `}` }   `}>
          <span>
            {leftIcon && leftIcon}
          </span>
          {
            text &&
            <span className={`text-sm font-notoSans font-medium ${btnFill ? '' : ` `} `}>
              {
                text
              }
            </span>
          }
          <span>
            {rightIcon && rightIcon}
          </span>
        </Link>

        :


       <button type={type} onClick={onClick} className={`${clasName && clasName}  ${btnIcon ? `bg-currentBlue w-full text-white flex items-center justify-center h-full p-[9px] ${btnHref ? 'rounded-full' : "rounded-lg" }` : `${btnFill ? `text-white bg-currentBlue py-2.5 px-5 md:px-10 rounded-[30px]` : `border  flex hover:bg-currentBlue text-currentBlue duration-200 hover:text-white items-center gap-1.5 border-currentBlue ${btnCard ? " rounded-lg justify-center py-1.5 w-full md:py-2 " : " rounded-[30px] py-2.5 px-5 md:py-3 md:px-6" } `}` }   `}  >
          <span>
            {leftIcon && leftIcon}
          </span>
          {
            text &&
            <span className={`text-sm font-notoSans font-medium ${btnFill ? '' : ` `} `}>
              {
                text
              }
            </span>
          }
          <span>
            {rightIcon && rightIcon}
          </span>
       </button>
      }
    </>
  )
}

export default ButtonUI