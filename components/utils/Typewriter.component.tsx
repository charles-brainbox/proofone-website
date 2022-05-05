import { FC, useEffect, useState } from "react";

interface ITypewriter {
  content: string | undefined;
  speed: number;
}
const TypeWriterComponent: FC<ITypewriter> = ({ content, speed = 1000 }) => {
  const [displayedContent, setDisplayedContent] = useState<string>("");
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const animKey = setInterval(() => {
      setIndex((index) => {
        if (index >= content.length - 1) {
          clearInterval(animKey);
          return index;
        }
        return index + 1;
      });
    }, speed);
  }, []);

  useEffect(() => {
    setDisplayedContent(
      (displayedContent) => displayedContent + content[index]
    );
  }, [index]);

  return <h1 className="title">{displayedContent}</h1>;
};

export default TypeWriterComponent;
