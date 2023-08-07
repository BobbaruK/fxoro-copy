import { URL } from "url";

// const url = useRequestURL();
// const currentUrl = url.href;
// const protocol = url.protocol;
// const host = url.host;
// const hostname = url.hostname;
// const pathname = url.pathname;

class GetURL {
  url: URL = useRequestURL();

  currentUrl(): string {
    // https://example.com:3000/hello-world
    return this.url.href;
  }

  protocol(): string {
    // https:
    return this.url.protocol;
  }

  host(): string {
    // example.com:3000
    return this.url.host;
  }

  hostName(): string {
    // example.com
    return this.url.hostname;
  }

  pathName(): string {
    // /hello-world.
    return this.url.pathname;
  }
}

export const useGetDestructuredURL = () => {
  return new GetURL().url;
};
