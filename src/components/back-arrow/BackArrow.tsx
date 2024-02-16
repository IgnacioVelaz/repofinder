import { IoArrowBack } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const BackArrow = () => {
  const navigate = useNavigate();

  const navigateBack = () => navigate(-1);

  return (
    <button
      aria-label="Go Back"
      type="button"
      onClick={navigateBack}
      className="text-clr-text hover:text-clr-accent active:text-clr-accent"
    >
      <IoArrowBack size={20} />
    </button>
  );
};

export default BackArrow;
