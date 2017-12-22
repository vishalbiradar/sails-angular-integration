"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var loginRegistration_routes_1 = require("./loginRegistration/loginRegistration.routes");
var appRoutes = loginRegistration_routes_1.LoginRegistrationRoutes.slice();
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map