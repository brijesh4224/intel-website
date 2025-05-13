function defer(method) {
    if (window.jQuery) {
        method();
    } else {
        setTimeout(function() { defer(method) }, 500);
    }
}
defer(function () {
$(document).ready(function () {
    if (!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)) {
        $('[data-tooltip="tooltip"]').tooltip();
        if($('[data-toogle="tooltip"]').length) {
            $('[data-toogle="tooltip"]').tooltip();
        }
    }

    var contentObject = {
        isNonEnglishArticleUsed: (function (nonEnglishURL) {
            var decoded = decodeURIComponent(nonEnglishURL);
            if (decoded.indexOf("support/articles") !== -1 || decoded.indexOf("support/programmable/articles") !== -1) {
                var localeArrayString = INTEL.SupportSettings["geoattributes.articleLocalesForModal"];
                var localeArray = localeArrayString.split(",");
                for (var i = 0; i < localeArray.length; i++) {
                    if (decoded.indexOf(localeArray[i]) !== -1) {
                        return true;
                    }
                }
            }
            return false;
        })(encodeURIComponent(window.location.href)),
        getEnglishURL: function (nonEnglishURL) {
            nonEnglishURL = decodeURIComponent(nonEnglishURL);
            var englishURL = [];
            var indexOfContent = nonEnglishURL.indexOf("/content/www/");
            if (indexOfContent !== -1) {
                var beforeLocale = nonEnglishURL.substring(0, indexOfContent + 13);
                var afterLocale = nonEnglishURL.substring(indexOfContent + 19);
                englishURL["sameDomain"] = beforeLocale + "us/en/" + afterLocale;
                englishURL["intelCom"] = nonEnglishURL.replace(".html",".englishversion.html");
            }
            return englishURL;
        },
        getEnglishContent: function (englishURL) {
            $("#modalContent").load(englishURL.intelCom + " #printableArea ", function (html, status) {
                if (status === "success") {
                    $('#modalButton').show();
                    var modalId = document.getElementById("myModal");
                    var modalContainer = modalId.getElementsByClassName("container");

                    if(document.getElementById("description") != null){
                        document.getElementById("description").id = '';
                    }
                    if(document.getElementById("resolution") != null){
                        document.getElementById("resolution").id = '';
                    }
                    if(document.getElementById("summary") != null){
                        document.getElementById("summary").id = '';
                    }
                    if(document.getElementById("information") != null){
                        document.getElementById("information").id = '';
                    }
                    if(document.getElementById("additionalDisclaimer") != null){
                        document.getElementById("additionalDisclaimer").id = '';
                    }

                    var i;
                    for (i = 0; i < modalContainer.length; i++) {
                        modalContainer[i].style.backgroundColor = "transparent";
                    }
                    $(".modal-body #modalContent #printableArea .article-actions .marginTop").hide();
                    $( document ).trigger( 'enhance.tablesaw' );
                }
            });
        }

    };


    $('#modalButton').hide();
    var nonEnglishURL = encodeURIComponent(isDataValid(window.location.href));
    if (Boolean(contentObject.isNonEnglishArticleUsed)) {
        var englishURL = contentObject.getEnglishURL(nonEnglishURL);
        contentObject.getEnglishContent(englishURL);

        var articleContents = $(".article-contents article").find("a");
        $(articleContents).each(function() {
            var articleContentsName = $(this).attr('name');
            if (articleContentsName != undefined) {
                $(this).attr('id', articleContentsName);
            }
        });
    }

});
});
