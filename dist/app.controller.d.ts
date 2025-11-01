import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    private readonly OPENWEATHER_API_KEY;
    getHello(): string;
    getWeather(): Promise<any>;
}
