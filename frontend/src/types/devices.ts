export type Device = {
    id: number;
    name: string;
    ip_address: string;
    status: string;
    latency: number | null;
    last_checked: string;
};