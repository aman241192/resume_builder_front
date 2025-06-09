// import React, { useState } from "react";
// import { PlusOutlined } from "@ant-design/icons";
// import { Upload, Modal } from "antd";

// /**
//  * Converts a File to base64 for preview.
//  */
// const getBase64 = (file) =>
//   new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => resolve(reader.result);
//     reader.onerror = reject;
//   });

// const UploadImage = ({ fileList = [], onChange, maxFiles = 1 }) => {
//   const [previewOpen, setPreviewOpen] = useState(false);
//   const [previewImage, setPreviewImage] = useState("");
//   const [previewTitle, setPreviewTitle] = useState("");

//   const handleCancel = () => setPreviewOpen(false);

//   const handlePreview = async (file) => {
//     if (!file.url && !file.preview) {
//       file.preview = await getBase64(file.originFileObj);
//     }
//     setPreviewImage(file.url || file.preview);
//     setPreviewOpen(true);
//     setPreviewTitle(
//       file.name || file.url?.substring(file.url.lastIndexOf("/") + 1)
//     );
//   };

//   const uploadButton = (
//     <div>
//       <PlusOutlined />
//       <div style={{ marginTop: 8 }}>Upload</div>
//     </div>
//   );

//   return (
//     <>
//       <Upload
//         action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
//         listType="picture-circle"
//         fileList={fileList}
//         onPreview={handlePreview}
//         onChange={onChange}
//       >
//         {fileList.length >= maxFiles ? null : uploadButton}
//       </Upload>

//       <Modal
//         open={previewOpen}
//         title={previewTitle}
//         footer={null}
//         onCancel={handleCancel}
//       >
//         <img alt="preview" style={{ width: "100%" }} src={previewImage} />
//       </Modal>
//     </>
//   );
// };

// export default UploadImage;

import React, { useState, useCallback } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Upload, Modal } from "antd";

const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });

const UploadImage = React.memo(
  ({
    action = "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
    fileList = [],
    onChange,
    maxFiles = 1,
    listType = "picture-circle",
    disabled = false,
    ...uploadProps
  }) => {
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState("");
    const [previewTitle, setPreviewTitle] = useState("");

    const handleCancel = useCallback(() => setPreviewOpen(false), []);

    const handlePreview = useCallback(async (file) => {
      if (!file.url && !file.preview) {
        file.preview = await toBase64(file.originFileObj);
      }
      setPreviewImage(file.url || file.preview);
      setPreviewOpen(true);
      setPreviewTitle(
        file.name || file.url?.substring(file.url.lastIndexOf("/") + 1)
      );
    }, []);

    const uploadButton = (
      <div>
        <PlusOutlined />
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>
    );

    return (
      <>
        <Upload
          action={action}
          listType={listType}
          fileList={fileList}
          onPreview={handlePreview}
          onChange={onChange}
          disabled={disabled}
          {...uploadProps}
        >
          {fileList.length >= maxFiles ? null : uploadButton}
        </Upload>

        <Modal
          open={previewOpen}
          title={previewTitle}
          footer={null}
          onCancel={handleCancel}
        >
          <img alt="preview" style={{ width: "100%" }} src={previewImage} />
        </Modal>
      </>
    );
  }
);

UploadImage.displayName = "UploadImage";

export default UploadImage;
