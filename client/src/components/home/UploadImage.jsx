import Dropzone from "react-dropzone";
import useNotificationHook from "../../hooks/useNotificationHook";

const Upload = ({ onUpload, fileData }) => {
  const toast = useNotificationHook();
  return (
    <>
      <h1 className="text-3xl font-bold text-center mt-8 mb-6 text-gray-800">
        <span className="text-blue-600">Upload, Auto-Fill</span> &amp;{" "}
        <span className="text-green-600">Edit</span> Your Contact Information
      </h1>
      <Dropzone
        // disabled={fileData ? true : false}
        onDrop={(acceptedFiles) => {
          if (acceptedFiles.length > 0) {
            const file = acceptedFiles[0];
            onUpload(file);
          } else toast().warning("Please select a file");
        }}
        accept={{
          "image/png": [".png"],
          "image/jpeg": [".jpeg", ".jpg"],
          "image/jpg": [".jpg"],
        }}
      >
        {({ getRootProps, getInputProps }) => {
          return (
            <div
              {...getRootProps()}
              className="flex items-center justify-center w-full"
            >
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-35 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer"
              >
                <div className="flex flex-col items-center justify-center p-5">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">
                      {fileData ? "Click to change" : "Click to upload"}
                    </span>{" "}
                    or drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    PNG, JPG, JPEG
                  </p>
                  {fileData && (
                    <p className="mt-3 text-sm text-gray-500 text-center">
                      <span className="text-black"> Selected file</span>:{" "}
                      {fileData.name}
                    </p>
                  )}
                </div>
                <input {...getInputProps()} />
              </label>
            </div>
          );
        }}
      </Dropzone>
    </>
  );
};

export default Upload;
