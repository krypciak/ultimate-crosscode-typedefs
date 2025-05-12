export {};

declare global {
  namespace ig {
    interface Dom {
      create<K extends keyof HTMLElementTagNameMap>(
        tagName: K,
        attributes?: Record<string, string>,
        content?: sc.TextLike | JQuery[] | JQuery,
      ): JQuery;
      html(html: string): JQuery;
      append(parent: JQuery, child: JQuery): void;
      prepend(parent: JQuery, child: JQuery): void;
      before(parent: JQuery, child: JQuery): void;
      bind<K extends keyof HTMLElementEventMap>(
        to: JQuery,
        type: K,
        listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any,
      ): void;
      bind(to: JQuery, type: string, listener: EventListenerOrEventListenerObject): void;
    }
    var dom: Dom;
  }
}
