/*
 * Copyright 2020 SoftInstigate Srl
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
​
 import { Registrar, NavResponse } from "@kui-shell/core";
 import { toplevelUsage as usage } from '../usage'
// import Debug from "debug";
​
// const debug = Debug("plugins/plugin-http-shell/test");
​
const resp: NavResponse = {
  apiVersion: 'kui-shell/v1',
  kind: 'NavResponse',
  breadcrumbs: [{ label: "Help" }, { label: "HTTP Shell" }],
  menus: [
      {
        label: "Available commands",
        items: [
          { mode: 'Authentication',
            contentType: "text/markdown",
            content: `
#### set auth
Opens a dialog to sets the basic authentication credentials to use in further requests
​
#### reset auth
Clear the basic authentication credentials
`
          },
          { mode: 'Configuration',
            contentType: "text/markdown",
            content: `
#### set url <url>
Sets the base url to use in further requests
> e.g. [\`set url https://postman-echo.com\`](#kuiexec?command=set%20url%20https%3A%2F%2Fpostman-echo.com)
​
#### [get url](#kuiexec?command=get%20url)
Prints the base url
​
#### edit <file>
Opens <file> for editing. Tip, hit key F1 for list of editor commands
`
          },
          { mode: 'Access Methods',
            contentType: "text/markdown",
            content: `
#### get <uri>
Executes the GET request to url=<base-url>+<uri>
> e.g. [\`get /get?foo1=bar1&foo2=bar2\`](#kuiexec?command=get%20%2Fget%3Ffoo1%3Dbar1%26foo2%3Dbar2)
​
#### post <uri> <file>
Executes the request POST <base-url>+<uri>, sending the content of <file> as the request body
​
#### put <uri> <file>
Executes the request PUT <base-url>+<uri>, sending the content of <file> as the request body
​
#### patch <uri> <file>
Executes the request PATCH <base-url>+<uri>, sending the content of <file> as the request body
​
#### delete <uri>
Executes the DELETE request to url=<base-url>+<uri>
​
#### set header <name> <value>
Set the header <name> to <value>
> e.g. \`set header If-Match 5f7f35efcb800f2502f95cb5\`
​
#### get headers
Prints the current set headers
​
#### clear headers
Clears the headers
`
          }
        ]
      }
    ]
  };
​
export default async (registrar: Registrar) => {
  registrar.listen("/help/http-shell", () => resp, { usage: usage });
};
