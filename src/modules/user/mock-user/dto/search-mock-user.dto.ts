

import { Transform } from "class-transformer";
export class SearchMockUserDto{

inputValue:string;

limit:number;

orderOptions:string;

orderOptionsValue:string;

page:number;

@Transform(({ value }) => Array.isArray(value) ? value.map(v => typeof v === "string" ? v.trim() : v) : value)
selectOptions:string[];

@Transform(({ value }) => Array.isArray(value) ? value.map(v => typeof v === "string" ? v.trim() : v) : value)
selectOptionValues:string[]

}


