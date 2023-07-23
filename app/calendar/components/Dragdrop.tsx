import React, { useState } from "react";
import Pictures from "./Pictures";
import { useDrop } from "react-dnd";

const Piclist = [
  {
    id: 1,
    url: "https://i.pinimg.com/736x/6c/f2/f1/6cf2f189848a4df83130c96277e4d2d8.jpg",
  },
  {
    id: 2,
    url: "https://static.vecteezy.com/system/resources/thumbnails/007/695/742/small_2x/cute-doodle-of-game-night-sticker-free-vector.jpg",
  },
  {
    id: 3,
    url: "https://as1.ftcdn.net/v2/jpg/02/24/37/04/1000_F_224370413_b2XufkK1VTotq3nsr7Zun6ZyV4hrwpVN.jpg",
  },
  {
    id: 4,
    url: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/picnic-logo-template-design-d6b2cc9bef8bd447b6c5691a43a127d6_screen.jpg?ts=1647417015",
  },
];

function Dragdrop() {
  const [board, setBoard] = useState<{ id: number; url: string }[]>([]);

  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: "image",
      drop: (item: { id: number }) => addpictoboard(item.id),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    []
  );

  const addpictoboard = (id: number) => {
    const pl = Piclist.filter((pic) => id === pic.id);
    if (pl.length > 0) {
      setBoard((prevBoard) => [...prevBoard, ...pl]);
    }
  };

  return (
    <>
      <div ref={drop} className="stickers">
        {Piclist.map((pic) => {
          return <Pictures key={pic.id} id={pic.id} url={pic.url} />;
        })}
      </div>

      <div className="Board">
        {board.map((pic) => {
          return <Pictures key={pic.id} id={pic.id} url={pic.url} />;
        })}
      </div>
    </>
  );
}

export default Dragdrop;
