import { useState } from "react";

const Section = ({ isVisible, setIsVisible, name, description }) => {
  return (
    <>
      <div className="m-2 p-3 bg-slate-50 border border-cyan-950">
        <button
          className="w-full  flex justify-start cursor-pointer text-2xl "
          onClick={() => (isVisible ? setIsVisible(false) : setIsVisible(true))}
        >
          {name}
        </button>
        {isVisible && <h1>{description}</h1>}
      </div>
      {/* {isVisible ? (
            <button
              className="cursor-pointer underline"
              onClick={() => setIsVisible(false)}
            >
              hide
            </button>
          ) : (
            <button
              className="cursor-pointer underline"
              onClick={() => setIsVisible(true)}
            >
              show
            </button>
          )} */}
    </>
  );
};
const desc =
  "Lorem ipsum is a placeholder text used in graphic design and publishing. It's a short paragraph that includes all the letters of the alphabet, with the characters spread out evenly. This draws the reader's attention to the text's layout instead of its content. Lorem ipsum is a pseudo-Latin text that's been the standard dummy text in the printing and typesetting industry since the 1500s. It's derived from the Latin phrase dolorem ipsum, which means pain itself. Lorem ipsum is used to help designers plan out where content will go without having to wait for the content to be written and approved. It's also used to demonstrate the visual form of a document or typeface without relying on meaningful content.";
const Instamart = () => {
  const [viewSection, setViewSection] = useState("");
  return (
    <>
      <h1 className="font-semibold text-3xl m-2">What is Instamart...?</h1>
      <Section
        name={"Team Instamart"}
        description={desc}
        isVisible={viewSection === "team"}
        setIsVisible={(visibility) =>
          visibility ? setViewSection("team") : setViewSection("")
        }
      ></Section>
      <Section
        name={"Product Team"}
        description={desc}
        isVisible={viewSection === "product"}
        setIsVisible={(visibility) =>
          visibility ? setViewSection("product") : setViewSection("")
        }
      ></Section>
      <Section
        name={"Career in Instamart"}
        description={desc}
        isVisible={viewSection === "career"}
        setIsVisible={(visibility) =>
          visibility ? setViewSection("career") : setViewSection("")
        }
      ></Section>
    </>

    //About instamart
    // Career Instamart
    //Product
    // What is Instamart?
  );
};
export default Instamart;
