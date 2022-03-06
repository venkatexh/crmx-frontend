import { useEffect, useState } from "react";
import hostHeader from "../../config/host";
import Axios from "axios";
import { useHistory } from "react-router";

const OrganizationInvitation = (props) => {
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(true);
  const history = useHistory();

  useEffect(() => {
    Axios.post(`${hostHeader.url}/api/organization/verify-invite`, {
      encryptedEmail: props.match.params.id,
    }).then((res) => {
      if (res.status === 200) {
        history.push("/signup");
      } else {
        setLoading(false);
        setSuccess(false);
      }
    });
  });

  return (
    <div>
      {loading ? (
        <div>
          <img src={"/loaders/comp_loader.gif"} />
        </div>
      ) : null}
      {success ? (
        <div>Please wait while we verify your invitation...</div>
      ) : (
        <div>
          Verification unsuccessful. Please contact your organization's admin to
          proceed further.
        </div>
      )}
    </div>
  );
};

export default OrganizationInvitation;
