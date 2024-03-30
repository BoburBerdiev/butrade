import Link from "next/link"

const ButtonUI = ({text, clasName, onClick, href, leftIcon, rightIcon , type, target, btnFill , btnCard, btnIcon  }) => {
  return (
    <>
      {
        href ?

        <Link href={href} onClick={onClick} target={target} className={`${clasName && clasName} ${btnIcon ? `bg-currentBlue text-white flex items-center justify-center p-[7px] ${btnHref ? 'rounded-full' : "rounded-lg" }` : `${btnFill ? `text-white bg-currentBlue py-2.5 w-full rounded-[30px]` : `border py-2.5 px-5 md:py-3 md:px-6 inline-flex items-center gap-1.5 border-currentBlue ${btnCard ? " rounded-lg " : " rounded-[30px]" } `}` }   `}>
          <span>
            {leftIcon && leftIcon}
          </span>
          {
            text &&
            <span className={`text-xs md:text-sm font-notoSans font-medium ${btnFill ? '' : `text-currentBlue `} `}>
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


       <button type={type} onClick={onClick} className={`${clasName && clasName} ${btnIcon ? `bg-currentBlue text-white flex items-center justify-center p-[7px] ${btnHref ? 'rounded-full' : "rounded-lg" }` : `${btnFill ? `text-white bg-currentBlue py-2.5 w-full rounded-[30px]` : `border py-2.5 px-5 md:py-3 md:px-6 flex items-center gap-1.5 border-currentBlue ${btnCard ? " rounded-lg " : " rounded-[30px]" } `}` }   `}  >
          <span>
            {leftIcon && leftIcon}
          </span>
          {
            text &&
            <span className={`text-xs md:text-sm font-notoSans font-medium ${btnFill ? '' : `text-currentBlue `} `}>
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