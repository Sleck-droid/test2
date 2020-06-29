function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger_menu_button');
    let links = menu.find('.burger_menu_link');
    let overlay = menu.find('.burger_menu_overlay');
    
    button.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });
    
    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());
    
    function toggleMenu() {
        menu.toggleClass('burger_menu_active');
        if (menu.hasClass('burger_menu_active')) {
            $('body').css('overflow', 'hidden');
        } else {
            $('body').css('overflow', 'visible');
        }
    }
}
burgerMenu ('.burger_menu');

$('.messageform').on('click', function(e) 
{
    if (!e.target.matches(".messageform__form, p, input, textarea") && open == 1)
    {
        $('.messageform').removeClass('active');
        document.querySelector('.msg-active').style.zIndex = '9';
        open = 0;
    }
});
let open = 0;

$('.msg-active').on('click', function(e) 
{
    if (open == 0)
    {
        $('.messageform').toggleClass('active');
        document.querySelector('.msg-active').style.zIndex = '11';
        open = 1;
    }
    else if (open == 1)
    {
        $('.messageform').removeClass('active');
        document.querySelector('.msg-active').style.zIndex = '9';
        open = 0;
    }
});
