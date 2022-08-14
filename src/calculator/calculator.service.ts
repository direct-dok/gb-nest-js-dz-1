import { Injectable } from '@nestjs/common';

@Injectable()
export class CalculatorService {

    addition(one: number, two: number): Number {
        return one + two;
    }

    substraction(one: number, two: number): Number {
        return one - two;
    }

    multiplication(one: number, two: number): Number {
        return one * two;
    }

    calcPatch() {
        return 'Call method calcPatch!!';
    }

}
