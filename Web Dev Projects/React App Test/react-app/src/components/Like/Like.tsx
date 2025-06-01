//import statements
import React, { useState } from "react";
import { FcLike, FcDislike } from "react-icons/fc";

interface LikeProps {
  liked: boolean;
  onClick: () => void;
}
function Like({ onClick, liked }: LikeProps) {
  return (
    <>
      {liked && <FcLike onClick={onClick} />}
      {!liked && <FcDislike onClick={onClick} />}
    </>
  );
}

export default Like;
