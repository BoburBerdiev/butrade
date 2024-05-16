
const InfoProductUI = ({card}) => {
  return (
      <div
          className={` ${card ? 'text-xs xl:text-sm' : 'text-sm xl:text-base'} flex justify-between items-end  w-full `}>
        <p className='text-currentGray whitespace-nowrap '>Lorem ipsum dolor.</p>
        <div className='h-full w-full border-b flex-1 border-dashed'></div>
        <p className='text-black max-w-1/2 text-right text-wrap'>245</p>
      </div>
  );
};

export default InfoProductUI;