import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'hola estudiante de Programación de sistemas avanzados, quieres jugar un juego?😈';
  }
}
