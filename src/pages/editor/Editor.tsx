import { Button, TextField } from "@mui/material";
import { useCallback, useState } from "react";
import apiService from "@/services/apiService";
import { Request } from "@/types/Request";
import JSONInput from "react-json-editor-ajrm";
import locale from "react-json-editor-ajrm/locale/en";

export const Editor = () => {
  const [url, setUrl] = useState("http://localhost:3000/");
  const [body, setBody] = useState({
    test: "test123"
  })

  const onCallUrl = useCallback(() => {
    const request: Request = {
      url,
      body: JSON.stringify(body)
    }

    apiService.callUrl(request);
  }, [body, url])

  return <div id="editor">
    <div id="url-container" className="flex flex-row">
      <TextField variant={"outlined"} label="URL" id="urlInput" placeholder="URL..." value={url}
                 onChange={(event) => setUrl(event.target.value)}></TextField>
      <Button onClick={onCallUrl}>GO</Button>
    </div>
    <div id="body-container" className={"flex flex-row w-full"}>
      <div id="request-body">
        <JSONInput
          id='request-json'
          placeholder={{
            test: "test"
          }}
          locale={locale}
          onChange={(value: any) => {
            console.log(value)
            setBody(value.jsObject)
          }}
        />
      </div>
      <div id="response-body ">
        <JSONInput
          id='response-json'
          placeholder={{}}
          locale={locale}
          colors={{
            string: "#DAA520",
          }}
          viewOnly
        />
      </div>
    </div>
  </div>
}
