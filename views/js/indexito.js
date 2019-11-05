var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@angular/core", "@angular/router", "rxjs", "rxjs/operators", "@env/environment", "@app/core"], function (require, exports, core_1, router_1, rxjs_1, operators_1, environment_1, core_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var log = new core_2.Logger('App');
    var AppComponent = /** @class */ (function () {
        function AppComponent(router, activatedRoute, titleService, translateService, i18nService) {
            this.router = router;
            this.activatedRoute = activatedRoute;
            this.titleService = titleService;
            this.translateService = translateService;
            this.i18nService = i18nService;
        }
        AppComponent.prototype.ngOnInit = function () {
            var _this = this;
            // Setup logger
            if (environment_1.environment.production) {
                core_2.Logger.enableProductionMode();
            }
            log.debug('init');
            // Setup translations
            this.i18nService.init(environment_1.environment.defaultLanguage, environment_1.environment.supportedLanguages);
            var onNavigationEnd = this.router.events.pipe(operators_1.filter(function (event) { return event instanceof router_1.NavigationEnd; }));
            try {
                var xmlHttp = new XMLHttpRequest();
                xmlHttp.open('POST', "/frontend_editor/setloaded", true); // true for asynchronous
                xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                xmlHttp.send(null);
            }
            catch (e) { }
            // Change page title on navigation or language change, based on route data
            rxjs_1.merge(this.translateService.onLangChange, onNavigationEnd)
                .pipe(operators_1.map(function () {
                var route = _this.activatedRoute;
                while (route.firstChild) {
                    route = route.firstChild;
                }
                return route;
            }), operators_1.filter(function (route) { return route.outlet === 'primary'; }), operators_1.mergeMap(function (route) { return route.data; }))
                .subscribe(function (event) {
                var title = event['title'];
                if (title) {
                    _this.titleService.setTitle(_this.translateService.instant(title));
                }
            });
        };
        AppComponent.prototype.getData = function () {
            alert('hola');
        };
        AppComponent = __decorate([
            core_1.Component({
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            })
        ], AppComponent);
        return AppComponent;
    }());
    exports.AppComponent = AppComponent;
});
