export const TeachersCard = ({ fullName, subject, description, img }) => {
  return (
    <li className="teachers__card" data-aos="flip-left">
      <img src={img} alt="teachers card" />
      <div className="teachers__card-content" data-aos="fade-up">
        <h3>{fullName}</h3>
        <h4>{subject}</h4>
        <p>{description}</p>
      </div>
    </li>
  );
};
