import { Variable } from "./variable.model";
import { HttpClient } from "@angular/common/http";
import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class VariablenService {
    variableChanged = new EventEmitter<Variable[]>();

    private variablen: Variable[] = [
        new Variable('vL.Dummy1','sum(1)','erste Variable','1'),
        new Variable('vG.Dumm2', 'max(mein.ding)', 'dummy variable 2', '2')
    ];

    constructor(private http: HttpClient) {}

    getVariablen() {
        return this.variablen;
    }

    getVariable(id: number) {
        return this.variablen[id];
    }

    deleteVariable(id: number) {
        this.variablen.splice(id, 1);
    }

    addVariable(objVariable: Variable) {
        this.variablen.push(objVariable);
    }

    editVariable(oldVariable: Variable, newVariable: Variable) {
        this.variablen[this.variablen.indexOf(oldVariable)] = newVariable;
    }

    storeData() {
        return this.variablen;
    }

    fetchData() {
        return this.variablen;
    }
}
