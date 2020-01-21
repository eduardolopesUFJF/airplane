import { Injectable, ChangeDetectorRef } from '@angular/core';

@Injectable()
export class LoaderService {
  get content(): string {
    return this.progressQueue[0].content ? this.progressQueue[0].content : '';
  }

  get loading(): boolean {
    return this.progressQueue.length > 0;
  }

  private progressQueue: any[] = new Array();

  public queue(itemId: string, contentText?: string) {
    if (itemId && !this.progressQueue.some(x => x.id === itemId)) {
      this.progressQueue.unshift({
        id: itemId,
        content: contentText ? contentText : ''
      });
    }
  }

  public dequeue(id: string) {
    let item = this.progressQueue.filter(x => x.id === id)[0];
    if (item) {
      let ind = this.progressQueue.indexOf(item);
      this.progressQueue.splice(ind, 1);
    }
  }

  public clear() {
    this.progressQueue = new Array();
  }
}