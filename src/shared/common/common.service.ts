

export class CommonService {

    public getPaginationLinks(total: number, limit: number) {
    const totalPages = Math.ceil(total / limit);
    const pages: Record<number, number> = {};
    const firstPages = Math.min(5, totalPages);

    for (let i = 0; i < firstPages; i++) {
      const offset = i * limit;
      pages[offset] = i + 1;
    }
    if (totalPages > 5) {
      const lastPageIndex = totalPages - 1;
      const lastOffset = lastPageIndex * limit;
      pages[lastOffset] = totalPages;
    }
    return pages;
  }

  
  formatDateForMySQL(date: string | Date): string {
    const d = new Date(date);
    const pad = (n: number) => n.toString().padStart(2, '0');
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ` +
      `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
  }

}