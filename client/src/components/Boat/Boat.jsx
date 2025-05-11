import "./boat.css";

const Boat = ({ name, diverSeats, totalSeats, description, features }) => {
  return (
    <div className='boat-card'>
      <div className='boat-image' />
      <div className='boat-info'>
        <h3 className='boat-name'>{name}</h3>
        <p className='boat-seats'>
          {diverSeats} diver seats, {totalSeats} total seats
        </p>
        <p className='boat-description mb-2'>{description}</p>
        {features && (
          <ul className='text-sm text-gray-700 list-disc list-inside'>
            {features.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Boat;
