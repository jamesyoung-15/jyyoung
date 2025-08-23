import "./Certifications.css";
import awsLogo from "../../../assets/icons/certs/aws-saa-logo.png";
import rhcsaLogo from "../../../assets/icons/certs/rhcsa-logo.png";

const Certifications = () => {
  return (
    <div className="certifications">
        <a
          href="https://www.credly.com/badges/8c67424d-21d9-49f8-8f44-9f1467c67c58/public_url"
          target="_blank"
          className="certification-item"
        >
          <span>Red Hat Certified System Administrator</span>
          <img
            src={rhcsaLogo}
            alt="(RHCSA)"
          />
        </a>
        <a
          href="https://www.credly.com/badges/3db937a4-b8be-4946-b739-1a41739debaf/public_url"
          target="_blank"
          className="certification-item"
        >
          <span>AWS Certified Solutions Architect</span>
          <img
            src={awsLogo}
            alt="(AWS SAA-03)"
          />
        </a>
    </div>
  );
};

export default Certifications;
