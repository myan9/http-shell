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

import { Registrar, Store, Table } from "@kui-shell/core";
// import Debug from "debug";

// const debug = Debug("plugins/plugin-http-shell/get-url");

const getUrl = () => {
  const t: Table = {
    header: { name: "property", attributes: [{ value: "value" }] },
    body: [
      { name: "url", attributes: [{ value: `${Store().getItem("url")}` }] }
    ]
  };

  return t;
};

export default async (registrar: Registrar) => {
  registrar.listen("/h/get/url", getUrl, {
    noAuthOk: true
  });
};
