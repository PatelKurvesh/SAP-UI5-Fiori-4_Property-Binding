sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("GithubSAP-UI5-Fiori-4_Property-Binding.controller.View1", {
		
		onInit : function(){
			
			this.getView().setModel();
		}

	});
});