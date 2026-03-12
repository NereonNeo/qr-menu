type EmptyObject = Record<string, unknown>;
export type QueryListKey<K extends EmptyObject = { url: string }> = K;

export class QueryKeyBootstrap<T extends QueryListKey> {
  private readonly keyList: string[] = [];

  constructor(private readonly serviceClass: T) {
    this.keyList = Object.keys(this.serviceClass);
  }

  getKey(key: Exclude<keyof T, "url">, ...dynamic: Array<unknown>) {
    const currentIndex = this.keyList.indexOf(key.toString());
    return [this.serviceClass.url, this.keyList[currentIndex], ...dynamic];
  }

  getRootKey() {
    return [this.serviceClass.url];
  }
}
