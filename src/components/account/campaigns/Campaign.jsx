const Campaign = ({ name, status, scheduledAt, sentAt, sentTo }) => {
  return (
    <div>
      <div>
        <div>{name}</div>
        <div>{status}</div>
      </div>
      <div>
        <div>
          <div>
            {status === "sent"
              ? `Sent ${sentAt}`
              : status === "scheduled"
              ? `Scheduled at ${scheduledAt}`
              : ""}
          </div>
          <div>{sentTo.length} recipients</div>
        </div>
        <div>
          <button>View Campaign</button>
        </div>
      </div>
    </div>
  );
};

export default Campaign;
