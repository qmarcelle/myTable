angular.module('apollo-login.templates', ['views/lockedLogin.html', 'views/login.html']);

angular.module('views/lockedLogin.html', []).run(['$templateCache', function($templateCache) {
  'use strict';
  $templateCache.put('views/lockedLogin.html',
    '<style>.masterDataBody {\n' +
    '    background-color: #25aae1;\n' +
    '    background: #25aae1 -webkit-image-set(url("/app/images/login-background-1x.png") 1x,url("/app/images/login-background-2x.png") 2x) no-repeat;\n' +
    '    font-family: "Open Sans","Helvetica Neue",Helvetica,Arial,sans-serif;\n' +
    '    font-weight: 400;\n' +
    '    font-size: 14px;}\n' +
    '  #navContainer { display: none;\n' +
    '  }</style><div class=container align=center ng-controller=lockedLoginController><div id=loginTitle class=container>{{"title" | translate }}</div><img class=img-responsive id=loginLogo alt="Elemica Logo" src="images/new-elemica-logo-2x.png"><br style="line-height: 20px"><div class=lang><select id=dropDownSelected class="btn btn-primary" ng-model=selectItem ng-options="language for language in languages" ng-change=switchLanguage()><option default selected=selected class=langOption>{{ "lang" | translate }}</option></select></div><div id=loginClass class=form-group><input class=form-control id=username placeholder="{{&quot;User-Enter&quot; | translate }}" ng-model=username ng-keypress=checkForEnter($event)> <input type=password class=form-control ng-model=oldPassword id=password placeholder="{{ &quot;oldPass&quot; | translate }}" ng-keypress=checkForEnter($event)> <input type=password class=form-control ng-model=newPassword id=password placeholder="{{\'newPass\' | translate }}" ng-keypress=checkFOrEnter($event)> <input type=password class=form-control ng-model=confirmNewPassword id=password placeholder="{{ \'confirmpass\' | translate }}" ng-keypress=checkForEnter($event)></div><div class=alert id=redAlert><div class="alert alert-danger" id=badLogin type=danger ng-show=passError close=closeReasonAlert()><button type=button class=close data-dismiss=alert aria-hidden=true>&times;</button><br><p ng-model=violationError>{{ violationError | translate }}</p><br><ul ng-model=errorReason><li ng-repeat="error in errorReason">{{ error | translate }}</li></ul></div></div><div id=bottomPage class=bp><div id=loginButton class=bp1><a ng-click=goToLogin() id=fpassword><span class="fa fa-arrow-left"></span>&nbsp;&nbsp;{{ \'gobackLogin\' | translate }}</a> <button id=loginBtn class=btn-defualt ng-click=changePassword()>{{"changePass" | translate }}</button></div></div></div>');
}]);

angular.module('views/login.html', []).run(['$templateCache', function($templateCache) {
  'use strict';
  $templateCache.put('views/login.html',
    '<style>body {\n' +
    '    background: #25aae1 -webkit-image-set(url("/app/images/login-background-1x.png") 1x,url("/app/images/login-background-2x.png") 2x) no-repeat;\n' +
    '    font-family: "Open Sans","Helvetica Neue",Helvetica,Arial,sans-serif;}\n' +
    '  #navContainer { display: none;\n' +
    '  }</style><div class=container align=center ng-controller=LoginCtrl><p id=loginTitle>{{"title" | translate }}</p><img class=img-responsive id=loginLogo alt="Elemica Logo" src="/app/images/new-elemica-logo-2x.png"><br style="line-height: 20px"><div class=lang><select id=dropDownSelected class="btn btn-primary" ng-model=selectItem ng-options="language for language in languages" ng-change=switchLanguage()><option default selected=selected class=langOption>{{ "lang" | translate }}</option></select></div><div id=loginClass class=form-group><input class=form-control id=username placeholder="{{&quot;User-Enter&quot; | translate }}" ng-model=user.username ng-keypress=checkForEnter($event)> <input type=password class=form-control ng-model=user.password id=password placeholder="{{&quot;Pass-Enter&quot; | translate }}" ng-keypress=checkForEnter($event)></div><div class=alert id=redAlert><div class="alert alert-danger" id=badLogin popover=hi type=danger ng-show=missingError close=closeRequiredAlert()>{{ "UserPassRequired" | translate }} <button type=button class=close aria-hidden=true>&times;</button></div><div class="alert alert-danger" id=badLogin type=danger ng-show=badUsernameOrPassword close=closeBadAlert()>{{ "BadUser" | translate }} <button type=button class=close data-dismiss=alert aria-hidden=true ng-click=closeBadAlert()>&times;</button></div></div><div id=bottomPage><div id=loginButton class=bp1><a href="" id=fpassword>Forgot Password?</a> <button id=loginBtn class=btn-defualt ng-click=ok()>{{"Login" | translate }}</button></div><div id=policy class=container><p>{{ \'policy\' | translate }} <a id=policyWord href={{privacy}} target=_blank>{{ \'paccept\' | translate }}</a></p></div></div></div>');
}]);
