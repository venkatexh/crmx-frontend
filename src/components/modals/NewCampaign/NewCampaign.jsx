import { useState } from "react";
import FirstState from "./FirstState";
import SecondState from "./SecondState";
import ThirdState from "./ThirdState";

const NewCampaign = () => {
  const [name, setName] = useState("");
  const [tags, setTags] = useState([]);
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");
  const [html, setHtml] = useState("");
  const [from, setFrom] = useState("");
  const [createdCampaign, setCreatedCampaign] = useState(null);
  const [currentState, setCurrentState] = useState(0);

  const handleTagAddition = (tag) => {
    if (tags.filter((t) => t.id === tag._id).length > 0) {
      setTags(tags.filter((found) => found.id !== tag._id));
    } else {
      setTags((prev) => [...prev, { id: tag._id, name: tag.name }]);
    }
  };

  const stateMap = new Map();
  stateMap.set(
    0,
    <FirstState
      name={name}
      tags={tags}
      handleNameChange={(e) => setName(e.target.value)}
      handleStateChange={() => setCurrentState(currentState + 1)}
      handleTagAddition={handleTagAddition}
    />
  );

  stateMap.set(
    1,
    <SecondState
      subject={subject}
      from={from}
      text={text}
      html={html}
      name={name}
      tags={tags}
      handleSubjectChange={(e) => setSubject(e.target.value)}
      handleTextChange={(e) => setText(e.target.value)}
      handleHtmlChange={(e) => setHtml(e.target.value)}
      handleFromChange={(e) => setFrom(e.target.value)}
      handleCurrentCampaign={(id) => setCreatedCampaign(id)}
      handleStateChange={() => setCurrentState(currentState + 1)}
      handlePrevState={() => setCurrentState(currentState - 1)}
    />
  );

  stateMap.set(2, <ThirdState campaignId={createdCampaign} />);

  const componentToRender = () => {
    return stateMap.get(currentState);
  };

  return <>{componentToRender()}</>;
};

export default NewCampaign;
