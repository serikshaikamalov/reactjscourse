import { useRef, useState } from "react";
import "./messenger.css";

const friends = ["Aidos", "Arman", "Berik"];

export function Messenger() {
  // const [friend, setFriend] = useState();
  // const [text, setText] = useState("");
  // const [fullText, setFullText] = useState("");
  const friendRef = useRef();
  const textRef = useRef();
  const fullTextRef = useRef();

  const [status, setStatus] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Form: ", {
      friend: friendRef.current.value,
      text: textRef.current.value,
      fullText: fullTextRef.current.value,
    });

    setStatus("pending");

    setTimeout(() => {
      setStatus("done");
    }, 2000);
  };

  console.log("Rendering");

  if (status === "pending") {
    return <div className="container">Sending...</div>;
  }

  if (status === "done") {
    return <div className="container">Your message is sent</div>;
  }

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <div className="flex">
          <label htmlFor="friends">
            Please choose your friend from the list
          </label>
          <select ref={friendRef} id="friends">
            {friends.map((f, index) => {
              return <option key={index}>{f}</option>;
            })}
          </select>
        </div>

        <div className="flex">
          <label htmlFor="text">Your title</label>
          <input
            id="text"
            placeholder="Your title"
            type="text"
            name="text"
            ref={textRef}
          />
        </div>

        <div className="flex">
          <label htmlFor="fullText">Your full text</label>
          <textarea
            id="fullText"
            placeholder="Enter your full text"
            ref={fullTextRef}
          ></textarea>
        </div>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}
