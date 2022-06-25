import React from 'react';
import { useNavigate } from 'react-router-dom';
import propTypes from 'prop-types';
import { IoArrowForwardCircleOutline } from 'react-icons/io5';

const findAirQuality = (num) => {
  let result = '';
  switch (num) {
    case 1:
      result = 'Good';
      break;
    case 2:
      result = 'Fair';
      break;
    case 3:
      result = 'Moderate';
      break;
    case 4:
      result = 'Poor';
      break;
    case 5:
      result = 'Very Poor';
      break;
    default:
      break;
  }
  return result;
};

const CityCard = ({ level, name, id }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/detail/${id}`);
  };
  return (
    <div className="d-flex cityCard">
      <button type="button" className="forward-arrow transparent" onClick={handleClick}>
        <IoArrowForwardCircleOutline />
      </button>
      <div className=" d-flex cardName">
        <h1>{name}</h1>
        <span>{findAirQuality(level)}</span>
      </div>
    </div>
  );
};

CityCard.propTypes = {
  name: propTypes.string.isRequired,
  level: propTypes.number.isRequired,
  id: propTypes.string.isRequired,
};

export default CityCard;
