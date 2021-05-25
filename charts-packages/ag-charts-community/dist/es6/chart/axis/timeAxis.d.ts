import { TimeScale } from "../../scale/timeScale";
import { ChartAxis } from "../chartAxis";
export declare class TimeAxis extends ChartAxis<TimeScale> {
    static className: string;
    static type: string;
    constructor();
    private _nice;
    nice: boolean;
    domain: Date[];
}