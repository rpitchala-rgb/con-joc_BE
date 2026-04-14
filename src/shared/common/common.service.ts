

export class CommonService {

    public getPaginationLink(total: number, limit: number) {
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

  public getPaginationLinks(
  number: number,
  current: number,
  perpage: number = 20,
  no_offset: boolean = false
): Record<number, number> {

  const last = Math.ceil(number / perpage);
  const last_link = Math.ceil(number / perpage);

  const final: Record<number, number> = [];

  if (!no_offset) {
    final[0] = 1;
  } else {
    final[1] = 1;
  }

  let pages: number[] = [];

  // If 5+ pages and current > 2
  if (current > 2 && last_link > 5) {

    // In case of last
    if ((current + 1) === last) {
      pages = this.range(current - 4, current);
    } else {
      pages = this.range(current - 1, Math.min(current + 3, last));
    }

  } else {

    let tempLast = last;

    // Max to 5
    if (tempLast > 5) {
      tempLast = 5;
    }

    pages = this.range(1, tempLast);
  }

  if (!no_offset) {
    // Setting offsets as array keys
    pages.forEach((v) => {
      final[(v - 1) * perpage] = v;
    });
  }

  // If 5+ pages add last
  if (!pages.includes(last_link)) {
    final[last_link * perpage] = last_link;
  }

  return final;
}

private range(start: number, end: number): number[] {
  const result: number[] = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
}

  
  formatDateForMySQL(date: string | Date): string {
    const d = new Date(date);
    const pad = (n: number) => n.toString().padStart(2, '0');
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ` +
      `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
  }

  formatDateForResponse(date: string | Date): string {
    const d = new Date(date);
    return d.toISOString().slice(0, 19) + '-0700';
  }

  convertBigIntToJSON(data: any): any {
  return JSON.parse(
    JSON.stringify(data, (_, value) =>
      typeof value === 'bigint' ? Number(value) : value,
    ),
  );
}

}