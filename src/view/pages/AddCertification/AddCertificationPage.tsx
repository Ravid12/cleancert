import { certificationRepository } from "../../../server/db/CertificationRepository";

export const AddCertification = () => {
  const formData = {
    name: '',
    description: ''
  }

  const handleSubmit = (event) => {
    console.log(event);
  };

  const addCertification = () => {
    certificationRepository.createCertification(null); //TODO: suss this
  };

  return (
    <div className="AddCertification">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={formData.name}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            value={formData.description}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
