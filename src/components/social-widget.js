import React from "react";
import BrowserOnly from '@docusaurus/BrowserOnly';

export function WidgetEditor({ children, id = 1 }) {

  const uri = "https://near.social/#/embed/zavodil.near/widget/remote-code?name=Anna";
  const code = children.props.children.props.children;

  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
      {() => {
        const MonacoEditor = require('react-monaco-editor').default;

        return <>
          <div class="monaco">
            <MonacoEditor
              height="250"
              value={code}
              options={{
                minimap: { enabled: false },
                wordWrap: 'on',
                scrollBeyondLastLine: false,
                fontSize: '14px',
                renderLineHighlight: false,
                hideMargin: true,
                glyphMargin: false,
                folding: false,
                lineNumbers: false,
                lineDecorationsWidth: 0,
                lineNumbersMinChars: 0,
                scrollBars: false,
              }}
              language={"javascript"}
              onChange={(newValue, event) => { document.getElementById(`ifm${id}`).src = `${uri}&code=${newValue}` }}
            />
          </div>
          <em> You can edit the code! </em>

          <hr className="subsection" />

          <h4>Resulting Widget</h4>
          <div class="code_iframe">
            <iframe id={`ifm${id}`} src={`${uri}&code=${code}`}></iframe>
          </div>
        </>

      }}
    </BrowserOnly>
  )
}

export default WidgetEditor;