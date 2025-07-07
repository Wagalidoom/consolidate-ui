import { Address } from "viem";

export const VALIDATOR_STATUS = [
    'pending_initialized',
    'pending_queued',
    'deposited',
    'active_ongoing',
    'active_online',
    'active_offline',
    'active_exiting',
    'active_slashed',
    'exited_unslashed',
    'exited',
    'exited_slashed',
    'withdrawal_possible',
    'withdrawal_done',
] as const

export type ValidatorStatus =
    typeof VALIDATOR_STATUS[number]

export interface BeaconChainResponse {
    balance: number;
    index: number;
    status: ValidatorStatus;
    validator: {
        activation_eligibility_epoch: number;
        activation_epoch: number;
        // in gwei
        effective_balance: number;
        exit_epoch: number;
        pubkey: Address;
        slashed: boolean;
        withdrawal_epoch: number;
        withdrawal_credentials: Address;
    }
}