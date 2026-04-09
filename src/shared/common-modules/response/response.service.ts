import { Injectable } from "@nestjs/common";
import { IResponseOptions } from "../../../shared/interfaces/response";


@Injectable()
export class ResponseService {

  createSuccessResponse1<T>(data: T, responseOptions: any, value?: string): { data: T, status: number, message: string, value?: string } {
    const { status = 200, message = "Success" } = responseOptions;
    return {
      data,
      status,
      message,
      value
    };
  }

  createSuccessResponse<T>(
  responseOptions: IResponseOptions,
  data: {
    found: string | number;
    results: T[];
    pages: Record<number, number>;
  }
): {
  success: boolean;
  code: number;
  data: {
    found: string;
    results: T[];
    pages: Record<number, number>;
  };
} {
  const { success, code } = responseOptions;

  return {
    success,
    code,
    data: {
      found: String(data.found), 
      results: data.results,
      pages: data.pages,
    },
  };
}

  createErrorResponse(success:boolean, code: number, text: string, value?: string): {  success: boolean,code: number, text: string, value?: string } {
    return {
      success,
      code,
      text,
      value
    };
  }

  success<T>(data: T, options?: { success?: boolean; code?: number; message?: string }): { success: boolean; code: number; message?: string; data: T } {
    const { success = true, code = 200, } = options ?? {};
    return { success, code, data };
  }

}
