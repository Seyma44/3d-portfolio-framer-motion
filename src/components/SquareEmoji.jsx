import React from "react"
import { EmojiCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { emoji } from "../constants"

const SquareEmoji = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {emoji.map((emoji) => (
        <div className='w-40 h-40' key={emoji.name}>
          <EmojiCanvas icon={emoji.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(SquareEmoji, "");