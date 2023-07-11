import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const ContactCard = (props) => {
  const { contact } = props;
  const { actions } = useContext(Context);
  return (
    <div className="col-12 d-flex justify-content-between border">
      <div className="d-flex flex-row mt-4">
      <img src="https://media.istockphoto.com/id/1425470157/es/foto/ilustraci%C3%B3n-rasterizada-de-un-hombre-sosteniendo-un-tel%C3%A9fono-con-moneda-joven-con-una-camiseta.jpg?s=612x612&w=0&k=20&c=HLuR0hzJdlhZINZb3VdAGdG-rVc-DXPSo-jUfYPYoMM=" style= {{"height":150, "width":150}} alt="Mike Anamendolla" className="rounded-circle mx-auto d-block img-fluid" />
        <div className="d-flex align-items-start flex-column justify-content-start ms-3 mt-3">
          <h3>{contact.full_name}</h3>
          <p><i className="fas fa-map-marker-alt me-2"></i>{contact.address}</p>
          <p><i className="fas fa-phone me-2"></i>{contact.phone}</p>
          <p><i className="fas fa-envelope me-2"></i>{contact.email}</p>
        </div>
      </div>

      <div>
        <Link to={`/add-contact/${contact.id}`}>
          <i className="fas fa-pencil-alt m-3"></i>
        </Link>

        <i
          onClick={() => actions.deleteContact(contact.id)}
          className="fas fa-trash-alt m-3"
        ></i>
      </div>
    </div>
  );
};

export default ContactCard;