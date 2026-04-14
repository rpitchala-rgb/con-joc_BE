export class projectxApiService {
      //private projectXApiBaseUrl = 'https://iapi.convoso.com/joc/v1';
      //placeholder for now as this is prod url.
      private projectXApiBaseUrl = '';
    
      private getProjectXApiUrl(): string {
        return process.env.PROJECTX_API_URL || this.projectXApiBaseUrl;
      }
    
        async projectXApiRequest(method: string, params: Record<string, any> = {}, requestMethod: 'POST' | 'GET' = 'POST'): Promise<any> {
        const baseUrl = this.getProjectXApiUrl();
        let url = `${baseUrl}/${method}`;
    
        const fetchOptions: RequestInit = {
          method: requestMethod,
          headers: {
            'User-Agent': 'JOC',
            'Accept': 'application/json',
          },
        };
    
        if (requestMethod === 'POST') {
          fetchOptions.body = new URLSearchParams(
            Object.entries(params).reduce((acc, [key, value]) => {
              acc[key] = value === undefined || value === null ? '' : String(value);
              return acc;
            }, {} as Record<string, string>),
          );
        } else {
          const queryString = new URLSearchParams(
            Object.entries(params).reduce((acc, [key, value]) => {
              acc[key] = value === undefined || value === null ? '' : String(value);
              return acc;
            }, {} as Record<string, string>),
          ).toString();
          if (queryString) {
            url += `?${queryString}`;
          }
        }
    
        const response = await fetch(url, fetchOptions);
        const text = await response.text();
        if (response.status === 200) {
          try {
            return text ? JSON.parse(text) : null;
          } catch {
            return text;
          }
        }
    
        return false;
      }

}