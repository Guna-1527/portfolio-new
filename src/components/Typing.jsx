import { TypeAnimation } from 'react-type-animation';

const Typing = () => {
  return (
    <TypeAnimation
    className="bg-bg-yellow px-4 py-2 inline text-2xl font-bold mt-5 font-mono"
      sequence={[
        "Java developer",
        1000,
        "Full stack Developer",
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};

export default Typing;
