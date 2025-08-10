sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.ui5.test.sapui5bootcamptest.controller.Home", {
        onInit() {
            
        },
        onNavigatePage1() {
            this.getOwnerComponent().getRouter().navTo("page1");   
        }
    });
});