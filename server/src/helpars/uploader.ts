import multer from "multer";
import { fileFilter } from "./fileFilter";

const storage = multer.memoryStorage();

export const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 },
});
