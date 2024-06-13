import { useEffect, useState } from 'react';
import { ImageUI } from '..';

const FigureAnimation = ({ radioCircleLg, radioCircleXl, variableID, duration,  }) => {
  const [circleStyle, setCircleStyle] = useState('');
  useEffect(() => {
    const circleXlKeyframes = `
.animation-circle-${variableID} {
  animation: circle-${variableID} ${duration}s linear infinite;
}
.animation-rotate-${variableID} {
  animation: rotate-${variableID} ${duration}s linear infinite;
}
@media screen and (min-width:1280px) {
  .animation-circle-${variableID} {
     animation: circleXl-${variableID} ${duration}s linear infinite;
  }
}

      @keyframes circleXl-${variableID}
       {
        0% {
          transform: rotate(0deg) translate(-${radioCircleXl}px) rotate(0deg);
        }
        100% {
          transform: rotate(360deg) translate(-${radioCircleXl}px) rotate(-360deg);
        }
      }
    `;

    const circleKeyframes = `
      @keyframes circle-${variableID} {
        0% {
          transform: rotate(0deg) translate(-${radioCircleLg}px) rotate(0deg);
        }
        100% {
          transform: rotate(360deg) translate(-${radioCircleLg}px) rotate(-360deg);
        }
      }
    `;

    const rotateKeyframes = `
      @keyframes rotate-${variableID} {
        0% {
          transform: rotate(0deg) translate(0) rotate(0deg);
        }
        100% {
          transform: rotate(360deg) translate(0) rotate(0deg);
        }
      }
    `;

    setCircleStyle(`${circleXlKeyframes} ${circleKeyframes} ${rotateKeyframes}`);
  }, [radioCircleLg, radioCircleXl]);

  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = circleStyle;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, [circleStyle]);

  return (
    <div className='relative w-full h-full flex items-center justify-center'>
      <div className='w-full h-full relative border border-[#DDDDE6] rounded-full flex flex-col items-center justify-center'>
        <div className='w-10 h-10 absolute'>
          <div className={`w-full h-full duration-300 animation-circle-${variableID}`}>
            <div className={`relative w-full h-full animation-rotate-${variableID}`}>
              <ImageUI src={'/image/elipse.svg'} objectFitContain imgStyle={'rotate-[40deg]'}/>
            </div> 
          </div>                        
        </div>
      </div>
    </div>
  );
};

export default FigureAnimation;
