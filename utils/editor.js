import EditorJs from "@editorjs/editorjs";
import  Header from "@editorjs/header";
import SimpleImage from "@editorjs/simple-image";
import Delimiter from "@editorjs/delimiter";
import List  from "@editorjs/list";
import Checklist from  "@editorjs/checklist";
import Quote from '@editorjs/quote';
import CodeTool from "@editorjs/code";
import Embed from "@editorjs/embed";
import Table from "@editorjs/table";
import LinkTool from "@editorjs/link";
import Warning from "@editorjs/warning";
import Marker  from "@editorjs/marker";
import InlineCode from  "@editorjs/inline-code";

 

const EditorInit = () => {
  const editor = new EditorJs({
    /**
     * Id of Element that should contain Editor instance
     */ holderId: "editor",
    tools: {
      /**
       * Each Tool is a Plugin. Pass them via 'class' option with necessary settings {@link docs/tools.md}
       */
      header: {
        class: Header,
        inlineToolbar: ["link"],
        config: {
          placeholder: "Header"
        },
        shortcut: "CMD+SHIFT+H"
      },

      /**
       * Or pass class directly without any configuration
       */
      image: {
        class: SimpleImage,
        inlineToolbar: ["link"]
      },

      list: {
        class: List,
        inlineToolbar: true,
        shortcut: "CMD+SHIFT+L"
      },

      checklist: {
        class: Checklist,
        inlineToolbar: true
      },

      quote: {
        class: Quote,
        inlineToolbar: true,
        config: {
          quotePlaceholder: "Enter a quote",
          captionPlaceholder: "Quote's author"
        },
        shortcut: "CMD+SHIFT+O"
      },

      warning: Warning,

      marker: {
        class: Marker,
        shortcut: "CMD+SHIFT+M"
      },

      code: {
        class: CodeTool,
        shortcut: "CMD+SHIFT+C"
      },

      delimiter: Delimiter,

      inlineCode: {
        class: InlineCode,
        shortcut: "CMD+SHIFT+C"
      },

      linkTool: LinkTool,

      embed: Embed,

      table: {
        class: Table,
        inlineToolbar: true,
        shortcut: "CMD+ALT+T"
      }
    }
  });
};

export { EditorInit };
