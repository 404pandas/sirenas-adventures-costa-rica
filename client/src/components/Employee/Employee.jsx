import "./employee.css";

const Employee = ({ name, position, bio }) => {
  return (
    <div className='employee-card'>
      <div className='employee-image' />
      <div className='employee-info'>
        <h3 className='employee-name'>{name}</h3>
        <p className='employee-position'>{position}</p>
        {bio && <p className='employee-bio'>{bio}</p>}
      </div>
    </div>
  );
};

export default Employee;
