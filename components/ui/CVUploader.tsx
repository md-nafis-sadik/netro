"use client";

import { FileIcon } from "@/services/assets/svgs";
import { X } from "lucide-react";
import { useRef, useState } from "react";

const CVUploader = ({
  id = "file",
  label = "Upload your CV",
  accept = "application/pdf",
  extentions = ["pdf"],
  setter = (_file: File | null) => {},
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploaded = e.target.files?.[0];
    const ext = uploaded?.name?.split(".").pop()?.toLowerCase();

    if (uploaded && extentions.includes(ext!)) {
      setFile(uploaded);
      setter(uploaded);
      if (inputRef.current) {
        inputRef.current.value = ""; // allow re-uploading same file
      }
    }
  };

  const handleRemove = () => {
    setFile(null);
    setter(null);
  };

  return (
    <label
      htmlFor={id}
      className="inputDark border-dashed flex items-center justify-between gap-2 overflow-hidden truncate hover:cursor-pointer"
    >
      <input
        ref={inputRef}
        type="file"
        id={id}
        hidden
        accept={accept}
        onChange={handleChange}
      />

      {file ? (
        <>
          <p className="w-full text-main-500 truncate">{file.name}</p>
          <button type="button" onClick={handleRemove}>
            <X className="min-w-5 min-h-5 text-error-400" />
          </button>
        </>
      ) : (
        <>
          <p className="w-full text-text-700 truncate">{label}</p>
          <FileIcon className="min-w-6 min-h-6" />
        </>
      )}
    </label>
  );
};

export default CVUploader;
