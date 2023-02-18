import { RootState as State } from "@reduxjs/toolkit/dist/query/core/apiState";
import { BaseQueryFn, FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta, QueryDefinition } from "@reduxjs/toolkit/dist/query";

export interface IProduct {
    id: number,
    product: string,
    image: string,
    points: number,
    is_redemption: boolean,
    createdAt: string,
    amount?: number,
    from_account_id?: number,
    to_account_id?: number;
    reason?: string,
    verification_code?: string,
}

export type Filter = "all" | "redemption" | "no-redemption";

export type RootState = State<{
    getProducts: QueryDefinition<unknown, BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>, "Product", IProduct[], "api">;
}, "Product", "api"> & IProduct[];
