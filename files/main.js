/*!
 *  All Copyrights Reserved � 2019 
 */


jQuery(document).ready(function($) {
    $("#mansorny-container").mpmansory({
        childrenClass: 'item', // default is a div
        columnClasses: 'padding', //add classes to items
        breakpoints: {
            lg: 4,
            md: 4,
            sm: 4,
            xs: 1
        },
        distributeBy: { order: false, height: false, attr: 'data-order', attrOrder: 'asc' }, //default distribute by order, options => order: true/false, height: true/false, attr => 'data-order', attrOrder=> 'asc'/'desc'
        onload: function(items) {
            //make somthing with items
        }
    });
});


jQuery(document).ready(function($) {
    $("#mansorny-container2").mpmansory({
        childrenClass: 'item', // default is a div
        columnClasses: 'padding', //add classes to items
        breakpoints: {
            lg: 4,
            md: 4,
            sm: 4,
            xs: 1
        },
        distributeBy: { order: false, height: false, attr: 'data-order', attrOrder: 'asc' }, //default distribute by order, options => order: true/false, height: true/false, attr => 'data-order', attrOrder=> 'asc'/'desc'
        onload: function(items) {
            //make somthing with items
        }
    });
});



/*******************************************************************************************/








let getFile = document.getElementById('get_file')
if (getFile) {
    document.getElementById('get_file').onclick = function() {
        document.getElementById('my_file').click();
    };
}


$('input[type=file]').change(function(e) {
    $('#customfileupload').html($(this).val());
});



/////////////

let get_file1 = document.getElementById('get_file1')
if (get_file1) {
    document.getElementById('get_file1').onclick = function() {
        document.getElementById('my_file1').click();
    };
}


$('input[type=file]').change(function(e) {
    $('#customfileupload1').html($(this).val());
});

// Viewport Height
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);
window.addEventListener("resize", () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
});

//  Promo Section
let promoSection = document.querySelector('#promoSection');
if (promoSection) {
    let isPromo = localStorage.getItem('promotion');
    if (isPromo !== 'shown') {
        $("#promoSection").show();
    }
    $("#promoBtn").click(function() {
        $("#promoSection").fadeOut();
        localStorage.setItem('promotion', 'shown');
        headerTop = 0;
        console.log(`${headerTop}px`);
        $('#top-bar__nav').css('top', headerHeight);
    });
}

//  Promo Section
let promoSkicky = document.querySelector('#promoSkicky');
if (promoSkicky) {
    promoSkickyHeight = $('#promoSkicky').innerHeight();
    $('#hasStickyPromo').css('top', promoSkickyHeight);
}

//  Calc Header height
let header = document.querySelector('#header');
if (header) {
    var headerTop = $('#header').offset().top,
        headerHeight = $('#header').height();
    $(window).scroll(function() {
        let scroll = $(window).scrollTop();
        headerTop = $('#header').offset().top - scroll;
    });
}


// Slide Effect Header
const slideTopEffect = (selector) => {
    let slider = document.querySelectorAll(selector),
        lastScrollTop = 0;
    if (slider) {
        window.addEventListener("scroll", function() {

            let scrollTopPos = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTopPos > 100) {
                if (scrollTopPos > lastScrollTop) {
                    slider.forEach(link => {
                        link.classList.add('has-effect');
                    });
                } else {
                    slider.forEach(link => {
                        link.classList.remove('has-effect');
                    });
                }
                lastScrollTop = scrollTopPos <= 0 ? 0 : scrollTopPos; // For Mobile or negative scrolling
            }

        }, false);
    }
}
slideTopEffect('#figure');



// Toggle Menu
const toggleMenu = (toggleID, toggleNav) => {
    let toggleLink = document.querySelector(toggleID),
        toggleItem = document.querySelector(toggleNav),
        root = document.getElementsByTagName("body")[0];
    if (toggleLink && toggleItem) {
        toggleLink.onclick = (e) => {
            toggleItem.style.top = `${headerHeight + headerTop}px`;

            if (toggleItem.classList.contains("active")) {
                toggleLink.classList.remove("closed");
                root.classList.remove("hide-scroll");
                toggleItem.classList.remove("active");
            } else {
                toggleLink.classList.add("closed");
                root.classList.add("hide-scroll");
                toggleItem.classList.add("active");
            }
        };

        toggleItem.onclick = () => {
            toggleLink.classList.remove("closed");
            toggleItem.classList.remove("active");
            root.classList.remove("hide-scroll");
        }

        toggleItem.querySelector(':scope>nav').onclick = (e) => {
            e.stopPropagation();
        }
    }
};

toggleMenu("#top-nav-toggle", "#top-bar__nav");



// Get all the dropdown from document
document.querySelectorAll('.dropdown-toggle').forEach(dropDownFunc);

// Dropdown Open and Close function
function dropDownFunc(dropDown) {


    if (dropDown.classList.contains('click-dropdown') === true) {
        dropDown.addEventListener('click', function(e) {
            e.preventDefault();

            if (this.nextElementSibling.classList.contains('dropdown-active') === true) {
                // Close the clicked dropdown
                this.parentElement.classList.remove('dropdown-open');
                this.nextElementSibling.classList.remove('dropdown-active');

            } else {
                // Close the opend dropdown
                closeDropdown();

                // add the open and active class(Opening the DropDown)
                this.parentElement.classList.add('dropdown-open');
                this.nextElementSibling.classList.add('dropdown-active');
            }
        });
    }

    if (dropDown.classList.contains('hover-dropdown') === true) {

        dropDown.onmouseover = dropDown.onmouseout = dropdownHover;

        function dropdownHover(e) {
            if (e.type == 'mouseover') {
                // Close the opend dropdown
                closeDropdown();

                // add the open and active class(Opening the DropDown)
                this.parentElement.classList.add('dropdown-open');
                this.nextElementSibling.classList.add('dropdown-active');

            }

        }
    }

};


