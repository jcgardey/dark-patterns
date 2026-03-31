import React from "react";
import { getStars } from "../../Pages/Teatrum/Event";

function CommentCard({ comment, translation}) {
  return (
    <div className="flex flex-col sm:flex-row p-2 items-start sm:items-center justify-between gap-3">
      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
        <i className="fa-solid fa-user"></i>
      </div>

      <div className="flex flex-1 flex-col">
        <p className="font-medium ">{comment.name}</p>
        <p className="italic">"{translation}"</p>
      </div>

      <p>{getStars(comment.rating)}</p>
    </div>
  );
}

export default CommentCard;
