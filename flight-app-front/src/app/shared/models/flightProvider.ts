import {ProviderQueue} from "./providerQueue";

export class FlightProvider {
    idProvider: number;
    providerName: string;
    providerQueues: Set<ProviderQueue>;
}
