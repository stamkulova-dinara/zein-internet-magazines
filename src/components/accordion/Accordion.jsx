import React, { useEffect, useRef, useState } from "react";
import "./accordion.css";
import arrow from '../../assets/icon/arrow.png'
import arrow2 from '../../assets/icon/arrow2.png'

function AccordionComponent(props) {
  const [active, setActive] = useState(false);
  const content = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    console.log("Height for ", props.title, ": ", height);
  }, [height]);

  function toggleAccordion() {
    setActive(!active);
    setHeight(active ? "0px" : `${content.current.scrollHeight}px`);
  }

  return (
    <div className="accordion__section">
      <div
        className={`accordion ${active ? "active" : ""}`}
        onClick={toggleAccordion}
        key={props.index}
      >
        <p className="accordion__title">{props.title}</p>
        <div style={{ marginLeft: "20px" }}><img src={active ? arrow : arrow2 }/></div>
      </div>
      <div
        ref={content}
        style={{ maxHeight: `${height}` }}
        className="accordion__content"
      >
        <div
          className="accordion__text"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
    </div>
  );
}

export default AccordionComponent;
