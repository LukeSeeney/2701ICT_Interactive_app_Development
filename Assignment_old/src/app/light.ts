export class Light {
    lightName: string;
    powerState: boolean;
    brightness: number;
}
export class Area {
    areaName: string;
    lights: Light[]
}