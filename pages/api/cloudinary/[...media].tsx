import {
  mediaHandlerConfig,
  createMediaHandler,
} from "next-tinacms-cloudinary/dist/handlers";

import { isAuthorized } from "@tinacms/auth";

declare var process: {
  env: {
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: string;
    NEXT_PUBLIC_CLOUDINARY_API_KEY: string;
    CLOUDINARY_API_SECRET: string;
    NEXT_PUBLIC_USE_LOCAL_CLIENT: string;
  };
};

export const config = mediaHandlerConfig;

export default createMediaHandler({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  authorized: async (req) => {
    if (process.env.NEXT_PUBLIC_USE_LOCAL_CLIENT === "1") {
      return true;
    }
    try {
      const user = await isAuthorized(req);
      return user && user.verified;
    } catch (e) {
      console.error(e);
      return false;
    }
  },
});
