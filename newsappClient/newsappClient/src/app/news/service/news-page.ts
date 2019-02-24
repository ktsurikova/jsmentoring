export const PageSize = 5;

export class NewsPage {
  totalResults: number;
  currentPage: number;
  loadMore(): boolean {
    if (this.currentPage * PageSize < this.totalResults) {
      return true;
    } else {
      return false;
    }
  }
  getNextPage(): number {
    if (!this.loadMore()) {
      return null;
    }
    return this.currentPage ? this.currentPage + 1 : 1;
  }
}
