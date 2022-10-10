import "./App.css";
import VastPlayer from "vast-player-react";
import { useEffect, useState } from "react";
import axios from "axios";

const videoOptions = {
  disableControls: false,
};

function Meridol() {
  const [tag, setTag] = useState("");

  useEffect(() => {
    axios
      .get("./data/meridol.xml")
      .then((xml) => {
        setTag(xml.data);
      })
      .catch((e) => console.log(e));
  }, []);

  if (tag === "") return <div>test</div>;
  return (
    <div>
      <VastPlayer height={80} width={100} vastXml={tag} videoOptions={videoOptions} />
    </div>
  );
}

export default Meridol;
