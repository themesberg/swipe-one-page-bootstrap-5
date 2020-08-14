/*

=========================================================
* Pixel Pro Bootstrap 5 UI Kit
=========================================================

* Product Page: https://themesberg.com/product/ui-kit/pixel-pro-premium-bootstrap-5-ui-kit
* Copyright 2019 Themesberg (https://www.themesberg.com)

* Coded by https://themesberg.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. Contact us if you want to remove it.

*/

"use strict";
const d = document;
d.addEventListener("DOMContentLoaded", function(event) {

    // options
    const breakpoints = {
        sm: 540,
        md: 720,
        lg: 960,
        xl: 1140
    };
    
    var preloader = d.querySelector('.preloader');
    if(preloader) {

        const animations = ['oneByOne', 'delayed', 'sync', 'scenario'];

        new Vivus('loader-logo', {duration: 80, type: 'oneByOne'}, function () {});

        setTimeout(function() {
            preloader.classList.add('show');
        }, 1500);
    }

    if (d.body.clientWidth >= breakpoints.lg) {
        [].slice.call(d.querySelectorAll('.nav-item.dropdown')).map(function(el) {
            el.addEventListener('mouseover', function () {
                var dropdown = new bootstrap.Dropdown(this.querySelector(':scope > .dropdown-toggle'));
                dropdown.toggle();
                this.classList.add('show');
            });
        });

        [].slice.call(d.querySelectorAll('.nav-item.dropdown')).map(function (el) {
            el.addEventListener('mouseout', function () {
                var dropdown = new bootstrap.Dropdown(this.querySelector(':scope > .dropdown-toggle'));
                dropdown.toggle();
                this.classList.remove('show');
            })
        });
    }

    if (d.querySelector('.headroom')) {
        var headroom = new Headroom(document.querySelector("#navbar-main"), {
            offset: 0,
            tolerance: {
                up: 0,
                down: 0
            },
        });
        headroom.init();
    }

    [].slice.call(d.querySelectorAll('[data-background]')).map(function(el) {
        el.style.background = 'url(' + el.getAttribute('data-background') + ')';
    });

    [].slice.call(d.querySelectorAll('[data-background-color]')).map(function(el) {
        el.style.background = 'url(' + el.getAttribute('data-background-color') + ')';
    });

    [].slice.call(d.querySelectorAll('[data-color]')).map(function(el) {
        el.style.color = 'url(' + el.getAttribute('data-color') + ')';
    });

    // Tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    // Popovers
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
    })

    // Datepicker
    var datepickers = [].slice.call(document.querySelectorAll('[data-datepicker]'))
    var datepickersList = datepickers.map(function (el) {
        return new Datepicker(el, {
            buttonClass: 'btn'
          });
    })


    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 500,
        speedAsDuration: true
    });

    // update target element content to match number of characters
    var dataBindCharacters = [].slice.call(document.querySelectorAll('[data-bind-characters-target]'))
    dataBindCharacters.map(function (el) {
        var text = d.querySelector(el.getAttribute('data-bind-characters-target'));
        var maxCharacters = parseInt(el.getAttribute('maxlength'));
        text.textContent = maxCharacters;

        el.addEventListener('keyup', function(event) {
            var string = this.value;
            var characters = string.length;
            var charactersRemaining = maxCharacters - characters;
            text.textContent = charactersRemaining;
        });

        el.addEventListener('change', function(event) {
            var string = this.value;
            var characters = string.length;
            var charactersRemaining = maxCharacters - characters;
            text.textContent = charactersRemaining;
        });

    });


    d.querySelector('.current-year').textContent = new Date().getFullYear();

});