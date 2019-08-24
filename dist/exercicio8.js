"use strict";
exports.__esModule = true;
var Piscina = /** @class */ (function () {
    function Piscina(diametro, custoConstrucao) {
        this.diametro = diametro;
        this.custoConstrucao = custoConstrucao;
    }
    Piscina.prototype.raio = function () {
        return this.diametro / 2;
    };
    Piscina.prototype.area = function () {
        return 3.141592 * (this.raio() * this.raio());
    };
    Piscina.prototype.custoTotal = function () {
        return this.area() * this.custoConstrucao;
    };
    return Piscina;
}());
exports.Piscina = Piscina;
