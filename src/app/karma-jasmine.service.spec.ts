import { TestBed } from '@angular/core/testing';
import { KarmaJasmineService } from './karma-jasmine.service';
let service: KarmaJasmineService;

beforeEach(() => {
  TestBed.configureTestingModule({});
  service = TestBed.get(KarmaJasmineService);
});

describe('KarmaJasmineService', () => {


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('debería sumar dos números correctamente', () => {
    const resultado = service.sumar(2, 3);
    expect(resultado).toBe(5);
  });

  it('debería sumar números negativos correctamente', () => {
    const resultado = service.sumar(-5, -3);
    expect(resultado).toBe(-8);
  });

  it('debería sumar un número positivo y un número negativo correctamente', () => {
    const resultado = service.sumar(10, -5);
    expect(resultado).toBe(5);
  });

});
describe('Función de resta', () => {

  it('debería restar dos números correctamente', () => {
    const resultado = service.restar(5, 3);
    expect(resultado).toBe(2);
  });

  it('debería restar números negativos correctamente', () => {
    const resultado = service.restar(-5, -3);
    expect(resultado).toBe(-2);
  });

  it('debería restar un número positivo y un número negativo correctamente', () => {
    const resultado = service.restar(10, -5);
    expect(resultado).toBe(15);
  });
});
describe('Función de multiplicación', () => {
  it('debería multiplicar dos números correctamente', () => {
    const resultado = service.multiplicar(2, 3);
    expect(resultado).toBe(6);
  });

  it('debería multiplicar un número positivo y un número negativo correctamente', () => {
    const resultado = service.multiplicar(5, -3);
    expect(resultado).toBe(-15);
  });

  it('debería multiplicar por cero correctamente', () => {
    const resultado = service.multiplicar(10, 0);
    expect(resultado).toBe(0);
  });
});
describe('Función de división', () => {
  it('debería dividir dos números correctamente', () => {
    const resultado = service.dividir(6, 3);
    expect(resultado).toBe(2);
  });

  it('debería dividir un número positivo y un número negativo correctamente', () => {
    const resultado = service.dividir(15, -3);
    expect(resultado).toBe(-5);
  });
  it('debería dividir dos negativos correctamente', () => {
    const resultado = service.dividir(-15, -3);
    expect(resultado).toBe(5);
  });
  it('debería lanzar un error al intentar dividir entre cero', () => {
    expect(() => service.dividir(10, 0)).toThrowError('No se puede dividir entre cero');
  });
});





