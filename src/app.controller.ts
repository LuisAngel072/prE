import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import axios from 'axios';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Clave API expuesta directamente (mala práctica)
  private readonly OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY;


  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('clima')
  async getWeather(): Promise<any> {
    // Ciudad fija para simplicidad
    const city = process.env.CITY;
    const url = `https://samples.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.OPENWEATHER_API_KEY}`;
    const response = await axios.get(url);
    return response.data;
  }
}
