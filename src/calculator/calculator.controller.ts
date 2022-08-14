import { Controller, Headers, Query, Put, Patch } from '@nestjs/common';
import { CalculatorService } from './calculator.service';

@Controller('calculator')
export class CalculatorController {
    constructor(private calcService: CalculatorService) {}

    @Put()
    getCalc(@Headers() headers, @Query() query) {
        return this.calcService[headers.method](+query.arg1, +query.arg2);
    }

    @Patch()
    methodPatch() {
        return this.calcService.calcPatch();
    }
}
