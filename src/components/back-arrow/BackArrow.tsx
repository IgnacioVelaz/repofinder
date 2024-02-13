import { IoArrowBack } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const BackArrow = () => {
  const navigate = useNavigate();

  const navigateBack = () => navigate(-1);

  return (
    <button aria-label="Go Back" type="button" onClick={navigateBack}>
      <IoArrowBack size={20} className="text-clr-text" />
    </button>
  );
};

export default BackArrow;
