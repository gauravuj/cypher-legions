import Image from "next/image";
import React from "react";
import { useDrag } from "react-dnd";

interface PictureProps {
  id: number;
  url: string;
}

function Pictures({ id, url }: PictureProps) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <img
      alt="picture"
      ref={drag}
      src={url}
      width="150"
      height="150"
      className="rounded-xl my-3"
      style={{ border: isDragging ? "5px solid blue" : "0px" }}
    />
  );
}

export default Pictures;
