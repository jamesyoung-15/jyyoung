import "./Certifications.css";

const Certifications = () => {
  return (
    <div className="certifications">
      <ul>
        <li>
          <a
            href="https://www.credly.com/badges/8c67424d-21d9-49f8-8f44-9f1467c67c58/public_url"
            target="_blank"
          >
            <span>Red Hat Certified System Administrator (RHCSA)</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.credly.com/badges/3db937a4-b8be-4946-b739-1a41739debaf/public_url"
            target="_blank"
          >
            <span>AWS Certified Solutions Architect (AWS SAA-03)</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Certifications;
