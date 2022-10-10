import "./App.css";
import VastPlayer from "vast-player-react";
import { useEffect, useState } from "react";
import axios from "axios";

const videoOptions = {
  disableControls: false,
};

function Elmex() {
  const [tag, setTag] = useState("");

  useEffect(() => {
    axios
      .get("./data/elmex.xml")
      .then((xml) => setTag(xml.data))
      .catch((e) => console.log(e));
  }, []);

  if (tag === "") return <div>test</div>;
  return <VastPlayer height={80} width={100} vastXml={tag} videoOptions={videoOptions} />;
}

export default Elmex;
