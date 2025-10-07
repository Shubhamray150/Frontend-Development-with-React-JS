import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { convertToRaw, EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Editors = ({ onData }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (state) => {
    setEditorState(state);
    handlePrint(state);
  };

  const handlePrint = (state) => {
    // const plainText = editorState.getCurrentContent().getPlainText();
    const rawContent = convertToRaw(state.getCurrentContent());
    const html = draftToHtml(rawContent);
    onData(html);
  };

  return (
    <>
      <Editor
        onChange={handlePrint}
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        wrapperStyle={{ border: "1px solid #dee2e6", borderRadius: "5px" }}
        editorStyle={{ minHeight: "400px", padding: "15px" }}
        toolbarClassName="toolbarClassName"
      />
    </>
  );
};

export default Editors;
