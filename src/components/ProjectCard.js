import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
      <a style={{color: "#fff"}} href={link} target="_blank">
      <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          
        </div>
      </a>
      </div>
    </Col>
  )
}
