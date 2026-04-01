export class MemberLogUtility {

    constructor() { }
    normalizeMemberLogPayload(payload: any): any {
        if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
            return payload;
        }

        if (
            payload.CurrentOptions &&
            typeof payload.CurrentOptions === 'object' &&
            !Array.isArray(payload.CurrentOptions)
        ) {
            return payload.CurrentOptions;
        }

        return payload;
    }

    diff(oldArr: any[], newArr: any[]): any[] {
        const matrix: number[][] = [];
        let maxlen = 0;
        let omax = 0;
        let nmax = 0;

        oldArr.forEach((ovalue, oindex) => {
            newArr.forEach((nvalue, nindex) => {
                if (ovalue === nvalue) {
                    matrix[oindex] = matrix[oindex] || [];
                    matrix[oindex][nindex] =
                        (matrix[oindex - 1]?.[nindex - 1] || 0) + 1;

                    if (matrix[oindex][nindex] > maxlen) {
                        maxlen = matrix[oindex][nindex];
                        omax = oindex + 1 - maxlen;
                        nmax = nindex + 1 - maxlen;
                    }
                }
            });
        });

        if (maxlen === 0) {
            return [{ d: oldArr, i: newArr }];
        }

        return [
            ...this.diff(oldArr.slice(0, omax), newArr.slice(0, nmax)),
            ...newArr.slice(nmax, nmax + maxlen),
            ...this.diff(
                oldArr.slice(omax + maxlen),
                newArr.slice(nmax + maxlen),
            ),
        ];
    }

    htmlDiff(oldStr: string, newStr: string): string {
        oldStr = String(oldStr ?? '').replace(/,|:/g, (m) =>
            m === ',' ? ', ' : ': ',
        );
        newStr = String(newStr ?? '').replace(/,|:/g, (m) =>
            m === ',' ? ', ' : ': ',
        );

        let ret = '';
        const diff = this.diff(
            oldStr.split(/[\s]+/),
            newStr.split(/[\s]+/),
        );

        for (const chunk of diff) {
            if (chunk && typeof chunk === 'object' && !Array.isArray(chunk)) {
                ret +=
                    (!chunk['d']?.length
                        ? ''
                        : `<del>${chunk['d'].join(' ')}</del> `) +
                    (!chunk['i']?.length
                        ? ''
                        : `<ins>${chunk['i'].join(' ')}</ins> `);
            } else {
                ret += `${chunk} `;
            }
        }

        return ret;
    }
}