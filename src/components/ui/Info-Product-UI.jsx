
const InfoProductUI = ({card ,title ,text}) => {
  return (
      <div
          className={` ${card ? 'text-xs xl:text-sm' : 'text-sm xl:text-base'} flex justify-between items-end  w-full `}>
        <p className='text-currentGray whitespace-nowrap '>{title}</p>
        <div className='h-full w-full border-b flex-1 border-dashed'></div>
        <p className='text-black max-w-1/2 text-right text-wrap'>{text}</p>
      </div>
  );
};

export default InfoProductUI;