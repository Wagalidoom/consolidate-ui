import { ValidatorStatus } from "./beacon";
import { FilterStatus } from "./validators";

// API Response types (for JSON serialization)
export interface APIValidatorInfo {
    index: number;
    pubkey: string;
    balanceEth: string; // String for JSON serialization
    withdrawal_credentials: string;
    type: number;
    status: ValidatorStatus;
    filterStatus: FilterStatus;
}