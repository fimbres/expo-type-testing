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