// Listen to the doc click
window.addEventListener('click', function(e) {
    // Close the menu if click happen outside menu
    if (e.target.closest('.dropdown-container') === null) {
        // Close the opend dropdown
        closeDropdown();
    }
});

// Close the openend Dropdowns
function closeDropdown() {

    // remove the open and active class from other opened Dropdown (Closing the opend DropDown)
    document.querySelectorAll('.dropdown-container').forEach(function(container) {
        container.classList.remove('dropdown-open')
    });

    document.querySelectorAll('.dropdown-menu').forEach(function(menu) {
        menu.classList.remove('dropdown-active');
    });
}

// close the dropdown on mouse out from the dropdown list
document.querySelectorAll('.dropdown-menu').forEach(function(dropDownList) {
    // close the dropdown after user leave the list
    // dropDownList.onmouseleave = closeDropdown;
});

// Range Init
var rangeSlider1 = document.getElementById('slider-range-1');
var rangeSlider2 = document.getElementById('slider-range-2');
var rangeSlider3 = document.getElementById('slider-range-3');
var rangeSlider4 = document.getElementById('slider-range-4');
if (rangeSlider1) {
    var moneyFormat = wNumb({
        decimals: 0,
        thousand: ',',
        prefix: ''
    });
    noUiSlider.create(rangeSlider1, {
        start: [0, 100],
        step: 1,
        range: {
            'min': [0],
            'max': [100]
        },
        format: moneyFormat,
        connect: true
    });

    // Set visual min and max values and also update value hidden form inputs
    rangeSlider1.noUiSlider.on('update', function(values, handle) {
        document.getElementById('slider-range-1-1').innerHTML = values[0];
        document.getElementById('slider-range-1-2').innerHTML = values[1];
        document.getElementsByName('min-value').value = moneyFormat.from(
            values[0]);
        document.getElementsByName('max-value').value = moneyFormat.from(
            values[1]);
    });
}
if (rangeSlider2) {
    var moneyFormat = wNumb({
        decimals: 0,
        thousand: ',',
        prefix: ''
    });
    noUiSlider.create(rangeSlider2, {
        start: [0, 220],
        step: 1,
        range: {
            'min': [0],
            'max': [220]
        },
        format: moneyFormat,
        connect: true
    });

    // Set visual min and max values and also update value hidden form inputs
    rangeSlider2.noUiSlider.on('update', function(values, handle) {
        document.getElementById('slider-range-2-1').innerHTML = values[0];
        document.getElementById('slider-range-2-2').innerHTML = values[1];
        document.getElementsByName('min-value').value = moneyFormat.from(
            values[0]);
        document.getElementsByName('max-value').value = moneyFormat.from(
            values[1]);
    });
}
if (rangeSlider3) {
    var moneyFormat = wNumb({
        decimals: 0,
        thousand: ',',
        prefix: ''
    });
    noUiSlider.create(rangeSlider3, {
        start: [0, 150],
        step: 1,
        range: {
            'min': [0],
            'max': [150]
        },
        format: moneyFormat,
        connect: true
    });

    // Set visual min and max values and also update value hidden form inputs
    rangeSlider3.noUiSlider.on('update', function(values, handle) {
        document.getElementById('slider-range-3-1').innerHTML = values[0];
        document.getElementById('slider-range-3-2').innerHTML = values[1];
        document.getElementsByName('min-value').value = moneyFormat.from(
            values[0]);
        document.getElementsByName('max-value').value = moneyFormat.from(
            values[1]);
    });
}
if (rangeSlider4) {
    var moneyFormat = wNumb({
        decimals: 0,
        thousand: '',
        prefix: ''
    });
    noUiSlider.create(rangeSlider4, {
        start: [0, 10000],
        step: 1,
        range: {
            'min': [0],
            'max': [10000]
        },
        format: moneyFormat,
        connect: true
    });

    var inputAgeStart = document.getElementById('slider-range-4-3');
    var inputAgeEnd = document.getElementById('slider-range-4-4');

    // Set visual min and max values and also update value hidden form inputs
    rangeSlider4.noUiSlider.on('update', function(values, handle) {
        document.getElementById('slider-range-4-1').innerHTML = values[0];
        document.getElementById('slider-range-4-2').innerHTML = values[1];
        document.getElementsByName('min-value').value = moneyFormat.from(
            values[0]);
        document.getElementsByName('max-value').value = moneyFormat.from(
            values[1]);
        var value = values[handle];
        if (handle) {
            inputAgeEnd.value = value;

        } else {
            inputAgeStart.value = value;
        }
    });
    inputAgeStart.addEventListener('change', function() {
        rangeSlider4.noUiSlider.set([this.value, null]);
    });

    $('#slider-range-4-3').keypress(function(e) {
        var key = e.which;
        if (key == 13) // the enter key code
        {
            rangeSlider4.noUiSlider.set([this.value, null]);
            $(this).select();
        }
    });

    inputAgeEnd.addEventListener('change', function() {
        rangeSlider4.noUiSlider.set([null, this.value]);
    });

    $('#slider-range-4-4').keypress(function(e) {
        var key = e.which;
        if (key == 13) // the enter key code
        {
            rangeSlider4.noUiSlider.set([null, this.value]);
            $(this).select();
        }
    });
    $("#slider-range-4-3").on("click", function() {
        $(this).select();
    });
    $("#slider-range-4-4").on("click", function() {
        $(this).select();
    });

    $(document).on('keypress', '.numbersOnly', function(event) {
        var regex = /^\d+$/;
        var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
        if (!regex.test(key)) {
            event.preventDefault();
            return false;
        }
    });

}