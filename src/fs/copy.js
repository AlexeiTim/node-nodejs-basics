import { promises as fs } from "fs";
import path from "path";

async function dirExist(path) {
  try {
    await fs.stat(path);
    console.log("has dir");
    return true;
  } catch (e) {
    return false;
  }
}

async function copyDir(src, dest) {
  try {
    await fs.cp(src, dest, { recursive: true });
    return {
      success: true,
    };
  } catch (e) {
    return {
      success: false,
    };
  }
}

const copy = async () => {
  const __dirname = import.meta.dirname;
  const copyDirPath = path.resolve(__dirname, "./files");
  const targetDirPath = path.resolve(__dirname, "./files_copy");
  const FS_OPERATION_ERROR = "FS operation failed";

  const isTargetDirExist = await dirExist(copyDirPath);
  if (!isTargetDirExist) {
    throw new Error(FS_OPERATION_ERROR);
  }

  const isCopyDirExist = await dirExist(targetDirPath);
  if (isCopyDirExist) {
    throw new Error(FS_OPERATION_ERROR);
  }

  const { success } = await copyDir(copyDirPath, targetDirPath);
  if (!success) {
    throw new Error(FS_OPERATION_ERROR);
  }
};

await copy();
