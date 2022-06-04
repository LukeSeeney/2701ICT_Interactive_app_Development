export class Light 
{
    // name of light
    lightName: string;
    // on / off state of light
    powerState: boolean;
    // light brightness
    brightness: number;
    // light wattage
    wattage:number;

    // times light was turned on and off most recently
    onTime:Date;
    offTime:Date;   

    // daily power usage for graph
    dailyPower = [];
    
    // total time light was on most recently
    timeOn:any;

    constructor(lightName:string, powerState:boolean, brightness:number, wattage:number)
    {
        this.lightName = lightName;
        this.powerState = powerState;
        this.brightness = brightness;
        this.wattage = wattage;
    }
}
// area that has lights in it
export class Area 
{
    // name of area
    areaName: string;
    // switch variable to turn all lights in the area on or off
    switch:boolean;
    // lights stored in the area
    lights = [];

    // graph date and power usage storage
    dailyPower = [];
    

    constructor(areaName:string) 
    {
        this.areaName = areaName;
        this.switch = false;
        this.lights = [];
    }
}
// daily power storage
export class DailyPower
{
    startDate: Date;
    endDate: Date;

    powerUsage:any;

    constructor(startDate: Date, endDate: Date, powerUsage: number){
        this.startDate = startDate;
        this.endDate = endDate;
        this.powerUsage = powerUsage;
    }
}
