import { useRouter } from 'next/router';

const NavigationButton = ({ destination }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(destination);
    
  };

  return (
    <button
      className="mt-3 bg-orange-500 text-white rounded p-2 text-xs md:text-base"
      onClick={handleClick}
    >
      Learn More
    </button>
  );
};

export default NavigationButton;
