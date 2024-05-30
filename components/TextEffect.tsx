import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        'Fullstack Developer',
        1500, 
        'Data Scientist',
        1500
      ]}
      
      speed={50}
      className='text-[2rem] md:text-[3rem] text-[#65def0] font-bold uppercase'
      repeat={Infinity}
    />
  );
};

export default TextEffect;