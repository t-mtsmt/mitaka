import { ok } from "neverthrow";

import type { SearchableType } from "~/schemas";
import { buildURL } from "~/utils";

import { Base } from "./base";

export class OpenTIP extends Base {
  public baseURL: string;
  public name: string;
  public supportedTypes: SearchableType[] = ["hash"];

  public constructor() {
    super();
    this.baseURL = "https://opentip.kaspersky.com";
    this.name = "OpenTIP";
  }

  public searchByHash(query: string) {
    return ok(buildURL(this.baseURL, `/${query}`));
  }
}
