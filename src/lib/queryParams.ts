import { ReadonlyURLSearchParams } from "next/navigation";

interface ParamsObject {
  [key: string]: string | string[];
}

export class Params {
  params: ParamsObject = {};

  constructor(params?: ReadonlyURLSearchParams) {
    if (!params) {
      return;
    }
    params.forEach((key, value) => {
      this.add(value, key);
    });
  }

  add(key: string, value: string) {
    if (Object.prototype.hasOwnProperty.call(this.params, key)) {
      if (Array.isArray(this.params[key])) {
        this.params[key] = [...(this.params[key] as string[]), value];
      } else {
        this.params[key] = [this.params[key] as string, value];
      }
    } else {
      this.params[key] = value;
    }
  }

  addMany(list: { [key: string]: string | string[] | undefined }) {
    for (const key in list) {
      if (list[key] == undefined) {
        continue;
      }

      if (Array.isArray(list[key])) {
        const valueArray = list[key] as string[];
        valueArray.forEach((value) => this.add(key, value));
        continue;
      }

      this.add(key, list[key] as string);
    }
  }

  replace(key: string, value: string) {
    this.params[key] = value;
  }

  remove(key: string, value: string) {
    if (!Object.prototype.hasOwnProperty.call(this.params, key)) {
      return;
    }

    if (Array.isArray(this.params[key])) {
      this.params[key] = (this.params[key] as string[]).filter(
        (item) => item != value
      );
      return;
    }

    delete this.params[key];
  }

  urlSearchParams() {
    const params = new URLSearchParams();

    Object.entries(this.params).forEach(([key, value]) => {
      if (value === undefined) {
        return;
      }
      if (Array.isArray(value)) {
        value.forEach((value) => params.append(key, value.toString()));
      } else {
        params.append(key, value.toString());
      }
    });

    return params;
  }

  queryURL() {
    const urlSearchParams = this.urlSearchParams();
    return urlSearchParams.toString();
  }
}
