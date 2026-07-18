export type Device = {
    id: number;
    name: string;
    ip: string;
    status: string;
    latency: number | null;
    last_checked: string;
};