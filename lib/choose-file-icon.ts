import React from "react";
import {
   BsFillImageFill,
   BsFileEarmarkTextFill,
   BsFillCameraVideoFill,
} from "react-icons/bs";
import { AiFillFile } from "react-icons/ai";
import { PiSpeakerSimpleHighFill } from "react-icons/pi";

const ChooseFileIcon = (fileType: any) => {
   if (fileType.includes("video")) {
      return React.createElement(BsFillCameraVideoFill);
   }

   if (fileType.includes("image")) {
      return React.createElement(BsFillImageFill);
   }

   if (fileType.includes("audio")) {
      return React.createElement(PiSpeakerSimpleHighFill);
   }

   if (fileType.includes("text")) {
      return React.createElement(BsFileEarmarkTextFill);
   }

   return React.createElement(AiFillFile);
};

export default ChooseFileIcon;
