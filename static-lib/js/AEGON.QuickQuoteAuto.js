AEGON.QuickQuoteAuto = function(rootNode, vars) {
	vars = vars ? vars : {};
	if(rootNode) {
		this.rootNode = rootNode;
		/*
        this.popUp = vars.popUp ? vars.popUp : true;
        var dataWidth = $(rootNode).attr("data-lightboxwidth");
		this.popUpWidth = dataWidth ? dataWidth : 1024;
		var dataHeight = $(rootNode).attr("data-lightboxheight");
		this.popUpHeight = dataHeight ? dataHeight : 768;
		*/
        this.dataUrl = $(rootNode).attr('action');
        this.dataWidth = $(rootNode).attr('data-lightboxwidth');
        this.dataHeight = $(rootNode).attr('data-lightboxheight');
        this.dataType = $(rootNode).attr('data-lightboxtype');
		this.init();
	}
};

AEGON.QuickQuoteAuto.prototype.init = function() {
	this.licenceInput = $('input.licenceplate-nl',this.rootNode).get(0);
	this.submitButton = $('.button-calculate input',this.rootNode).get(0) || $('.button-calculate-alt input',this.rootNode).get(0);
	if(this.licenceInput && this.submitButton) {
		$(this.licenceInput).bind('keyup', {_this: this}, this.checkAndSetLicenseStripes);
		$(this.licenceInput).bind('enter', {_this: this}, this.submitLicencePlate);
		$(this.submitButton).bind('click', {_this: this}, this.submitLicencePlate);
	}
};

AEGON.QuickQuoteAuto.prototype.checkAndSetLicenseStripes = function(e) {
	var _this = e.data._this;
	var sTextField = _this.licenceInput.value;
	sTextField = sTextField.replace(/[^A-Za-z0-9\-]/g, "");
	sTextField = sTextField.toUpperCase();
	if (sTextField.length >= 2) {
		var sFirstBlock = sTextField.substring(0, 2);
		if (sFirstBlock.search(/([A-Z]{2})|([0-9]{2})/) == -1) {
			sTextField = sTextField.substring(0, 1);
		}
	}

	if (sTextField.length >= 3) {
		var sThird = sTextField.substring(2, 3);
		if (sThird != "-") {
			sTextField = sTextField.substring(0, 2) + "-" + sTextField.substring(2);
		}
	}

	if (sTextField.length >= 5) {
		var sSecondBlock = sTextField.substring(3, 5);
		if (sSecondBlock.search(/([A-Z]{2})|([0-9]{2})/) == -1) {
			sTextField = sTextField.substring(0, 4);
		}
	}

	if (sTextField.length >= 6) {
		var sFifth = sTextField.substring(5, 6);
		if (sFifth != "-") {
			if (sFifth.search(/[A-Z]/) == -1 || sSecondBlock.search(/[A-Z]{2}/) == -1) {
				sTextField = sTextField.substring(0, 5) + "-" + sTextField.substring(5);
			}
		}
	}

	if (sTextField.length >= 7) {
		if (sTextField.substring(3, 7).search(/[A-Z]{4}/) != -1) {
				sTextField = sTextField.substring(0, 5) + "-" + sTextField.substring(5);
			}
		else if (sTextField.substring(3, 6).search(/[A-Z]{3}/) != -1) {
			if (sTextField.substring(6, 7).search(/[A-Z\-]/) == -1 && sTextField.substring(6, 7) != "-") {
				sTextField = sTextField.substring(0, 6) + "-" + sTextField.substring(6);
			}
		}
		else if (sTextField.substring(5, 6) != "-") {
			sTextField = sTextField.substring(0, 5) + "-" + sTextField.substring(6);
		}
	}

	if (sTextField.length >= 8) {
		if (sTextField.substring(6, 7) != "-") {
			var sThirdBlock = sTextField.substring(6, 8);
			if (sThirdBlock .search(/([A-Z]{2})|([0-9]{2})/) == -1) {
				sTextField = sTextField.substring(0, 7);
			}
		}
	}

	sTextField = sTextField.substring(0, 8);

	if (_this.licenceInput.value != sTextField) {
	   _this.licenceInput.value = sTextField;
	}
};

AEGON.QuickQuoteAuto.prototype.submitLicencePlate = function(e) {
	e.preventDefault();
	var _this = e.data._this;

    if (_this.dataWidth ||  _this.dataHeight || _this.dataType) {
        AEGON.LightboxManager.openIframeLightbox(_this.dataUrl+"?"+$(_this.rootNode).serialize(), _this.dataWidth, _this.dataHeight);
    }
    else if ($(_this.rootNode).attr('target') === '_blank') {
        window.open(_this.dataUrl+"?"+$(_this.rootNode).serialize());
    }
    else {
        window.location = _this.dataUrl+"?"+$(_this.rootNode).serialize();
    }
	
	return false;
};
