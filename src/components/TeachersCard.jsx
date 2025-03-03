export const TeachersCard = ({fullName, subject, description, img}) => {
  return (
    <li className="teachers__card">
      <img
        src={img}
        alt="teacgers card"
      />
      <div className="teachers__card-content">
        <h3>{fullName}</h3>
        <h4>{subject}</h4>
        <p>
          {description}
        </p>
      </div>
    </li>
  );
};
