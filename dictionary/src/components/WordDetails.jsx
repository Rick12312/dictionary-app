import React from "react";
import { Fragment } from "react";
import { useEffect, useState } from "react";
import { FcSpeaker } from "react-icons/fc";

function WordDetails({ data }) {
  const [parseData, setParseData] = useState([]);

  const playAudio = () => {
    let audio = new Audio(parseData.phonetics[0].audio);
    audio.play();
  };

  useEffect(() => {
    setParseData(data);
  }, [data]);

  return (
    <>
      <div className="worddetails">
        {parseData &&
            
          parseData.map((definitions, i) => (
            <div className="worddetails_container" key={i}>
              <hr />
              {definitions.meanings.map((meaning) => (
                <>
                  <h4 className="worddetails_subtitle">Parts of speech</h4>
                  <div key={meaning} className="worddetails_partofspeech">
                    {meaning.partOfSpeech}
                  </div>
                  {meaning.definitions.map((definition, idx) => (
                    <p key={definition.definition}>
                      {" "}
                      {`${idx + 1}. `}
                      {definition.definition}
                    </p>
                  ))}
                  <br />
                </>
              ))}
            </div>
          ))}
      </div>
    </>
  );
}
export default WordDetails;
