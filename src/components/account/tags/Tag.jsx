const Tag = ({ name, length, createdAt, updatedAt }) => {
  return (
    <div>
      <div>
        <div>{name}</div>
        <div>{length} contacts</div>
      </div>
      <div>
        <div>Created at {createdAt}</div>
        <div>Last updated at {updatedAt}</div>
      </div>
      <div>
        <button>View Tag</button>
      </div>
    </div>
  );
};

export default Tag;
